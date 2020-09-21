import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './store';
import { InitialData } from './types';

import './assets/styles/index.scss';
import { Avalon } from './App';

const container = typeof document !== 'undefined' && document.getElementById('app');

declare global {
    interface Window { initialData: InitialData; }
}

if (container) {
    const store = createStore({
        users: window.initialData.connectedUsers,
        user: null
    });

    render(
        <Provider store={store}>
            <Avalon/>
        </Provider>,
        container
    );
}

export default Avalon;
