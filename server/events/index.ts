import game from '../game';
import session from '../session';
import * as events from '../../lib/events';

let ioLayer: SocketIO.Server;

const disconnectUser = (socket: SocketIO.Socket) =>
{
    const connection = session.getBySocketID(socket.id);

    if (connection) {
        session.remove(connection.username);
        ioLayer.emit(events.Server.UserLoggedOut, connection.toObject());
    }
};

const handleSelection = (username: string, selected: boolean) => {
    game.getPlayer(username).selected = selected;
    console.log('here');

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
        session.setConnectionsReadyState(false);

        ioLayer.emit(events.Server.GameAborted);
    });

    socket.on(events.Client.UserSelectedForQuest, (username: string) => {
        if (game.canAddSelectedPlayer) {
            handleSelection(username, true);
        }
    });

    socket.on(events.Client.UserUnselectedForQuest, (username: string) => {
        handleSelection(username, false);
    });
};

export const register = (_ioLayer: SocketIO.Server): void => {
    ioLayer = _ioLayer;
    ioLayer.on('connection', registerEvents);
};
