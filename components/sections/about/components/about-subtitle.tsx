"use client";

import { motion } from "framer-motion";

export function AboutSubtitle() {
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
        <div className="text-xl text-black dark:text-white max-w-2xl mx-auto leading-relaxed font-medium">
          Soy un desarrollador especializado en{" "}
          <span className="relative">
            <span className="text-red-600 font-bold">creación de soluciones digitales</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
            />
          </span>
        </div>
        <p className="text-foreground/90 text-base leading-relaxed my-6 font-light max-w-xl mx-auto">
          Mi enfoque se centra en entender las necesidades del negocio y traducirlas en soluciones técnicas, eficientes y escalables.
        </p>
      </div>
    </motion.div>
  );
}
