import * as React from 'react';
import { useSelector } from 'react-redux';
import { getPlayerData, getPlayersList } from '../../store/domains/players/selectors';
import PlayerList from './PlayerList';

interface ConnectedUsersProps {
    title?: string;
}

const ConnectedUsers = ({
    title = 'מי כבר בפנים'
}: ConnectedUsersProps): React.ReactElement => {
    const players = useSelector(getPlayersList);
    const { username } = useSelector(getPlayerData) || {};

    return (
        <div className="flex-center">
            <h2>{title}</h2>
            <PlayerList username={username} players={players}/>
        </div>
    );
};

export default ConnectedUsers;
