import session from '../session';

const registerEvents = (socket: SocketIO.Socket) => {
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

export const register = (ioLayer: SocketIO.Server): void => {
    ioLayer.on('connection', registerEvents);
};
