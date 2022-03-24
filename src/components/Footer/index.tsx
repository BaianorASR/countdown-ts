import React from 'react';
import { FaCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div className="flex gap-1 justify-center items-center p-1 w-screen text-sm font-extralight shadow-sm text-zinc-300 bg-zinc-900">
      <FaCopyright />
      Ninguém aqui é gringo produções
    </div>
  );
}
