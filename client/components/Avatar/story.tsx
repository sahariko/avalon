import * as React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Avatar from '.';
import { roleSelectKnob } from '../../../dev/storybook';

export const avatar = (): React.ReactElement => (
    <Avatar
        username={text('Username', 'הדסי')}
        isMe={boolean('Is it me you\'re looking for?', false)}
        role={roleSelectKnob()}
    />
);

export default {
    title: 'Components',
    component: Avatar,
    decorators: [withKnobs]
};
