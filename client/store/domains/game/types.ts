export enum Actions {
    StartGame = 'StartGame',
    AbortGame = 'AbortGame'
}

export type GameReducerState = {
    started: boolean;
};

interface StartGameAction {
    type: Actions.StartGame;
}

export interface AbortGameAction {
    type: Actions.AbortGame;
}

export type GameActionTypes = StartGameAction | AbortGameAction;
