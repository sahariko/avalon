import { VotesTally } from '../../../../lib/Game/constants';
import { PlayerMap } from '../../../../lib/Player';
import { Actions, GameActionTypes } from './types';

export const startGame = (questSelectionQueue: string[]): GameActionTypes => ({
    type: Actions.StartGame,
    questSelectionQueue
});

export const abortGame = (): GameActionTypes => ({
    type: Actions.AbortGame
});

export const openQuestModal = (): GameActionTypes => ({
    type: Actions.OpenQuestModal
});

export const closeQuestModal = (): GameActionTypes => ({
    type: Actions.CloseQuestModal
});

export const openVoteModal = (): GameActionTypes => ({
    type: Actions.OpenVoteModal
});

export const closeVoteModal = (): GameActionTypes => ({
    type: Actions.CloseVoteModal
});

export const nextQuest = (votesTally: VotesTally): GameActionTypes => ({
    type: Actions.NextQuest,
    votesTally
});

export const pushCompositionVotesHistory = (votes: PlayerMap): GameActionTypes => ({
    type: Actions.PushCompositionVoteHistory,
    votes
});

export const clearCompositionVotesHistory = (): GameActionTypes => ({
    type: Actions.ClearCompositionVoteHistory
});
