import * as io from 'socket.io-client';

let socket: SocketIOClient.Socket;
const onInitCallbacks: Array<() => any> = []; // eslint-disable-line @typescript-eslint/no-explicit-any

export const init = (): void => {
    socket = io();
    onInitCallbacks.forEach((callback) => {
        callback();
    });
};

export const login = (username: string): void => {
    socket.emit('login', username);
};

export const subscribe = (event: string, callback: () => any): void => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const subscription = () => {
        socket.on(event, callback);
    };

    if (socket) {
        subscription();
    } else {
        onInitCallbacks.push(subscription);
    }
};

export const onLoginFailure = (callback: () => void): void => {
    subscribe('loginFailed', callback);
};

export const onLoginSuccess = (callback: () => void): void => {
    subscribe('loginSuccess', callback);
};
