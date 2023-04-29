import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// createSelector - использует уже существующий селектор и мемоизирует. Просто для примера, тут можно и без него
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
