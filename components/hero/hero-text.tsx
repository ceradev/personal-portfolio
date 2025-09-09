"use client";

import { motion } from "framer-motion";
import { TypeWriter } from "./typewriter";
import { TECH_WORDS } from "@/data/hero-data";

export function HeroText() {
  return (
    <>
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/15 dark:bg-primary/25 border border-primary/25 dark:border-primary/40 text-primary dark:text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
          className="inline-block h-2 w-2 rounded-full bg-primary mr-2"
        />
        Disponible para proyectos
      </div>

      {/* Nombre cambiante con efecto mejorado */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
        <motion.span 
          className="block text-foreground drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hola, soy
        </motion.span>
        <div className="mt-1 relative drop-shadow-sm dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-gradient group cursor-pointer inline-block">
          <motion.span 
            className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            cera
          </motion.span>
          <TypeWriter words={TECH_WORDS as unknown as string[]} />
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-red-500 to-primary rounded-full group-hover:shadow-md group-hover:shadow-primary/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div 
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-transparent rounded-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 0.6, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              delay: 2.2, 
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </h1>

      <motion.h2 
        className="text-lg sm:text-xl md:text-2xl text-foreground/90 dark:text-foreground/95 mb-6 font-light drop-shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.2 }}
        >
          D
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.25 }}
        >
          e
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.3 }}
        >
          s
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.35 }}
        >
          a
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.4 }}
        >
          r
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.45 }}
        >
          r
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.5 }}
        >
          o
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.55 }}
        >
          l
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.6 }}
        >
          l
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.65 }}
        >
          a
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.7 }}
        >
          d
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.75 }}
        >
          o
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.8 }}
        >
          r
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.85 }}
        >
          &nbsp;
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.9 }}
        >
          F
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 1.95 }}
        >
          u
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.0 }}
        >
          l
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.05 }}
        >
          l
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.1 }}
        >
          &nbsp;
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.15 }}
        >
          S
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.2 }}
        >
          t
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.25 }}
        >
          a
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.3 }}
        >
          c
        </motion.span>
        <motion.span
          className="text-primary font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.35 }}
        >
          k
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 2.4 }}
        >
          &nbsp;con pasión por crear&nbsp;
        </motion.span>
        <motion.span
          className="text-gradient bg-gradient-to-r from-primary via-red-500 to-primary bg-clip-text text-transparent font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
        >
          experiencias digitales excepcionales
        </motion.span>
      </motion.h2>
    </>
  );
}
