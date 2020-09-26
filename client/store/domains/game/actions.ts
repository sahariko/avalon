import { Actions, GameActionTypes } from './types';

export const startGame = (): GameActionTypes => ({
    type: Actions.StartGame
});

export const abortGame = (): GameActionTypes => ({
    type: Actions.AbortGame
});
