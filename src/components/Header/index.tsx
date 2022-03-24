import React from 'react';

import { useSong } from '../../app/song';

export function Header() {
  const { audioRef, song, songTime } = useSong();
  return (
    <div className="flex justify-between p-5 min-w-full shadow-md bg-slate-800">
      <h1>Nobody Here is Gringo</h1>
      <h1>{Math.round(songTime)}</h1>
      <div>
        <audio ref={audioRef} src={song} controls autoPlay></audio>
      </div>
    </div>
  );
}
