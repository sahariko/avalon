import User from '../../../../lib/User';

export enum Actions {
    SetUser = 'SetUser'
}

interface SetUserAction {
    type: Actions.SetUser;
    user: User;
}

export type UserActionTypes = SetUserAction;

export type UserReducerState = User;
