import User from '../../../../lib/User';
import { StoreState } from '../..';
import { UsersReducerState } from './types';

export const getUsers = (state: StoreState): UsersReducerState => state.users;

export const getUsersList = (state: StoreState): User[] => Object.values(state.users);

export const getUsersAmount = (state: StoreState): number => getUsersList(state).length;

export const getUserData = (state: StoreState): User => {
    if (!state.user) return null;

    return state.users[state.user];
};
