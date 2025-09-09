"use client";

import { motion } from "framer-motion";
import { LanguageProficiency } from "@/components/skills/language-proficiency";
import { SectionTitle } from "@/components/utils/section-title";
import { SectionTransition } from "@/components/utils/section-transition";
import { 
  AboutSubtitle,
  InfoCard,
  PersonalInfoItem,
  InfoBadge,
  SoftSkillItem,
  TextParagraph,
  ProfessionalGoal
} from "@/components/about";
import { aboutData } from "@/data/about-data";
import { Briefcase, User, Car, Globe, Brain, Target } from "lucide-react";

export function AboutSection() {
  return (
    <SectionTransition id="about" className="py-20 my-8 relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle title="Sobre Mí" />
        
        <AboutSubtitle />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda */}
          <div className="space-y-8">
            {/* Información personal */}
            <InfoCard
              title="Sobre Mí"
              icon={<Briefcase className="h-5 w-5 text-primary" />}
            >
              <div className="space-y-4">
                {aboutData.aboutText.map((text, index) => (
                  <TextParagraph
                    key={text.slice(0, 20)}
                    text={text}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Datos personales */}
            <InfoCard 
              title="Información Personal" 
              icon={<User className="h-5 w-5 text-primary" />} 
              delay={0.1}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.personalInfo.map((item) => (
                  <PersonalInfoItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Información adicional */}
            <InfoCard
              title="Información Adicional"
              icon={<Car className="h-5 w-5 text-primary" />}
              delay={0.2}
            >
              <div className="flex flex-wrap gap-3">
                {aboutData.additionalInfo.map((info, index) => (
                  <InfoBadge
                    key={info.label}
                    icon={info.icon}
                    label={info.label}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            {/* Idiomas */}
            <InfoCard 
              title="Idiomas" 
              icon={<Globe className="h-5 w-5 text-primary" />}
            >
              <LanguageProficiency />
            </InfoCard>

            {/* Habilidades Sociales */}
            <InfoCard
              title="Habilidades Sociales"
              icon={<Brain className="h-5 w-5 text-primary" />}
              delay={0.1}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.softSkills.map((skill, index) => (
                  <SoftSkillItem
                    key={skill.label}
                    icon={skill.icon}
                    label={skill.label}
                    index={index}
                  />
                ))}
              </div>
            </InfoCard>

            {/* Objetivos profesionales */}
            <InfoCard
              title="Objetivos Profesionales"
              icon={<Target className="h-5 w-5 text-primary" />}
              delay={0.2}
            >
              <div className="space-y-3">
                {aboutData.professionalGoals.map((goal, index) => (
                  <ProfessionalGoal key={goal.slice(0, 30)} goal={goal} index={index} />
                ))}
              </div>
            </InfoCard>
        </div>
      </div>
      </div>
    </SectionTransition>
  );
}
