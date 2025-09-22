"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  readonly title?: string;
}

export function SectionTitle({ title = "" }: Readonly<SectionTitleProps>) {
  return (
    <div className="flex justify-center mb-4 md:mb-8 lg:mb-12 w-full relative dark:text-background">
      <motion.h2
        className="!text-3xl md:!text-4xl lg:!text-5xl !font-bold text-center tracking-tight relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-bold drop-shadow-lg">
          {title}
        </span>
      </motion.h2>
    </div>
  );
}
