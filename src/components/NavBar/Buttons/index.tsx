import React from 'react';

import { useAppDispatch } from '../../../app/hooks/redux';
import { actionDecrement, actionIncrement } from '../../../shared/store/reducers/counter';

type Props = { value: number };

export default function Buttons({ value }: Props) {
  const dispatch = useAppDispatch();

  function handleClick(operation: string, value: number) {
    operation
      ? dispatch(actionIncrement(value * 1000))
      : dispatch(actionDecrement(value * 1000));
  }

  return (
    <div className="container flex flex-col items-center font-bold bg-sky-300 shadow-xl text-slate-900">
      <button
        className="p-1 w-10 bg-emerald-500 hover:bg-emerald-600"
        onClick={() => handleClick('+', value)}
      >
        +
      </button>
      <p className="py-1">{value}</p>
      <button
        className="p-1 w-10 bg-red-400 hover:bg-red-500"
        onClick={() => handleClick('', value)}
      >
        -
      </button>
    </div>
  );
}
