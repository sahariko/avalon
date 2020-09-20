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

module.exports = session;
