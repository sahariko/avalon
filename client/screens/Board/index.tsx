import * as React from 'react';
import { useSelector } from 'react-redux';
import * as events from '../../../lib/events';
import { ConnectedUsers, Info, Button } from '../../components';
import { send } from '../../events';
import { hasEnoughQuestMembers, isCurrentUserQuestSelector } from '../../store/domains/game/selectors';
import { getSelectedPlayers } from '../../store/domains/players/selectors';
import QuestSelectionQueue from './QuestSelectionQueue';
import QuestModal from './QuestModal';
import VoteModal from './VoteModal';
import QuestHistory from './QuestHistory';
import QuestCompositionHistory from './QuestCompositionHistory';
import './style.scss';

const Board = (): React.ReactElement => {
    const showButton = useSelector(isCurrentUserQuestSelector);
    const enoughQuestMembers = useSelector(hasEnoughQuestMembers);
    const selectedPlayers = useSelector(getSelectedPlayers);

    const handleClick = () => {
        send(events.Client.StartCompositionVoting, selectedPlayers);
    };

    return (
        <div className="screen board-screen row">
            <QuestModal/>
            <VoteModal/>
            {showButton && (
                <section className="start-button-section flex-center col-sm-12">
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
            <section className="quest-selection col-sm-12 col-lg-6 row">
                <h2 className="col-sm-12">משימה מה?</h2>
                <div className="col-sm-12 col-md-5">
                    <h3>משימות שהיו</h3>
                    <QuestHistory/>
                </div>
                <div className="col-sm-12 col-md-7">
                    <h3>הצבעות אחרונות</h3>
                    <QuestCompositionHistory/>
                </div>
                <div className="col-sm-12 col-md-6">
                    <h3>סדר הרכבת המשימה</h3>
                    <QuestSelectionQueue/>
                    <Info>
                        מי שמרכיב את המשימה מסומן עם כתר
                        <br/>
                        מי שנבחר למשימה מסומן עם דגל
                    </Info>
                </div>
            </section>
        </div>
    );
};

export default Board;
