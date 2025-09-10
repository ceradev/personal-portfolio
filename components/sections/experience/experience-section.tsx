"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { 
  BackgroundElements,
  SubtitleSection,
  TimelineSection,
  ExperienceDetails,
  MobileHint
} from "@/components/sections/experience/components";
import { Experience } from "@/data/experiences";
import experiencesData from "@/data/experiences.json";

const EXPERIENCES: Experience[] = experiencesData as Experience[];


export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<string | null>(EXPERIENCES[0].id);

  const handleNodeClick = (experienceId: string) => {
    setActiveExperience(activeExperience === experienceId ? null : experienceId);
  };

  const selectedExperience = EXPERIENCES.find(exp => exp.id === activeExperience);

  return (
    <SectionTransition id="experience" className="py-20 my-8 relative overflow-hidden">
      <BackgroundElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle title="Trayectoria Profesional" />
        
        <SubtitleSection />

        <TimelineSection 
          experiences={EXPERIENCES}
          activeExperience={activeExperience}
          onNodeClick={handleNodeClick}
        />

          <AnimatePresence mode="wait">
            {selectedExperience && (
              <ExperienceDetails experience={selectedExperience} />
            )}
          </AnimatePresence>

        <MobileHint />
      </div>
    </SectionTransition>
  );
}
