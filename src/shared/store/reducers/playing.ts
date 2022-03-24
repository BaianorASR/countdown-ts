import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { handleMaxRangeMills, handleMinRangeMills } from '../../utils';

type TInitialState = boolean;

const initialState: TInitialState = false;

const playing = createSlice({
  name: 'playing',
  initialState,
  reducers: {
    actionChangePlayingStatus: state => !state,
  },
});

export const { actionChangePlayingStatus } = playing.actions;

export default playing.reducer;
