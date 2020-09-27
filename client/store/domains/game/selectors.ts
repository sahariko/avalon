import Game from '../../../../lib/Game';
import { StoreState } from '../..';
import { getPlayersAmount, getSelectedPlayers } from '../players/selectors';
import { VotesTally } from '../../../../lib/Game/constants';

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

export const questSelectionQueue = (state: StoreState): string[] => state.game.questSelectionQueue;

export const isCurrentUserQuestSelector = (state: StoreState): boolean => {
    const questSelectorName = questSelector(state);

    return questSelectorName === state.user;
};

export const currentQuestIndex = (state: StoreState): number => state.game.currentQuest;

export const hasEnoughQuestMembers = (state: StoreState): boolean => (
    !Game.canAddSelectedPlayer({
        totalPlayerAmount: getPlayersAmount(state),
        selectedPlayersAmount: getSelectedPlayers(state).length,
        currentQuest: currentQuestIndex(state)
    })
);

export const showQuestModal = (state: StoreState): boolean => state.game.questModalOpen;

export const getQuestHistory = (state: StoreState): VotesTally[] => state.game.votesHistory;
