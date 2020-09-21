import * as React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import UsersList from './UsersList';

const ConnectedUsers = (): React.ReactElement => {
    const users = useSelector(({ users }: StoreState) => users);

    return (
        <div className="flex-center">
            <h2>מי כבר בפנים</h2>
            <UsersList users={users}/>
        </div>
    );
};

export default ConnectedUsers;
