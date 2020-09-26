import * as React from 'react';
import abortIcon from '../../assets/icons/abort.svg';
import Icon from '../Icon';
import './style.scss';

const AbortGameButton = (): React.ReactElement => {

    return (
        <span className="abort-game-button flex-center">
            <Icon size={40}>
                { abortIcon }
            </Icon>
            <span className="tooltip">
                אין משחק!
            </span>
        </span>
    );
};

export default AbortGameButton;
