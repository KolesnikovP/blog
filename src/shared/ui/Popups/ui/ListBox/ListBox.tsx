import { Fragment, ReactNode } from 'react';
import { Listbox as HeadlessListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import { HStack } from '../../../Stack';
import { Button } from '../../../Button';
import cls from './ListBox.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItems[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropDownDirection
}

export function ListBox(props: ListBoxProps) {
  const {
    className, items, value, defaultValue, onChange, readonly, label, direction = 'bottom right',
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap='4'>
      {label && (<span>{label}</span>)}
      <HeadlessListBox
        as='div'
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >

        <HeadlessListBox.Button
          className={cls.trigger}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HeadlessListBox.Button>
        <HeadlessListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HeadlessListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, { [popupCls.active]: active, [popupCls.disabled]: item.disabled })}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HeadlessListBox.Option>
          ))}
        </HeadlessListBox.Options>
      </HeadlessListBox>
    </HStack>
  );
}
