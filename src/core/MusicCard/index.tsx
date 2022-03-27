import React, { memo, useMemo, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import { useSong } from '../../app/hooks/song';
import { ProgressBar } from '../ProgressBar';

function MusicCard() {
  const { playerRef, actual_song, getNextSong } = useSong();
  const [currentTime, setCurrentTime] = useState<number>();

  const progress: number = useMemo(() => {
    const duration = playerRef.current?.getDuration();
    if (duration && currentTime) {
      return (currentTime / duration) * 100;
    }
    return 0;
  }, [currentTime, playerRef]);

  return (
    <div className="w-52">
      <ReactPlayer
        onProgress={progress => setCurrentTime(progress.playedSeconds)}
        volume={0.2}
        onEnded={getNextSong}
        style={{ display: 'none' }}
        ref={playerRef}
        url={actual_song.url}
        playing={actual_song.is_playing_music}
      />
      {actual_song.is_playing_music && <p>{actual_song.name}</p>}
      <ProgressBar progress={progress} />
    </div>
  );
}

export default memo(MusicCard);
