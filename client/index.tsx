import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { init as initUsers } from './store/domains/players/reducer';
import { init as initUser } from './store/domains/user/reducer';
import { init as initGame } from './store/domains/game/reducer';
import { InitialData } from './types';

import './assets/styles/index.scss';
import { Avalon } from './App';

const container = typeof document !== 'undefined' && document.getElementById('app');

declare global {
    interface Window {
        initialData: InitialData;
    }
}

if (container) {
    const store = createStore({
        players: initUsers(window.initialData.connectedUsers),
        user: initUser(),
        game: initGame()
    });

    render(
        <Provider store={store}>
            <Avalon/>
        </Provider>,
        container
    );
}

export default Avalon;
