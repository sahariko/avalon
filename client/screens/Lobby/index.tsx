import * as React from 'react';
import { useSelector } from 'react-redux';
import { Button, ConnectedUsers, Info } from '../../components';
import { getUserData } from '../../store/domains/users/selectors';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const user = useSelector(getUserData);

    return (
        <section className="screen lobby-screen flex-center">
            <h2>היי { user.username }!</h2>
            <section className="start-game flex-center">
                <p>אנחנו מחכים שמישהו יתחיל את המשחק</p>
                <Info>המשתמש שלך מסומן עם דגל</Info>
                <Button color="green"
                    size={Button.Sizes.Large}>
                    התחל
                </Button>
            </section>
            <ConnectedUsers/>
        </section>
    );
};

export default Lobby;
