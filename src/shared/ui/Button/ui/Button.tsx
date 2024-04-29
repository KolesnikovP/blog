import {
  ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Content of button
     */
    children: ReactNode;
    /**
     * Theme of button. Responses for visual part (in frame, without styles, opposite color of app ...)
     */
    theme?: ButtonTheme;
    /**
     * Flag that makes a button squared
     */
    square?: boolean;
    /**
     * Size of button related our design sistem
     */
    size?: 'size_m' | 'size_l' | 'size_xl';
    disabled?: boolean;
    /**
     * Encreases button and filling avalaible width
     */
    fullWidth?: boolean;
}

// ДА, мы не оборачиваем компоненты в мемо, НО! Это кнопка, там обычно хронятся примитивы
// без древовидной вложенной структуры. Хранить такое дешево
export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.OUTLINE,
    children,
    square,
    size = 'size_l',
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type='button'
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
