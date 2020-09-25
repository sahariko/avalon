import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import Board from '.';
import { Role } from '../../../lib/Player/constants';

export const turnSelection = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers([
            { username: 'אורי' },
            { username: 'בר' },
            { username: 'פיתוש', role: Role.Evil },
            { username: 'בנון', role: Role.Evil },
            { username: 'סמי' },
            { username: 'נטע', role: Role.Merlin },
            { username: 'אלון' },
            { username: 'הדסי', role: Role.Evil },
            { username: 'סהר', role: Role.Evil }
        ]),
        user: 'בר'
    })}>
        <Board/>
    </Provider>
);

export default {
    title: 'Screens/Board',
    component: Board
};
