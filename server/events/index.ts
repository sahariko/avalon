import session from '../session';

let _ioLayer: SocketIO.Server;

const registerEvents = (socket: SocketIO.Socket) => {
    socket.on('login', (username) => {
        const user = session.add(socket.id, username);

        if (!user) {
            socket.emit('loginFailed');
        } else {
            socket.emit('loginSuccess');
            _ioLayer.emit('userLoggedIn', user);
        }
    });

    socket.on('disconnect', () => {
        session.remove(socket.id);
    });
};

export const register = (ioLayer: SocketIO.Server): void => {
    _ioLayer = ioLayer;
    ioLayer.on('connection', registerEvents);
};
