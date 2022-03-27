import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import MUSICS_DATA from '../../../assets/sounds';

type all_songs = {
  id: number;
  name: string;
  url: string;
};

type actual_song = {
  url: string;
  is_playing_music?: boolean;
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
  all_songs: MUSICS_DATA.sort(() => Math.random() - 0.5),
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
    actionMusicPlayingStatus: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      actual_song: { ...state.actual_song, is_playing_music: payload },
    }),
  },
});

export const { actionMusicPlayingStatus, actionChangeActualMusic } = songs.actions;

export default songs.reducer;
