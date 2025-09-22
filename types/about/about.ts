import React from "react";

export interface PersonalInfo {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export interface AdditionalInfo {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export interface SoftSkill {
  icon: string;
  name: string;
  description: string;
  color: string;
}

export interface Language {
  label: string;
  level: string;
  flag: string;
  color: string;
}

export interface Certificate {
  name: string;
  provider: string;
  year: string;
  month: string;
  featured: boolean;
  icon: string;
  color: string;
}

export interface Education {
  main: {
    institution: string;
    degree: string;
    year: string;
    highlight: string;
  };
  certificates: Certificate[];
}

export interface AboutData {
  personalInfo: PersonalInfo[];
  additionalInfo: AdditionalInfo[];
  softSkills: SoftSkill[];
  languages: Language[];
  education: Education;
  professionalGoals: string[];
  aboutText: string[];
}

// Languages Data
export const LANGUAGES: Language[] = [
  { label: "Español", level: "Nativo", flag: "🇪🇸", color: "bg-primary/10 text-primary dark:text-primary-400" },
  { label: "Inglés", level: "Avanzado (C1)", flag: "🇬🇧", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { label: "Sueco", level: "Intermedio", flag: "🇸🇪", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" }
];
