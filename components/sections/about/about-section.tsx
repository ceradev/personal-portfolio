"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/display/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { AboutSubtitle } from "@/components/sections/about/components/about-subtitle";
import { EssentialInfo } from "@/components/sections/about/components/essential-info";
import { EducationCertSummary } from "@/components/sections/about/components/education-cert-summary";
import { ProfessionalSoftSkills } from "@/components/sections/about/components/professional-soft-skills";
import { LanguagesInfo } from "@/components/sections/about/components/languages-info";
import { PracticalInfo } from "@/components/sections/about/components/practical-info";
import { CompactTechSkills } from "@/components/sections/about/components/compact-tech-skills";
import { ValueProposition } from "@/components/sections/about/components/value-proposition";

export function AboutSection() {
  return (
    <SectionTransition id="about" className="py-12 md:py-20 my-4 md:my-8 relative overflow-hidden">
      {/* Background decorative elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <SectionTitle title="Sobre Mí" />
        
        <AboutSubtitle />

        {/* Información esencial */}
        <EssentialInfo />

        {/* Contenido principal */}
        <div className="space-y-6 md:space-y-8">
          {/* Primera fila - Propuesta de valor y formación */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Columna izquierda - Propuesta de valor */}
            <ValueProposition />

            {/* Columna derecha - Formación */}
            <EducationCertSummary />
          </div>

          {/* Segunda fila - Tech Skills y Habilidades profesionales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <CompactTechSkills />
            <ProfessionalSoftSkills />
          </div>

          {/* Tercera fila - Idiomas e Información práctica */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <LanguagesInfo />
            <PracticalInfo />
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
