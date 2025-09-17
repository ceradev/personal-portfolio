"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Settings, Maximize, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Slider } from "@/components/ui/form/slider";

interface VideoControlsProps {
  readonly isPlaying: boolean;
  readonly currentTime: number;
  readonly duration: number;
  readonly volume: number;
  readonly isMuted: boolean;
  readonly showPlaylist: boolean;
  readonly isMobile: boolean;
  readonly currentProject: {
    readonly demoUrl?: string;
    readonly githubUrl?: string;
    readonly isDeployed?: boolean;
  };
  readonly onPlayPause: () => void;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onVolumeChange: (value: number[]) => void;
  readonly onMute: () => void;
  readonly onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  readonly onTogglePlaylist: () => void;
  readonly onShowDetails: () => void;
}

export function VideoControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  showPlaylist,
  isMobile,
  currentProject,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
  onMute,
  onProgressClick,
  onTogglePlaylist,
  onShowDetails,
}: VideoControlsProps) {
  const progressRef = useRef<HTMLDivElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Mobile Controls - Simplified and touch-friendly
  if (isMobile) {
    return (
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4">
        {/* Progress Bar - Mobile */}
        <button
          ref={progressRef}
          className="w-full bg-white/40 rounded-full cursor-pointer block h-3 mb-4"
          onClick={onProgressClick}
          aria-label="Barra de progreso del video"
        >
          <div
            className="h-full bg-primary rounded-full transition-all duration-100"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </button>

        {/* Mobile Control Layout - Centered and simplified */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onPrevious}
              className="text-white hover:bg-white/20 h-12 w-12 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>
          
          {/* Play/Pause Button - Larger and more prominent */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onPlayPause}
              className="text-white hover:bg-white/20 h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <motion.div
                animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </motion.div>
            </Button>
          </motion.div>
          
          {/* Next Button */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onNext}
              className="text-white hover:bg-white/20 h-12 w-12 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Action Buttons - Bottom row */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {currentProject.demoUrl && currentProject.isDeployed && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(currentProject.demoUrl, "_blank")}
                className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
                title="Ver Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
          
          {currentProject.githubUrl && (
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(currentProject.githubUrl, "_blank")}
                className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
                title="Ver Código"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
          
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onShowDetails}
              className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
              title="Ver detalles"
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Desktop Controls - Full featured and compact
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2">
      {/* Progress Bar - Desktop */}
      <button
        ref={progressRef}
        className="w-full bg-white/30 rounded-full cursor-pointer block h-1 mb-2"
        onClick={onProgressClick}
        aria-label="Barra de progreso del video"
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-100"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </button>

      {/* Desktop Control Layout - Full featured */}
      <div className="flex items-center justify-between">
        {/* Left side - Navigation controls */}
        <div className="flex items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onPrevious}
              className="text-white hover:bg-white/20 h-6 w-6"
            >
              <motion.div
                whileHover={{ x: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SkipBack className="h-3 w-3" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onPlayPause}
              className="text-white hover:bg-white/20 h-6 w-6"
            >
              <motion.div
                animate={{ scale: isPlaying ? [1, 1.1, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? (
                  <Pause className="h-3 w-3" />
                ) : (
                  <Play className="h-3 w-3" />
                )}
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onNext}
              className="text-white hover:bg-white/20 h-6 w-6"
            >
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SkipForward className="h-3 w-3" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Volume Control - Desktop only */}
          <div className="flex items-center gap-1 ml-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={onMute}
                className="text-white hover:bg-white/20 h-6 w-6"
              >
                <motion.div
                  animate={{ scale: isMuted ? [1, 0.8, 1] : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMuted ? (
                    <VolumeX className="h-3 w-3" />
                  ) : (
                    <Volume2 className="h-3 w-3" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
            <div className="w-12">
              <Slider
                value={[isMuted ? 0 : volume]}
                onValueChange={onVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Time Display - Desktop only */}
          <div className="text-white text-xs ml-2">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center gap-1">
          {/* Project Action Buttons */}
          {currentProject.demoUrl && currentProject.isDeployed && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(currentProject.demoUrl, "_blank")}
                className="text-white hover:bg-white/20 h-6 w-6"
                title="Ver Demo"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ExternalLink className="h-3 w-3" />
                </motion.div>
              </Button>
            </motion.div>
          )}
          
          {currentProject.githubUrl && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => window.open(currentProject.githubUrl, "_blank")}
                className="text-white hover:bg-white/20 h-6 w-6"
                title="Ver Código"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github className="h-3 w-3" />
                </motion.div>
              </Button>
            </motion.div>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onTogglePlaylist}
              className="text-white hover:bg-white/20 h-6 w-6"
              title="Lista de proyectos"
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Settings className="h-3 w-3" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={onShowDetails}
              className="text-white hover:bg-white/20 h-6 w-6"
              title="Ver detalles completos"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Maximize className="h-3 w-3" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}







