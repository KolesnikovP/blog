import { Profile, ProfileSchema } from './model/types/profile';

export { ProfileSchema, Profile };

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

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
