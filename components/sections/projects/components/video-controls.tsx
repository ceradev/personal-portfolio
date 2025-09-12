"use client";

import { useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Settings, Maximize, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Slider } from "@/components/ui/form/slider";

interface VideoControlsProps {
  readonly isPlaying: boolean;
  readonly currentTime: number;
  readonly duration: number;
  readonly volume: number;
  readonly isMuted: boolean;
  readonly showPlaylist: boolean;
  readonly currentProject: {
    readonly demoUrl?: string;
    readonly githubUrl?: string;
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

  return (
    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-2"
        onClick={onProgressClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const rect = progressRef.current?.getBoundingClientRect();
            if (rect) {
              const clickX = rect.width * (currentTime / duration);
              const percentage = clickX / rect.width;
              // This would need to be handled by parent component
            }
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Barra de progreso del video"
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-100"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={onPrevious}
            className="text-white hover:bg-white/20 h-6 w-6"
          >
            <SkipBack className="h-3 w-3" />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={onPlayPause}
            className="text-white hover:bg-white/20 h-6 w-6"
          >
            {isPlaying ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={onNext}
            className="text-white hover:bg-white/20 h-6 w-6"
          >
            <SkipForward className="h-3 w-3" />
          </Button>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={onMute}
              className="text-white hover:bg-white/20 h-6 w-6"
            >
              {isMuted ? (
                <VolumeX className="h-3 w-3" />
              ) : (
                <Volume2 className="h-3 w-3" />
              )}
            </Button>
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

          <div className="text-white text-xs">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Project Action Buttons */}
          {currentProject.demoUrl && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open(currentProject.demoUrl, "_blank")}
              className="text-white hover:bg-white/20 h-6 w-6"
              title="Ver Demo"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          )}
          
          {currentProject.githubUrl && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open(currentProject.githubUrl, "_blank")}
              className="text-white hover:bg-white/20 h-6 w-6"
              title="Ver Código"
            >
              <Github className="h-3 w-3" />
            </Button>
          )}
          
          <Button
            size="icon"
            variant="ghost"
            onClick={onTogglePlaylist}
            className="text-white hover:bg-white/20 h-6 w-6"
          >
            <Settings className="h-3 w-3" />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            onClick={onShowDetails}
            className="text-white hover:bg-white/20 h-6 w-6"
            title="Ver detalles completos"
          >
            <Maximize className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
