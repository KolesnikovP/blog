import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { }, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
