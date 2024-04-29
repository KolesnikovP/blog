import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors.test', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
