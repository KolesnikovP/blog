import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string | number;
  text?: string | number;
  theme?: 'primary' | 'inverted' |'error';
  align?: 'right' | 'left' | 'center';
  size?: 'size_m' | 'size_l';
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = 'primary', align = 'left', size = 'size_m',
  } = props;

  const mods: Mods = {
    [cls.error]: theme === 'error',
    [cls.theme]: theme === 'primary',
    [cls.textSizeM]: size === 'size_m',
    [cls.textSizeL]: size === 'size_l',
  };

  return (
    <div className={classNames(cls.Text, mods, [className, cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
