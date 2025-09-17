"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AllInOneFrame, MobileFrame } from "@/components/ui/display";
import { VideoControls } from "./video-controls";
import { PlaylistSidebar } from "./playlist-sidebar";
import { ProjectDetailsModal } from "./project-details-modal";
import { VideoOverlay } from "./video-overlay";
import { useMobile } from "@/hooks/use-mobile";
import { type Project } from "@/types/projects";

interface ProjectVideoPlayerProps {
  readonly projects: Project[];
  readonly onViewDetails: (project: Project) => void;
}

export function ProjectVideoPlayer({
  projects,
  onViewDetails,
}: ProjectVideoPlayerProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(16); // Duración dinámica basada en imágenes
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Nuevos estados para el slideshow de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isMobile = useMobile();

  const currentProject = projects[currentProjectIndex];

  // Obtener las imágenes disponibles para el proyecto actual
  const getProjectImages = () => {
    if (currentProject.images && currentProject.images.length > 0) {
      return currentProject.images;
    }
    return [currentProject.image];
  };

  const projectImages = getProjectImages();

  // Calcular duración dinámica basada en el número de imágenes
  useEffect(() => {
    const timePerImage = 2; // 2 segundos por imagen
    const newDuration = projectImages.length * timePerImage;
    setDuration(newDuration);
  }, [projectImages.length]);

  // Touch gesture handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile) return;
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!isMobile) return;

    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next project
        handleNext();
      } else {
        // Swipe right - previous project
        handlePrevious();
      }
    }
  };

  // Auto-play functionality y slideshow de imágenes
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

  // Sincronizar el índice de imagen con el progreso del video
  useEffect(() => {
    if (projectImages.length <= 1) return;

    const timePerImage = duration / projectImages.length;
    const newImageIndex = Math.floor(currentTime / timePerImage);

    if (
      newImageIndex !== currentImageIndex &&
      newImageIndex < projectImages.length
    ) {
      setCurrentImageIndex(newImageIndex);
    }
  }, [currentTime, duration, projectImages.length, currentImageIndex]);

  // Resetear el índice de imagen cuando cambia el proyecto
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(
      () => {
        setCurrentProjectIndex((prev) =>
          prev === 0 ? projects.length - 1 : prev - 1
        );
        setCurrentTime(0);
        setIsTransitioning(false);
      },
      isMobile ? 100 : 150
    );
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(
      () => {
        setCurrentProjectIndex((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
        setCurrentTime(0);
        setIsTransitioning(false);
      },
      isMobile ? 100 : 150
    );
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
    const newTime = percentage * duration;
    setCurrentTime(newTime);

    // Actualizar la imagen correspondiente al tiempo seleccionado
    if (projectImages.length > 1) {
      const timePerImage = duration / projectImages.length;
      const newImageIndex = Math.floor(newTime / timePerImage);
      if (newImageIndex < projectImages.length) {
        setCurrentImageIndex(newImageIndex);
      }
    }
  };

  const handleFullscreen = () => {
    setShowDetailsModal(true);
  };

  const handleSelectProject = (index: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(
      () => {
        setCurrentProjectIndex(index);
        setCurrentTime(0);
        setIsTransitioning(false);
      },
      isMobile ? 100 : 150
    );
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
      className={`relative mx-auto ${isMobile ? "max-w-sm px-4" : "max-w-4xl"}`}
    >
      {/* Responsive Frame with Video Player */}
      {isMobile ? (
        <MobileFrame className="w-full" size="medium">
          {/* Main Video Player */}
          <div className="relative bg-black rounded-lg overflow-hidden w-full h-full">
            {/* Video Content */}
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentProjectIndex}-${currentImageIndex}`}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      projectImages[currentImageIndex] ||
                      "/placeholders/placeholder.svg"
                    }
                    alt={`${currentProject.title} - Vista ${
                      currentImageIndex + 1
                    }`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Video Overlay */}
              <VideoOverlay
                project={currentProject}
                isPlaying={isPlaying}
                duration={duration}
                onPlayPause={handlePlayPause}
                currentImageIndex={currentImageIndex}
                totalImages={projectImages.length}
                currentTime={currentTime}
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
              isMobile={isMobile}
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
        </MobileFrame>
      ) : (
        <AllInOneFrame className="w-full" size="large">
          {/* Main Video Player */}
          <div className="relative bg-black rounded-lg overflow-hidden w-full h-full">
            {/* Video Content */}
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentProjectIndex}-${currentImageIndex}`}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={
                      projectImages[currentImageIndex] ||
                      "/placeholders/placeholder.svg"
                    }
                    alt={`${currentProject.title} - Vista ${
                      currentImageIndex + 1
                    }`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Video Overlay */}
              <VideoOverlay
                project={currentProject}
                isPlaying={isPlaying}
                duration={duration}
                onPlayPause={handlePlayPause}
                currentImageIndex={currentImageIndex}
                totalImages={projectImages.length}
                currentTime={currentTime}
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
              isMobile={isMobile}
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
      )}

      {/* Playlist Sidebar */}
      <PlaylistSidebar
        showPlaylist={showPlaylist}
        projects={projects}
        currentProjectIndex={currentProjectIndex}
        isPlaying={isPlaying}
        isMobile={isMobile}
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
