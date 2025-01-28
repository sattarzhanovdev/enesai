import { useEffect, useRef } from 'react';

const VideoPlayer = ({ Videos, index }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Обновляем источник видео мгновенно
      videoRef.current.src = Videos[index]?.video;
      videoRef.current.load(); // Загружаем новое видео
      videoRef.current.play().catch((err) => console.error('Ошибка воспроизведения:', err));
    }
  }, [index, Videos]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      preload="auto"
      style={{
        width: '100%',
      }}
    >
      <source src={Videos[index]?.video} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;