import Player, { PlayerData, PlayerMap } from '../../../../lib/Player';

export enum Actions {
    SetPlayers = 'SetPlayers',
    AddPlayer = 'AddPlayer',
    RemovePlayer = 'RemovePlayer',
    UpdatePlayers = 'UpdatePlayers',
    SetPlayerReady = 'SetPlayerReady',
    SetPlayerNotReady = 'SetPlayerNotReady'
}

export type PlayersReducerState = {
    [id: string]: PlayerData
};

interface SetPlayersAction {
    type: Actions.SetPlayers;
    players: PlayersReducerState;
}

interface ChangePlayerAction {
    type: Actions.AddPlayer | Actions.RemovePlayer | Actions.SetPlayerReady | Actions.SetPlayerNotReady;
    player: Player;
}

interface UpdatePlayersAction {
    type: Actions.UpdatePlayers;
    players: PlayerMap;
}

export type PlayersActionTypes = SetPlayersAction | ChangePlayerAction | UpdatePlayersAction;
