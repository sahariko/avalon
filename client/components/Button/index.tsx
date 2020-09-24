import * as React from 'react';
import cn from 'classnames';
import './style.scss';
import { Sizes } from './constants';

type ButtonProps = {
    children: React.ReactNode;
    color?: string;
    size?: Sizes;
    className?: string;
    onClick?: (...args: any[]) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

const Button = ({
    color,
    children,
    size = Sizes.Medium,
    className,
    onClick = () => null
}: ButtonProps): React.ReactElement => {
    const classes = cn(
        `button-size-${size}`,
        {
            [`button-color-${color}`]: color
        },
        className
    );

    return (
        <button className={classes}
            onClick={onClick}>
            { children }
        </button>
    );
};

Button.Sizes = Sizes;

export default Button;
