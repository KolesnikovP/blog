import React, {
  memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRouteProps, routeConfig } from '@/shared/config/routeConfig/routeConfig';
import PageLoader from '@/widgets/PageLoader/ui/PageLoader';
import { getUserAuthData } from '@/entities/User';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>

    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
