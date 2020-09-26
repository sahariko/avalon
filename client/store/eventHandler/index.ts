import { Store } from 'redux';
import * as events from '../../../lib/events';
import Player from '../../../lib/Player';
import { subscribe } from '../../events';
import { setUser } from '../domains/user/actions';
import { addPlayer, removePlayer, setPlayerNotReady, setPlayerReady, updatePlayersData } from '../domains/players/actions';
import { startGame } from '../domains/game/actions';

export const registerCallbacks = (store: Store): void => {
    subscribe(events.Server.UserLoggedIn, (player: Player) => {
        store.dispatch(addPlayer(player));
    });

    subscribe(events.Server.UserLoggedOut, (player: Player) => {
        store.dispatch(removePlayer(player));
    });

    subscribe(events.Server.LoginSuccess, (player: Player) => {
        store.dispatch(addPlayer(player));
        store.dispatch(setUser(player.username));
    });

    subscribe(events.Server.GameStarted, ({
        playerData
    }) => {
        store.dispatch(startGame());
        store.dispatch(updatePlayersData(playerData));
    });

    subscribe(events.Server.UserReady, (player: Player) => {
        store.dispatch(setPlayerReady(player));
    });

    subscribe(events.Server.UserNotReady, (player: Player) => {
        store.dispatch(setPlayerNotReady(player));
    });
};
