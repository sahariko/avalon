import * as React from 'react';
import { useSelector } from 'react-redux';
import { getUserData, getUsersList } from '../../store/domains/users/selectors';
import UsersList from './UsersList';

const ConnectedUsers = (): React.ReactElement => {
    const users = useSelector(getUsersList);
    const { id } = useSelector(getUserData);

    return (
        <div className="flex-center">
            <h2>מי כבר בפנים</h2>
            <UsersList userId={id} users={users}/>
        </div>
    );
};

export default ConnectedUsers;
