import * as React from 'react';
import { useSelector } from 'react-redux';
import { init, send } from '../events';
import { userExists } from '../store/domains/user/selectors';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

export const Avalon = (): React.ReactElement => {
    const user = useSelector(userExists);

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
