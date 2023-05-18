import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticlesPageListProps {
  page?: number
}

export const fetchArticlesPageList = createAsyncThunk<Article[], FetchArticlesPageListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesPageList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          // _expand: 'user' нам нужен для того чтобы отрисовывать аватарку пользователя
          _expand: 'user',
          _limit: limit,
          _page: page,
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
