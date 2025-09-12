"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonials";
import { TestimonialCard } from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsCarouselProps {
  readonly testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality - one testimonial at a time
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    ));
    setIsAutoPlaying(false);
  };

  // Resume auto-play after 8 seconds of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 pointer-events-none z-10">
          {/* Previous button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            className="pointer-events-auto w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </motion.button>

          {/* Next button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            className="pointer-events-auto w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
          </motion.button>
        </div>

        {/* Cards container with preview effect */}
        <div className="relative h-[380px] md:h-[400px]">
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ 
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="flex h-full"
          >
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (currentIndex + 1) % testimonials.length;
              
              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full px-8 md:px-12"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: isActive ? 1 : (isPrev || isNext) ? 0.3 : 0,
                      scale: isActive ? 1 : 0.85,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex items-center justify-center"
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      isActive={isActive}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
