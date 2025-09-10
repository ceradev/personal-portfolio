"use client";

import { motion } from "framer-motion";
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
