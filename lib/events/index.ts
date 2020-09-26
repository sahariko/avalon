export enum Client {
    Login = 'Login',
    UserDisconnected = 'UserDisconnected',
    UserReady = 'UserReady',
    UserNotReady = 'UserNotReady',
    AbortGame = 'AbortGame'
}

export enum Server {
    UserLoggedIn = 'UserLoggedIn',
    UserLoggedOut = 'UserLoggedOut',
    LoginFailed = 'LoginFailed',
    LoginSuccess = 'LoginSuccess',
    GameStarted = 'GameStarted',
    GameAborted = 'GameAborted',
    UserReady = 'ServerUserReady',
    UserNotReady = 'ServerUserNotReady'
}
