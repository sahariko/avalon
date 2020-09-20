import * as io from 'socket.io-client';

let socket: SocketIOClient.Socket;

export const init = (): void => {
    socket = io();
};

export const login = (username: string): void => {
    socket.emit('login', username);
};

