import { Actions, UserActionTypes, UserReducerState } from './types';

export const init = (): UserReducerState => null;

const reducer = (
    state = init(),
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
