// import moment from 'moment';
import React from 'react';

import { useAppSelector } from '../../app/hooks/redux';

export function Clock() {
  const { ms } = useAppSelector(state => state.countdown);

  function msToMinutes(millisecond: number) {
    const minutes = String(Math.floor(millisecond / 60000));
    const seconds = ((millisecond % 60000) / 1000).toFixed(0);
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }

  return (
    <h1 className="p-2 m-10 text-8xl text-sky-200 bg-gray-800 rounded-md shadow-sm shadow-sky-900">
      {msToMinutes(ms)}
    </h1>
  );
}
