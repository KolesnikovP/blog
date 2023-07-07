import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComment',
  component: ArticleDetailsComment,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <ArticleDetailsComment {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
