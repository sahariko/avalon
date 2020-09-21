export enum Actions {
    SetUser = 'SetUser'
}

interface SetUserAction {
    type: Actions.SetUser;
    user: string;
}

export type UserActionTypes = SetUserAction;

export type UserReducerState = string;
