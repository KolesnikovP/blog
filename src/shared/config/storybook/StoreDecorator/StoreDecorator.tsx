import { Story } from '@storybook/react';
import { StateSchema } from '@/app/providers/StoreProvider';
// TODO
import StoreProvider from '@/app/providers/StoreProvider/ui/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { addCommentFormReducer } from '@/features/addNewCommentForm/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
