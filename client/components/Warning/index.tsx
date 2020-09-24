import * as React from 'react';
import cn from 'classnames';
import './style.scss';

type WarningProps = {
    children: React.ReactNode;
    className?: string;
};

const Warning = ({
    children,
    className
}: WarningProps): React.ReactElement => {
    const classes = cn(
        'warning-block',
        className
    );

    return (
        <div className={classes}>
            { children }
        </div>
    );
};

export default Warning;
