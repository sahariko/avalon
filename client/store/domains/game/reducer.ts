import { Actions, GameActionTypes, GameReducerState } from './types';

export const init = (state: Partial<GameReducerState> = {}): GameReducerState => ({
    started: false,
    questSelectionQueue: [],
    questSelectorIndex: 0,
    currentQuest: 0,
    questModalOpen: false,
    votesHistory: [],
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
            return {
                ...state,
                started: false
            };
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
        case Actions.NextQuest:
            return {
                ...state,
                questSelectorIndex: state.questSelectorIndex + 1,
                currentQuest: state.currentQuest + 1,
                votesHistory: [
                    ...state.votesHistory,
                    action.votesTally
                ]
            };
        default:
            return state;
    }
};

export default reducer;
