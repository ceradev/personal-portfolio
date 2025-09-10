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
