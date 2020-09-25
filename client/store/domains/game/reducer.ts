import { Actions, GameActionTypes, GameReducerState } from './types';

export const init = (): GameReducerState => ({
    started: false
});

const reducer = (
    state = init(),
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
