import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    onChangeLastname,
    onChangeFirstname,
    readonly,
    onChangeCity,
    onChangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          text={t('Попробуйте обновить страницу')}
          title={t('Произошла ошибка при загрузке профиля')}
          theme='error'
          align='center'
        />

      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap='16' max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify='center' max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} alt={data?.avatar} />
        </HStack>
      )}
      <Input
        placeholder={t('Ваше имя')}
        value={data?.first}
        className={cls.input}
        onChange={onChangeFirstname}
        readOnly={readonly}
        data-testid='ProfileCard.firstname'
      />
      <Input
        placeholder={t('Ваша фамилия')}
        value={data?.lastname}
        className={cls.input}
        onChange={onChangeLastname}
        readOnly={readonly}
        data-testid='ProfileCard.lastname'
      />
      <Input
        placeholder={t('Возраст')}
        value={data?.age}
        className={cls.input}
        onChange={onChangeAge}
        readOnly={readonly}
      />
      <Input
        placeholder={t('Город')}
        value={data?.city}
        className={cls.input}
        onChange={onChangeCity}
        readOnly={readonly}
      />
      <Input
        placeholder={t('Никнейм')}
        value={data?.username}
        className={cls.input}
        onChange={onChangeUsername}
        readOnly={readonly}
      />
      <Input
        placeholder={t('Аватар')}
        value={data?.avatar}
        className={cls.input}
        onChange={onChangeAvatar}
        readOnly={readonly}
      />

      <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};
