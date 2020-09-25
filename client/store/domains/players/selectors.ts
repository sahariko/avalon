import Player from '../../../../lib/Player';
import { StoreState } from '../..';
import { PlayersReducerState } from './types';

export const getPlayers = (state: StoreState): PlayersReducerState => state.players;

export const getPlayersList = (state: StoreState): Player[] => Object.values(state.players);

export const getPlayersAmount = (state: StoreState): number => getPlayersList(state).length;

export const getPlayerData = (state: StoreState): Player => {
    if (!state.user) return null;

    return state.players[state.user];
};
