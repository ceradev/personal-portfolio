"use client"

import { ExperienceStepper } from "@/components/utils/experience-stepper"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"

export function ExperienceSection() {
  return (
    <SectionTransition id="experience" className="py-20 my-8">
      <SectionTitle title="Experiencia" />
      <ExperienceStepper />
    </SectionTransition>
  )
}
