import React from 'react';

import { useClock } from '../../app/hooks';
import { Buttons, TimeOptions } from '../../core/';

export const NavBar = (): JSX.Element => {
  const C = useClock();
  return (
    <div className="flex flex-col gap-4 items-center m-5 min-w-20">
      {!C.isPlaying && (
        <div className="flex gap-3">
          <Buttons value={1} />
          <Buttons value={5} />
          <Buttons value={10} />
        </div>
      )}
      <TimeOptions {...C} />
    </div>
  );
};
