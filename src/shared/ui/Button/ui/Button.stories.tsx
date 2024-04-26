import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ButtonTheme } from '../../Button/ui/Button';
import Button from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE_RED,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  square: true,
  children: 'T',
  theme: ButtonTheme.OUTLINE,
  size: 'size_m',
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  square: true,
  children: 'T',
  theme: ButtonTheme.OUTLINE,
  size: 'size_l',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  square: true,
  children: 'T',
  theme: ButtonTheme.OUTLINE,
  size: 'size_xl',
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: 'size_m',
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: 'size_l',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  size: 'size_xl',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
};
