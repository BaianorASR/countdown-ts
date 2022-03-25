export function handleMaxRangeMills(payload: number) {
  const ONE_HOUR = 60 * 60 * 1000;
  return payload < ONE_HOUR ? payload : ONE_HOUR;
}

export function handleMinRangeMills(payload: number) {
  return payload < 0 ? 0 : payload;
}
