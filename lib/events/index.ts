export enum Client {
    Login = 'Login',
    UserDisconnected = 'UserDisconnected',
    UserReady = 'UserReady',
    StartGame = 'StartGame'
}

export enum Server {
    UserLoggedIn = 'UserLoggedIn',
    UserLoggedOut = 'UserLoggedOut',
    LoginFailed = 'LoginFailed',
    LoginSuccess = 'LoginSuccess',
    GameStarted = 'GameStarted',
    UserReady = 'ServerUserReady'
}
