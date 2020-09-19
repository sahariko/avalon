import * as React from 'react';
import './style.scss';

interface Props {
    user: string;
}

const Lobby = ({ user }: Props): React.ReactElement => {

    return (
        <section className="screen lobby-screen">
            היי { user }
        </section>
    );
};

export default Lobby;
