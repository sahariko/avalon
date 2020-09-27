import * as React from 'react';
import classnames from 'classnames';
import Player from '../../../lib/Player';
import { Role } from '../../../lib/Player/constants';
import knightIcon from '../../assets/icons/knight.svg';
import evilIcon from '../../assets/icons/evil.svg';
import merlinIcon from '../../assets/icons/merlin.svg';
import morganaIcon from '../../assets/icons/morgana.svg';
import percivalIcon from '../../assets/icons/percival.svg';
import readyBannerIcon from '../../assets/icons/ready-banner.svg';
import questSelectionBannerIcon from '../../assets/icons/quest-selection-banner.svg';
import selectedForQuestIcon from '../../assets/icons/selected-for-quest.svg';
import Icon from '../Icon';
import './style.scss';

export interface AvatarProps {
    username: string;
    role?: Role;
    isMe?: boolean;
    ready?: boolean;
    selected?: boolean;
    isQuestSelector?: boolean;
    onClick?: (username: string) => void;
}

const Avatar = ({
    username,
    role = Role.Good,
    isMe = false,
    ready = false,
    selected = false,
    isQuestSelector = false,
    onClick
}: AvatarProps): React.ReactElement => {
    const getIcon = () => {
        switch (role) {
            case Role.Evil:
                return evilIcon;
            case Role.Merlin:
                return merlinIcon;
            case Role.Morgana:
                return morganaIcon;
            case Role.Percival:
                return percivalIcon;
            default:
                return knightIcon;
        }
    };

    const handleClick = () => {
        if (onClick) {
            onClick(username);
        }
    };

    const classes = classnames('avatar flex-center', {
        'is-me': isMe,
        'is-evil': Player.isEvil(role),
        'clickable': !!onClick
    });

    return (
        <span className={classes}
            onClick={handleClick}>
            <span className="role-icon">
                <Icon size={60}>
                    { getIcon() }
                </Icon>
                { ready && (
                    <Icon size={24} className="ready-icon">
                        { readyBannerIcon }
                    </Icon>
                )}
            </span>
            <span className="username">
                { username }
            </span>
            <span className="quest-icons">
                { selected && (
                    <Icon size={30}>
                        { selectedForQuestIcon }
                    </Icon>
                )}
                { isQuestSelector && (
                    <Icon size={30}>
                        { questSelectionBannerIcon }
                    </Icon>
                )}
            </span>
        </span>
    );
};

export default Avatar;
