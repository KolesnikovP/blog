export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User

  // нужен чтобы убедиться что данные о пользователе инициализировались и мы можем опираясь на это строить свою логику
  // Для примера, у нас может роутер инициализироваться раньше чем данные о пользователе и нас будет редиректить как не
  // залогиненого пользака
  _inited: boolean;
}
