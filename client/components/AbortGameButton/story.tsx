import * as React from 'react';
import { Provider } from 'react-redux';
import AbortGameButton from '.';
import { mockStore } from '../../../dev/storybook';

export const abortGameButton = (): React.ReactElement => (
    <Provider store={mockStore()}>
        <AbortGameButton/>
    </Provider>
);

export default {
    title: 'Components',
    component: AbortGameButton
};
