import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { handleMaxRangeMills, handleMinRangeMills } from '../../utils';

type TInitialState = { ms: number };

const initialState: TInitialState = { ms: 0 };

const countdown = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    actionIncrement: (state, { payload }: PayloadAction<number>) => ({
      ms: handleMaxRangeMills(state.ms + payload),
    }),
    actionDecrement: (state, { payload }: PayloadAction<number>) => ({
      ms: handleMinRangeMills(state.ms - payload),
    }),
    actionResetTimer: () => ({ ...initialState }),
  },
});

export const { actionIncrement, actionDecrement, actionResetTimer } = countdown.actions;

export default countdown.reducer;
