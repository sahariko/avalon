import * as React from 'react';
import cn from 'classnames';
import { login } from '../../events';
import ConnectedUsers from './ConnectedUsers';
import './style.scss';

const WARNING_MESSAGE = 'אההה אתה חייב להכניס שם';

interface LoginProps {
    onLogin: (username: string) => void;
    connectedUsers: User[];
}

const Login = ({ onLogin, connectedUsers }: LoginProps): React.ReactElement => {
    const [warning, setWarning] = React.useState(null);
    const [username, setUsername] = React.useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) {
            setWarning(WARNING_MESSAGE);
            return;
        }

        onLogin(username);
        login(username);
    };

    const handleInput = (e: React.ChangeEvent) => {
        const element = e.target as HTMLInputElement;

        setUsername(element.value);
    };

    const inputClasses = cn({
        'has-warning': !!warning && !username
    });

    return (
        <section className="screen login-screen flex-center">
            <h2>מי אתה?</h2>
            <form className="flex-center"
                onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="אני בנון!"
                    value={username}
                    onChange={handleInput}
                    className={inputClasses}
                />
                <button className="primary">הכנס</button>
                { warning && (
                    <div className="warning-message">
                        { warning }
                    </div>
                )}
            </form>
            <h2>מי כבר בפנים</h2>
            <ConnectedUsers connectedUsers={connectedUsers}/>
        </section>
    );
};

export default Login;
