import React from 'react';

import { MusicCard } from '../../core';

export function Header() {
  return (
    <div className="flex justify-between px-5 items-center h-16 min-w-full shadow-md bg-slate-800">
      <h1>Countdown-ts</h1>
      <div>
        <MusicCard />
      </div>
    </div>
  );
}
