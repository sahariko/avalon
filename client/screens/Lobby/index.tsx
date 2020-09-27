import * as React from 'react';
import { useSelector } from 'react-redux';
import { Client } from '../../../lib/events';
import { Button, ConnectedUsers, Info, Warning } from '../../components';
import { send } from '../../events';
import { terminateReason } from '../../store/domains/game/selectors';
import { getPlayerData, getPlayersAmount } from '../../store/domains/players/selectors';
import { Warnings, MINIMUM_PLAYER_AMOUNT } from './constants';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const usersAmount = useSelector(getPlayersAmount);
    const user = useSelector(getPlayerData);
    const endGameReason = useSelector(terminateReason);

    const showWarning = usersAmount < MINIMUM_PLAYER_AMOUNT;

    const handleClick = () => {
        send(
            user.ready ? Client.UserNotReady : Client.UserReady,
            user
        );
    };

    const buttonColor = user.ready
        ? 'red'
        : 'green';
    const buttonText = user.ready
        ? 'בעצם לא'
        : 'מוכן להתחיל';

    return (
        <section className="screen lobby-screen flex-center">
            <h2>היי { user.username }!</h2>
            <section className="start-game flex-center">
                { endGameReason && (
                    <Warning>
                        { endGameReason }
                    </Warning>
                )}
                <p>אנחנו מחכים שמישהו יתחיל את המשחק</p>
                <Info>המשתמש שלך מסומן ברקע צבעוני</Info>
                { showWarning && (
                    <Warning>
                        { Warnings.NotEnoughUsers }
                    </Warning>
                )}
                <Button color={buttonColor}
                    size={Button.Sizes.Large}
                    onClick={handleClick}
                    className="start-game-button">
                    { buttonText }
                </Button>
            </section>
            <ConnectedUsers/>
        </section>
    );
};

export default Lobby;
