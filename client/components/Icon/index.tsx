import * as React from 'react';
import cn from 'classnames';
import './style.scss';

type IconProps = {
    children: string;
    size?: number;
    className?: string;
};

const Icon = ({
    children,
    size = 16,
    className
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
            style={style}/>
    );
};

export default Icon;
