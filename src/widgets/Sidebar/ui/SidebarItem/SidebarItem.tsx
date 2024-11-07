import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
// eslint-disable-next-line import/order
import { memo } from 'react';
// eslint-disable-next-line import/order
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/order
import { useSelector } from 'react-redux';
import { SidebarItemType } from '../../model/types/sidebar';
// eslint-disable-next-line import/order
import cls from './SidebarItem.module.scss';

interface SidebarProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarProps) => {
  const { t } = useTranslation();
  const { item, collapsed } = props;

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
