import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarIMG from './storybook.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  size: 150,
  src: AvatarIMG,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarIMG,

};
