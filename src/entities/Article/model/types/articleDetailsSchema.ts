import { IArticle } from './IArticle';

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: IArticle
}
