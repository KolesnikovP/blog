import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('главная страница')}
      <BugButton />
      <Counter />
    </Page>
  );
});

export default MainPage;
