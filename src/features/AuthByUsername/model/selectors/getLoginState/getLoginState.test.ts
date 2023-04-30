import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

describe('getLoginState.test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: 'pass',
        isLoading: true,
        error: '',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });

  test('should work with state without error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user',
        password: 'pass',
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
  });
});
