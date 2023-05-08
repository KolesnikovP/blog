import { Profile, ProfileSchema, ValidateProfileError } from './model/types/profile';

export { ProfileSchema, Profile, ValidateProfileError };

/*
* Вариант отличный от формы авторизации, там акшны и редюсеры были сосредоточены внутри
* А тут мы отдадим наружу и изолируем в рамках отдельно страницы. Просто для примера посмотрим
* разные варианты
* */
export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';

export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileValidateErrors } from './model/selectors/getProfileValidateErrors/getProfileValidateErrors';
