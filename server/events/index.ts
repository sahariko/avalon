import game from '../game';
import session from '../session';
import * as events from '../../lib/events';

let ioLayer: SocketIO.Server;

const disconnectUser = (socket: SocketIO.Socket) =>
{
    const connection = session.get(socket.id);

    session.remove(socket.id);

    if (connection) {
        ioLayer.emit(events.Server.UserLoggedOut, connection.toObject());
    }
};

const registerEvents = (socket: SocketIO.Socket) => {
    socket.on(events.Client.Login, (username) => {
        const { warning, user } = session.add(username, socket);

        if (!user) {
            socket.emit(events.Server.LoginFailed, warning);
        } else {
            socket.emit(events.Server.LoginSuccess, user);
            ioLayer.emit(events.Server.UserLoggedIn, user);
        }
    });

    // Native socketIO event
    socket.on('disconnect', () => {
        disconnectUser(socket);
    });

    socket.on(events.Client.UserDisconnected, () => {
        disconnectUser(socket);
    });

    socket.on(events.Client.StartGame, () => {
        game.start(Object.values(session.users));
        ioLayer.emit(events.Server.GameStarted, 'data');
    });
};

export const register = (_ioLayer: SocketIO.Server): void => {
    ioLayer = _ioLayer;
    ioLayer.on('connection', registerEvents);
};
