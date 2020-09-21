import User from '../../../../lib/User';
import { Actions, UserActionTypes } from './types';

export const setUser = (user: User): UserActionTypes => ({
    type: Actions.SetUser,
    user
});
