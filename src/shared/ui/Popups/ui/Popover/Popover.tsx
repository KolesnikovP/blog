import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode
  direction?: DropDownDirection;
  children: ReactNode;
}

export function Popover(props: PopoverProps) {
  const {
    className, children, trigger, direction = 'bottom right',
  } = props;

  const panelClasses = [mapDirectionClass[direction]];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}