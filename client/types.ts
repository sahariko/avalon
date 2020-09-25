import Player from '../lib/Player';

export interface InitialData {
    connectedUsers: {
        [id: string]: Player
    };
}
