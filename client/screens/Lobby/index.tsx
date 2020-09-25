import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Client } from '../../../lib/events';
import { Button, ConnectedUsers, Info, Warning } from '../../components';
import { send } from '../../events';
import { startGame } from '../../store/domains/game/actions';
import { getPlayerData, getPlayersAmount } from '../../store/domains/players/selectors';
import { Warnings, MINIMUM_PLAYER_AMOUNT } from './constants';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const [warning, setWarning] = React.useState(null);
    const usersAmount = useSelector(getPlayersAmount);
    const user = useSelector(getPlayerData);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (usersAmount < MINIMUM_PLAYER_AMOUNT) {
            setWarning(Warnings.NotEnoughUsers);
            return;
        }

        send(Client.StartGame);
        dispatch(startGame());
    };

    return (
        <section className="screen lobby-screen flex-center">
            <h2>היי { user.username }!</h2>
            <section className="start-game flex-center">
                <p>אנחנו מחכים שמישהו יתחיל את המשחק</p>
                <Info>המשתמש שלך מסומן עם דגל</Info>
                { warning && (
                    <Warning>
                        { warning }
                    </Warning>
                )}
                <Button color="green"
                    size={Button.Sizes.Large}
                    onClick={handleClick}>
                    התחל
                </Button>
            </section>
            <ConnectedUsers/>
        </section>
    );
};

export default Lobby;
