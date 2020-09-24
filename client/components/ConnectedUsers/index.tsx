import * as React from 'react';
import { useSelector } from 'react-redux';
import { getUserData, getUsersList } from '../../store/domains/users/selectors';
import UsersList from './UsersList';

interface ConnectedUsersProps {
    title?: string;
}

const ConnectedUsers = ({
    title = 'מי כבר בפנים'
}: ConnectedUsersProps): React.ReactElement => {
    const users = useSelector(getUsersList);
    const { username } = useSelector(getUserData) || {};

    return (
        <div className="flex-center">
            <h2>{title}</h2>
            <UsersList username={username} users={users}/>
        </div>
    );
};

export default ConnectedUsers;
