import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIcon from 'shared/assets/icons/CopyIcon.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

// memo - оставляю здесь, поскольку в чилдрен будет прилетать просто большая строка в 90% случаев
export const Code = memo((props: CodeProps) => {
  const { className, children } = props;

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn}><Icon Svg={CopyIcon} /></Button>
      <code>
        {children}
      </code>
    </pre>
  );
});
