import { Actions as GameActions } from '../game/types';
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
        case Actions.SetPlayerReady:
            return {
                ...state,
                [action.player.username]: {
                    ...state[action.player.username],
                    ready: true
                }
            };
        case Actions.SetPlayerNotReady:
            return {
                ...state,
                [action.player.username]: {
                    ...state[action.player.username],
                    ready: false
                }
            };
        case GameActions.StartGame: {
            const newState = { ...state };

            for (const username in newState) {
                newState[username] = {
                    ...newState[username],
                    ready: false
                }; // Make a copy
            }

            return newState;
        }
        case GameActions.AbortGame: {
            const newState = { ...state };

            for (const username in newState) {
                newState[username] = {
                    ...newState[username],
                    ready: false
                }; // Make a copy

                delete newState[username].role;
            }

            return newState;
        }
        case GameActions.PushCompositionVoteHistory:
        case GameActions.NextQuest: {
            const newState = { ...state };

            for (const username in newState) {
                newState[username] = {
                    ...newState[username]
                }; // Make a copy

                delete newState[username].selected;
            }

            return newState;
        }
        default:
            return state;
    }
};

export default reducer;
