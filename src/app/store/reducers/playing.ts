import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = boolean;

const initialState: TInitialState = false;

const isPlaying = createSlice({
  name: 'isPlaying',
  initialState,
  reducers: {
    actionChangePlayingStatus: (state, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const { actionChangePlayingStatus } = isPlaying.actions;

export default isPlaying.reducer;
