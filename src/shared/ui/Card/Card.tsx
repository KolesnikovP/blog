import {
  FC, HTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  theme?: 'normal' | 'outlined';
  max?: boolean;
}

export const Card: FC<CardProps> = (props) => {
  const {
    className, children, max, theme = 'normal', ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, {[cls.max]: max}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
