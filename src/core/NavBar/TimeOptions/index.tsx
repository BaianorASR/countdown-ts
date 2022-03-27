import React, { FC } from 'react';
import { BsPauseFill, BsPlayFill, BsTrash2Fill } from 'react-icons/bs';

type TimeOptionsProps = {
  handleCountStatus: () => void;
  shouldResetTimer: () => void;
  disablePlayButton: boolean;
  isPlaying: boolean;
};

export const TimeOptions: FC<TimeOptionsProps> = (props): JSX.Element => {
  return (
    <div className="flex w-36 text-sky-300 rounded-sm shadow-md bg-slate-800">
      <button
        className="flex flex-auto justify-center items-center pr-1 h-10 text-center rounded-l-sm hover:text-sky-900 hover:bg-emerald-600 disabled:hover:bg-slate-800"
        disabled={props.disablePlayButton}
        onClick={props.handleCountStatus}
      >
        {props.isPlaying ? <BsPauseFill /> : <BsPlayFill />}
      </button>
      <button
        className="flex flex-auto justify-center items-center pl-1 h-10 text-center rounded-r-sm min-w-20 hover:text-sky-900 hover:bg-red-400"
        onClick={props.shouldResetTimer}
      >
        <BsTrash2Fill />
      </button>
    </div>
  );
};
