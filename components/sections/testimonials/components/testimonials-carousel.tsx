"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonials";
import { TestimonialCard } from "./testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsCarouselProps {
  readonly testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate statistics
  const totalTestimonials = testimonials.length;

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main carousel container */}
      <section
        className="relative overflow-hidden rounded-2xl p-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Testimonials carousel"
      >
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

        {/* Mobile: Single card with sliding effect */}
        <div className="relative h-[420px] md:hidden overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{
              duration: 0.7,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex h-full"
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="flex-shrink-0 w-full px-4">
                <div className="h-full flex items-center justify-center">
                  <TestimonialCard testimonial={testimonial} isActive={true} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Three cards with side preview effect */}
        <div className="relative h-[420px] hidden md:block overflow-hidden">
          <div className="flex h-full items-center justify-center gap-6 px-8">
            {/* Previous testimonial */}
            <motion.div
              key={`prev-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.7, x: -80 }}
              animate={{ opacity: 0.7, scale: 0.9, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
              className="flex-shrink-0 w-80"
            >
              <TestimonialCard
                testimonial={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ]
                }
                isActive={false}
              />
            </motion.div>

            {/* Current testimonial */}
            <motion.div
              key={`current-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
              className="flex-shrink-0 w-80 z-10"
            >
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </motion.div>

            {/* Next testimonial */}
            <motion.div
              key={`next-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.7, x: 80 }}
              animate={{ opacity: 0.7, scale: 0.9, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
              className="flex-shrink-0 w-80"
            >
              <TestimonialCard
                testimonial={
                  testimonials[(currentIndex + 1) % testimonials.length]
                }
                isActive={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced progress indicator */}
      <div className="flex flex-col items-center gap-4">
        {/* Testimonial counter */}
        <div className="text-center">
          <span className="text-sm font-medium text-muted-foreground">
            Testimonio {currentIndex + 1} de {totalTestimonials}
          </span>
        </div>

        <div className="flex space-x-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={`progress-${testimonial.id}`}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Company logos or names */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          {Array.from(new Set(testimonials.map((t) => t.company))).map(
            (company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {company}
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
