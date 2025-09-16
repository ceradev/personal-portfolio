"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { projects, type Project } from "@/types/projects";
import {
  ProjectVideoPlayer,
  ProjectDetailsModal,
  ProjectsSubtitle,
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

        {/* Enhanced Subtitle with Instructions */}
        <ProjectsSubtitle />

        {/* Projects Video Player */}
        <div className="mt-12">
          <ProjectVideoPlayer
            projects={projects}
            onViewDetails={setSelectedProject}
          />
        </div>

        {/* Project details modal */}
        <ProjectDetailsModal
          showModal={!!selectedProject}
          project={selectedProject!}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SectionTransition>
  );
}
