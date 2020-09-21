import * as React from 'react';
import cn from 'classnames';
import './style.scss';
import { Sizes } from './constants';

type ButtonProps = {
    children: React.ReactNode;
    color?: string;
    size?: Sizes;
    className?: string;
};

const Button = ({
    color,
    children,
    size = Sizes.Medium,
    className
}: ButtonProps): React.ReactElement => {
    const classes = cn(
        `button-size-${size}`,
        {
            [`button-color-${color}`]: color
        },
        className
    );

    return (
        <button className={classes}>
            { children }
        </button>
    );
};

Button.Sizes = Sizes;

export default Button;
