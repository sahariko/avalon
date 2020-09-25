export enum Client {
    Login = 'Login',
    UserDisconnected = 'UserDisconnected',
    UserReady = 'UserReady',
    UserNotReady = 'UserNotReady',
    StartGame = 'StartGame'
}

export enum Server {
    UserLoggedIn = 'UserLoggedIn',
    UserLoggedOut = 'UserLoggedOut',
    LoginFailed = 'LoginFailed',
    LoginSuccess = 'LoginSuccess',
    GameStarted = 'GameStarted',
    UserReady = 'ServerUserReady',
    UserNotReady = 'ServerUserNotReady'
}
