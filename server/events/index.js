const session = require('../session');

const registerEvents = (socket) => {
    socket.on('login', (username) => {
        const added = session.add(socket.id, username);

        if (!added) {
            socket.emit('loginFailed');
        } else {
            socket.emit('loginSuccess');
        }
    });

    socket.on('disconnect', () => {
        session.remove(socket.id);
    });
};

const register = (ioLayer) => {
    ioLayer.on('connection', registerEvents);
};

module.exports = register;
