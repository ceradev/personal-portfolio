"use client";

import { SectionTitle } from "@/utils/section-title";
import { motion } from "framer-motion";

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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/40 to-transparent blur-3xl -z-10" />

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
            <p className="text-foreground/90 text-base leading-relaxed mb-6 font-light max-w-3xl mx-auto">
              Transformo <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold">promesas</span> o <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold">sueños</span> en <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold">realidad digital</span> con tecnologías modernas y metodologías ágiles. 
              <br />
              Cada <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold">proyecto es único</span> y requiere un <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-semibold">enfoque personalizado</span>.
            </p>
            
            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
              className="grid grid-cols-3 gap-2 mt-4 max-w-md mx-auto"
            >
              <div className="text-center px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-orange-200/30 hover:bg-background/90 hover:border-orange-300/50 transition-all duration-300 shadow-lg">
                <div className="text-xl font-bold text-red-600">100%</div>
                <div className="text-xs text-foreground/80 font-medium">Dedicación</div>
              </div>
              <div className="text-center px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-orange-200/30 hover:bg-background/90 hover:border-orange-300/50 transition-all duration-300 shadow-lg">
                <div className="text-xl font-bold text-red-600">24/7</div>
                <div className="text-xs text-foreground/80 font-medium">Soporte</div>
              </div>
              <div className="text-center px-3 py-2 rounded-lg bg-background/80 backdrop-blur-sm border border-orange-200/30 hover:bg-background/90 hover:border-orange-300/50 transition-all duration-300 shadow-lg">
                <div className="text-xl font-bold text-red-600">∞</div>
                <div className="text-xs text-foreground/80 font-medium">Escalable</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
