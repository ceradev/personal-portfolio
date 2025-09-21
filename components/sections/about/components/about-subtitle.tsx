"use client";

import { motion } from "framer-motion";
import { AnimatedHighlight } from "@/components/ui/display/animated-highlight";

export function AboutSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10" />

      <div className="relative">
        <div className="text-lg sm:text-xl md:text-2xl text-black dark:text-white max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-6">
          Soy un desarrollador especializado en{" "}
          <span className="relative">
            <AnimatedHighlight 
              text="creación de soluciones digitales"
              delay={0.5}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-400"
            />
          </span>
        </div>
        <p className="text-foreground/90 text-sm sm:text-base leading-relaxed my-4 sm:my-6 font-light max-w-xl mx-auto px-4 sm:px-6">
          Mi enfoque se centra en entender las necesidades del negocio y traducirlas en soluciones técnicas, eficientes y escalables.
        </p>
      </div>
    </motion.div>
  );
}
