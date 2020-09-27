import game from '../game';
import session from '../session';
import EndGameReason from '../../lib/EndGameReason';
import * as events from '../../lib/events';
import { PlayerData } from '../../lib/Player';

let ioLayer: SocketIO.Server;

const terminateSession = (reason: string) => {
    session.setConnectionsReadyState(false);

    ioLayer.emit(events.Server.GameAborted, reason);
};

const disconnectUser = (socket: SocketIO.Socket) =>
{
    const connection = session.getBySocketID(socket.id);

    if (connection) {
        session.remove(connection.username);
        ioLayer.emit(events.Server.UserLoggedOut, connection.toObject());
    }

    terminateSession(EndGameReason.UserDisconnected);
};

const handleSelection = (username: string, selected: boolean) => {
    const player = game.getPlayer(username);

    if (player) {
        player.selected = selected;
    }

    ioLayer.emit(events.Server.UpdateSelectedUsers, {
        playerData: {
            [username]: {
                selected: selected
            }
        }
    });
};

const registerEvents = (socket: SocketIO.Socket) => {
    socket.on(events.Client.Login, (username) => {
        const { warning, user } = session.add(username, socket);

        if (!user) {
            socket.emit(events.Server.LoginFailed, warning);
        } else {
            socket.emit(events.Server.LoginSuccess, user);
            ioLayer.emit(events.Server.UserLoggedIn, user);
        }
    });

    // Native socketIO event
    socket.on('disconnect', () => {
        disconnectUser(socket);
    });

    socket.on(events.Client.UserDisconnected, () => {
        disconnectUser(socket);
    });

    socket.on(events.Client.UserReady, () => {
        const connection = session.markConnectionReady(socket.id, true);

        ioLayer.emit(events.Server.UserReady, connection);

        if (session.readyToStart) {
            game.start(Object.values(session.users));

            session.connections.forEach((connection) => {
                connection.emit(events.Server.GameStarted, {
                    playerData: game.getPlayersData(connection.username),
                    questSelectionQueue: game.questSelectionQueue
                });
            });
        }
    });

    socket.on(events.Client.UserNotReady, () => {
        const connection = session.markConnectionReady(socket.id, false);

        ioLayer.emit(events.Server.UserNotReady, connection);
    });

    socket.on(events.Client.AbortGame, () => {
        terminateSession(EndGameReason.GameAborted);
    });

    socket.on(events.Client.UserSelectedForQuest, (username: string) => {
        if (game.canAddSelectedPlayer) {
            handleSelection(username, true);
        }
    });

    socket.on(events.Client.UserUnselectedForQuest, (username: string) => {
        handleSelection(username, false);
    });

    socket.on(events.Client.StartCompositionVoting, (players: PlayerData[]) => {
        ioLayer.emit(events.Server.StartCompositionVoting);

        game.setQuestMembers(players);
    });

    socket.on(events.Client.QuestCompositionSelected, ({
        username,
        vote
    }) => {
        game.updateQuestCompositionVote(username, vote);

        if (!game.allVotedForComposition) { return; }

        const result = game.submitCompositionVotes();

        ioLayer.emit(events.Server.CompositionVoted, result);

        if (result.success) {
            result.selectedPlayers.forEach((username) => {
                const connection = session.connections.get(username);

                connection.emit(events.Server.StartQuest);
            });
        } else if (game.gameEnded) {
            terminateSession(EndGameReason.CompositionVoteFailed);
        }
    });

    socket.on(events.Client.QuestSelected, ({
        username,
        selected
    }) => {
        game.updateQuestVote(username, selected);

        if (game.allQuestMembersVoted) {
            const result = game.submitQuest();

            if (game.gameEnded) {
                terminateSession(EndGameReason.QuestsFailed);
            } else {
                ioLayer.emit(events.Server.QuestVoted, result);
            }
        }
    });
};

export const register = (_ioLayer: SocketIO.Server): void => {
    ioLayer = _ioLayer;
    ioLayer.on('connection', registerEvents);
};
