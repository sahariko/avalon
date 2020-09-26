import * as React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Avatar from '.';
import { roleSelectKnob } from '../../../dev/storybook';

interface BaseProps {
    onClick?: (...args: any[]) => any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Base = ({
    onClick
}: BaseProps): React.ReactElement => (
    <Avatar
        username={text('Username', 'הדסי')}
        isMe={boolean('Is it me you\'re looking for?', false)}
        role={roleSelectKnob()}
        ready={boolean('Are you ready?', false)}
        selected={boolean('Selected for quest', false)}
        isQuestSelector={boolean('Are you selecting the quest?', false)}
        onClick={onClick}
    />
);

export const withoutClickHandler = (): React.ReactElement => (
    <Base/>
);

export const withClickHandler = (): React.ReactElement => (
    <Base onClick={console.log}/>
);

export default {
    title: 'Components/Avatar',
    component: Avatar,
    decorators: [withKnobs]
};
