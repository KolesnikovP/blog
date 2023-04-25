import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';

// Only for tests of ErrorBoundary
const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const onThrow = () => {
    setError((prevState) => !prevState);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button className={classNames('')} onClick={onThrow}>
      {t('Пробросить ошибку')}
    </Button>
  );
};

export default BugButton;
