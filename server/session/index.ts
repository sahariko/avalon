import User from '../../lib/User';

type UsersMap = {
    [id: string]: User
};

class Session {
    private connections: UsersMap;

    constructor() {
        this.connections = {};
    }

    get users() {
        return Object.values(this.connections);
    }

    userExists(username: string) {
        return this.users.some((user) => (
            user.username === username
        ));
    }

    add(id: string, username: string) {
        if (this.userExists(username)) {
            console.error(`User with name ${username} already exists`);

            return false;
        }

        const user = new User(id, username);

        this.connections[id] = user;

        return user;
    }

    remove(id: string) {
        delete this.connections[id];
    }

    get(id: string) {
        return this.connections[id];
    }
}

const session = new Session();

session.add('1', 'Benun');
session.add('2', 'שם ממש ממש ממש ממש ארוך');
session.add('3', 'פיתוש');
session.add('4', 'אורי1');
session.add('5', 'אורי2');
session.add('6', 'אורי3');
session.add('7', 'אורי4');
session.add('8', 'אורי5');
session.add('9', 'אורי6');

export default session;
