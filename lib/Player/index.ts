import User from '../User';
import { Role, CAN_SEE_EVIL_ROLES } from './constants';

export interface PlayerMap {
    [username: string]: Partial<Player>
}

export interface PlayerData {
    username: string;
    role?: Role;
    ready?: boolean;
}

class Player extends User {
    role?: Role;
    ready?: boolean;

    static isEvil(role: Role): boolean {
        return [
            Role.Evil
        ].includes(role);
    }

    constructor(user: User, role: Role = Role.Good) {
        super(user.username);

        Object.assign(this, {
            role
        });
    }

    canSeeEvil(): boolean {
        return CAN_SEE_EVIL_ROLES.has(this.role);
    }
}

export default Player;
