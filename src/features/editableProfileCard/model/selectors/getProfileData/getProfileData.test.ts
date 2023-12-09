import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// import avatar from 'shared/assets/tests/storybook.png';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
