import { PlayerMap } from '../Player';

export enum QuestOptions {
    Success = 'success',
    Fail = 'fail'
}

export enum QuestCompositionOptions {
    Yes = 'yes',
    No = 'no'
}

export enum EndGameCodes {
    Win = 'win',
    Lose = 'win'
}

export type QuestVotes = Map<string, QuestOptions>;

export type QuestCompositionVotes = Map<string, QuestCompositionOptions>;

export interface VotesTally {
    success: number;
    fail: number;
}

export interface GameData {
    started: boolean;
    questSelectionQueue: string[];
    questSelectorIndex: number;
    currentQuest: number;
    votesHistory: VotesTally[],
    compositionVotesHistory: PlayerMap[]
}

export const QUEST_AMOUNT_PER_ROUND = [
    new Map([
        [5, 2],
        [6, 2],
        [7, 2],
        [8, 3],
        [9, 3],
        [10, 4]
    ]),
    new Map([
        [5, 3],
        [6, 3],
        [7, 3],
        [8, 4],
        [9, 4],
        [10, 4]
    ]),
    new Map([
        [5, 2],
        [6, 4],
        [7, 3],
        [8, 4],
        [9, 4],
        [10, 4]
    ]),
    new Map([
        [5, 3],
        [6, 3],
        [7, 4],
        [8, 5],
        [9, 5],
        [10, 5]
    ]),
    new Map([
        [5, 3],
        [6, 4],
        [7, 4],
        [8, 5],
        [9, 5],
        [10, 5]
    ])
];
