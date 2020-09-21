import * as React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import UsersList from './UsersList';

const ConnectedUsers = (): React.ReactElement => {
    const users = useSelector(({ users }: StoreState) => users);

    if (!users.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <>
            <h2>מי כבר בפנים</h2>
            <UsersList users={users}/>
        </>
    );
};

export default ConnectedUsers;
