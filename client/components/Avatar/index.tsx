import * as React from 'react';
import flagIcon from '../../assets/icons/flag.svg';
import Icon from '../Icon';
import './style.scss';

interface AvatarProps {
    username: string;
    colorIndex: number;
    showFlag?: boolean;
    showHorns?: boolean;
}

const Avatar = ({
    username,
    colorIndex,
    showFlag = false,
    showHorns = false
}: AvatarProps): React.ReactElement => {
    const initial = username.charAt(0);

    return (
        <span className={`avatar flex-center color-${colorIndex}`}>
            { initial }
            { showFlag && <Icon size={25}>{flagIcon}</Icon> }
            { showHorns && <span>eeeviiiiillll</span> }
        </span>
    );
};

export default Avatar;
