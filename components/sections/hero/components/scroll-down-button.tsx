"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface ScrollDownButtonProps {
  targetSection: string;
}

export function ScrollDownButton({ 
  targetSection = "services", 
}: Readonly<ScrollDownButtonProps>) {
  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={handleClick}
        className="inline-flex items-center justify-center p-3 md:p-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-full text-primary transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
