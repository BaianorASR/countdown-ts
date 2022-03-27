import React from 'react';

import { MusicCard } from '../../core';

export function Header() {
  return (
    <div className="flex justify-between p-5 min-w-full shadow-md bg-slate-800">
      <h1>Countdown-ts</h1>

      <div>
        <MusicCard />
      </div>
    </div>
  );
}
