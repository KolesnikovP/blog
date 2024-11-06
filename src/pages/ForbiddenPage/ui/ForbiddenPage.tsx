import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid='ForbiddenPage'>
      {t('Недостаточно прав для доступа к этой странице')}
    </Page>
  );
});

export default ForbiddenPage;
