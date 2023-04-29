import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('главная страница')}
      <BugButton />
      <Input onChange={onChange} value={value} placeholder='some text' />
      <Counter />
    </div>
  );
};

export default MainPage;
