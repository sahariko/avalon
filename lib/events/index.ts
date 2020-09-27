export enum Client {
    Login = 'Login',
    UserDisconnected = 'UserDisconnected',
    UserReady = 'UserReady',
    UserNotReady = 'UserNotReady',
    AbortGame = 'AbortGame',
    UserSelectedForQuest = 'UserSelectedForQuest',
    UserUnselectedForQuest = 'UserUnselectedForQuest',
    StartQuest = 'StartQuest',
    QuestSelected = 'QuestSelected',
    QuestCompositionSelected = 'QuestCompositionSelected',
    StartCompositionVoting = 'StartCompositionVoting'
}

export enum Server {
    UserLoggedIn = 'UserLoggedIn',
    UserLoggedOut = 'UserLoggedOut',
    LoginFailed = 'LoginFailed',
    LoginSuccess = 'LoginSuccess',
    GameStarted = 'GameStarted',
    GameAborted = 'GameAborted',
    UserReady = 'ServerUserReady',
    UserNotReady = 'ServerUserNotReady',
    UpdateSelectedUsers = 'UpdateSelectedUsers',
    StartQuest = 'ServerStartQuest',
    QuestVoted = 'QuestVoted',
    CompositionVoted = 'CompositionVoted',
    StartCompositionVoting = 'ServerStartCompositionVoting'
}
