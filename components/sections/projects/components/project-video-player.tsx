"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AllInOneFrame } from "@/components/ui/display/all-in-one-frame";
import { VideoControls } from "./video-controls";
import { PlaylistSidebar } from "./playlist-sidebar";
import { ProjectDetailsModal } from "./project-details-modal";
import { VideoOverlay } from "./video-overlay";
import { type Project } from "@/types/projects";

interface ProjectVideoPlayerProps {
  readonly projects: Project[];
  readonly onViewDetails: (project: Project) => void;
}

export function ProjectVideoPlayer({ projects, onViewDetails }: ProjectVideoPlayerProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(10); // Simulated video duration
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  const progressRef = useRef<HTMLDivElement>(null);

  const currentProject = projects[currentProjectIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= duration) {
          handleNext();
          return 0;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setCurrentTime(0);
  };

  const handleNext = () => {
    setCurrentProjectIndex((prev) => 
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setCurrentTime(0);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    setCurrentTime(percentage * duration);
  };

  const handleFullscreen = () => {
    setShowDetailsModal(true);
  };

  const handleSelectProject = (index: number) => {
    setCurrentProjectIndex(index);
    setCurrentTime(0);
  };

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">🎬</div>
        <h3 className="text-xl font-bold mb-2 text-foreground">
          No hay proyectos disponibles
        </h3>
        <p className="text-foreground/70 max-w-md">
          No se encontraron proyectos que coincidan con los filtros aplicados
        </p>
      </div>
    );
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* All-in-One Frame with Video Player */}
      <AllInOneFrame className="w-full" size="large">
        {/* Main Video Player */}
        <div className="relative bg-black rounded-lg overflow-hidden w-full h-full">
        {/* Video Content */}
        <div className="relative w-full h-full">
          <Image
            src={currentProject.image || "/placeholder.svg"}
            alt={currentProject.title}
            fill
            className="object-cover"
          />
          
          {/* Video Overlay */}
            <VideoOverlay
              project={currentProject}
              isPlaying={isPlaying}
              duration={duration}
              onPlayPause={handlePlayPause}
            />
          </div>

          {/* Video Controls */}
          <VideoControls
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            volume={volume}
            isMuted={isMuted}
            showPlaylist={showPlaylist}
            currentProject={currentProject}
            onPlayPause={handlePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onVolumeChange={handleVolumeChange}
            onMute={handleMute}
            onProgressClick={handleProgressClick}
            onTogglePlaylist={() => setShowPlaylist(!showPlaylist)}
            onShowDetails={handleFullscreen}
          />
        </div>
      </AllInOneFrame>

      {/* Playlist Sidebar */}
      <PlaylistSidebar
        showPlaylist={showPlaylist}
        projects={projects}
        currentProjectIndex={currentProjectIndex}
        isPlaying={isPlaying}
        onClose={() => setShowPlaylist(false)}
        onSelectProject={handleSelectProject}
      />

      {/* Project Details Modal */}
      <ProjectDetailsModal
        showModal={showDetailsModal}
        project={currentProject}
        onClose={() => setShowDetailsModal(false)}
      />
    </div>
  );
}
