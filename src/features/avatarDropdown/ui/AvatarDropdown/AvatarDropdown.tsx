import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/constRouter';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const userAuthData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!userAuthData) {
    return null;
  }

  return (
    <div>
      <Dropdown
        className={classNames('', {}, [className])}
        direction='bottom left'
        items={[
          ...(isAdminPanelAvailable ? [{
            content: t('Админка'),
            href: RoutePath.admin_panel,
          }] : []),
          {
            content: t('Профиль'),
            href: RoutePath.profile + userAuthData.id,
          },
          {
            content: t('Выйти'),
            onClick: onLogout,
          },
        ]}
        trigger={<Avatar size={30} src={userAuthData.avatar} />}
      />
    </div>
  );
});
