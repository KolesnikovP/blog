import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        autofocus
        type='text'
        className={cls.input}
        placeholder={t('username')}
        bold
      />
      <Input
        type='text'
        className={cls.input}
        placeholder={t('password')}
        bold
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
