import React from 'react';

import { useAppSelector } from '../../app/hooks/redux';

export function Clock() {
  const { ms } = useAppSelector(state => state.countdown);
  return <h1 className="text-8xl">{ms}</h1>;
}
