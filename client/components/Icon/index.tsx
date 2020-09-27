import * as React from 'react';
import cn from 'classnames';
import './style.scss';

type IconProps = {
    children: string;
    size?: number;
    className?: string;
    onClick?: () => void;
};

const Icon = ({
    children,
    size = 16,
    className,
    onClick
}: IconProps): React.ReactElement => {
    const classes = cn(
        'icon',
        className
    );

    const style = {
        height: `${size}px`,
        width: `${size}px`
    };

    return (
        <i className={classes}
            dangerouslySetInnerHTML={{ __html: children }}
            style={style}
            onClick={onClick}/>
    );
};

export default Icon;
