import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import {
  fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  IComment,
  string,
  ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
      const {
        dispatch, extra, rejectWithValue, getState,
      } = thunkAPI;

      const userData = getUserAuthData(getState());
      const article = getArticleDetailsData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<IComment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },
  );
