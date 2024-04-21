import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/const/constRouter';
import HomeIcon from '@/shared/assets/icons/HomeIcon.svg';
import AboutIcon from '@/shared/assets/icons/AboutIcon.svg';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg';
import ArticleIcon from '@/shared/assets/icons/ArticleIcon.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Главная',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О проекте',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData.id}`,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
