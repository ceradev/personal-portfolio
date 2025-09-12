"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface CarouselNavigationProps {
  readonly currentIndex: number;
  readonly totalSlides: number;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onDotClick: (index: number) => void;
  readonly isAutoPlaying: boolean;
  readonly onToggleAutoPlay: () => void;
}

export function CarouselNavigation({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
  isAutoPlaying,
  onToggleAutoPlay,
}: CarouselNavigationProps) {
  return (
    <>
      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-6 pointer-events-none">
        {/* Previous button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrevious}
          className="pointer-events-auto w-14 h-14 rounded-full bg-background/40 backdrop-blur-sm border border-border/20 shadow-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group opacity-70 hover:opacity-100"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-7 w-7 text-foreground group-hover:text-primary transition-colors" />
        </motion.button>

        {/* Next button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="pointer-events-auto w-14 h-14 rounded-full bg-background/40 backdrop-blur-sm border border-border/20 shadow-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group opacity-70 hover:opacity-100"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-7 w-7 text-foreground group-hover:text-primary transition-colors" />
        </motion.button>
      </div>

      {/* Auto-play toggle */}
      <div className="absolute top-6 right-6">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleAutoPlay}
          className="w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm border border-border/20 shadow-md flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group opacity-60 hover:opacity-100"
          aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? (
            <Pause className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          ) : (
            <Play className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          )}
        </motion.button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 left-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 rounded-full bg-background/30 backdrop-blur-sm border border-border/20 shadow-md opacity-70"
        >
          <span className="text-sm font-medium text-foreground">
            {currentIndex + 1} / {totalSlides}
          </span>
        </motion.div>
      </div>
    </>
  );
}
