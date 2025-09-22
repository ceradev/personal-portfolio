"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { ProjectCard } from "./project-card";
import { type Project } from "@/types/projects";

interface ProjectsCarouselProps {
  readonly projects: Project[];
  readonly onViewDetails: (project: Project) => void;
}

export function ProjectsCarousel({ projects, onViewDetails }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate how many projects to show based on screen size
  const getProjectsPerView = () => {
    if (typeof window === "undefined") return 3;
    const width = window.innerWidth;
    if (width < 768) return 1; // Mobile: 1 project
    if (width < 1024) return 2; // Tablet: 2 projects
    return 3; // Desktop: 3 projects
  };

  const [projectsPerView, setProjectsPerView] = useState(getProjectsPerView());

  // Update projects per view on resize
  useEffect(() => {
    const handleResize = () => {
      setProjectsPerView(getProjectsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered || projects.length <= projectsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = projects.length - projectsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, projects.length, projectsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projects.length - projectsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = projects.length - projectsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold mb-2 text-foreground">
          No se encontraron proyectos
        </h3>
        <p className="text-foreground/70 max-w-md">
          No hay proyectos que coincidan con los filtros aplicados
        </p>
      </div>
    );
  }

  // Get visible projects
  const maxIndex = projects.length - projectsPerView;

  return (
    <div className="relative">
      {/* Carousel Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-10 w-10 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-10 w-10 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-foreground/70">
            {currentIndex + 1}-{Math.min(currentIndex + projectsPerView, projects.length)} de {projects.length}
          </span>
          
          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoPlay}
            className="h-10 w-10 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <section
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Carrusel de proyectos"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") goToPrevious();
          if (e.key === "ArrowRight") goToNext();
        }}
      >
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${currentIndex * (100 / projectsPerView)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            width: `${(projects.length / projectsPerView) * 100}%`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0"
              style={{
                width: `${100 / projects.length}%`,
              }}
            >
              <ProjectCard
                project={project}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Dots Indicator */}
      {projects.length > projectsPerView && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setCurrentIndex(index);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
