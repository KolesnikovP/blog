import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

const Sidebar = memo((props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  // Предотвращаем перериросвку дочернего компонента при перерисовке родителя
  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed]);

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
        {itemsList}

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.LangSwitcher} short={collapsed} />
      </div>
    </div>
  );
});

export default Sidebar;
