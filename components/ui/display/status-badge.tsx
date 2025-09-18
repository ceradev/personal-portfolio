"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  text: string;
  delay?: number;
}

export function StatusBadge({ text, delay = 0 }: Readonly<StatusBadgeProps>) {
  return (
    <div className="inline-block mb-3 sm:mb-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/25 dark:border-primary/40 text-primary dark:text-primary-foreground text-xs sm:text-sm font-medium shadow-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
        className="inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary mr-1.5 sm:mr-2"
      />
      {text}
    </div>
  );
}
