"use client";

import { Service } from "@/types/services";
import { Card } from "@/components/ui/layout/card";
import { Badge } from "@/components/ui/display/badge";
import { motion } from "framer-motion";

interface ServiceCardProps {
  readonly service: Service;
  readonly index: number;
}

function getPricingTypeLabel(type: 'hourly' | 'project' | 'monthly'): string {
  switch (type) {
    case 'hourly':
      return 'Tarifa por hora';
    case 'project':
      return 'Precio por proyecto';
    case 'monthly':
      return 'Tarifa mensual';
    default:
      return '';
  }
}

// Función helper para obtener las clases CSS según el color del servicio
function getServiceColorClasses(color: string) {
  const colorMap = {
    info: {
      icon: 'service-info-icon',
      bg: 'service-info-bg',
      bgHover: 'service-info-bg-hover',
      text: 'service-info-text',
      badge: 'service-info-badge',
      border: 'service-info-border',
    },
    purple: {
      icon: 'service-purple-icon',
      bg: 'service-purple-bg',
      bgHover: 'service-purple-bg-hover',
      text: 'service-purple-text',
      badge: 'service-purple-badge',
      border: 'service-purple-border',
    },
    success: {
      icon: 'service-success-icon',
      bg: 'service-success-bg',
      bgHover: 'service-success-bg-hover',
      text: 'service-success-text',
      badge: 'service-success-badge',
      border: 'service-success-border',
    },
    warning: {
      icon: 'service-warning-icon',
      bg: 'service-warning-bg',
      bgHover: 'service-warning-bg-hover',
      text: 'service-warning-text',
      badge: 'service-warning-badge',
      border: 'service-warning-border',
    },
  };

  // Fallback a 'info' si el color no existe
  return colorMap[color as keyof typeof colorMap] || colorMap.info;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const colorClasses = getServiceColorClasses(service.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border-2 border-red-200/30 dark:border-red-800/30 bg-background backdrop-blur-sm p-6 transition-all duration-300 hover:border-red-300/50 dark:hover:border-red-700/50 hover:shadow-lg hover:shadow-red-200/20 dark:hover:shadow-red-800/20 h-full">
        {/* Background gradient overlay */}
        <div className={`absolute inset-0 ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Icon with animation */}
        <motion.div 
          className={`mb-4 flex justify-center ${colorClasses.icon} drop-shadow-md`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <service.icon className="h-12 w-12" />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className={`mb-3 text-xl font-bold text-center text-foreground ${colorClasses.text} transition-colors duration-300`}
        >
          {service.title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="mb-4 text-sm text-muted-foreground text-center leading-relaxed"
        >
          {service.description}
        </motion.p>
        
        {/* Key technologies - only show first 3 */}
        <div className="mb-4">
          <div className="flex flex-wrap justify-center gap-1">
            {service.technologies.slice(0, 3).map((tech) => (
              <Badge 
                key={tech}
                variant="secondary" 
                className={`text-xs ${colorClasses.badge} shadow-sm`}
              >
                {tech}
              </Badge>
            ))}
            {service.technologies.length > 3 && (
              <Badge 
                variant="secondary" 
                className={`text-xs ${colorClasses.badge} shadow-sm`}
              >
                +{service.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Pricing */}
        {service.pricing && (
          <motion.div 
            className={`mt-auto pt-4 border-t ${colorClasses.border}`}
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                {getPricingTypeLabel(service.pricing.type)}
              </div>
              <div className={`font-bold text-lg ${colorClasses.icon} mb-1`}>
                {service.pricing.range}
              </div>
              <div className="text-xs text-muted-foreground/80 italic">
                Precio negociable según alcance
              </div>
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
