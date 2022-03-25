import { useEffect, useRef, useState } from 'react';

import { songs } from '../assets/sounds';
import { useAppSelector } from './hooks/redux';

export const useSong = () => {
  const { isPlaying } = useAppSelector(state => state);
  const [song, setSong] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const [songTime, setSongTime] = useState(0);

  useEffect(() => {
    const timer = audioRef.current?.currentTime;
    setSongTime(timer ? timer : 0);
  }, [audioRef.current?.currentTime]);

  const handlePlaySong = () => {
    const audio = audioRef.current;
    if (audio) {
      audioRef.current
        .play()
        .then(() => {
          audio.volume = 0.2;
        })
        .catch(error => {
          audio.load();
          audio.volume = 0.2;
          audio.play();
        });
    }
  };

  useEffect(() => {
    if (isPlaying) {
      setSong(() => {
        const random = Math.floor(Math.random() * songs.length);
        return songs[random];
      });
      handlePlaySong();
    }
    audioRef.current?.pause();
  }, [isPlaying]);

  return { audioRef, song, songTime };
};
