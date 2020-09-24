import User from '../../lib/User';
import generateRoleList from './generateRoleList';
import Player from './Player';

class Game {
    private started: boolean;
    private players: Player[];

    private initializePlayers(users: User[]): void {
        const roleList = generateRoleList(users.length);

        this.players = users.map((user, index) => (
            new Player(user, roleList[index])
        ));
    }

    start(users: User[]) {
        this.started = true;
        this.initializePlayers(users);
    }
}

const game = new Game();

export default game;
