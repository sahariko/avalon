import * as React from 'react';
import flagIcon from '../../assets/icons/flag.svg';
import './style.scss';

interface AvatarProps {
    username: string;
    colorIndex: number;
    showFlag?: boolean;
}

const Avatar = ({
    username,
    colorIndex,
    showFlag
}: AvatarProps): React.ReactElement => {
    const initial = username.charAt(0);

    return (
        <span className={`avatar flex-center color-${colorIndex}`}>
            { initial }
            { showFlag && <img src={flagIcon}/> }
        </span>
    );
};

export default Avatar;
