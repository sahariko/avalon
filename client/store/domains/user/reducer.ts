import { Actions, UserActionTypes, UserReducerState } from './types';

const DEFAULT_STATE: UserReducerState = null;

const reducer = (
    state = DEFAULT_STATE,
    action: UserActionTypes
): UserReducerState => {
    switch (action.type) {
        case Actions.SetUser:
            return action.user;
        default:
            return state;
    }
};

export default reducer;
