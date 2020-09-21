import User from '../../../../lib/User';
import { StoreState } from '../..';

export const getUserData = (state: StoreState): User => {
    if (!state.user) return null;

    return state.users[state.user];
};
