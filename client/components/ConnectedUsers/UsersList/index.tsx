import * as React from 'react';
import User from '../../../../lib/User';
import Avatar from '../../Avatar';
import './style.scss';

interface ConnectedUsersProps {
    users: User[];
    username?: string;
}

const ConnectedUsers = ({ users, username }: ConnectedUsersProps): React.ReactElement => {
    if (!users.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <ul className="users-list flex-center">
            {users.map((user) => (
                <li key={user.username} className="flex-center">
                    <Avatar {...user} showFlag={user.username === username}/>
                    <span className="username">
                        { user.username }
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ConnectedUsers;
