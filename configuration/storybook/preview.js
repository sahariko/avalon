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
            <Story/>
        </div>
    )
];
