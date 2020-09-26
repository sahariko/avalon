import * as React from 'react';
// import { useSelector } from 'react-redux';
import { ConnectedUsers } from '../../components';
import './style.scss';

const Board = (): React.ReactElement => {
    return (
        <section className="screen board-screen flex-center">
            <ConnectedUsers title="שחקנים"/>
        </section>
    );
};

export default Board;
