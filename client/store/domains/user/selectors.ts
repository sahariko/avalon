import { StoreState } from '../..';

export const userExists = (state: StoreState): boolean => !!state.user;
