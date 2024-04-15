import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import AppLink from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface DropdownProps {
  className?: string
  items: DropdownItem[];
  trigger: ReactNode
  direction?: DropDownDirection
}

export function Dropdown(props: DropdownProps) {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as='div' className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              key={index}
              disabled={item.disabled}
              type='button'
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                key={item.href}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item
              key={`dropdown-${index}`}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
