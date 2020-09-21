import * as React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { getUserData } from '../../store/domains/users/selectors';
import UsersList from './UsersList';

const ConnectedUsers = (): React.ReactElement => {
    const users = useSelector(({ users }: StoreState) => Object.values(users));
    const { id } = useSelector(getUserData);

    return (
        <div className="flex-center">
            <h2>מי כבר בפנים</h2>
            <UsersList userId={id} users={users}/>
        </div>
    );
};

export default ConnectedUsers;
