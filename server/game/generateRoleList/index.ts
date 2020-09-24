import { Roles } from '../Player/constants';
import { PLAYERS_TO_ROLES_MAP } from './constants';

const generateSpecialRolesMap = () => new Map([
    [Roles.Good, [Roles.Merlin]]
]);

const generateRoleList = (playerAmount: number): Roles[] => {
    const roleList: Roles[] = [];
    const specialRoles = generateSpecialRolesMap();

    let { good, evil } = PLAYERS_TO_ROLES_MAP.get(playerAmount);

    const generateRole = (alignment: Roles): Roles => {
        const roles = specialRoles.get(alignment);

        if (!roles || !roles.length) {
            return alignment;
        }

        // Generate a number between 1 and the amount of players left in the alignment.
        // If the number is exactly 1 (chance of 1 in X), make that player a special character, otherwise make them a peasant.

        const random = Math.floor(Math.random() * good) + 1;
        const allocateSpecial = random <= roles.length;

        return allocateSpecial
            ? roles.pop()
            : alignment;
    };

    const addGood = () => {
        roleList.push(generateRole(Roles.Good));
        good--;
    };

    const addEvil = () => {
        roleList.push(generateRole(Roles.Evil));
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