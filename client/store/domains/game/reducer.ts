import { Phase } from '../../../../lib/Game/constants';
import { Actions, GameActionTypes, GameReducerState } from './types';

export const init = (state: Partial<GameReducerState> = {}): GameReducerState => ({
    started: false,
    phase: null,
    questSelectionQueue: [],
    questSelectorIndex: 0,
    currentQuest: 0,
    questModalOpen: false,
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
                questSelectionQueue: action.questSelectionQueue,
                phase: Phase.QuestSelection
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
        default:
            return state;
    }
};

export default reducer;
