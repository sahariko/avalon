import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import Login from '.';

export const Default = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers([
            { username: 'אורי' },
            { username: 'בר' }
        ])
    })}>
        <Login/>
    </Provider>
);

export default {
    title: 'Screens/Login',
    component: Login
};
