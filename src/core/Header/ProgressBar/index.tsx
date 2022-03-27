import React, { FC } from 'react';

type ProgressBarProps = {
  progress: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-60 h-0.5 bg-gray-200">
      <div className="h-0.5 bg-sky-600" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
