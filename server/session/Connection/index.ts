import User from '../../../lib/User';

class Connection extends User {
    socket: SocketIO.Socket;

    constructor(username: string, socket: SocketIO.Socket) {
        super(username);

        Object.assign(this, {
            socket
        });
    }

    toObject(): User {
        return {
            username: this.username
        };
    }

    emit(event: string, ...args: any[]): void { // eslint-disable-line @typescript-eslint/no-explicit-any
        if (!this.socket) { return; }

        this.socket.emit(event, ...args);
    }
}

export default Connection;
