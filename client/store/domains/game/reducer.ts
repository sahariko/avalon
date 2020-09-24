import { Actions, GameActionTypes, GameReducerState } from './types';

const DEFAULT_STATE: GameReducerState = {
    started: false
};

const reducer = (
    state = DEFAULT_STATE,
    action: GameActionTypes
): GameReducerState => {
    switch (action.type) {
        case Actions.StartGame:
            return {
                ...state,
                started: true
            };
        default:
            return state;
    }
};

export default reducer;
