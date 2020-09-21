import { createStore as _createStore, combineReducers, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import User from '../../lib/User';
import { subscribe, Events } from '../events';

import { addUser, removeUser } from './domains/users/actions';
import users from './domains/users/reducer';
import { UsersReducerState } from './domains/users/types';

const registerCallbacks = (store: Store) => {
    subscribe(Events.UserLoggedIn, (user: User) => {
        store.dispatch(addUser(user));
    });

    subscribe(Events.UserLoggedOut, (user: User) => {
        store.dispatch(removeUser(user));
    });
};

const reducers = combineReducers({
    users
});

export interface StoreState {
    users: UsersReducerState
}

export let storeInstance: Store;

export const createStore = (state: StoreState): Store => {
    storeInstance = _createStore(
        reducers,
        state,
        devToolsEnhancer({})
    );

    registerCallbacks(storeInstance);

    return storeInstance;
};
