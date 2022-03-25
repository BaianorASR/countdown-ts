import { useCallback, useEffect, useState } from 'react';

import * as A from '../store/reducers/counter';
import { actionChangePlayingStatus } from '../store/reducers/playing';
import { useAppDispatch, useAppSelector } from './redux';

export function useClock() {
  const [disablePlayButton, setDisablePlay] = useState(false);

  const dispatch = useAppDispatch();

  const {
    isPlaying,
    countdown: { interval_id, ms },
  } = useAppSelector(state => state);

  const shouldResetTimer = useCallback(() => {
    clearTimeout(interval_id);
    dispatch(actionChangePlayingStatus(false));
    dispatch(A.actionDecrement(ms));
    dispatch(A.actionSetIntervalID());
  }, [dispatch, interval_id, ms]);

  useEffect(() => {
    if (!ms) {
      setDisablePlay(true);
      shouldResetTimer();
    } else setDisablePlay(false);
  }, [ms, shouldResetTimer]);

  const INTERVAL = () => {
    const ID = setInterval(() => {
      dispatch(A.actionDecrement(1000));
    }, 1000);
    return ID;
  };

  const handleCountPause = () => {
    clearInterval(interval_id);
    dispatch(actionChangePlayingStatus(!isPlaying));
    dispatch(A.actionSetIntervalID());
  };

  const handleCountPlay = () => {
    dispatch(actionChangePlayingStatus(!isPlaying));
    dispatch(A.actionSetIntervalID(INTERVAL()));
  };

  const handleCountStatus = () => {
    if (isPlaying) handleCountPause();
    else handleCountPlay();
  };

  return {
    disablePlayButton,
    isPlaying,
    shouldResetTimer,
    handleCountStatus,
  };
}
