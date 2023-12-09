import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  text: 'text text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title',
  text: 'text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
  align: 'center',
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
  align: 'left',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
  title: 'Title',
  text: 'Text',
  theme: 'error',
  align: 'right',
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title',
  text: 'Text',
  size: 'size_s',
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title',
  text: 'Text',
  size: 'size_m',
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title',
  text: 'Text',
  size: 'size_l',
};
