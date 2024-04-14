import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NotificationList } from './NotificationList';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import {WithoutRate} from '@/features/articleRating/ui/ArticleRating/ArticleRating.stories';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: '113',
    }
  }
})]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Notification',
          description: 'Description'
        },
        {
          id: '2',
          title: 'Notification 2',
          description: 'Description 2'
        },
      ],
    },
  ],
};
