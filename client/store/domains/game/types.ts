import { GameData, VotesTally } from '../../../../lib/Game/constants';
import { PlayerMap } from '../../../../lib/Player';

export enum Actions {
    StartGame = 'StartGame',
    AbortGame = 'AbortGame',
    OpenQuestModal = 'OpenQuestModal',
    CloseQuestModal = 'CloseQuestModal',
    OpenVoteModal = 'OpenVoteModal',
    CloseVoteModal = 'CloseVoteModal',
    NextQuest = 'NextQuest',
    ClearCompositionVoteHistory = 'ClearCompositionVoteHistory',
    PushCompositionVoteHistory = 'PushCompositionVoteHistory'
}

export type GameReducerState = GameData & {
    questModalOpen: boolean,
    voteModalOpen: boolean
};

export interface StartGameAction {
    type: Actions.StartGame;
    questSelectionQueue: string[];
}

export interface AbortGameAction {
    type: Actions.AbortGame;
}

interface OpenQuestModalAction {
    type: Actions.OpenQuestModal;
}

interface CloseQuestModalAction {
    type: Actions.CloseQuestModal;
}

interface OpenVoteModalAction {
    type: Actions.OpenVoteModal;
}

interface CloseVoteModalAction {
    type: Actions.CloseVoteModal;
}

export interface NextQuestAction {
    type: Actions.NextQuest,
    votesTally: VotesTally
}

interface PushCompositionVoteHistoryAction {
    type: Actions.PushCompositionVoteHistory,
    votes: PlayerMap
}

interface ClearCompositionVoteHistoryAction {
    type: Actions.ClearCompositionVoteHistory
}

export type GameActionTypes = StartGameAction | AbortGameAction | OpenQuestModalAction | CloseQuestModalAction | NextQuestAction | OpenVoteModalAction | CloseVoteModalAction | PushCompositionVoteHistoryAction | ClearCompositionVoteHistoryAction;
