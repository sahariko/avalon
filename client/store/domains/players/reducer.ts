import { Actions, PlayersActionTypes, PlayersReducerState } from './types';

export const init = (players: PlayersReducerState = {}): PlayersReducerState => (players);

const reducer = (
    state = init(),
    action: PlayersActionTypes
): PlayersReducerState => {
    switch (action.type) {
        case Actions.SetPlayers:
            return { ...action.players };
        case Actions.AddPlayer:
            return {
                ...state,
                [action.player.username]: action.player
            };
        case Actions.RemovePlayer: {
            const players = { ...state };

            delete players[action.player.username];

            return players;
        }
        case Actions.UpdatePlayers: {
            const players: PlayersReducerState = { ...state };

            for (const playerName in action.players) {
                Object.assign(
                    players[playerName],
                    action.players[playerName]
                );
            }

            return players;
        }
        default:
            return state;
    }
};

export default reducer;