import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onCancel,
    onAccept,
    hasFeedback,
    feedbackTitle,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
    </>

  );

  return (
    <Card className={classNames('', {}, [className])} max>
      <VStack align='center' gap='8' max>
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
          <VStack max gap='32'>

            <HStack max gap='16' justify='end'>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={cancelHandler}
              >
                {t('Закрыть')}
              </Button>
              <Button
                onClick={acceptHandler}
                theme={ButtonTheme.OUTLINE}
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>

        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          {modalContent}
          <VStack gap='32'>
            <Button
              fullWidth
              size='size_l'
              onClick={acceptHandler}
            >
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
