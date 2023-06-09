import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = memo((props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
});

export default Loader;
