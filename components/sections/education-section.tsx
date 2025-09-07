"use client";

import { motion } from "framer-motion";
import { AcademicTimeline } from "@/components/education/academic-timeline";
import { CertificatesGrid } from "@/components/education/certificates-grid";
import { SectionTitle } from "@/components/utils/section-title";
import { SectionTransition } from "@/components/utils/section-transition";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <SectionTransition
      id="education"
      className="py-20 my-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="relative z-10">
        <SectionTitle title="Educación" />

        {/* Subtitle with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <Award className="h-5 w-5 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Mi trayectoria académica y{" "}
            <span className="text-primary font-semibold">
              certificaciones profesionales
            </span>{" "}
            que respaldan mi experiencia técnica
          </p>
        </motion.div>

        <AcademicTimeline />

        <CertificatesGrid />
      </div>
    </SectionTransition>
  );
}
