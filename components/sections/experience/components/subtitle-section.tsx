"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function SubtitleSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, margin: "-50px" }}
      className="text-center mb-12 relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10" />
      
      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-4">
        </div>
        
        <div className="text-lg text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-medium">
        Mi trayectoria profesional y{" "}
          <span className="relative">
            <span className="text-primary dark:text-primary-400 font-bold">
              experiencias clave
            </span>
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
          className="text-xs text-gray-600 dark:text-gray-400 mt-4 flex items-center justify-center gap-2"
        >
          <Rocket className="h-4 w-4 text-primary animate-bounce" />
        Haz clic en cualquier punto del timeline para ver los detalles
        </motion.p>
      </div>
    </motion.div>
  );
}
