import React from 'react';

type Props = { value: number };

export default function Buttons({ value }: Props) {
  function handleClick(operation: string) {
    console.log(operation);
  }

  return (
    <div className="flex flex-col items-center font-bold shadow-xl bg-neutral-300 text-neutral-900">
      <button
        className="p-1 w-10 bg-emerald-600 hover:bg-emerald-800"
        onClick={() => handleClick('+')}
      >
        +
      </button>
      <p className="py-1">{value}</p>
      <button
        className="p-1 w-10 bg-red-500 hover:bg-red-600"
        onClick={() => handleClick('-')}
      >
        -
      </button>
    </div>
  );
}
