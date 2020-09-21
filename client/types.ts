import User from '../lib/User';

export interface InitialData {
    connectedUsers: {
        [id: string]: User
    };
}
