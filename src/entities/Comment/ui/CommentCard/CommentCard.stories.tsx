import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'comment card',
    user: { id: '11', username: 'Levi' },
  },
};

export const isLoading = Template.bind({});
isLoading.args = {
  comment: {
    id: '1',
    text: 'comment card',
    user: { id: '11', username: 'Levi' },
  },
  isLoading: true,
};
