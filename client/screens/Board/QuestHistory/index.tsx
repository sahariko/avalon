import * as React from 'react';
import { useSelector } from 'react-redux';
import { getQuestHistory } from '../../../store/domains/game/selectors';
import { Icon } from '../../../components';
import shieldIcon from '../../../assets/icons/shield.svg';
import knifeIcon from '../../../assets/icons/knife.svg';
import xIcon from '../../../assets/icons/x.svg';
import vIcon from '../../../assets/icons/v.svg';
import './style.scss';

const QuestHistory = (): React.ReactElement => {
    const votesHistory = useSelector(getQuestHistory);

    if (!votesHistory.length) {
        return <p>עדיין לא היו</p>;
    }

    return (
        <ul className="quest-votes-history">
            {votesHistory.map(({ success, fail }, index) => {
                const icon = fail
                    ? xIcon
                    : vIcon;

                return (
                    <li key={index}
                        className="flex-center">
                        <Icon size={20}>
                            { icon }
                        </Icon>
                        <span className="counters flex-center">
                            <span className="flex-center">
                                <Icon size={30}>
                                    { shieldIcon }
                                </Icon>
                                { success }
                            </span>
                            <span className="flex-center">
                                <Icon size={30}>
                                    { knifeIcon }
                                </Icon>
                                { fail }
                            </span>
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestHistory;
