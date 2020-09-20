class Connection {
    constructor({
        id,
        username
    }) {
        Object.assign(this, {
            id,
            username
        });
    }
}

class Session {
    constructor() {
        this.connections = {};
    }

    get users() {
        return Object.values(this.connections);
    }

    add(id, username) {
        const connection = new Connection({
            id,
            username
        });

        this.connections[id] = connection;
    }

    remove(id) {
        delete this.connections[id];
    }
}

const session = new Session();

session.add(1, 'Benun');
session.add(2, 'שם ממש ממש ממש ממש ארוך');
session.add(3, 'פיתוש');
session.add(4, 'אורי');
session.add(5, 'אורי');
session.add(6, 'אורי');
session.add(7, 'אורי');
session.add(8, 'אורי');
session.add(9, 'אורי');

module.exports = session;
