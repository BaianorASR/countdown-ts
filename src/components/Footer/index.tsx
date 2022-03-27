import React from 'react';
import { FaCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="flex justify-center w-screen">
      <p className="flex shadow-md rounded-sm mb-2 p-2 gap-1 items-center bg-sky-800 text-sm font-light text-zinc-300">
        <FaCopyright /> Ninguém aqui é gringo produções
      </p>
    </div>
  );
}
