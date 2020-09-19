import * as React from 'react';
import cn from 'classnames';
import './style.scss';

const WARNING_MESSAGE = 'אההה אתה חייב להכניס שם';

interface Props {
    onLogin: (username: string) => void;
}

const Login = ({ onLogin }: Props): React.ReactElement => {
    const [warning, setWarning] = React.useState(null);
    const [username, setUsername] = React.useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) {
            setWarning(WARNING_MESSAGE);
            return;
        }

        onLogin(username);
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
        </section>
    );
};

export default Login;
