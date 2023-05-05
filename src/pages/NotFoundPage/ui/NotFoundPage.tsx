import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NotFoundPage)}>
      {t('Страница не найдена')}
    </div>
  );
});

export default NotFoundPage;
