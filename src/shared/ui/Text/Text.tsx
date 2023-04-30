import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: 'primary' | 'error'
}

export const Text = (props: TextProps) => {
  const {
    className, title, text, theme = 'primary',
  } = props;

  return (
    <div className={classNames(cls.Text, { [cls.error]: theme === 'error' }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
