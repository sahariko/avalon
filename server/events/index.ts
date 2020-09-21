import session from '../session';

let _ioLayer: SocketIO.Server;

const disconnectUser = (socket: SocketIO.Socket) =>
{
    const user = session.get(socket.id);

    _ioLayer.emit('userLoggedOut', user);
    session.remove(socket.id);
};

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
        disconnectUser(socket);
    });

    socket.on('userDisconnected', () => {
        disconnectUser(socket);
    });
};

export const register = (ioLayer: SocketIO.Server): void => {
    _ioLayer = ioLayer;
    ioLayer.on('connection', registerEvents);
};
