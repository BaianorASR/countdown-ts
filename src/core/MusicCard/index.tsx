import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { useSong } from '../../app/hooks/song';
import { ProgressBar } from '../ProgressBar';

type Props = { x?: string };

export function MusicCard({ x }: Props) {
  const { playerRef, actual_song } = useSong();

  return (
    <div className="w-52">
      <ReactPlayer
        style={{ display: 'none' }}
        ref={playerRef}
        url={actual_song.url}
        playing={actual_song.is_playing_music}
      />
      <ProgressBar />
    </div>
  );
}
