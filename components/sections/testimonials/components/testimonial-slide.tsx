"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types/testimonials";
import { Star, Quote } from "lucide-react";

interface TestimonialSlideProps {
  readonly testimonial: Testimonial;
}

function renderStars(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`h-5 w-5 ${
        index < rating 
          ? "fill-warning-400 text-warning-400" 
          : "text-neutral-300 dark:text-neutral-600"
      }`}
    />
  ));
}

export function TestimonialSlide({ testimonial }: TestimonialSlideProps) {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Quote icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex justify-center mb-4"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
          <Quote className="h-10 w-10 text-primary" />
        </div>
      </motion.div>

      {/* Rating */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex justify-center mb-8"
      >
        <div className="flex space-x-1">
          {renderStars(testimonial.rating)}
        </div>
      </motion.div>

      {/* Content */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl md:text-2xl text-center text-foreground/90 leading-relaxed mb-8 flex-1 flex items-center px-4"
      >
        <span className="italic font-light">
          "{testimonial.content}"
        </span>
      </motion.blockquote>

      {/* Project badge */}
      {testimonial.project && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">
              {testimonial.project}
            </span>
          </div>
        </motion.div>
      )}

      {/* Author info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 flex items-center justify-center text-3xl font-bold text-primary mb-2 border-4 border-background/50 shadow-lg">
            {testimonial.avatar ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              testimonial.name.split(' ').map(n => n[0]).join('')
            )}
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/15 animate-pulse"></div>
        </div>

        {/* Name and role */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-foreground mb-2">
            {testimonial.name}
          </h4>
          <p className="text-muted-foreground font-medium text-lg mb-1">
            {testimonial.role}
          </p>
          <p className="text-primary font-semibold">
            {testimonial.company}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
