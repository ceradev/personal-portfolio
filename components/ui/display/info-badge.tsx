"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/display/badge";
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
