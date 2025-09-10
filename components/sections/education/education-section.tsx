"use client";

import { motion } from "framer-motion";
import { AcademicTimeline } from "@/components/sections/education/components/academic-timeline";
import { CertificatesGrid } from "@/components/sections/education/components/certificates-grid";
import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
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

        {/* Subtitle with animation and enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-16 relative"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-6">
            </div>
            
            <div className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Mi trayectoria académica y{" "}
              <span className="relative">
                <span className="text-red-600 font-bold">
                  certificaciones profesionales
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
                />
              </span>{" "}
              que respaldan mi experiencia técnica
            </div>
          </div>
        </motion.div>

        {/* Academic Formation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20 relative group"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 backdrop-blur-xl rounded-3xl border-2 border-primary/20 shadow-2xl shadow-primary/10" />

          <div className="relative p-8 sm:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-2xl shadow-primary/30"
                >
                  <GraduationCap className="h-10 w-10 text-primary" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              >
                Formación Académica
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
              >
                Mi educación formal y especialización en desarrollo de software
              </motion.p>
            </div>

            <AcademicTimeline />
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative group"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 backdrop-blur-xl rounded-3xl border-2 border-primary/20 shadow-2xl shadow-primary/10" />

          <div className="relative p-8 sm:p-12">
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/20 shadow-2xl shadow-primary/30"
                >
                  <Award className="h-10 w-10 text-primary" />
                </motion.div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              >
                Certificaciones Profesionales
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed"
              >
                Cursos especializados y certificaciones que complementan mi
                formación
              </motion.p>
            </div>

            <CertificatesGrid />
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  );
}
