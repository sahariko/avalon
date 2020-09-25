import React from 'react';
import '../../client/assets/styles/index.scss';
import '../../client/App/style.scss';

export const decorators = [
    (Story) => (
        <div id="app">
            <Story/>
        </div>
    )
];
