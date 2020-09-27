import Game from '../../../../lib/Game';
import { VotesTally } from '../../../../lib/Game/constants';
import { PlayerMap } from '../../../../lib/Player';
import EndGameReason from '../../../../lib/EndGameReason';
import { StoreState } from '../..';
import { getPlayersAmount, getSelectedPlayers } from '../players/selectors';

export const isGameStarted = (state: StoreState): boolean => state.game.started;

export const questSelector = (state: StoreState): string => {
    const {
        started,
        questSelectionQueue,
        questSelectorIndex
    } = state.game;

    const playersAmount = getPlayersAmount(state);

    if (!started) { return null; }

    const index = questSelectorIndex % playersAmount;

    return questSelectionQueue[index];
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

export const showVoteModal = (state: StoreState): boolean => state.game.voteModalOpen;

export const getQuestHistory = (state: StoreState): VotesTally[] => state.game.votesHistory;

export const getQuestCompositionHistory = (state: StoreState): PlayerMap[] => state.game.compositionVotesHistory;

export const terminateReason = (state: StoreState): EndGameReason => state.game.endGameReason;
