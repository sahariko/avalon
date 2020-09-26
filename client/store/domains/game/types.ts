import { GameData } from '../../../../lib/Game/constants';

export enum Actions {
    StartGame = 'StartGame',
    AbortGame = 'AbortGame'
}

export type GameReducerState = GameData;

interface StartGameAction {
    type: Actions.StartGame;
    questSelectionQueue: string[];
}

export interface AbortGameAction {
    type: Actions.AbortGame;
}

export type GameActionTypes = StartGameAction | AbortGameAction;
