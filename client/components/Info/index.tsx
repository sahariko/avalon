import * as React from 'react';
import cn from 'classnames';
import infoIcon from '../../assets/icons/info.svg';
import Icon from '../Icon';
import './style.scss';

type InfoProps = {
    children: React.ReactNode;
    className?: string;
};

const Info = ({
    children,
    className
}: InfoProps): React.ReactElement => {
    const classes = cn(
        'info-block flex-center',
        className
    );

    return (
        <div className={classes}>
            <Icon size={20}>
                { infoIcon }
            </Icon>
            { children }
        </div>
    );
};

export default Info;
