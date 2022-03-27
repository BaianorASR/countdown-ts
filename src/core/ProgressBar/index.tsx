import React from 'react';

type Props = {
  progress: number;
};

export function ProgressBar({ progress }: Props) {
  return (
    <div className="w-full h-1 bg-gray-200">
      <div className="h-1 bg-sky-600" style={{ width: `${progress}%` }}></div>
    </div>
  );
}
