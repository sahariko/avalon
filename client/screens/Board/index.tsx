import * as React from 'react';
import { ConnectedUsers } from '../../components';
import './style.scss';

const Board = (): React.ReactElement =>  (
    <section className="screen board-screen flex-center">
        <ConnectedUsers title="שחקנים"/>
    </section>
);

export default Board;
