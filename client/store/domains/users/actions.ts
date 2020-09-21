import User from '../../../../lib/User';
import { Actions, UsersActionTypes, UsersReducerState } from './types';

export const setUsers = (users: UsersReducerState): UsersActionTypes => ({
    type: Actions.SetUsers,
    users
});

export const addUser = (user: User): UsersActionTypes => ({
    type: Actions.AddUser,
    user
});

export const removeUser = (user: User): UsersActionTypes => ({
    type: Actions.RemoveUser,
    user
});
