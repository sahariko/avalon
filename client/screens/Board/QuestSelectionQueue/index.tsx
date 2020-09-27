import * as React from 'react';
import { useSelector } from 'react-redux';
import { questSelectionQueue, questSelector } from '../../../store/domains/game/selectors';
import './style.scss';

const Board = (): React.ReactElement => {
    const questSelectorName = useSelector(questSelector);
    const selectionQueue = useSelector(questSelectionQueue);

    return (
        <ul className="quest-selection-queue">
            {selectionQueue.map((username) => (
                <li key={username}
                    className={questSelectorName === username ? 'highlight' : ''}>
                    {username}
                </li>
            ))}
        </ul>
    );
};

export default Board;
