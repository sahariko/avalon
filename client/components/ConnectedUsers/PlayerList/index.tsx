import * as React from 'react';
import { useSelector } from 'react-redux';
import * as events from '../../../../lib/events';
import { send } from '../../../events';
import { hasEnoughQuestMembers, questSelector } from '../../../store/domains/game/selectors';
import { getPlayerData, getPlayersList } from '../../../store/domains/players/selectors';
import Avatar, { AvatarProps } from '../../Avatar';
import './style.scss';

const PlayerList = (): React.ReactElement => {
    const players = useSelector(getPlayersList);
    const { username } = useSelector(getPlayerData) || {};
    const questSelectorName = useSelector(questSelector);
    const enoughQuestMembers = useSelector(hasEnoughQuestMembers);

    const handleSelection = (username: string) => {
        const { selected } = players.find((player) => player.username === username);
        const eventName = selected
            ? events.Client.UserUnselectedForQuest
            : events.Client.UserSelectedForQuest;

        if (eventName === events.Client.UserSelectedForQuest && enoughQuestMembers) {
            return;
        }

        send(eventName, username);
    };

    if (!players.length) {
        return (
            <div className="no-one">
                אף אחד 🤷‍♂
            </div>
        );
    }

    return (
        <ul className="players-list flex-center">
            {players.map((player) => {
                const isMe = player.username === username;
                const isQuestSelector = player.username === questSelectorName;

                const props: AvatarProps = {
                    ...player,
                    isMe,
                    isQuestSelector
                };

                if (questSelectorName === username) {
                    props.onClick = handleSelection;
                }

                return (
                    <li key={player.username} className="flex-center">
                        <Avatar {...props}/>
                    </li>
                );
            })}
        </ul>
    );
};

export default PlayerList;
