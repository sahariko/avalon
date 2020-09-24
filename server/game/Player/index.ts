import User from '../../../lib/User';
import { Aligment } from './constants';

class Player extends User {
    aligment: Aligment;

    constructor(user: User, alignment: Aligment) {
        super(user.id, user.username);

        this.aligment = alignment;
    }
}

export default Player;
