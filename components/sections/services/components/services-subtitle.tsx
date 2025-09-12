"use client";

import { SectionTitle } from "@/utils/section-title";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function ServicesSubtitle() {
  return (
    <div className="text-center mb-20">
      <SectionTitle title="Servicios" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center mb-12 relative"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl -z-10" />

        <div className="relative">
          <div className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            Soluciones tecnológicas{" "}
            <span className="relative">
              <span className="text-red-600 font-bold">personalizadas</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
              />
            </span>{" "}
            para tu negocio
          </div>
          
          {/* Additional value content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-foreground/90 text-base leading-relaxed mb-6 font-light max-w-xl mx-auto">
            Cada proyecto es único y requiere un enfoque personalizado. Puedes contactarme para obtener más información sobre mis servicios.
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4 text-red-500 animate-bounce" />
            Haz clic en el botón de contacto de arriba para obtener más información
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
