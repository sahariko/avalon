import User from '../../lib/User';
import { PLAYERS_TO_ROLES_MAP } from './constants';
import Player from './Player';
import { Aligment } from './Player/constants';

class Game {
    private started: boolean;
    private players: Player[];

    private generateAligmentsList(playerAmount: number): Aligment[] {
        const aligmentList: Aligment[] = [];

        let { good, evil } = PLAYERS_TO_ROLES_MAP.get(playerAmount);

        const addGood = () => {
            aligmentList.push(Aligment.Good);
            good--;
        };

        const addEvil = () => {
            aligmentList.push(Aligment.Evil);
            evil--;
        };

        while (good > 0 || evil > 0) {
            if (good === 0) {
                addEvil();
            } else if (evil === 0) {
                addGood();
            } else {
                Math.random() > .5
                    ? addGood()
                    : addEvil();
            }
        }

        return aligmentList;
    }

    private initializePlayers(users: User[]): void {
        const aligmentList = this.generateAligmentsList(users.length);

        this.players = users.map((user, index) => (
            new Player(user, aligmentList[index])
        ));
    }

    start(users: User[]) {
        this.started = true;
        this.initializePlayers(users);
    }
}

const game = new Game();

export default game;
