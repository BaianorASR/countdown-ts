import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  current_time: number;
  actual_song: {
    duration: string;
  };
};

const initialState: initialState = {
  current_time: 0,
  actual_song: {
    duration: '',
  },
};

const songs = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    actionDefault: state => state,
  },
});

export const { actionDefault } = songs.actions;

export default songs.reducer;
