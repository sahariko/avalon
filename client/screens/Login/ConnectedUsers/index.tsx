import * as React from 'react';
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
                    <span className="avatar"/>
                    <span className="username">
                        { username }
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ConnectedUsers;
