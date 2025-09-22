"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/display/button";

interface MobileProjectNavigationProps {
  readonly currentProjectIndex: number;
  readonly totalProjects: number;
  readonly isPlaying: boolean;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onPlayPause: () => void;
  readonly className?: string;
}

export function MobileProjectNavigation({
  currentProjectIndex,
  totalProjects,
  isPlaying,
  onPrevious,
  onNext,
  onPlayPause,
  className = "",
}: MobileProjectNavigationProps) {
  return (
    <motion.div
      className={`flex items-center justify-between w-full px-4 py-3 bg-background/90 backdrop-blur-sm border-t border-border/30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Previous Button */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="w-12 h-12 rounded-full bg-background/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </Button>
      </motion.div>

      {/* Project Counter */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-sm font-medium text-foreground">
          {currentProjectIndex + 1} / {totalProjects}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: totalProjects }, (_, index) => (
            <motion.div
              key={`project-dot-${currentProjectIndex}-${index}`}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentProjectIndex
                  ? "bg-primary"
                  : "bg-foreground/30"
              }`}
              animate={{
                scale: index === currentProjectIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Play/Pause Button */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onPlayPause}
          className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-primary" />
          ) : (
            <Play className="h-5 w-5 text-primary" />
          )}
        </Button>
      </motion.div>

      {/* Next Button */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-background/50 border border-border/30 hover:bg-primary/10 hover:border-primary/30"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </Button>
      </motion.div>
    </motion.div>
  );
}

interface MobileProjectIndicatorProps {
  readonly currentProjectIndex: number;
  readonly totalProjects: number;
  readonly className?: string;
}

export function MobileProjectIndicator({
  currentProjectIndex,
  totalProjects,
  className = "",
}: MobileProjectIndicatorProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-xs font-medium text-foreground">
        Proyecto {currentProjectIndex + 1} de {totalProjects}
      </div>
      <div className="flex gap-1">
        {Array.from({ length: Math.min(totalProjects, 5) }, (_, index) => (
          <motion.div
            key={`indicator-dot-${currentProjectIndex}-${index}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              index === currentProjectIndex
                ? "bg-primary"
                : "bg-foreground/40"
            }`}
            animate={{
              scale: index === currentProjectIndex ? 1.3 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
        {totalProjects > 5 && (
          <div className="text-xs text-foreground/60 ml-1">
            +{totalProjects - 5}
          </div>
        )}
      </div>
    </motion.div>
  );
}
