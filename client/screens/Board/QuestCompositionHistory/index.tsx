import * as React from 'react';
import { useSelector } from 'react-redux';
import { PlayerMap } from '../../../../lib/Player';
import { getQuestCompositionHistory } from '../../../store/domains/game/selectors';
import { Icon } from '../../../components';
import xIcon from '../../../assets/icons/x.svg';
import vIcon from '../../../assets/icons/v.svg';
import './style.scss';
import { QuestCompositionOptions } from '../../../../lib/Game/constants';

type HistoryItemProps = {
    playerMap: PlayerMap
};

const HistoryItem = ({ playerMap }: HistoryItemProps): React.ReactElement => {
    return (
        <ul className="composition-history-item">
            {Object.keys(playerMap).map((username) => {
                const icon = playerMap[username] === QuestCompositionOptions.No
                    ? xIcon
                    : vIcon;

                return (
                    <li key={username}
                        className="flex-center">
                        {username}
                        <Icon size={20}>
                            { icon }
                        </Icon>
                    </li>
                );
            })}
        </ul>
    );
};

const QuestHistory = (): React.ReactElement => {
    const votesHistory = useSelector(getQuestCompositionHistory);

    if (!votesHistory.length) {
        return <p>בינתיים הכל טוב</p>;
    }

    return (
        <ul className="composition-votes-history">
            {votesHistory.map((playerMap, index) => {
                return (
                    <li key={index}
                        className="flex-center">
                        <HistoryItem playerMap={playerMap}/>
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestHistory;
