import React from 'react';
import { BsPause, BsPlayFill, BsTrash2Fill } from 'react-icons/bs';

import Buttons from './Buttons';

export function NavBar() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex gap-3">
        <Buttons value={1} />
        <Buttons value={5} />
        <Buttons value={10} />
      </div>
      <div className="container flex mt-4 text-sky-300 rounded-sm shadow-md bg-slate-800">
        <button className="flex flex-auto justify-center items-center pr-1 h-10 text-center hover:text-sky-900 hover:bg-emerald-600">
          <BsPlayFill />
        </button>
        <button className="flex flex-auto justify-center items-center pl-1 h-10 text-center hover:text-sky-900 hover:bg-red-400">
          <BsTrash2Fill />
        </button>
      </div>
    </div>
  );
}
