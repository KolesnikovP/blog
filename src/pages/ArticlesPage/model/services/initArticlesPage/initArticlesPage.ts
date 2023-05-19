import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { useSelector } from 'react-redux';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesPageList } from '../fetchArticlesPageList/fetchArticlesPageList';

interface FetchNextArticlePageProps {
  page?: number
}

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = useSelector(getState);

    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesPageList({
        page: 1,
      }));
    }
  },
);
