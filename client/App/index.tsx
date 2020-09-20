import * as React from 'react';
import { init } from '../events';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

export const Avalon = ({ connectedUsers }: InitialData): React.ReactElement => {
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        init();
    }, []);

    return (
        <>
            <header>
                <h1>אבאלון</h1>
            </header>
            {!user && (
                <LoginScreen onLogin={setUser}
                    connectedUsers={connectedUsers}/>
            )}
            {user && (
                <LobbyScreen user={user}/>
            )}
        </>
    );
};
