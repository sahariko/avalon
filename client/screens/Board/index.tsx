import * as React from 'react';
import { ConnectedUsers, Info } from '../../components';
import QuestSelectionQueue from './QuestSelectionQueue';
import './style.scss';

const Board = (): React.ReactElement => {
    return (
        <div className="screen board-screen row">
            <section className="quest-selection flex-center col-sm-12 col-lg-6">
                <h2>משימה מה?</h2>
                <h3>סדר הרכבת המשימה</h3>
                <QuestSelectionQueue/>
                <Info>
                    מי שמרכיב את המשימה מסומן עם כתר
                    <br/>
                    מי שנבחר למשימה מסומן עם דגל
                </Info>
            </section>
            <section className="col-sm-12 col-lg-6">
                <ConnectedUsers title="שחקנים"/>
            </section>
        </div>
    );
};

export default Board;
