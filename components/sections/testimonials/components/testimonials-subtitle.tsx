"use client";

import { SectionTitle } from "@/utils/section-title";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function TestimonialsSubtitle() {
  return (
    <div className="text-center mb-20">
      <SectionTitle title="Testimonios" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mb-12 relative"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl z-0" />

        <div className="relative z-10">
          <div className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium mb-4 sm:mb-6 px-4 sm:px-6">
            Lo que dicen mis{" "}
            <span className="relative">
              <span className="text-primary font-bold">clientes satisfechos</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-400"
              />
            </span>{" "}
            sobre mi trabajo.
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xs sm:text-sm text-foreground/90 mt-3 sm:mt-4 flex items-center justify-center gap-2 px-4 sm:px-6"
          >
            <Heart className="h-4 w-4 text-primary animate-bounce" />
          Haz clic en cualquier punto del carousel para ver los detalles
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
