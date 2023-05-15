import { IComment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

// EntityState - это тип в котором есть ids: string[], entities: Dictionary<T> который позволяет нам
// работать с нормализованным стейто
export interface ArticleDetailsCommentSchema extends EntityState<IComment>{
  isLoading?: boolean;
  error?: string;
}
