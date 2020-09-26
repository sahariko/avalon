import React from 'react';
import '../../client/assets/styles/index.scss';
import '../../client/App/style.scss';
import { init } from '../../client/events';
import { on, emit } from './mockEvents';

init({
    on,
    emit
});

export const decorators = [
    (Story) => (
        <div id="app">
            <header>
                <h1>אבאלון</h1>
            </header>
            <Story/>
        </div>
    )
];
