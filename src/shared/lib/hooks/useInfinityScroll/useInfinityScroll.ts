import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}
// Check intersection api - mozilla. Это специально браузерное апи которое следит
// за появлением каких то элементов. Помогает реализовывать lazy loading, изображений
// бесконечные ленты
export function useInfinityScroll(args: UseInfinityScrollOptions) {
  const { callback, triggerRef, wrapperRef } = args;

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
