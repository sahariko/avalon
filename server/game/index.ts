import Player, { PlayerMap } from '../../lib/Player';
import { Role } from '../../lib/Player/constants';
import User from '../../lib/User';
import generateRoleList from './generateRoleList';

class Game {
    private started: boolean;
    private players: Map<string, Player>;

    private initializePlayers(users: User[]): void {
        this.players = new Map();

        const roleList = generateRoleList(users.length);

        users.forEach((user, index) => {
            this.players.set(user.username, new Player(user, roleList[index]));
        });
    }

    get evilPlayers(): Player[] {
        const evilPlayers: Player[] = [];

        this.players.forEach((player) => {
            if (player.role === Role.Evil) {
                evilPlayers.push(player);
            }
        });

        return evilPlayers;
    }

    getPlayer(username: string) {
        return this.players.get(username);
    }

    getPlayersData(username: string) {
        const player = this.getPlayer(username);

        const data: PlayerMap = {
            [player.username]: player
        };

        if (player.canSeeEvil()) {
            this.evilPlayers.forEach((evilPlayer) => {
                data[evilPlayer.username] = {
                    role: evilPlayer.role
                };
            });
        }

        return data;
    }

    start(users: User[]) {
        this.started = true;
        this.initializePlayers(users);
    }
}

const game = new Game();

export default game;
