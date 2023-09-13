import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: 'soem',
  items: [
    { content: '1magic people23', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  value: '1234',
  items: [
    { content: '12magic people3', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
    { content: '12magic people3', value: 'fdsafads' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  value: '1234',
  items: [
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  value: '1234',
  items: [
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  value: '1234',
  items: [
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
    { content: '123', value: 'fdsafads' },
  ],
};
