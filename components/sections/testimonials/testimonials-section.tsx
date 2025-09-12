"use client";

import { TestimonialsSubtitle, TestimonialsCarousel } from "./components";
import { testimonialsData } from "@/data/testimonials-data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <TestimonialsSubtitle />
        <TestimonialsCarousel testimonials={testimonialsData} />
      </div>
    </section>
  );
}
