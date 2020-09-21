import * as React from 'react';
import { useSelector } from 'react-redux';
import ConnectedUsers from '../../components/ConnectedUsers';
import { StoreState } from '../../store';
import './style.scss';

const Lobby = (): React.ReactElement => {
    const user = useSelector(({ user }: StoreState) => user);

    return (
        <section className="screen lobby-screen">
            היי { user.username }
            <ConnectedUsers/>
        </section>
    );
};

export default Lobby;
