import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type all_songs = {
  id: number;
  name: string;
  url: string;
};

type actual_song = {
  url: string;
  is_playing_music: boolean;
  id: number | null;
  name: string;
};

type initialState = {
  actual_song: actual_song;
  all_songs: all_songs[] | [];
};

const initialState: initialState = {
  actual_song: {
    id: null,
    is_playing_music: false,
    name: '',
    url: '',
  },
  all_songs: [],
};

const songs = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    actionChangeActualMusic: (state, { payload }: PayloadAction<actual_song>) => {
      return {
        ...state,
        actual_song: { ...state.actual_song, ...payload },
      };
    },
    actionRandomMusics: (state, { payload }: PayloadAction<all_songs[]>) => ({
      ...state,
      all_songs: payload,
    }),
  },
});

export const { actionRandomMusics, actionChangeActualMusic } = songs.actions;

export default songs.reducer;
