import { StateSchema } from '@/app/providers/StoreProvider';
// import avatar from 'shared/assets/tests/storybook.png';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileIsLoading.test', () => {
  test('should return readonly true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
