import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
  // element - это контейнер куда будет монтироваться портал
  const { children, element = document.body } = props;

  return createPortal(children, element);
};

export default Portal;
