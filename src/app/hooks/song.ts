import { useCallback, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

import * as A from '../store/reducers';
import { useAppDispatch, useAppSelector } from './redux';

export const useSong = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const dispatch = useAppDispatch();
  const {
    isPlaying,
    songs: { actual_song, all_songs },
  } = useAppSelector(state => state);

  const getNextSong = () => {
    const index = all_songs.findIndex(each => each.id === actual_song.id) + 1;
    dispatch(A.actionChangeActualMusic(all_songs[index]));
  };

  const getFirstSong = useCallback(() => {
    if (actual_song.is_playing_music) {
      dispatch(A.actionChangeActualMusic(all_songs[0]));
    }
  }, [actual_song.is_playing_music, all_songs, dispatch]);

  useEffect(() => {
    if (isPlaying) {
      dispatch(A.actionMusicPlayingStatus(true));
    } else dispatch(A.actionMusicPlayingStatus(false));
  }, [dispatch, isPlaying]);

  useEffect(() => {
    if (actual_song.id !== null) return;
    getFirstSong();
  }, [actual_song.id, getFirstSong]);

  return { playerRef, actual_song, getNextSong };
};
