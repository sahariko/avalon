import { StoreState } from '../..';

export const getUsername = (state: StoreState): string => state.user;

export const userExists = (state: StoreState): boolean => !!getUsername(state);
