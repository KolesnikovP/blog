import { Story } from '@storybook/react';
import { StateSchema } from 'app/providers/StoreProvider';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
