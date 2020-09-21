import * as React from 'react';
import User from '../../lib/User';
import { init, subscribe, send, Events } from '../events';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

export const Avalon = ({ connectedUsers }: InitialData): React.ReactElement => {
    const [users, setUsers] = React.useState(connectedUsers);
    const [user, setUser] = React.useState('');

    React.useEffect(() => {
        init();
        subscribe(Events.UserLoggedIn, (user: User) => {
            setUsers([
                ...users,
                user
            ]);
        });

        subscribe(Events.UserLoggedOut, (user: User) => {
            const newUsers = users.filter(({ username }) => username !== user.username);

            setUsers(newUsers);
        });

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
                <LoginScreen onLogin={setUser}
                    users={users}/>
            )}
            {user && (
                <LobbyScreen user={user}/>
            )}
        </>
    );
};
