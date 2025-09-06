"use client"

import { EnhancedProjectsSection } from "@/components/sections/enhanced-projects-section"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"

export function ProjectsSection() {
  return (
    <SectionTransition id="projects" className="py-20 my-8">
      <SectionTitle title="Proyectos" />
      <EnhancedProjectsSection />
    </SectionTransition>
  )
}
