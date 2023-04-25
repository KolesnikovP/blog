import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar)}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
    </div>
  </div>
);

export default Navbar;
