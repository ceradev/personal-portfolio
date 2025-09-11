"use client";

import { TestimonialsSubtitle, TestimonialsGrid } from "./components";
import { testimonialsData } from "@/data/testimonials-data";

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials" 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <TestimonialsSubtitle />
        <TestimonialsGrid testimonials={testimonialsData} />
      </div>
    </section>
  );
}
