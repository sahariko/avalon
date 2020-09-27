import { PlayerData } from '../../../../lib/Player';
import { StoreState } from '../..';
import { PlayersReducerState } from './types';

export const getPlayers = (state: StoreState): PlayersReducerState => state.players;

export const getPlayersList = (state: StoreState): PlayerData[] => Object.values(state.players);

export const getPlayersAmount = (state: StoreState): number => getPlayersList(state).length;

export const getSelectedPlayers = (state: StoreState): PlayerData[] => getPlayersList(state)
    .filter(({ selected }) => selected);

export const getPlayerData = (state: StoreState): PlayerData => {
    if (!state.user) return null;

    return state.players[state.user];
};
