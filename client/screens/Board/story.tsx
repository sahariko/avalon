import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import Board from '.';
import { Role } from '../../../lib/Player/constants';
import { Phase } from '../../../lib/Game/constants';

const players = [
    { username: 'אורי' },
    { username: 'בר' },
    { username: 'פיתוש', role: Role.Evil },
    { username: 'בנון', role: Role.Evil },
    { username: 'סמי' },
    { username: 'נטע', role: Role.Merlin },
    { username: 'אלון' },
    { username: 'הדסי', role: Role.Evil },
    { username: 'סהר', role: Role.Evil }
];

export const turnSelection = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers(players),
        user: 'בר',
        game: {
            phase: Phase.QuestSelection,
            questSelectionQueue: players.map(({ username }) => username),
            questSelectorIndex: 1,
            started: true
        }
    })}>
        <Board/>
    </Provider>
);

export default {
    title: 'Screens/Board',
    component: Board
};
