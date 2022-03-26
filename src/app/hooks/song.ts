import { useEffect, useMemo, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

import MUSICS_DATA from '../../assets/sounds';
import { actionChangeActualMusic, actionRandomMusics } from '../store/reducers/song';
import { useAppDispatch, useAppSelector } from './redux';

/* eslint-disable react-hooks/exhaustive-deps */
export const useSong = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const dispatch = useAppDispatch();
  const {
    isPlaying,
    songs: { actual_song, all_songs },
  } = useAppSelector(state => state);

  const getNextSong = () =>
    actual_song.id === null
      ? 0
      : all_songs.findIndex(each => each.id === actual_song.id) + 1;

  const ACTUAL_SONG = useMemo(() => {
    console.log();
    return {
      is_playing_music: isPlaying,
      ...all_songs[getNextSong()],
    };
  }, [isPlaying]);

  useEffect(() => {
    const shuffled = MUSICS_DATA.sort(() => Math.random() - 0.5);
    dispatch(actionRandomMusics(shuffled));
  }, []);

  useEffect(() => {
    isPlaying && dispatch(actionChangeActualMusic(ACTUAL_SONG));
  }, [ACTUAL_SONG, dispatch, isPlaying]);

  return { playerRef, actual_song };
};
