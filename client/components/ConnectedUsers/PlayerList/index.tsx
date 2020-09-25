import * as React from 'react';
import Player from '../../../../lib/Player';
import Avatar from '../../Avatar';
import './style.scss';

interface PlayerListProps {
    players: Player[];
    username?: string;
}

const PlayerList = ({ players, username }: PlayerListProps): React.ReactElement => {
    if (!players.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <ul className="players-list flex-center">
            {players.map((player) => {
                return (
                    <li key={player.username} className="flex-center">
                        <Avatar {...player}
                            showFlag={player.username === username}/>
                    </li>
                );
            })}
        </ul>
    );
};

export default PlayerList;
