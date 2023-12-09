import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('articleDetails.test', () => {
  const articleData = {
    id: '1',
    title: 'title',
  };
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: articleData,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(articleData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('getArticleDetailsError should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });

  test('getArticleDetailsIsLoading should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('getArticleDetailsIsLoading should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
