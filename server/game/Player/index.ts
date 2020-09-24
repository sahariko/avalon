import User from '../../../lib/User';
import { Roles } from './constants';

class Player extends User {
    role: Roles;

    constructor(user: User, role: Roles) {
        super(user.id, user.username);

        Object.assign(this, {
            role
        });
    }

    get canSeeEvil(): boolean {
        return [Roles.Evil, Roles.Merlin].includes(this.role);
    }
}

export default Player;
