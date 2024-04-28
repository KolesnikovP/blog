import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/Stack';
import { ListBox } from '@/shared/ui/Popups';
import { StarRating } from '@/shared/ui/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('главная страница')}
      <StarRating />
      <RatingCard
        title={t('Как вам статья')}
        feedbackTitle={t('Оставьте отзыв о статье')}
        hasFeedback
      />
      <BugButton />
      <HStack>
        <ListBox
          onChange={(value: string) => 'string'}
          value='123'
          items={[
            { value: '1', content: '123', disabled: false },
            { value: '2', content: '1232', disabled: true },
            { value: '3', content: '1233', disabled: false },
            { value: '4', content: '1234', disabled: false },
          ]}
        />
      </HStack>
    </Page>
  );
});

export default MainPage;
