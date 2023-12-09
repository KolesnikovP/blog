import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('component exist', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test sidebar-collapsed', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-collapsed');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
