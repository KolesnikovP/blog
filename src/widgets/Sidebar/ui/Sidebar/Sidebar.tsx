import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { className } = props;

  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size='size_l'
        data-testid='sidebar-collapsed'
        type='button'
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <div>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.item}
          >
            <HomeIcon className={cls.icon} />
            <span className={cls.link}>{t('Главная')}</span>
          </AppLink>
        </div>

        <div>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.item}
          >
            <AboutIcon className={cls.icon} />
            <span className={cls.link}>{t('О проекте')}</span>
          </AppLink>
        </div>

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.LangSwitcher} short={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
