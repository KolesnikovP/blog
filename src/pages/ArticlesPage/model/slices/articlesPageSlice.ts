import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorageConst';
import { fetchArticlesPageList } from '../../model/services/fetchArticlesPageList/fetchArticlesPageList';

const articlesAdapter = createEntityAdapter<Article>({
  // Функция по которому будет идти нормализация
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.TILE,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesPageList.pending, (
        state,
      ) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesPageList.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesPageList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
