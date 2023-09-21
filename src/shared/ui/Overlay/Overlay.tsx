import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: ()=>void;
}

// Отвечает за затемнение бекграунда у модалок
export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
  );
});
