import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesPageListProps {
  replace?: boolean;
}

export const fetchArticlesPageList = createAsyncThunk<
  Article[],
  FetchArticlesPageListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesPageList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const page = getArticlesPageNum(getState());
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          // _expand: 'user' нам нужен для того чтобы отрисовывать аватарку пользователя
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
