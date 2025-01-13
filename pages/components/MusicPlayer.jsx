"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume set to 50%
  const audioRef = useRef(null);

  // Initialize audioRef and restore play state from localStorage
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Set initial volume

      // Restore play state from localStorage
      const savedPlayState = localStorage.getItem("musicPlayState");
      if (savedPlayState === "playing") {
        audioRef.current.play();
        setIsPlaying(true);
      }

      // Sync play/pause state with audio events
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audioRef.current.addEventListener("play", handlePlay);
      audioRef.current.addEventListener("pause", handlePause);

      // Cleanup event listeners on unmount
      return () => {
        audioRef.current.removeEventListener("play", handlePlay);
        audioRef.current.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        localStorage.setItem("musicPlayState", "paused"); // Save pause state
      } else {
        audioRef.current.play();
        localStorage.setItem("musicPlayState", "playing"); // Save play state
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
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

      {/* Add custom styles for the volume slider */}
      <style jsx>{`
        .volume-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100px;
          height: 4px;
          background: #6d28d9; /* Light purple color */
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
          background: #ffffff; /* White thumb */
          border-radius: 50%;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #ffffff; /* White thumb */
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;