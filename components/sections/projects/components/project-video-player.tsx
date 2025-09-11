"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  Clock,
  Calendar,
  Monitor,
  Server,
  Layers,
  Brain,
  Code,
  Star,
  ExternalLink,
  Github,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Badge } from "@/components/ui/display/badge";
import { Slider } from "@/components/ui/form/slider";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Monitor className="h-4 w-4" />;
      case "Backend":
        return <Server className="h-4 w-4" />;
      case "Full Stack":
        return <Layers className="h-4 w-4" />;
      case "IA":
        return <Brain className="h-4 w-4" />;
      case "Freelance":
        return <Code className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 border-green-600/30">
            Completado
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-600/20 text-blue-600 hover:bg-blue-600/30 border-blue-600/30">
            En Progreso
          </Badge>
        );
      case "planned":
        return (
          <Badge className="bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            Planificado
          </Badge>
        );
      default:
        return null;
    }
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
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'max-w-4xl mx-auto'}`}>
      {/* Main Video Player */}
      <div className={`relative bg-black rounded-2xl overflow-hidden ${isFullscreen ? 'h-full' : 'aspect-video'}`}>
        {/* Video Content */}
        <div className="relative w-full h-full">
          <Image
            src={currentProject.image || "/placeholder.svg"}
            alt={currentProject.title}
            fill
            className="object-cover"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Project Info Overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <div className="flex gap-2">
              {renderStatusBadge(currentProject.status)}
              {currentProject.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <Star className="h-3 w-3 mr-1" /> Destacado
                </Badge>
              )}
            </div>
            
            <div className="flex gap-2">
              {/* Project Action Buttons */}
              <div className="flex gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => {
                    console.log("Ver detalles clicked");
                    setShowDetailsModal(true);
                  }}
                  className="text-white hover:bg-white/20"
                  title="Ver Detalles"
                >
                  <Info className="h-5 w-5" />
                </Button>
                
                {currentProject.demoUrl && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      console.log("Demo clicked");
                      window.open(currentProject.demoUrl, "_blank");
                    }}
                    className="text-white hover:bg-white/20"
                    title="Ver Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                )}
                
                {currentProject.githubUrl && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      console.log("GitHub clicked");
                      window.open(currentProject.githubUrl, "_blank");
                    }}
                    className="text-white hover:bg-white/20"
                    title="Ver Código"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                size="icon"
                onClick={handlePlayPause}
                className="h-16 w-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 text-white" />
                ) : (
                  <Play className="h-6 w-6 text-white ml-1" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-20 left-4 right-4">
            <h2 className="text-xl font-bold text-white mb-2">
              {currentProject.title}
            </h2>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                {renderCategoryIcon(currentProject.category as string)}
                <span>{currentProject.category}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(currentProject.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
          {/* Progress Bar */}
          <div
            ref={progressRef}
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-4"
            onClick={handleProgressClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Calculate position based on current time
                const rect = progressRef.current?.getBoundingClientRect();
                if (rect) {
                  const clickX = rect.width * (currentTime / duration);
                  const percentage = clickX / rect.width;
                  setCurrentTime(percentage * duration);
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
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePrevious}
                className="text-white hover:bg-white/20"
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                onClick={handlePlayPause}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                onClick={handleNext}
                className="text-white hover:bg-white/20"
              >
                <SkipForward className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleMute}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
                <div className="w-20">
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    onValueChange={handleVolumeChange}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowPlaylist(!showPlaylist)}
                className="text-white hover:bg-white/20"
              >
                <Settings className="h-5 w-5" />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                onClick={handleFullscreen}
                className="text-white hover:bg-white/20"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <AnimatePresence>
        {showPlaylist && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="absolute top-0 right-0 w-72 h-full bg-black/90 backdrop-blur-xl border-l border-white/20 p-4 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Playlist</h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowPlaylist(false)}
                className="text-white hover:bg-white/20"
              >
                ×
              </Button>
            </div>
            
            <div className="space-y-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg cursor-pointer transition-all ${
                    index === currentProjectIndex
                      ? 'bg-primary/20 border border-primary/50'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => {
                    setCurrentProjectIndex(index);
                    setCurrentTime(0);
                  }}
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      {index === currentProjectIndex && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          {isPlaying ? (
                            <Pause className="h-4 w-4 text-white" />
                          ) : (
                            <Play className="h-4 w-4 text-white" />
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white truncate">
                        {project.title}
                      </h4>
                      <p className="text-xs text-white/70 truncate">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {renderCategoryIcon(project.category as string)}
                        <span className="text-xs text-white/60">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showDetailsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowDetailsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{currentProject.title}</h2>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {renderCategoryIcon(currentProject.category as string)}
                        <span>{currentProject.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(currentProject.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStatusBadge(currentProject.status)}
                    {currentProject.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        <Star className="h-3 w-3 mr-1" /> Destacado
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                      <p className="text-muted-foreground">
                        {currentProject.longDescription || currentProject.description}
                      </p>
                    </div>

                    {currentProject.impact && (
                      <div className="p-4 rounded-lg bg-primary/10">
                        <h3 className="text-lg font-semibold mb-2">Impacto</h3>
                        <p className="text-muted-foreground">{currentProject.impact}</p>
                      </div>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Tecnologías</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-primary/20 text-primary border-primary/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {currentProject.highlights && (
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Aspectos destacados</h3>
                        <ul className="space-y-1">
                          {currentProject.highlights.map((highlight, index) => (
                            <li key={`${currentProject.id}-highlight-${highlight.slice(0, 20)}`} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full mt-1.5 bg-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-border flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowDetailsModal(false)}
                >
                  Cerrar
                </Button>
                {currentProject.demoUrl && (
                  <Button
                    onClick={() => window.open(currentProject.demoUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                )}
                {currentProject.githubUrl && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(currentProject.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Ver Código
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
