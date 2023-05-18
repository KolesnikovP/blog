import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesPageList } from '../fetchArticlesPageList/fetchArticlesPageList';
import { fetchNextArticlePage } from './fetchNextArticlePage';

jest.mock('../fetchArticlesPageList/fetchArticlesPageList');

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    // 4 - потому что panding, fulfield, еще два внутри самого экшна
    expect(thunk.dispatch).toBeCalledTimes(4);
    // убеждаемся что фетч улетел с нужными параметрами
    expect(fetchArticlesPageList).toBeCalledWith({ page: 3 });
  });

  test('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesPageList).not.toHaveBeenCalled();
  });
});
