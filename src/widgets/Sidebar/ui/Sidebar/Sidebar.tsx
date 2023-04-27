import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { className } = props;

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* <button */}
      {/*  data-testid='sidebar-collapsed' */}
      {/*  type='button' */}
      {/*  onClick={onToggle} */}
      {/* > */}
      {/*  toggle */}
      {/* </button> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.LangSwitcher} />
      </div>
    </div>
  );
};

export default Sidebar;
