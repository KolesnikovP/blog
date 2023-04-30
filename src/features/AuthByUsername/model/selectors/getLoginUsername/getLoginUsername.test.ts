import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginUsername.test.ts', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });

  test('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });

  test('should work with empty state and return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
