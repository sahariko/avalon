import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './assets/styles/index.scss';

const container = typeof document !== 'undefined' && document.getElementById('app');

declare global {
    interface Window { initialData: InitialData; }
}

if (container) {
    render(
        <App {...window.initialData}/>,
        container
    );
}

export default App;
