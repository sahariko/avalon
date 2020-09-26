import * as React from 'react';
import PlayerList from './PlayerList';

interface ConnectedUsersProps {
    title?: string;
}

const ConnectedUsers = ({
    title = 'מי כבר בפנים'
}: ConnectedUsersProps): React.ReactElement => (
    <div className="flex-center">
        <h2>{title}</h2>
        <PlayerList/>
    </div>
);

export default ConnectedUsers;
