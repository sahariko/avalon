import { StoreState } from '../..';

export const isGameStarted = (state: StoreState): boolean => state.game.started;

export const questSelector = (state: StoreState): string => {
    const {
        started,
        questSelectionQueue,
        questSelectorIndex
    } = state.game;

    if (!started) { return null; }

    return questSelectionQueue[questSelectorIndex];
};
