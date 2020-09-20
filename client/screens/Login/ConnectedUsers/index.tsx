import * as React from 'react';
import User from '../../../../lib/User';
import Avatar from '../../../components/Avatar';
import './style.scss';

interface ConnectedUsersProps {
    users: User[];
}

const ConnectedUsers = ({ users }: ConnectedUsersProps): React.ReactElement => {
    if (!users.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <ul className="connected-users flex-center">
            {users.map(({ username }) => (
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
