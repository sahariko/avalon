import * as React from 'react';
import { useSelector } from 'react-redux';
import { init, send } from '../events';
import { userExists } from '../store/domains/user/selectors';
import { isGameStarted } from '../store/domains/game/selectors';
import * as screens from '../screens';
import AbortGameButton from '../components/AbortGameButton';
import './style.scss';

const getScreen = (
    userExists: boolean,
    gameStarted: boolean
) => {
    if (!userExists) {
        return gameStarted
            ? screens.GameStarted
            : screens.Login;
    }

    return gameStarted
        ? screens.Board
        : screens.Lobby;
};

export const Avalon = (): React.ReactElement => {
    const user = useSelector(userExists);
    const started = useSelector(isGameStarted);

    React.useEffect(() => {
        init();

        window.addEventListener('beforeunload', () => {
            send('userDisconnected');
         });
    }, []);

    const Screen = getScreen(user, started);

    return (
        <>
            <header>
                <h1>אבאלון</h1>
            </header>
            <Screen/>
            <AbortGameButton/>
        </>
    );
};
