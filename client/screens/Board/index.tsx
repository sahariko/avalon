import * as React from 'react';
import { useSelector } from 'react-redux';
import * as events from '../../../lib/events';
import { ConnectedUsers, Info, Button } from '../../components';
import { send } from '../../events';
import { hasEnoughQuestMembers, isCurrentUserQuestSelector } from '../../store/domains/game/selectors';
import { getSelectedPlayers } from '../../store/domains/players/selectors';
import QuestSelectionQueue from './QuestSelectionQueue';
import QuestModal from './QuestModal';
import QuestHistory from './QuestHistory';
import './style.scss';

const Board = (): React.ReactElement => {
    const showButton = useSelector(isCurrentUserQuestSelector);
    const enoughQuestMembers = useSelector(hasEnoughQuestMembers);
    const selectedPlayers = useSelector(getSelectedPlayers);

    const handleClick = () => {
        send(events.Client.StartQuest, selectedPlayers);
    };

    return (
        <div className="screen board-screen row">
            <QuestModal/>
            {showButton && (
                <section className="flex-center col-sm-12">
                    <Button size={Button.Sizes.Large}
                        color="green"
                        onClick={handleClick}
                        disabled={!enoughQuestMembers}>
                        צא למשימה
                    </Button>
                </section>
            )}
            <section className="col-sm-12 col-lg-6">
                <ConnectedUsers title="שחקנים"/>
            </section>
            <section className="quest-selection flex-center col-sm-12 col-lg-6">
                <h2>משימה מה?</h2>
                <h3>משימות שהיו</h3>
                <QuestHistory/>
                <h3>סדר הרכבת המשימה</h3>
                <QuestSelectionQueue/>
                <Info>
                    מי שמרכיב את המשימה מסומן עם כתר
                    <br/>
                    מי שנבחר למשימה מסומן עם דגל
                </Info>
            </section>
        </div>
    );
};

export default Board;
