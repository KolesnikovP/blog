import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { userEvent } from '@storybook/testing-library';
import Counter from './Counter';

describe('Counter', () => {
  test('component exist', () => {
    ComponentRender(<Counter />);
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('test counter exist', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test counter increment', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test counter decrement', () => {
    ComponentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
