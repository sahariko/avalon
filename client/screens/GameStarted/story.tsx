import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import GameStarted from '.';

export const Default = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers([
            { username: 'אורי' },
            { username: 'בר' }
        ])
    })}>
        <GameStarted/>
    </Provider>
);

export default {
    title: 'Screens/Game Started',
    component: GameStarted
};
