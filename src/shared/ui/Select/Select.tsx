import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  content: string | number;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOptions<T>[];
  onChange?: (value: T) => void;
  value?: T
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, onChange, value, readonly,
  } = props;

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      value={opt.value}
      className={cls.option}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const mods: Mods = {

  };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
};
