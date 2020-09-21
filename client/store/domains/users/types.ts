import User from '../../../../lib/User';

export enum Actions {
    SetUsers = 'SetUsers',
    AddUser = 'AddUser',
    RemoveUser = 'RemoveUser'
}

interface SetUsersAction {
    type: Actions.SetUsers;
    users: User[];
}

interface ChangeUserAction {
    type: Actions.AddUser | Actions.RemoveUser;
    user: User;
}

export type UsersActionTypes = SetUsersAction | ChangeUserAction;

export type UsersReducerState = User[];
