"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  readonly title?: string;
}

export function SectionTitle({ title = "" }: SectionTitleProps) {
  return (
    <div className="flex justify-center mb-12 w-full relative dark:text-background">

      <motion.h2
        className="text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight px-4 sm:px-6 md:px-8 py-4 sm:py-6 relative z-10"
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
