"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  readonly title?: string;
}

export function SectionTitle({ title = "" }: SectionTitleProps) {
  return (
    <div className="flex justify-center mb-12 w-full relative dark:text-background">

      <motion.h2
        className="text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl tracking-tight px-8 py-6 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-600 to-primary-800 dark:from-primary dark:via-primary-600 dark:to-primary-800 drop-shadow-md">
          {title}
        </span>
      </motion.h2>
    </div>
  );
}
