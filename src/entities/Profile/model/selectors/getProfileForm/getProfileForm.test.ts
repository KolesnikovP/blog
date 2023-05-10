import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import avatar from 'shared/assets/tests/storybook.png';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  const profileData = {
    username: 'admin',
    age: 22,
    country: Country.Armenia,
    lastname: 'admin tv',
    first: 'asd',
    city: 'sbp',
    currency: Currency.USD,
    // avatar,
  };
  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
