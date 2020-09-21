import * as React from 'react';
import './style.scss';

interface AvatarProps {
    username: string;
    colorIndex: number;
}

const Avatar = ({ username, colorIndex }: AvatarProps): React.ReactElement => {
    console.log('colorIndex:', colorIndex);

    const initial = username.charAt(0);

    return (
        <span className={`avatar flex-center color-${colorIndex}`}>
            { initial }
        </span>
    );
};

export default Avatar;
