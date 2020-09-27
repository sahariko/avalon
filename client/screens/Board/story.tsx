import * as React from 'react';
import { Provider } from 'react-redux';
import { mockPlayers, mockStore } from '../../../dev/storybook';
import Board from '.';
import { Role } from '../../../lib/Player/constants';

const players = [
    { username: 'אורי' },
    { username: 'בר' },
    { username: 'פיתוש', role: Role.Evil },
    { username: 'בנון', role: Role.Evil },
    { username: 'סמי' },
    { username: 'נטע', role: Role.Merlin },
    { username: 'אלון' },
    { username: 'הדסי', role: Role.Evil },
    { username: 'סהר', role: Role.Evil }
];

export const turnSelection = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers(players),
        user: 'בר',
        game: {
            questSelectionQueue: players.map(({ username }) => username),
            questSelectorIndex: 10,
            started: true
        }
    })}>
        <Board/>
    </Provider>
);

export const questSelectionModal = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers(players),
        user: 'בר',
        game: {
            questSelectionQueue: players.map(({ username }) => username),
            questSelectorIndex: 1,
            started: true,
            questModalOpen: true
        }
    })}>
        <Board/>
    </Provider>
);

export const voteModal = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers(
            players.map((player) => ({
                ...player,
                selected: true
            }))
        ),
        user: 'בר',
        game: {
            questSelectionQueue: players.map(({ username }) => username),
            questSelectorIndex: 1,
            started: true,
            voteModalOpen: true
        }
    })}>
        <Board/>
    </Provider>
);

export const withVotingHistory = (): React.ReactElement => (
    <Provider store={mockStore({
        players: mockPlayers(players),
        user: 'בר',
        game: {
            questSelectionQueue: players.map(({ username }) => username),
            questSelectorIndex: 1,
            started: true,
            votesHistory: [
                { fail: 1, success: 1 },
                { fail: 2, success: 0 },
                { fail: 0, success: 3 },
                { fail: 2, success: 3 },
                { fail: 4, success: 1 }
            ],
            compositionVotesHistory: [
                {
                    'בר': 'yes',
                    'סמי': 'no',
                    'בנון': 'yes',
                    'פיתוש': 'no',
                    'נטע': 'yes',
                    'סהר': 'no',
                    'הדסי': 'yes',
                    'אורי': 'no'
                },
                {
                    'בר': 'yes',
                    'סמי': 'no',
                    'בנון': 'yes',
                    'פיתוש': 'no',
                    'נטע': 'yes',
                    'סהר': 'no',
                    'הדסי': 'yes',
                    'אורי': 'no'
                },
                {
                    'בר': 'yes',
                    'סמי': 'no',
                    'בנון': 'yes',
                    'פיתוש': 'no',
                    'נטע': 'yes',
                    'סהר': 'no',
                    'הדסי': 'yes',
                    'אורי': 'no'
                }
            ]
        }
    })}>
        <Board/>
    </Provider>
);

export default {
    title: 'Screens/Board',
    component: Board
};
