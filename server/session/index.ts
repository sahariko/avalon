import User from '../../lib/User';
import { Warnings } from '../events/constants';
import Connection from './Connection';
import { MAX_USERS } from './constants';

type AddUserResponse = {
    warning?: string,
    user?: User
}

class Session {
    connections: Map<string, Connection>;

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

    getBySocketID(id: string) {
        return Array.from(this.connections.values())
            .find((connection) => connection.socket && connection.socket.id === id);
    }
}

const session = new Session();

export default session;
