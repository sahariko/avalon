import { Actions, UsersActionTypes, UsersReducerState } from './types';

const DEFAULT_STATE: UsersReducerState = [];

const reducer = (
    state = DEFAULT_STATE,
    action: UsersActionTypes
): UsersReducerState => {
    switch (action.type) {
        case Actions.SetUsers:
            return [...action.users];
        case Actions.AddUser:
            return [
                ...state,
                action.user
            ];
        case Actions.RemoveUser: {
            const users = state.filter(({ username }) => (
                username !== action.user.username
            ));

            return users;
        }
        default:
            return state;
    }
};

export default reducer;
