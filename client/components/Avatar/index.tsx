import * as React from 'react';
import { Role } from '../../../lib/Player/constants';
import knightIcon from '../../assets/icons/knight.svg';
import evilIcon from '../../assets/icons/evil.svg';
import merlinIcon from '../../assets/icons/merlin.svg';
import Icon from '../Icon';
import './style.scss';

interface AvatarProps {
    username: string;
    showFlag?: boolean;
    role?: Role;
}

const Avatar = ({
    username,
    // showFlag = false,
    role = Role.Good
}: AvatarProps): React.ReactElement => {
    const getIcon = () => {
        if (role === Role.Evil) {
            return evilIcon;
        }

        if (role === Role.Merlin) {
            return merlinIcon;
        }

        return knightIcon;
    };

    return (
        <span className="avatar flex-center">
            <Icon size={60}>
                { getIcon() }
            </Icon>
            <span className="username">
                { username }
            </span>
            {/* { showFlag || true && (
                <Icon size={25}
                    className="flag-icon">
                    {flagIcon}
                </Icon>
            )} */}
        </span>
    );
};

export default Avatar;
