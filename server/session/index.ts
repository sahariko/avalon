import User from '../../lib/User';
import { Warnings } from '../events/constants';
import Connection from './Connection';
import { MAX_USERS } from './constants';

type AddUserResponse = {
    warning?: string,
    user?: Partial<Connection>
}

class Session {
    connections: Map<string, Connection>;

    constructor() {
        this.connections = new Map();
    }

    get users() {
        const users: {[id: string]: User} = {};

        this.connections.forEach((connection) => {
            users[connection.username] = connection.userData();
        });

        return users;
    }

    get connectionsList() {
        const connections: {[id: string]: Partial<Connection>} = {};

        this.connections.forEach((connection) => {
            connections[connection.username] = connection.toObject();
        });

        return connections;
    }

    get readyToStart(): boolean {
        const connections = Object.values(this.connectionsList);

        if (connections.length < 5) {
            return false;
        }

        return connections.every((connection: Partial<Connection>) => connection.ready);
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

    markConnectionReady(id: string, readyState = false): Partial<Connection> {
        const connection = this.getBySocketID(id);

        connection.ready = readyState;

        return connection.toObject();
    }

    setConnectionsReadyState(readyState = false) {
        this.connections.forEach((connection) => {
            connection.ready = readyState;
        });
    }
}

const session = new Session();

export default session;
