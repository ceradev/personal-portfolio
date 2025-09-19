"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  readonly title?: string;
}

export function SectionTitle({ title = "" }: SectionTitleProps) {
  return (
    <div className="flex justify-center mb-8 md:mb-12 lg:mb-16 w-full relative dark:text-background">

      <motion.h2
        className="!text-3xl md:!text-5xl lg:!text-7xl !font-bold text-center tracking-tight px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <span className="text-primary font-bold drop-shadow-lg">
          {title}
        </span>
      </motion.h2>
    </div>
  );
}
