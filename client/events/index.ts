import * as io from 'socket.io-client';
import * as events from '../../lib/events';

let socket: SocketIOClient.Socket;
const onInitCallbacks: Array<() => any> = []; // eslint-disable-line @typescript-eslint/no-explicit-any

export const init = (): void => {
    socket = io();
    onInitCallbacks.forEach((callback) => {
        callback();
    });
};

export const login = (username: string): void => {
    socket.emit(events.Client.Login, username);
};

export const subscribe = (event: string, callback: (...args: any[]) => any): void => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const subscription = () => {
        socket.on(event, callback);
    };

    if (socket) {
        subscription();
    } else {
        onInitCallbacks.push(subscription);
    }
};

export const send = (eventName: string, ...args: any[]): void => { // eslint-disable-line @typescript-eslint/no-explicit-any
    socket.emit(eventName, ...args);
};
