import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/const/constRouter';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { Drawer } from '@/shared/ui/Drawer';
import { NotificationList } from '@/entities/Notification';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (userAuthData) {
    return (
      <header className={classNames(cls.Navbar)}>
        <Text
          className={cls.appName}
          title={t('Some APP')}
          theme='inverted'
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap='16' className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
        {/* <LoginModal isOpen={isAuthModal} onClose={onCloseModal} /> */}
      </header>
    );
  }

  return (
    <div className={classNames(cls.Navbar)}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Войти')}
        {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      </Button>
    </div>
  );
});

export default Navbar;
