import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // Для запросов используем query, для изменения и создания данных mutation
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',

      }),
    }),
  }),
  overrideExisting: false,
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
