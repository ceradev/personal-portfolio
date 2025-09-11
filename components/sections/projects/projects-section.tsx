"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { projects, type Project } from "@/types/projects";
import {
  ProjectVideoPlayer,
  ProjectDetailsDialog,
} from "./components";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionTransition
      id="projects"
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
        <SectionTitle title="Portafolio" />

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
            <div className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Una selección de mis{" "}
              <span className="relative">
                <span className="text-red-600 font-bold">
                  proyectos más destacados
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
                />
              </span>{" "}
              y desarrollos técnicos
            </div>
          </div>
        </motion.div>

        {/* Projects Video Player */}
        <div className="mt-12">
          <ProjectVideoPlayer
            projects={projects}
            onViewDetails={setSelectedProject}
          />
        </div>

        {/* Project details dialog */}
        <ProjectDetailsDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SectionTransition>
  );
}
