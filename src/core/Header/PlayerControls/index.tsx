import React, { FC } from 'react';
import { BsPauseFill, BsPlayFill, BsVolumeMuteFill } from 'react-icons/bs';

export const PlayerControls: FC = (): JSX.Element => {
  return (
    <div className="flex gap-3 text-lg">
      <BsPlayFill />
      <BsVolumeMuteFill />
    </div>
  );
};
