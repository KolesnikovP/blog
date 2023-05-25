import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const userAuthData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(true);
  }, [dispatch]);

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

        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
          <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </Button>
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
