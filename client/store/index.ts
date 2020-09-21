import { createStore as _createStore, combineReducers, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import User from '../../lib/User';
import { subscribe } from '../events';
import * as events from '../../lib/events';

// Users domain
import { addUser, removeUser } from './domains/users/actions';
import users from './domains/users/reducer';
import { UsersReducerState } from './domains/users/types';

// User domain
import { setUser } from './domains/user/actions';
import user from './domains/user/reducer';
import { UserReducerState } from './domains/user/types';

const registerCallbacks = (store: Store) => {
    subscribe(events.Server.UserLoggedIn, (user: User) => {
        store.dispatch(addUser(user));
    });

    subscribe(events.Server.UserLoggedOut, (user: User) => {
        store.dispatch(removeUser(user));
    });

    subscribe(events.Server.LoginSuccess, ({ id }) => {
        store.dispatch(setUser(id));
    });
};

const reducers = combineReducers({
    users,
    user
});

export interface StoreState {
    users: UsersReducerState;
    user: UserReducerState;
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
