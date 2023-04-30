import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// После мемоизации и экспорта, теряется тип, можно его так добавить дженериком
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  setTimeout(() => {
    // @ts-ignore
    // don't do this in real life. It's just for example how to use lazy loading
    resolve(import('./LoginForm'));
  }, 1500);
}));
