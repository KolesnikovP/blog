import { combineReducers } from '@reduxjs/toolkit';
import {
  articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

// По аналогии с схемами чтобы не плодить, вынесем редюсеры одного модуля в единый объект
export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentReducer,
});
