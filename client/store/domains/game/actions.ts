import { Actions, GameActionTypes } from './types';

export const startGame = (): GameActionTypes => ({
    type: Actions.StartGame
});
