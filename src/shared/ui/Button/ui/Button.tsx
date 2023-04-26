import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;

  return (
    <button
      type='button'
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
