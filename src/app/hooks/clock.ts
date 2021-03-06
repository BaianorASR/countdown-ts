import { useCallback, useEffect, useState } from 'react';

import * as A from '../store/reducers';
import { useAppDispatch, useAppSelector } from './redux';

export function useClock() {
  const [disablePlayButton, setDisablePlay] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    isPlaying,
    countdown: { interval_id, ms },
  } = useAppSelector(state => state);

  const shouldResetTimer = useCallback(() => {
    console.log('fui montado');
    if (isPlaying) {
      clearTimeout(interval_id);
      dispatch(A.actionChangePlayingStatus(false));
      dispatch(A.actionDecrement(ms));
      dispatch(A.actionSetIntervalID());
    }
  }, [dispatch, interval_id, isPlaying, ms]);

  useEffect(() => {
    if (ms < 2000) {
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
    dispatch(A.actionChangePlayingStatus(!isPlaying));
    dispatch(A.actionSetIntervalID());
  };

  const handleCountPlay = () => {
    dispatch(A.actionChangePlayingStatus(!isPlaying));
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
