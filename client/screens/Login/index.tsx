import * as React from 'react';
import cn from 'classnames';
import { login, subscribe, Events } from '../../events';
import ConnectedUsers from '../../components/ConnectedUsers';
import { Warnings } from './constants';
import './style.scss';

type LoginState = {
    warning: string;
    username: string;
}

class Login extends React.Component<unknown, LoginState> {
    state: LoginState = {
        warning: null,
        username: ''
    }

    componentDidMount(): void {
        subscribe(Events.LoginFailed, () => {
            this.setState({
                warning: Warnings.UsernameExists
            });
        });
    }

    handleLogin = (e: React.FormEvent): void => {
        const { username } = this.state;
        e.preventDefault();

        if (!username) {
            this.setState({
                warning: Warnings.NoUsername
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
                <ConnectedUsers/>
            </section>
        );
    }
}

export default Login;
