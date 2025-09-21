"use client";

import { motion } from "framer-motion";
import { AnimatedHighlight } from "@/components/ui/display/animated-highlight";
import { Rocket } from "lucide-react";

export function SubtitleSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 relative"
      style={{ position: 'relative' }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10" />
      
      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-4">
        </div>
        
        <div className="text-lg sm:text-xl md:text-2xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-medium px-3 sm:px-4 md:px-6">
        Mi trayectoria profesional y{" "}
          <span className="relative">
            <AnimatedHighlight 
              text="experiencias clave"
              delay={0.5}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-400"
            />
          </span>{" "}
        en el desarrollo de software
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 md:mt-4 flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6"
        >
          <Rocket className="h-3 w-3 sm:h-4 sm:w-4 text-primary animate-bounce" />
        <span className="hidden sm:inline">Haz clic en cualquier punto del timeline para ver los detalles</span>
        <span className="sm:hidden">Toca cualquier experiencia para ver los detalles</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
