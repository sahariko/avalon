import User from '../../lib/User';
import { Warnings } from '../events/constants';
import Connection from './Connection';
import { MAX_USERS } from './constants';

type AddUserResponse = {
    warning?: string,
    user?: User
}

class Session {
    private connections: Map<string, Connection>;

    constructor() {
        this.connections = new Map();
    }

    get users() {
        const users: {[id: string]: User} = {};

        this.connections.forEach((connection) => {
            users[connection.username] = connection.toObject();
        });

        return users;
    }

    userExists(username: string) {
        return this.connections.has(username);
    }

    add(username: string, socket?: SocketIO.Socket): AddUserResponse {
        if (this.userExists(username)) {
            console.error(`User with name ${username} already exists`);

            return { warning: Warnings.UsernameExists };
        }

        if (this.connections.size === MAX_USERS) {
            console.error('Too many users');

            return { warning: Warnings.TooManyUsers };
        }

        const connection = new Connection(username, socket);

        this.connections.set(username, connection);

        return { user: connection.toObject() };
    }

    remove(username: string) {
       this.connections.delete(username);
    }

    get(username: string) {
        return this.connections.get(username);
    }
}

const session = new Session();

// TEMP - Remove
session.add('Benun');
session.add('שם ממש ממש ממש ממש ארוך');
session.add('פיתוש');
session.add('אורי1');
session.add('אורי2');
session.add('אורי3');
session.add('אורי4');
session.add('אורי5');
session.add('אורי6');
session.add('אורי7');

export default session;
