import React from 'react';
import { FaCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="container flex justify-center w-screen">
      <p className="flex bottom-0 gap-1 items-center p-2 mt-16 mb-2 text-sm font-light bg-sky-800 rounded-sm shadow-md text-zinc-300">
        <FaCopyright /> Ninguém aqui é gringo produções
      </p>
    </div>
  );
}
