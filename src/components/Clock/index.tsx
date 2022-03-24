import React from 'react';

import { useAppSelector } from '../../app/hooks/redux';

export function Clock() {
  const { value } = useAppSelector((state) => state.countdown);
  return <h1 className="text-8xl">{value}</h1>;
}
