import * as React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import * as events from '../../../lib/events';
import { send } from '../../events';
import abortIcon from '../../assets/icons/abort.svg';
import { isGameStarted } from '../../store/domains/game/selectors';
import Icon from '../Icon';
import './style.scss';

const AbortGameButton = (): React.ReactElement => {
    const isStarted = useSelector(isGameStarted);
    const classes = classnames('abort-game-button', {
        disabled: !isStarted
    });

    const handleClick = () => {
        send(events.Client.AbortGame);
    };

    return (
        <span className={classes}
            onClick={handleClick}>
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
