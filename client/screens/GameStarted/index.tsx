import * as React from 'react';
import { ConnectedUsers } from '../../components';

const GameStarted = (): React.ReactElement => (
    <section className="screen game-started-screen flex-center">
        <p>המשחק התחיל ונשארת בחוץ, תצטרף בסבב הבא?</p>
        <ConnectedUsers title="מי משחק"/>
    </section>
);

export default GameStarted;
