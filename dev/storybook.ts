import { Store } from 'redux';
import { select } from '@storybook/addon-knobs';
import Player from '../lib/Player';
import { Role } from '../lib/Player/constants';
import User from '../lib/User';
import { init as initPlayers } from '../client/store/domains/players/reducer';
import { PlayersReducerState } from '../client/store/domains/players/types';
import { init as initUser } from '../client/store/domains/user/reducer';
import { init as initGame } from '../client/store/domains/game/reducer';
import { createStore } from '../client/store';

export const roleSelectKnob = () => select( // eslint-disable-line
    'Role',
    {
        Good: Role.Good,
        Evil: Role.Evil,
        Merlin: Role.Merlin
    },
    Role.Good
);

export const mockPlayers = (players: Partial<Player>[]): PlayersReducerState => (
    players.reduce((acc: PlayersReducerState, { username, role, ...rest }) => {
        const player = new Player(new User(username), role);

        console.log('rest:', rest);

        Object.assign(player, rest);

        return {
            ...acc,
            [username]: player
        };
    }, {})
);

export const mockStore = ({
    players = {},
    user = initUser(),
    game = {}
} = {}): Store => createStore({
    players: initPlayers(players),
    user,
    game: initGame(game)
});
