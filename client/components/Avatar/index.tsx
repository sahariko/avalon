import * as React from 'react';
import './style.scss';

const COLOR_AMOUNT = 10;
let _colorIndex = 0;

const getColorIndex = () => {
    const index = (_colorIndex % COLOR_AMOUNT) + 1;
    _colorIndex++;

    return index;
};

interface AvatarProps {
    username: string;
}

const Avatar = ({ username }: AvatarProps): React.ReactElement => {
    const [colorIndex] = React.useState(getColorIndex());

    const initial = username.charAt(0);

    return (
        <span className={`avatar flex-center color-${colorIndex}`}>
            { initial }
        </span>
    );
};

export default Avatar;
