import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = { value: string };

const initialState: TInitialState = { value: '00:00:00' };

const countdown = createSlice({
  name: 'countdown',
  initialState,
  reducers: {
    actionTimer: (_state, action: PayloadAction<string>) => ({
      value: action.payload,
    }),
    actionResetTimer: () => ({ ...initialState }),
  },
});

export const { actionTimer, actionResetTimer } = countdown.actions;

export default countdown.reducer;
