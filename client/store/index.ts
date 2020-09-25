import { createStore as _createStore, combineReducers, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { registerCallbacks } from './eventHandler';

// Player domain
import players from './domains/players/reducer';
import { PlayersReducerState } from './domains/players/types';

// User domain
import user from './domains/user/reducer';
import { UserReducerState } from './domains/user/types';

// Game domain
import { GameReducerState } from './domains/game/types';
import game from './domains/game/reducer';

const reducers = combineReducers({
    players,
    user,
    game
});

export interface StoreState {
    players: PlayersReducerState;
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
