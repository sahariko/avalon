import * as React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { init, send } from '../events';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

export const Avalon = (): React.ReactElement => {
    const user = useSelector(({ user }: StoreState) => user);

    console.log('user:', user);

    React.useEffect(() => {
        init();

        window.addEventListener('beforeunload', () => {
            send('userDisconnected');
         });
    }, []);

    return (
        <>
            <header>
                <h1>אבאלון</h1>
            </header>
            {!user && (
                <LoginScreen/>
            )}
            {user && (
                <LobbyScreen/>
            )}
        </>
    );
};
