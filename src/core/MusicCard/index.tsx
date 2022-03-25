import React from 'react';

import { useSong } from '../../app/hooks/song';
import { ProgressBar } from '../ProgressBar';

type Props = { x?: string };

export function MusicCard({ x }: Props) {
  const { audioRef, song, songTime } = useSong();

  return (
    <div className="w-52">
      <audio ref={audioRef} src={song}></audio>
      <ProgressBar />
    </div>
  );
}
