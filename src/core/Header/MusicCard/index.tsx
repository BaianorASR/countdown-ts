import React, { FC, memo, useMemo, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import { PlayerControls, ProgressBar } from '../../';
import { useSong } from '../../../app/hooks';

const MusicCard: FC = (): JSX.Element => {
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
    <div className="flex w-60">
      <ReactPlayer
        onProgress={progress => setCurrentTime(progress.playedSeconds)}
        volume={0.2}
        onEnded={getNextSong}
        style={{ display: 'none' }}
        ref={playerRef}
        url={actual_song.url}
        playing={actual_song.is_playing_music}
      />
      {actual_song.is_playing_music && (
        <div className="flex flex-col gap-3">
          <p
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs font-light"
          >
            {actual_song.name}
          </p>
          <ProgressBar progress={progress} />
        </div>
      )}
      <PlayerControls />
    </div>
  );
};

export const MusicPlayer = memo(MusicCard);
