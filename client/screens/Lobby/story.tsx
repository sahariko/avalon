import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import Lobby from '.';

export const waitingToStart = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers([
            { username: 'אורי' },
            { username: 'בר' },
            { username: 'פיתוש' },
            { username: 'בנון' },
            { username: 'סמי' },
            { username: 'נטע' },
            { username: 'אלון' },
            { username: 'הדסי' },
            { username: 'סהר' }
        ]),
        user: 'בר'
    })}>
        <Lobby/>
    </Provider>
);

export default {
    title: 'Screens/Lobby',
    component: Lobby
};
