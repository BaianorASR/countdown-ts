import React, { FC } from 'react';

import { useAppSelector } from '../../app/hooks';
import { MusicPlayer } from '../../core';

export const Header: FC = (): JSX.Element => {
  const { isPlaying } = useAppSelector(state => state);
  return (
    <div className="flex justify-between items-center px-5 min-w-full h-16 shadow-md bg-slate-800">
      {!isPlaying && <h1>Countdown-ts</h1>}
      <div>
        <MusicPlayer />
      </div>
    </div>
  );
};
