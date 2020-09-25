import Player, { PlayerMap } from '../../../../lib/Player';

export enum Actions {
    SetPlayers = 'SetPlayers',
    AddPlayer = 'AddPlayer',
    RemovePlayer = 'RemovePlayer',
    UpdatePlayers = 'UpdatePlayers',
    SetPlayerReady = 'SetPlayerReady'
}

export type PlayersReducerState = {
    [id: string]: Player
};

interface SetPlayersAction {
    type: Actions.SetPlayers;
    players: PlayersReducerState;
}

interface ChangePlayerAction {
    type: Actions.AddPlayer | Actions.RemovePlayer | Actions.SetPlayerReady;
    player: Player;
}

interface UpdatePlayersAction {
    type: Actions.UpdatePlayers;
    players: PlayerMap;
}

export type PlayersActionTypes = SetPlayersAction | ChangePlayerAction | UpdatePlayersAction;
