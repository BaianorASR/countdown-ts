import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = { ms: number };

const initialState: TInitialState = { ms: 0 };

const countdown = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    actionIncrement: (state, { payload }: PayloadAction<number>) => ({
      ms: state.ms + payload,
    }),
    actionDecrement: (state, { payload }: PayloadAction<number>) => ({
      ms: state.ms - payload,
    }),
    actionResetTimer: () => ({ ...initialState }),
  },
});

export const { actionIncrement, actionDecrement, actionResetTimer } = countdown.actions;

export default countdown.reducer;
