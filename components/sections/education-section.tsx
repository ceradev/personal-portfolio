"use client"

import { EducationTimeline } from "@/components/education/education-timeline"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"

export function EducationSection() {
  return (
    <SectionTransition id="education" className="py-20 my-8">
      <SectionTitle title="Formación" />
      <EducationTimeline />
    </SectionTransition>
  )
}
