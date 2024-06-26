import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOptions } from '@/shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, sort, order, onChangeOrder, onChangeSort,
  } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Возрастанию'),
    },
    {
      value: 'desc',
      content: t('Убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
