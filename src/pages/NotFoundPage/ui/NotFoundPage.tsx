import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid='NotFoundPage' className={classNames(cls.NotFoundPage)}>
      {t('Страница не найдена')}
    </Page>
  );
});

export default NotFoundPage;
