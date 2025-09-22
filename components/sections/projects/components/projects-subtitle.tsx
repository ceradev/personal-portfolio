"use client";

import { motion } from "framer-motion";
import { AnimatedHighlight } from "@/components/ui/display/animated-highlight";
import { useMobile } from "@/hooks/use-mobile";
import { Info, Play, SkipBack, SkipForward, Settings, Maximize } from "lucide-react";


export function ProjectsSubtitle() {
  const isMobile = useMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12 relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl -z-10" />

      <div className="relative">
        <div className="text-lg sm:text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium mb-6 sm:mb-8 px-4 sm:px-6">
          Una selección de mis{" "}
          <span className="relative">
            <AnimatedHighlight 
              text="proyectos más destacados"
              delay={0.5}
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-400"
            />
          </span>{" "}
          y desarrollos técnicos
        </div>

        <p className="text-foreground/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light max-w-2xl mx-auto px-4 sm:px-6">
         Te invito a que explores cada una de las creaciones que he realizado y veas mi trabajo.
        </p>

        {/* Quick Tips - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-transparent rounded-xl p-6 border dark:border-border border-primary/30">
              <h3 className="text-lg font-semibold text-foreground/90 mb-4 flex items-center justify-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                ¿Cómo usar el reproductor?
              </h3>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/90">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 text-primary" />
                  <SkipBack className="h-4 w-4 text-primary" />
                  <SkipForward className="h-4 w-4 text-primary" />
                  <span>Reproduce y navega</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-primary" />
                  <span>Ver playlist completa</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <Maximize className="h-4 w-4 text-primary" />
                <p className="text-xs text-foreground/90">
                  Ver detalles completos de cada proyecto
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
