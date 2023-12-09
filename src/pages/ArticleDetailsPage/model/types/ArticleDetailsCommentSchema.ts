import { EntityState } from '@reduxjs/toolkit';
import { IComment } from '@/entities/Comment';

// EntityState - это тип в котором есть ids: string[], entities: Dictionary<T> который позволяет нам
// работать с нормализованным стейто
export interface ArticleDetailsCommentSchema extends EntityState<IComment>{
  isLoading?: boolean;
  error?: string;
}
