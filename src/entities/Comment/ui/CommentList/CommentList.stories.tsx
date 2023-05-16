import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'hey storyboook',
      user: { id: '1', username: 'levi' },
    },
    {
      id: '2',
      text: 'hey storyboook',
      user: { id: '3', username: 'levi akerman' },
    },
    {
      id: '3',
      text: 'hey storyboook',
      user: { id: '3', username: 'petr' },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
