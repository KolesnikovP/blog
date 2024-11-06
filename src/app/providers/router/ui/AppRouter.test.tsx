import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/constRouter';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
  // test('A page should be rendered', async () => {
  // 	ComponentRender(<AppRouter/>, {
  // 		route: getRouteAbout(),
  // 	});
  // 	// ! findeByTestId - for async components
  // 	const page = await screen.findByTestId('AboutPage')
  // 	expect(page).toBeInTheDocument();
  // });

  test('A page not found', async () => {
    ComponentRender(<AppRouter />, {
      route: '/fdsafg',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('redirecting of an unauthorized user at the main page', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('an access is allowed to a hidden page for authorized user', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('when user doesn\'t have a role', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: {} },
      },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('when user has a role', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdmin(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
