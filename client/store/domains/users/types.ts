import User from '../../../../lib/User';

export enum Actions {
    SetUsers = 'SetUsers',
    AddUser = 'AddUser',
    RemoveUser = 'RemoveUser'
}

export type UsersReducerState = {
    [id: string]: User
};

interface SetUsersAction {
    type: Actions.SetUsers;
    users: UsersReducerState;
}

interface ChangeUserAction {
    type: Actions.AddUser | Actions.RemoveUser;
    user: User;
}

export type UsersActionTypes = SetUsersAction | ChangeUserAction;
