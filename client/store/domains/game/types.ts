import { GameData, VotesTally } from '../../../../lib/Game/constants';

export enum Actions {
    StartGame = 'StartGame',
    AbortGame = 'AbortGame',
    OpenQuestModal = 'OpenQuestModal',
    CloseQuestModal = 'CloseQuestModal',
    NextQuest = 'NextQuest'
}

export type GameReducerState = GameData & {
    questModalOpen: boolean
};

export interface StartGameAction {
    type: Actions.StartGame;
    questSelectionQueue: string[];
}

export interface AbortGameAction {
    type: Actions.AbortGame;
}

interface OpenQuestModalAction {
    type: Actions.OpenQuestModal;
}

interface CloseQuestModalAction {
    type: Actions.CloseQuestModal;
}

export interface NextQuestAction {
    type: Actions.NextQuest,
    votesTally: VotesTally
}

export type GameActionTypes = StartGameAction | AbortGameAction | OpenQuestModalAction | CloseQuestModalAction | NextQuestAction;
