import { Profile } from './model/types/profile';

export type { Profile };

/*
* Вариант отличный от формы авторизации, там акшны и редюсеры были сосредоточены внутри
* А тут мы отдадим наружу и изолируем в рамках отдельно страницы. Просто для примера посмотрим
* разные варианты
* */

export { ProfileCard } from './ui/ProfileCard/ProfileCard';
