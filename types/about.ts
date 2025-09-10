export interface PersonalInfo {
  icon: string;
  label: string;
  value: string;
}

export interface AdditionalInfo {
  icon: string;
  label: string;
}

export interface SoftSkill {
  icon: string;
  label: string;
}

export interface AboutData {
  personalInfo: PersonalInfo[];
  additionalInfo: AdditionalInfo[];
  softSkills: SoftSkill[];
  professionalGoals: string[];
  aboutText: string[];
}
