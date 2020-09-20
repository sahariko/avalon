import * as React from 'react';
import Avatar from '../../../components/Avatar';
import './style.scss';

interface ConnectedUsersProps {
    connectedUsers: User[];
}

const ConnectedUsers = ({ connectedUsers }: ConnectedUsersProps): React.ReactElement => {
    if (!connectedUsers.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <ul className="connected-users flex-center">
            {connectedUsers.map(({ username }) => (
                <li key={username} className="flex-center">
                    <Avatar username={username}/>
                    <span className="username">
                        { username }
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ConnectedUsers;
