"use client";

import { motion } from "framer-motion";
import { Play, Pause, Clock, Calendar, Monitor, Server, Layers, Brain, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Badge } from "@/components/ui/display/badge";
import { type Project } from "@/types/projects";

interface VideoOverlayProps {
  readonly project: Project;
  readonly isPlaying: boolean;
  readonly duration: number;
  readonly onPlayPause: () => void;
  readonly currentImageIndex?: number;
  readonly totalImages?: number;
  readonly currentTime?: number;
  readonly isMobile?: boolean;
}

export function VideoOverlay({
  project,
  isPlaying,
  duration,
  onPlayPause,
  currentImageIndex = 0,
  totalImages = 1,
  currentTime = 0,
  isMobile = false,
}: VideoOverlayProps) {
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
      case "pendiente":
        return (
          <Badge className="bg-orange-600/20 text-orange-600 hover:bg-orange-600/30 border-orange-600/30">
            Pendiente
          </Badge>
        );
      default:
        return null;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Video Overlay */}
      <div className={`absolute inset-0 ${isMobile ? "bg-gradient-to-b from-black/80 via-transparent to-black/60" : "bg-gradient-to-t from-black/80 via-transparent to-transparent"}`} />
      
      {/* Project Info Overlay */}
      <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
        <div className="flex gap-1">
          {renderStatusBadge(project.status)}
          {project.featured && (
            <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
              <Star className="h-2 w-2 mr-1" /> Destacado
            </Badge>
          )}
        </div>
        
        {/* Slideshow Indicator */}
        {totalImages > 1 && (
          <div className="flex flex-col items-end gap-1">
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs">
              {currentImageIndex + 1} / {totalImages}
            </div>
            {/* Slideshow Progress Bar */}
            <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/80 rounded-full transition-all duration-100"
                style={{ 
                  width: `${((currentImageIndex + 1) / totalImages) * 100}%` 
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Play/Pause Overlay - Only show on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto"
          >
            <Button
              size="icon"
              onClick={onPlayPause}
              className="h-12 w-12 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm border-2 border-primary/30 rounded-full"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-primary" />
              ) : (
                <Play className="h-4 w-4 text-primary ml-0.5" />
              )}
            </Button>
          </motion.div>
        </div>
      )}

      {/* Project Title Overlay - Different position for mobile vs desktop */}
      {isMobile ? (
        <div className="absolute top-16 left-2 right-2">
          <h2 className="text-sm font-bold text-white mb-1">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <div className="flex items-center gap-1">
              {renderCategoryIcon(project.category as string)}
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(project.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-12 left-2 right-2">
          <h2 className="text-sm font-bold text-white mb-1">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <div className="flex items-center gap-1">
              {renderCategoryIcon(project.category as string)}
              <span>{project.category}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(project.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
