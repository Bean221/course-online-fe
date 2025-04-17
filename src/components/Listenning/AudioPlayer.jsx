// src/components/AudioPlayer.jsx
import { forwardRef, useState, useEffect } from 'react';

const AudioPlayer = forwardRef(({ 
  src, 
  volume, 
  onTimeUpdate, 
  currentTime, 
  onVolumeChange,
  disableControls = true, // Mặc định vô hiệu hóa controls
  autoplay = true // Mặc định tự động phát
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [localCurrentTime, setLocalCurrentTime] = useState(currentTime || 0);
  const [localVolume, setLocalVolume] = useState(volume || 1);

  // Sync audio time and handle autoplay
  useEffect(() => {
    if (ref.current) {
      const audioElement = ref.current;

      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
        if (autoplay) {
          audioElement.play().catch(error => {
            console.error("Autoplay prevented by browser:", error);
          });
        }
      };

      const handleTimeUpdate = () => {
        setLocalCurrentTime(audioElement.currentTime);
        onTimeUpdate && onTimeUpdate(audioElement.currentTime);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        if (disableControls && !audioElement.ended) {
          audioElement.play().catch(() => {});
        } else {
          setIsPlaying(false);
        }
      };

      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('pause', handlePause);
      audioElement.loop = false; // Đảm bảo chỉ phát một lần

      return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('pause', handlePause);
      };
    }
  }, [ref, onTimeUpdate, autoplay, disableControls]);

  // Update currentTime from prop
  useEffect(() => {
    if (ref.current && currentTime !== undefined && Math.abs(localCurrentTime - currentTime) > 1) {
      ref.current.currentTime = currentTime;
      setLocalCurrentTime(currentTime);
    }
  }, [currentTime, ref, localCurrentTime]);

  // Update volume from prop
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
      setLocalVolume(volume);
    }
  }, [volume, ref]);

  const togglePlay = () => {
    if (disableControls) return; // Ngăn điều khiển nếu vô hiệu hóa
    
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e) => {
    if (disableControls) return; // Ngăn tua nếu vô hiệu hóa
    
    const seekTime = (e.target.value / 100) * duration;
    if (ref.current) {
      ref.current.currentTime = seekTime;
      setLocalCurrentTime(seekTime);
      onTimeUpdate && onTimeUpdate(seekTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setLocalVolume(newVolume);
    if (ref.current) {
      ref.current.volume = newVolume;
    }
    onVolumeChange && onVolumeChange(newVolume);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Volume icon based on volume level
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
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <audio ref={ref} src={src} preload="metadata"></audio>

      <div className="flex items-center gap-4">
        {/* Play/Pause button (hidden if controls disabled) */}
        {!disableControls && (
          <button
            onClick={togglePlay}
            className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        )}

        {/* Progress bar (non-interactive if controls disabled) */}
        <div className="flex-1">
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span>{formatTime(localCurrentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          {disableControls ? (
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-blue-500 h-full transition-all"
                style={{ width: `${(localCurrentTime / duration) * 100 || 0}%` }}
              ></div>
            </div>
          ) : (
            <input
              type="range"
              min="0"
              max="100"
              value={(localCurrentTime / duration) * 100 || 0}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
            />
          )}
        </div>

        {/* Volume control */}
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

      {disableControls && (
        <div className="mt-3 text-sm text-amber-600 text-center font-medium flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Audio đang phát tự động. Vui lòng lắng nghe cẩn thận.
        </div>
      )}
    </div>
  );
});

export default AudioPlayer;