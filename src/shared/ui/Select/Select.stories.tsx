import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  options: [
    { value: '1', content: 'content 1' },
    { value: '2', content: 'content 2' },
    { value: '3', content: 'content 3' },
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'label',
  options: [
    { value: '1', content: 'content 1' },
    { value: '2', content: 'content 2' },
    { value: '3', content: 'content 3' },
  ],
};
