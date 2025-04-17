// src/components/AudioPlayer.jsx
import { forwardRef, useState, useEffect } from 'react';

const AudioPlayer = forwardRef(({ src, volume, onTimeUpdate, currentTime }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [localCurrentTime, setLocalCurrentTime] = useState(currentTime || 0);
  const [localVolume, setLocalVolume] = useState(volume || 1); // Đồng bộ với prop volume

  // Đồng bộ thời gian audio
  useEffect(() => {
    if (ref.current) {
      const audioElement = ref.current;

      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      const handleTimeUpdate = () => {
        setLocalCurrentTime(audioElement.currentTime);
        onTimeUpdate(audioElement.currentTime);
      };

      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [ref, onTimeUpdate]);

  // Cập nhật currentTime từ prop
  useEffect(() => {
    if (ref.current && currentTime !== undefined && localCurrentTime !== currentTime) {
      ref.current.currentTime = currentTime;
      setLocalCurrentTime(currentTime);
    }
  }, [currentTime, ref, localCurrentTime]);

  // Cập nhật âm lượng từ prop
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
      setLocalVolume(volume);
    }
  }, [volume, ref]);

  const togglePlay = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    if (ref.current) {
      ref.current.currentTime = seekTime;
      setLocalCurrentTime(seekTime);
      onTimeUpdate(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setLocalVolume(newVolume);
    if (ref.current) {
      ref.current.volume = newVolume;
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Biểu tượng âm lượng dựa trên mức volume
  const volumeIcon = () => {
    if (localVolume === 0) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      );
    }
    if (localVolume < 0.5) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.5 0a6 6 0 11-12 0 6 6 0 0112 0z" />
      </svg>
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
      <audio ref={ref} src={src} preload="metadata"></audio>

      <div className="flex items-center gap-4">
        {/* Nút Play/Pause */}
        <button
          onClick={togglePlay}
          className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        {/* Thanh tiến trình */}
        <div className="flex-1">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>{formatTime(localCurrentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={(localCurrentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
          />
        </div>

        {/* Điều chỉnh âm lượng */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">{volumeIcon()}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={localVolume * 100}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-500 text-center">
        Tip: Click on parts in the Question Palette to jump to specific audio sections
      </div>
    </div>
  );
});

export default AudioPlayer;