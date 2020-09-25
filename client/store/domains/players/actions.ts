import Player, { PlayerMap } from '../../../../lib/Player';
import { Actions, PlayersActionTypes, PlayersReducerState } from './types';

export const setPlayers = (players: PlayersReducerState): PlayersActionTypes => ({
    type: Actions.SetPlayers,
    players
});

export const addPlayer = (player: Player): PlayersActionTypes => ({
    type: Actions.AddPlayer,
    player
});

export const removePlayer = (player: Player): PlayersActionTypes => ({
    type: Actions.RemovePlayer,
    player
});

export const updatePlayersData = (players: PlayerMap): PlayersActionTypes => ({
    type: Actions.UpdatePlayers,
    players
});

export const setPlayerReady = (player: Player): PlayersActionTypes => ({
    type: Actions.SetPlayerReady,
    player
});
