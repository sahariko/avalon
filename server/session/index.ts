import User from '../../lib/User';
import { Warnings } from '../events/constants';
import { maxUsers } from './constants';


type AddUserResponse = {
    warning?: string,
    user?: User
}


class Session {
    private connections: Map<string, User>;

    constructor() {
        this.connections = new Map();
    }

    get users() {
        return Array.from( this.connections.values() );
    }

    userExists(username: string) {
        return Object.values(this.users).some((user) => (
            user.username === username
        ));
    }

    add(id: string, username: string): AddUserResponse {
        if (this.userExists(username)) {
            console.error(`User with name ${username} already exists`);

            return { warning: Warnings.UsernameExists };
        }

        if (this.connections.size === maxUsers) {
            console.error('Too many users');

            return { warning: Warnings.TooManyUsers };
        }

        const user = new User(id, username);

        this.connections.set(id, user);

        return { user };
    }

    remove(id: string) {
       this.connections.delete(id);
    }

    get(id: string) {
        return this.connections.get(id);
    }
}

const session = new Session();

// TEMP - Remove
session.add('1', 'Benun');
session.add('2', 'שם ממש ממש ממש ממש ארוך');
session.add('3', 'פיתוש');
session.add('4', 'אורי1');
session.add('5', 'אורי2');
session.add('6', 'אורי3');
session.add('7', 'אורי4');
session.add('8', 'אורי5');
session.add('9', 'אורי6');
session.add('10', 'אורי7');

export default session;
