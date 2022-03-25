import React from 'react';
import { BsPause, BsPlayFill, BsTrash2Fill } from 'react-icons/bs';

import { useClock } from '../../app/hooks/clock';
import Buttons from '../../core/Buttons';

export function NavBar() {
  const { disablePlayButton, handleCountStatus, shouldResetTimer, isPlaying } =
    useClock();
  return (
    <div className="flex flex-col items-center min-w-20">
      {!isPlaying && (
        <div className="flex gap-3">
          <Buttons value={1} />
          <Buttons value={5} />
          <Buttons value={10} />
        </div>
      )}
      <div className="flex mt-4 w-36 text-sky-300 rounded-sm shadow-md bg-slate-800">
        <button
          className="flex flex-auto justify-center items-center pr-1 h-10 text-center rounded-l-sm hover:text-sky-900 hover:bg-emerald-600 disabled:hover:bg-slate-800"
          disabled={disablePlayButton}
          onClick={handleCountStatus}
        >
          {isPlaying ? <BsPause /> : <BsPlayFill />}
        </button>
        <button
          className="flex flex-auto justify-center items-center pl-1 h-10 text-center rounded-r-sm min-w-20 hover:text-sky-900 hover:bg-red-400"
          onClick={shouldResetTimer}
        >
          <BsTrash2Fill />
        </button>
      </div>
    </div>
  );
}
