const session = require('../session');

const registerEvents = (socket) => {
    socket.on('login', (username) => {
        session.add(socket.id, username);
    });

    socket.on('disconnect', () => {
        session.remove(socket.id);
    });
};

const register = (ioLayer) => {
    ioLayer.on('connection', registerEvents);
};

module.exports = register;
