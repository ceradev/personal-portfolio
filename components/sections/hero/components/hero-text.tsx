"use client";

import { motion } from "framer-motion";
import { TypeWriter } from "./typewriter";
import { TECH_WORDS } from "@/data/hero-data";
import { StatusBadge } from "@/components/ui/display/status-badge";
import { AnimatedText } from "@/components/ui/display/animated-text";
import { GradientText } from "@/components/ui/display/gradient-text";
import { AnimatedUnderline } from "@/components/ui/display/animated-underline";

export function HeroText() {
  return (
    <>
      <StatusBadge text="Disponible para proyectos" />

      {/* Nombre con efecto mejorado */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 tracking-tight px-4 sm:px-6">
        <motion.span 
          className="block text-foreground drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hola, soy
        </motion.span>
        
        <div className="mt-1 relative drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-gradient group cursor-pointer inline-block">
          <GradientText text="cera" delay={0.5} />
          <TypeWriter words={TECH_WORDS as unknown as string[]} />
          <AnimatedUnderline delay={1} />
        </div>
      </h1>

      {/* Subtítulo con animación de texto */}
      <motion.h2 
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/90 dark:text-foreground/95 mb-4 sm:mb-6 font-light drop-shadow-sm px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <AnimatedText 
          text="Desarrollador " 
          delay={1.2} 
          className=""
        />
        <AnimatedText 
          text="Freelancer " 
          delay={1.9} 
          className="text-primary font-medium"
        />
        <AnimatedText 
          text="con pasión por la" 
          delay={2.4} 
          className=""
        />
        <br />
        <AnimatedText 
          text="creación de " 
          delay={2.6} 
          className=""
        />
        <AnimatedText 
          text="aplicaciones rápidas y escalables." 
          delay={2.8} 
          className="text-primary font-medium"
        />
      </motion.h2>
    </>
  );
}