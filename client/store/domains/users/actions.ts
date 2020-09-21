import User from '../../../../lib/User';
import { Actions, UsersActionTypes } from './types';

export const setUsers = (users: User[]): UsersActionTypes => ({
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
