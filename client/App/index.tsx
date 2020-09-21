import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../store';
import { InitialData } from '../types';
import { init, send } from '../events';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

export const Avalon = ({ connectedUsers }: InitialData): React.ReactElement => {
    const [user, setUser] = React.useState('');
    const store = createStore({
        users: connectedUsers
    });

    React.useEffect(() => {
        init();

        window.addEventListener('beforeunload', () => {
            send('userDisconnected');
         });
    }, []);

    return (
        <Provider store={store}>
            <header>
                <h1>אבאלון</h1>
            </header>
            {!user && (
                <LoginScreen onLogin={setUser}/>
            )}
            {user && (
                <LobbyScreen user={user}/>
            )}
        </Provider>
    );
};
