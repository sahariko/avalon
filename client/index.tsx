import * as React from 'react';
import { render } from 'react-dom';

import './assets/styles/index.scss';
import { Avalon } from './App';

const container = typeof document !== 'undefined' && document.getElementById('app');

declare global {
    interface Window { initialData: InitialData; }
}

if (container) {
    render(
        <Avalon {...window.initialData}/>,
        container
    );
}

export default Avalon;
