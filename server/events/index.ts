import session from '../session';
import * as events from '../../lib/events';

let _ioLayer: SocketIO.Server;

const disconnectUser = (socket: SocketIO.Socket) =>
{
    const user = session.get(socket.id);

    _ioLayer.emit(events.Server.UserLoggedOut, user);
    session.remove(socket.id);
};

const registerEvents = (socket: SocketIO.Socket) => {
    socket.on(events.Client.Login, (username) => {
        const user = session.add(socket.id, username);

        if (!user) {
            socket.emit(events.Server.LoginFailed);
        } else {
            socket.emit(events.Server.LoginSuccess, user);
            _ioLayer.emit(events.Server.UserLoggedIn, user);
        }
    });
    // Native socketIO event
    socket.on('disconnect', () => {
        disconnectUser(socket);
    });

    socket.on(events.Client.UserDisconnected, () => {
        disconnectUser(socket);
    });
};

export const register = (ioLayer: SocketIO.Server): void => {
    _ioLayer = ioLayer;
    ioLayer.on('connection', registerEvents);
};
