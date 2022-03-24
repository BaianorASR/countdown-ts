import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { handleMaxRangeMills, handleMinRangeMills } from '../../utils';

type TInitialState = { ms: number; interval_id: number | undefined };

const initialState: TInitialState = { ms: 0, interval_id: undefined };

const countdown = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    actionIncrement: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      ms: handleMaxRangeMills(state.ms + payload),
    }),
    actionDecrement: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      ms: handleMinRangeMills(state.ms - payload),
    }),
    actionSetIntervalID: (state, { payload }: PayloadAction<number | undefined>) => ({
      ...state,
      interval_id: payload,
    }),
    actionResetTimer: () => ({ ...initialState }),
  },
});

export const { actionIncrement, actionDecrement, actionResetTimer, actionSetIntervalID } =
  countdown.actions;

export default countdown.reducer;
