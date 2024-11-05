import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid='AdminPanelPage'>
      {t('Admin Page')}
    </Page>
  );
});

export default AdminPanelPage;
