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
    <div className="container flex flex-col items-center font-bold shadow-xl bg-neutral-300 text-neutral-900">
      <button
        className="p-1 w-10 bg-emerald-600 hover:bg-emerald-800"
        onClick={() => handleClick('+', value)}
      >
        +
      </button>
      <p className="py-1">{value}</p>
      <button
        className="p-1 w-10 bg-red-500 hover:bg-red-600"
        onClick={() => handleClick('', value)}
      >
        -
      </button>
    </div>
  );
}
