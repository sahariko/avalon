import { StoreState } from '../..';

export const isGameStarted = (state: StoreState): boolean => state.game.started;
