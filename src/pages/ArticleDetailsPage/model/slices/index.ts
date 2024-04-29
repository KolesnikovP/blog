import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentReducer } from '../../model/slices/articleDetailsCommentsSlice';
import {
  articleDetailsPageRecommendationsReducer,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

// По аналогии с схемами чтобы не плодить, вынесем редюсеры одного модуля в единый объект
export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentReducer,
});
