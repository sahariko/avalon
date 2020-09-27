import { Actions, GameActionTypes, GameReducerState } from './types';

export const init = (state: Partial<GameReducerState> = {}): GameReducerState => ({
    started: false,
    questSelectionQueue: [],
    questSelectorIndex: 0,
    currentQuest: 0,
    questModalOpen: false,
    voteModalOpen: false,
    votesHistory: [],
    compositionVotesHistory: [],
    endGameReason: null,
    ...state
});

const reducer = (
    state = init(),
    action: GameActionTypes
): GameReducerState => {
    switch (action.type) {
        case Actions.StartGame:
            return {
                ...state,
                started: true,
                questSelectionQueue: action.questSelectionQueue
            };
        case Actions.AbortGame:
            return init({
                endGameReason: action.reason
            });
        case Actions.OpenQuestModal:
            return {
                ...state,
                questModalOpen: true
            };
        case Actions.CloseQuestModal:
            return {
                ...state,
                questModalOpen: false
            };
        case Actions.OpenVoteModal:
            return {
                ...state,
                voteModalOpen: true
            };
        case Actions.CloseVoteModal:
            return {
                ...state,
                voteModalOpen: false
            };
        case Actions.NextQuest:
            return {
                ...state,
                currentQuest: state.currentQuest + 1,
                votesHistory: [
                    ...state.votesHistory,
                    action.votesTally
                ]
            };
        case Actions.PushCompositionVoteHistory:
            return {
                ...state,
                compositionVotesHistory: [
                    ...state.compositionVotesHistory,
                    action.votes
                ]
            };
        case Actions.NextQuestSelector:
            return {
                ...state,
                questSelectorIndex: state.questSelectorIndex + 1
            };
        case Actions.ClearCompositionVoteHistory:
            return {
                ...state,
                compositionVotesHistory: []
            };
        default:
            return state;
    }
};

export default reducer;
