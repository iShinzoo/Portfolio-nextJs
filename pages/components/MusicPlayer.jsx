"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expanded controls
  const [isClient, setIsClient] = useState(false); // Track if the component is running on the client
  const audioRef = useRef(null);

  // Initialize audioRef and restore play state from localStorage
  useEffect(() => {
    setIsClient(true); // Set isClient to true when the component mounts (client-side)
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.volume = volume;

      const savedPlayState = localStorage.getItem("musicPlayState");
      if (savedPlayState === "playing") {
        audioElement.play();
        setIsPlaying(true);
      }

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioElement.addEventListener("play", handlePlay);
      audioElement.addEventListener("pause", handlePause);

      return () => {
        if (audioElement) {
          audioElement.removeEventListener("play", handlePlay);
          audioElement.removeEventListener("pause", handlePause);
        }
      };
    }
  }, [volume]);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
        localStorage.setItem("musicPlayState", "paused");
      } else {
        audioElement.play();
        localStorage.setItem("musicPlayState", "playing");
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/bgMusic.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating music player controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-4 left-4 z-50 flex flex-col gap-2"
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Expand/Collapse Button for Mobile */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 md:hidden"
        >
          {isExpanded ? (
            <ChevronDown className="w-6 h-6 text-white" />
          ) : (
            <ChevronUp className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Expanded Controls (Visible on Desktop or when Expanded on Mobile) */}
        {isClient && (isExpanded || window.innerWidth > 768) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </motion.div>
        )}
      </motion.div>

      {/* Custom Styles for Volume Slider */}
      <style jsx>{`
        .volume-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100px;
          height: 4px;
          background: #6d28d9;
          outline: none;
          opacity: 0.7;
          transition: opacity 0.2s;
          border-radius: 2px;
        }

        .volume-slider:hover {
          opacity: 1;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .volume-slider {
            width: 80px;
          }
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;