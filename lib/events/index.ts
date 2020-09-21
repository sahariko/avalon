export enum Client {
    Login = 'login',
    UserDisconnected = 'userDisconnected',
}

export enum Server {
    UserLoggedIn = 'userLoggedIn',
    UserLoggedOut = 'userLoggedOut',
    LoginFailed = 'loginFailed',
    LoginSuccess = 'loginSuccess'
}
