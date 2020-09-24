import * as React from 'react';
import { useSelector } from 'react-redux';
import { Button, ConnectedUsers, Info, Warning } from '../../components';
import { getUserData, getUsersAmount } from '../../store/domains/users/selectors';
import { Warnings, MINIMUM_PLAYER_AMOUNT } from './constants';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const [warning, setWarning] = React.useState(null);
    const usersAmount = useSelector(getUsersAmount);
    const user = useSelector(getUserData);

    const handleClick = () => {
        if (usersAmount < MINIMUM_PLAYER_AMOUNT) {
            setWarning(Warnings.NotEnoughUsers);
        }
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
