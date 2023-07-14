import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

type TextSizeType = 'size_s' | 'size_m' | 'size_l'

interface TextProps {
  className?: string;
  title?: string | number;
  text?: string | number;
  theme?: 'primary' | 'inverted' |'error';
  align?: 'right' | 'left' | 'center';
  size?: TextSizeType;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSizeType, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls.error]: theme === 'error',
    [cls.theme]: theme === 'primary',
    [cls.textSizeS]: size === 'size_s',
    [cls.textSizeM]: size === 'size_m',
    [cls.textSizeL]: size === 'size_l',
  };

  return (
    <div className={classNames(cls.Text, mods, [className, cls[align]])}>
      {title && <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>{title}</HeaderTag>}
      {text && <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>{text}</p>}
    </div>
  );
});
