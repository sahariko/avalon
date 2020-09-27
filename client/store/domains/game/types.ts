import { GameData } from '../../../../lib/Game/constants';

export enum Actions {
    StartGame = 'StartGame',
    AbortGame = 'AbortGame',
    OpenQuestModal = 'OpenQuestModal',
    CloseQuestModal = 'CloseQuestModal'
}

export type GameReducerState = GameData & {
    questModalOpen: boolean
};

interface StartGameAction {
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

export type GameActionTypes = StartGameAction | AbortGameAction | OpenQuestModalAction | CloseQuestModalAction;
