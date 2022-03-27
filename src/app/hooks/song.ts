import { useCallback, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

import {
  actionChangeActualMusic,
  actionMusicPlayingStatus,
} from '../store/reducers/song';
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
    dispatch(actionChangeActualMusic(all_songs[index]));
  };

  const getFirstSong = useCallback(() => {
    if (actual_song.is_playing_music) {
      console.log('getFIRST');
      dispatch(actionChangeActualMusic(all_songs[0]));
    }
  }, [actual_song.is_playing_music, all_songs, dispatch]);

  useEffect(() => {
    if (isPlaying) {
      console.log('BAIANINHO');
      dispatch(actionMusicPlayingStatus(true));
    } else dispatch(actionMusicPlayingStatus(false));
  }, [dispatch, isPlaying]);

  useEffect(() => {
    if (actual_song.id !== null) return;
    console.log('useEffect');
    getFirstSong();
  }, [actual_song.id, getFirstSong]);

  return { playerRef, actual_song, getNextSong };
};
