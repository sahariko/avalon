import { createStore as _createStore, combineReducers, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { registerCallbacks } from './eventHandler';

// Users domain
import users from './domains/users/reducer';
import { UsersReducerState } from './domains/users/types';

// User domain
import user from './domains/user/reducer';
import { UserReducerState } from './domains/user/types';

// Game domain
import { GameReducerState } from './domains/game/types';
import game from './domains/game/reducer';

const reducers = combineReducers({
    users,
    user,
    game
});

export interface StoreState {
    users: UsersReducerState;
    user: UserReducerState;
    game: GameReducerState;
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
