// import moment from 'moment';
import React from 'react';

import { useAppSelector } from '../../app/hooks';

export const Clock = (): JSX.Element => {
  const { ms } = useAppSelector(state => state.countdown);

  const msToMinutes = (millisecond: number) => {
    const minutes = String(Math.floor(millisecond / 60000));
    const seconds = ((millisecond % 60000) / 1000).toFixed(0);
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  };

  return (
    <h1
      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: '300' }}
      className="p-3 max-w-sm text-8xl text-sky-200 rounded-lg shadow-md bg-slate-800"
    >
      {msToMinutes(ms)}
    </h1>
  );
};
