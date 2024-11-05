import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid='ForbiddenPage'>
      {t('Недостаточно прав для доступа к этой странице')}
    </Page>
  );
});

export default ForbiddenPage;
