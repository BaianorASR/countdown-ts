import React, { FC } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { actionDecrement, actionIncrement } from '../../../app/store/reducers';

type ButtonsProps = { value: number };

export const Buttons: FC<ButtonsProps> = ({ value }): JSX.Element => {
  const dispatch = useAppDispatch();

  function handleClick(operation: string, value: number) {
    operation
      ? dispatch(actionIncrement(value * 1000 * 60))
      : dispatch(actionDecrement(value * 1000 * 60));
  }

  return (
    <div className="container flex flex-col items-center font-bold text-sky-300 bg-sky-300 rounded-md shadow-sm">
      <button
        className="p-1 w-10 rounded-t-sm bg-slate-800 hover:bg-sky-500 hover:text-sky-900"
        onClick={() => handleClick('+', value)}
      >
        +
      </button>
      <p className="py-1 text-sky-900">{value}m</p>
      <button
        className="p-1 w-10 rounded-b-sm bg-slate-800 hover:bg-red-400 hover:text-sky-900"
        onClick={() => handleClick('', value)}
      >
        -
      </button>
    </div>
  );
};
