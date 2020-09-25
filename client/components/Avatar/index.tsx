import * as React from 'react';
import classnames from 'classnames';
import Player from '../../../lib/Player';
import { Role } from '../../../lib/Player/constants';
import knightIcon from '../../assets/icons/knight.svg';
import evilIcon from '../../assets/icons/evil.svg';
import merlinIcon from '../../assets/icons/merlin.svg';
import Icon from '../Icon';
import './style.scss';

interface AvatarProps {
    username: string;
    isMe?: boolean;
    role?: Role;
}

const Avatar = ({
    username,
    isMe = false,
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

    const classes = classnames('avatar flex-center', {
        'is-me': isMe,
        'is-evil': Player.isEvil(role)
    });

    return (
        <span className={classes}>
            <Icon size={60}>
                { getIcon() }
            </Icon>
            <span className="username">
                { username }
            </span>
        </span>
    );
};

export default Avatar;
