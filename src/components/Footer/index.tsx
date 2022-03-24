import React from 'react';
import { FaCopyright } from 'react-icons/fa';

import wave from '../../assets/images/footer-wave.svg';

export function Footer() {
  return (
    <div
      style={{ backgroundImage: `url(${wave})` }}
      className="flex relative justify-center p-1 w-screen h-52 bg-center bg-cover shadow-sm"
    >
      <p className="flex absolute bottom-2 gap-1 items-center text-sm font-extralight text-zinc-300">
        <FaCopyright /> Ninguém aqui é gringo produções
      </p>
    </div>
  );
}
