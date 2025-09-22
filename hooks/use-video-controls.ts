import { useState, useRef } from "react";

interface UseVideoControlsProps {
  onProjectChange: (index: number) => void;
  totalProjects: number;
}

export function useVideoControls({ onProjectChange, totalProjects }: UseVideoControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  const progressRef = useRef<HTMLDivElement>(null);

  const updateProjectIndex = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentProjectIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrevious = () => {
    const newIndex = currentProjectIndex === 0 ? totalProjects - 1 : currentProjectIndex - 1;
    updateProjectIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentProjectIndex === totalProjects - 1 ? 0 : currentProjectIndex + 1;
    updateProjectIndex(newIndex);
  };

  const handleSelectProject = (index: number) => {
    updateProjectIndex(index);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLButtonElement>, duration: number, updateTime: (time: number) => void) => {
    if (!progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    updateTime(newTime);
  };

  const handleFullscreen = () => {
    setShowDetailsModal(true);
  };

  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };

  const closePlaylist = () => {
    setShowPlaylist(false);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  return {
    // State
    isPlaying,
    volume,
    isMuted,
    showPlaylist,
    showDetailsModal,
    isTransitioning,
    currentProjectIndex,
    progressRef,
    
    // Actions
    handlePrevious,
    handleNext,
    handleSelectProject,
    handlePlayPause,
    handleVolumeChange,
    handleMute,
    handleProgressClick,
    handleFullscreen,
    togglePlaylist,
    closePlaylist,
    closeDetailsModal,
  };
}
