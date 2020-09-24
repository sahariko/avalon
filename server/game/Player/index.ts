import User from '../../../lib/User';
import { Role, CAN_SEE_EVIL_ROLES } from './constants';

class Player extends User {
    role: Role;

    constructor(user: User, role: Role) {
        super(user.username);

        Object.assign(this, {
            role
        });
    }

    get canSeeEvil(): boolean {
        return CAN_SEE_EVIL_ROLES.has(this.role);
    }
}

export default Player;
