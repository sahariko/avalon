import User from '../User';
import { Role } from './constants';

export interface PlayerMap {
    [username: string]: Partial<Player>
}

export interface PlayerData {
    username: string;
    role?: Role;
    ready?: boolean;
    selected?: boolean;
}

class Player extends User {
    role?: Role;
    ready?: boolean;
    selected?: boolean;

    static isEvil(role: Role): boolean {
        return [
            Role.Evil,
            Role.Morgana
        ].includes(role);
    }

    static looksLikeMerlin(role: Role): boolean {
        return [
            Role.Merlin,
            Role.Morgana
        ].includes(role);
    }

    constructor(user: User, role: Role = Role.Good) {
        super(user.username);

        Object.assign(this, {
            role
        });
    }

    canSeeEvil(): boolean {
        return [
            Role.Evil,
            Role.Merlin,
            Role.Morgana
        ].includes(this.role);
    }

    canSeeMerlin(): boolean {
        return [
            Role.Percival
        ].includes(this.role);
    }
}

export default Player;
