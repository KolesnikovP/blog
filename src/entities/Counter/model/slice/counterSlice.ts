import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterSchema } from '../../model/types/counterSchema';

export interface CounterState {
  value: number
}

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer;
