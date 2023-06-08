import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducersList: ReducersList = {
  articlesPage: articlesPageReducer,
};

// TODO: Need test when dispatches to do when state is inited, and when state didn't inited

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={cls.list}
          onLoadNextPart={onLoadNextPart}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
