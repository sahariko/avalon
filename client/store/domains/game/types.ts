export enum Actions {
    StartGame = 'StartGame'
}

export type GameReducerState = {
    started: boolean;
};

interface StartGameAction {
    type: Actions.StartGame;
}

export type GameActionTypes = StartGameAction;
