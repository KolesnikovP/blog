import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import CopyIcon from 'shared/assets/icons/CopyIcon.svg';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

// memo - оставляю здесь, поскольку в чилдрен будет прилетать просто большая строка в 90% случаев
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  // navigator.clipboard.writeText(text) - это асинхронная операция, которая предназначена для копирования текста в буфер обмена.
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        {/* <Icon Svg={CopyIcon} /> */}
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
