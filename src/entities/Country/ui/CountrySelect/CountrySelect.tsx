import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const countryList = Object.values(Country).map((country) => (
  { value: country, content: country }
));

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      readonly={readonly}
      className={className}
      value={value}
      items={countryList}
      defaultValue={t('Укажите страну')}
      onChange={onChangeHandler}
      label={`${t('Укажите страну')}>`}
      direction='top right'
    />
  );
});
