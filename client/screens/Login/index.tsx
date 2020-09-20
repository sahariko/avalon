import * as React from 'react';
import cn from 'classnames';
import User from '../../../lib/User';
import { login, subscribe, EVENTS } from '../../events';
import ConnectedUsers from './ConnectedUsers';
import { WARNINGS } from './constants';
import './style.scss';

type LoginProps = {
    onLogin: (username: string) => void;
    users: User[];
}

type LoginState = {
    warning: string;
    username: string;
}

class Login extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        warning: null,
        username: ''
    }

    componentDidMount(): void {
        subscribe(EVENTS.LoginFailed, () => {
            this.setState({
                warning: WARNINGS.USERNAME_EXISTS
            });
        });

        subscribe(EVENTS.LoginSuccess, () => {
            const {
                username
            } = this.state;
            const {
                onLogin
            } = this.props;

            onLogin(username);
        });
    }

    handleLogin = (e: React.FormEvent): void => {
        const { username } = this.state;
        e.preventDefault();

        if (!username) {
            this.setState({
                warning: WARNINGS.NO_USERNAME
            });
            return;
        }

        login(username);
    };

    handleInput = (e: React.ChangeEvent): void => {
        const element = e.target as HTMLInputElement;

        this.setState({
            username: element.value
        });
    };

    render(): React.ReactElement {
        const {
            username,
            warning
        } = this.state;
        const {
            users
        } = this.props;

        const inputClasses = cn({
            'has-warning': !!warning && !username
        });

        return (
            <section className="screen login-screen flex-center">
                <h2>מי אתה?</h2>
                <form className="flex-center"
                    onSubmit={this.handleLogin}>
                    <input
                        type="text"
                        placeholder="אני בנון!"
                        value={username}
                        onChange={this.handleInput}
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
                <ConnectedUsers users={users}/>
            </section>
        );
    }
}

export default Login;
