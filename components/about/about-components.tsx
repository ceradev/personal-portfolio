"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Globe, 
  Car, 
  Plane, 
  User, 
  CopyrightIcon as License,
  Users,
  Target,
  Lightbulb,
  MessageCircle,
  Clock,
  Brain
} from "lucide-react";

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Briefcase,
  GraduationCap,
  MapPin,
  Globe,
  Car,
  Plane,
  User,
  License,
  Users,
  Target,
  Lightbulb,
  MessageCircle,
  Clock,
  Brain
} as const;

// Función helper para obtener el componente de icono
function getIconComponent(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || User;
}

interface InfoCardProps {
  readonly title: string;
  readonly icon?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly delay?: number;
}

export function InfoCard({ title, icon, children, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
    >
      <CardHeader className="pb-2 px-0 pt-0">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-4">
        {children}
      </CardContent>
    </motion.div>
  );
}

interface PersonalInfoItemProps {
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

export function PersonalInfoItem({ icon, label, value }: PersonalInfoItemProps) {
  const IconComponent = getIconComponent(icon);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false }}
      whileHover={{ y: -2, scale: 1.02 }} 
      className="p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="text-primary bg-primary/10 p-2 rounded-full flex-shrink-0">
          <IconComponent className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-foreground/70 mb-1">{label}</p>
          <p className="font-medium text-foreground">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}

interface InfoBadgeProps {
  readonly icon: string;
  readonly label: string;
  readonly index: number;
}

export function InfoBadge({ icon, label, index }: InfoBadgeProps) {
  const IconComponent = getIconComponent(icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 + 0.4 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
    >
      <Badge className="bg-background/10 hover:bg-background/20 text-foreground/90 border-none px-4 py-2 flex items-center gap-2 text-base">
        <IconComponent className="h-4 w-4" />
        {label}
      </Badge>
    </motion.div>
  );
}

interface SoftSkillItemProps {
  readonly icon: string;
  readonly label: string;
  readonly index: number;
}

export function SoftSkillItem({ icon, label, index }: SoftSkillItemProps) {
  const IconComponent = getIconComponent(icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 + 0.4 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 bg-background/10 hover:bg-background/20 p-3 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
    >
      <div className="text-primary bg-primary/10 p-2 rounded-full">
        <IconComponent className="h-4 w-4" />
      </div>
      <span className="text-foreground/90 font-medium">{label}</span>
    </motion.div>
  );
}

interface TextParagraphProps {
  readonly text: string;
  readonly index: number;
}

export function TextParagraph({ text, index }: TextParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="text-foreground/90 leading-relaxed p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 transition-all duration-300"
    >
      {text}
    </motion.p>
  );
}

interface ProfessionalGoalProps {
  readonly goal: string;
  readonly index: number;
}

export function ProfessionalGoal({ goal, index }: ProfessionalGoalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      viewport={{ once: false }}
      whileHover={{ x: 3, scale: 1.02 }}
      className="flex items-start p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
      <span className="text-foreground/90 leading-relaxed">{goal}</span>
    </motion.div>
  );
}
