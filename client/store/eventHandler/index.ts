import { Store } from 'redux';
import * as events from '../../../lib/events';
import { VotesTally } from '../../../lib/Game/constants';
import Player from '../../../lib/Player';
import EndGameReason from '../../../lib/EndGameReason';
import { subscribe } from '../../events';
import { setUser } from '../domains/user/actions';
import { addPlayer, removePlayer, setPlayerNotReady, setPlayerReady, updatePlayersData } from '../domains/players/actions';
import { abortGame, closeQuestModal, nextQuest, openQuestModal, startGame, closeVoteModal, openVoteModal, clearCompositionVotesHistory, pushCompositionVotesHistory } from '../domains/game/actions';

export const registerCallbacks = (store: Store): void => {
    subscribe(events.Server.UserLoggedIn, (player: Player) => {
        store.dispatch(addPlayer(player));
    });

    subscribe(events.Server.UserLoggedOut, (player: Player) => {
        store.dispatch(removePlayer(player));
    });

    subscribe(events.Server.LoginSuccess, (player: Player) => {
        store.dispatch(addPlayer(player));
        store.dispatch(setUser(player.username));
    });

    subscribe(events.Server.GameStarted, ({
        playerData,
        questSelectionQueue
    }) => {
        store.dispatch(startGame(questSelectionQueue));
        store.dispatch(updatePlayersData(playerData));
    });

    subscribe(events.Server.GameAborted, (reason: EndGameReason) => {
        store.dispatch(abortGame(reason));
    });

    subscribe(events.Server.UserReady, (player: Player) => {
        store.dispatch(setPlayerReady(player));
    });

    subscribe(events.Server.UserNotReady, (player: Player) => {
        store.dispatch(setPlayerNotReady(player));
    });

    subscribe(events.Server.UpdateSelectedUsers, ({
        playerData
    }) => {
        store.dispatch(updatePlayersData(playerData));
    });

    subscribe(events.Server.StartQuest, () => {
        store.dispatch(openQuestModal());
    });

    subscribe(events.Server.StartCompositionVoting, () => {
        store.dispatch(openVoteModal());
    });

    subscribe(events.Server.CompositionVoted, ({
        votes,
        success
    }) => {
        store.dispatch(closeVoteModal());

        if (success) {
            store.dispatch(clearCompositionVotesHistory());
        } else {
            store.dispatch(pushCompositionVotesHistory(votes));
        }
    });

    subscribe(events.Server.QuestVoted, (tally: VotesTally) => {
        store.dispatch(closeQuestModal());
        store.dispatch(nextQuest(tally));
    });
};
