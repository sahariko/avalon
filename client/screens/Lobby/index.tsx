import * as React from 'react';
import { useSelector } from 'react-redux';
import ConnectedUsers from '../../components/ConnectedUsers';
import { getUserData } from '../../store/domains/users/selectors';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const user = useSelector(getUserData);

    return (
        <section className="screen lobby-screen">
            היי { user.username }
            <ConnectedUsers/>
        </section>
    );
};

export default Lobby;
