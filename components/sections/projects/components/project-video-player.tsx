"use client";

import { useEffect } from "react";
import { AllInOneFrame, MobileFrame } from "@/components/ui/display";
import { VideoControls } from "./video-controls";
import { PlaylistSidebar } from "./playlist-sidebar";
import { ProjectDetailsModal } from "./project-details-modal";
import { VideoContent } from "./video-content";
import { useMobile } from "@/hooks/use-mobile";
import { useTouchGestures } from "@/hooks/use-touch-gestures";
import { useSlideshow } from "@/hooks/use-slideshow";
import { useVideoControls } from "@/hooks/use-video-controls";
import { type Project } from "@/types/projects";

interface ProjectVideoPlayerProps {
  readonly projects: Project[];
  readonly onViewDetails: (project: Project) => void;
  readonly onProjectChange?: (index: number) => void;
}

export function ProjectVideoPlayer({
  projects,
  onViewDetails,
  onProjectChange,
}: ProjectVideoPlayerProps) {
  const isMobile = useMobile();
  
  const {
    isPlaying,
    volume,
    isMuted,
    showPlaylist,
    showDetailsModal,
    currentProjectIndex,
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
  } = useVideoControls({
    onProjectChange: (index) => onProjectChange?.(index),
    totalProjects: projects.length,
  });

  const currentProject = projects[currentProjectIndex];
  
  // Get project images
  const getProjectImages = () => {
    if (currentProject?.images && currentProject.images.length > 0) {
      return currentProject.images;
    }
    return currentProject?.image ? [currentProject.image] : [];
  };

  const projectImages = getProjectImages();

  const {
    currentTime,
    duration,
    currentImageIndex,
    updateTime,
    resetSlideshow,
  } = useSlideshow({
    projectImages,
    isPlaying,
    onNext: handleNext,
  });

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchGestures({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
  });

  // Reset slideshow when project changes
  useEffect(() => {
    resetSlideshow();
  }, [currentProjectIndex, resetSlideshow]);

  // Handle progress click with duration
  const handleProgressClickWithDuration = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleProgressClick(e, duration, updateTime);
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
    <div
      className={`relative mx-auto ${isMobile ? "max-w-lg px-6 flex justify-center" : "max-w-4xl"}`}
    >
      {/* Responsive Frame with Video Player */}
      {isMobile ? (
        <MobileFrame 
          className="w-full" 
          size="large"
          currentProjectIndex={currentProjectIndex}
          totalProjects={projects.length}
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden w-full h-full">
            <VideoContent
              projectImages={projectImages}
              currentProject={currentProject}
              currentImageIndex={currentImageIndex}
              isPlaying={isPlaying}
              duration={duration}
              currentTime={currentTime}
              isMobile={isMobile}
              onPlayPause={handlePlayPause}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />

            <VideoControls
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              volume={volume}
              isMuted={isMuted}
              showPlaylist={showPlaylist}
              currentProject={currentProject}
              isMobile={isMobile}
              onPlayPause={handlePlayPause}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onVolumeChange={handleVolumeChange}
              onMute={handleMute}
              onProgressClick={handleProgressClickWithDuration}
              onTogglePlaylist={togglePlaylist}
              onShowDetails={handleFullscreen}
            />

            {/* Playlist Sidebar - Inside Mobile Frame */}
            <PlaylistSidebar
              showPlaylist={showPlaylist}
              projects={projects}
              currentProjectIndex={currentProjectIndex}
              isPlaying={isPlaying}
              isMobile={isMobile}
              onClose={closePlaylist}
              onSelectProject={handleSelectProject}
            />
          </div>
        </MobileFrame>
      ) : (
        <AllInOneFrame 
          currentProjectIndex={currentProjectIndex}
          totalProjects={projects.length}
        >
          <div className="relative bg-black rounded-lg overflow-hidden w-full h-full">
            <VideoContent
              projectImages={projectImages}
              currentProject={currentProject}
              currentImageIndex={currentImageIndex}
              isPlaying={isPlaying}
              duration={duration}
              currentTime={currentTime}
              isMobile={isMobile}
              onPlayPause={handlePlayPause}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />

            <VideoControls
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              volume={volume}
              isMuted={isMuted}
              showPlaylist={showPlaylist}
              currentProject={currentProject}
              isMobile={isMobile}
              onPlayPause={handlePlayPause}
              onPrevious={handlePrevious}
              onNext={handleNext}
              onVolumeChange={handleVolumeChange}
              onMute={handleMute}
              onProgressClick={handleProgressClickWithDuration}
              onTogglePlaylist={togglePlaylist}
              onShowDetails={handleFullscreen}
            />

            {/* Playlist Sidebar - Inside Desktop Frame */}
            <PlaylistSidebar
              showPlaylist={showPlaylist}
              projects={projects}
              currentProjectIndex={currentProjectIndex}
              isPlaying={isPlaying}
              isMobile={isMobile}
              onClose={closePlaylist}
              onSelectProject={handleSelectProject}
            />
          </div>
        </AllInOneFrame>
      )}

      {/* Project Details Modal */}
      <ProjectDetailsModal
        showModal={showDetailsModal}
        project={currentProject}
        onClose={closeDetailsModal}
      />
    </div>
  );
}
