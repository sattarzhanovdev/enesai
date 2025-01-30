import React, { useEffect } from 'react';
import useSound from 'use-sound';

const AudioPlayer = ({file}) => {
  const [play, { stop, isPlaying }] = useSound(file, { autoplay: true, loop: true });

  useEffect(() => {
    play();  // Запускаем аудио сразу
  }, [play]);

  return (
    <div>
      {isPlaying ? 'Audio is playing' : 'Audio is paused'}
    </div>
  );
};

export default AudioPlayer;