import { VotesTally } from '../../../../lib/Game/constants';
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

export const nextQuest = (votesTally: VotesTally): GameActionTypes => ({
    type: Actions.NextQuest,
    votesTally
});
