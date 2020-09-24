import { Store } from 'redux';
import * as events from '../../../lib/events';
import User from '../../../lib/User';
import { subscribe } from '../../events';
import { setUser } from '../domains/user/actions';
import { addUser, removeUser } from '../domains/users/actions';

export const registerCallbacks = (store: Store): void => {
    subscribe(events.Server.UserLoggedIn, (user: User) => {
        store.dispatch(addUser(user));
    });

    subscribe(events.Server.UserLoggedOut, (user: User) => {
        store.dispatch(removeUser(user));
    });

    subscribe(events.Server.LoginSuccess, (user: User) => {
        store.dispatch(addUser(user));
        store.dispatch(setUser(user.username));
    });

    subscribe(events.Server.GameStarted, (usersData) => {
        console.log('YO', usersData);
    });
};
