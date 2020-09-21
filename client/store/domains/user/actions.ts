import { Actions, UserActionTypes } from './types';

export const setUser = (user: string): UserActionTypes => ({
    type: Actions.SetUser,
    user
});
