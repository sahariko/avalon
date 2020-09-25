import * as React from 'react';
import { useSelector } from 'react-redux';
import { init, send } from '../events';
import { userExists } from '../store/domains/user/selectors';
import * as screens from '../screens';
import './style.scss';
import { isGameStarted } from '../store/domains/game/selectors';

const getScreen = (
    userExists: boolean,
    gameStarted: boolean
) => {
    if (!userExists) {
        return screens.Login;
    }

    if (gameStarted) {
        return screens.Board;
    }

    return screens.Lobby;
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
        </>
    );
};
