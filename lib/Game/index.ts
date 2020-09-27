import User from '../User';
import Player, { PlayerMap } from '../Player';
import { Role } from '../Player/constants';
import shuffle from '../shuffle';
import generateRoleList from './generateRoleList';
import { QUEST_AMOUNT_PER_ROUND } from './constants';

class Game {
    private players: Map<string, Player>;
    started: boolean;
    questSelectionQueue: string[];
    questSelectorIndex: number;
    currentQuest: number;

    static canAddSelectedPlayer({
        currentQuest,
        totalPlayerAmount,
        selectedPlayersAmount
    }: {
        currentQuest: number,
        totalPlayerAmount: number,
        selectedPlayersAmount: number
    }): boolean {
        const maxAmount = QUEST_AMOUNT_PER_ROUND[currentQuest].get(totalPlayerAmount);

        return selectedPlayersAmount < maxAmount;
    }

    private initializePlayers(users: User[]): void {
        this.players = new Map();

        const roleList = generateRoleList(users.length);

        users.forEach((user, index) => {
            this.players.set(user.username, new Player(user, roleList[index]));
        });
    }

    private initializeSelectionQueue(): void {
        const questSelectionQueue: string[] = [];

        this.players.forEach((player) => {
            questSelectionQueue.push(player.username);
        });

        this.questSelectionQueue = shuffle(questSelectionQueue);
        this.questSelectorIndex = 0;
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

    get selectedPlayersAmount(): number {
        let amount = 0;

        this.players.forEach((player) => {
            if (player.selected) {
                amount++;
            }
        });

        return amount;
    }

    get canAddSelectedPlayer(): boolean {
        return Game.canAddSelectedPlayer({
            currentQuest: this.currentQuest,
            totalPlayerAmount: this.players.size,
            selectedPlayersAmount: this.selectedPlayersAmount
        });
    }

    getPlayer(username: string): Player {
        return this.players.get(username);
    }

    getPlayersData(username: string): PlayerMap {
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

    nextQuestSelector(): number {
        if (this.questSelectorIndex === this.questSelectionQueue.length - 1) {
            this.questSelectorIndex = 0;
        } else {
            this.questSelectorIndex++;
        }

        return this.questSelectorIndex;
    }

    start(users: User[]): void {
        this.started = true;
        this.currentQuest = 0;
        this.initializePlayers(users);
        this.initializeSelectionQueue();
    }
}

export default Game;
