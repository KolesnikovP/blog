// useDebounce - похож на useTrottling, но он позволяет отменять событие в течении какого то времени
// например пока мы вводим что-то в инпут, то наш колбек вызываться не будет, а как только мы перестали вводить
// то по истечению времени наш колбек отработает

/**
 * useDebounce - allows us cancelling a previous call of function before delay expired
 * @param callback
 * @pararm delay - delay in mc
 */

import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
