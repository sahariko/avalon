import { Role } from '../Player/constants';
import { PLAYERS_TO_ROLES_MAP } from './constants';

const generateSpecialRolesMap = () => new Map([
    [Role.Good, [Role.Merlin]]
]);

const generateRoleList = (playerAmount: number): Role[] => {
    const roleList: Role[] = [];
    const specialRoles = generateSpecialRolesMap();

    let { good, evil } = PLAYERS_TO_ROLES_MAP.get(playerAmount);

    const generateRole = (alignment: Role): Role => {
        const roles = specialRoles.get(alignment);
        const amountLeft = alignment === Role.Good ? good : evil;

        if (!roles || !roles.length) {
            return alignment;
        }

        // Generate a number between 1 and the amount of players left in the alignment.
        // If the number is exactly 1 (chance of 1 in X), make that player a special character, otherwise make them a peasant.

        const random = Math.floor(Math.random() * amountLeft) + 1;
        const allocateSpecial = random <= roles.length;

        return allocateSpecial
            ? roles.pop()
            : alignment;
    };

    const addGood = () => {
        roleList.push(generateRole(Role.Good));
        good--;
    };

    const addEvil = () => {
        roleList.push(generateRole(Role.Evil));
        evil--;
    };

    while (good > 0 || evil > 0) {
        if (good === 0) {
            addEvil();
        } else if (evil === 0) {
            addGood();
        } else {
            Math.random() > .5
                ? addGood()
                : addEvil();
        }
    }

    return roleList;
};

export default generateRoleList;
