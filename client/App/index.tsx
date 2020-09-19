import * as React from 'react';
import LoginScreen from '../screens/Login';
import LobbyScreen from '../screens/Lobby';
import './style.scss';

const Avalon = ({ connectedUsers }: InitialData): React.ReactElement => {
    const [user, setUser] = React.useState('');

    return (
        <>
            <header>
                <h1>אבאלון</h1>
            </header>
            {!user && <LoginScreen onLogin={setUser}/>}
            {user && <LobbyScreen user={user}/>}
        </>
    );
};

export default Avalon;
