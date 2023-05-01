import { LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '1234' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('1234')))
      .toEqual({ username: '1234' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234')))
      .toEqual({ password: '1234' });
  });
});
