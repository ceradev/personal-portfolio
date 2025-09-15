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
      return 'Por hora';
    case 'project':
      return 'Por proyecto';
    case 'monthly':
      return 'Mensual';
    default:
      return '';
  }
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border border-border/20 bg-background backdrop-blur-sm p-6 transition-all duration-300 hover:border-red-400/60 hover:shadow-lg hover:shadow-red-200/30 h-full">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/15 via-transparent to-red-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon with animation */}
        <motion.div 
          className="mb-4 flex justify-center text-red-600 drop-shadow-md shadow-red-200/40"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <service.icon className="h-12 w-12" />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="mb-3 text-xl font-bold text-center text-foreground group-hover:text-red-600 transition-colors duration-300"
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
                className="text-xs bg-red-100/60 dark:bg-red-900/60 text-red-800 dark:text-red-200 border-red-300 shadow-sm"
              >
                {tech}
              </Badge>
            ))}
            {service.technologies.length > 3 && (
              <Badge 
                variant="secondary" 
                className="text-xs bg-red-100/60 dark:bg-red-900/60 text-red-800 dark:text-red-200 border-red-300 shadow-sm"
              >
                +{service.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        {/* Pricing */}
        {service.pricing && (
          <motion.div 
            className="mt-auto pt-4 border-t border-red-200/40"
          >
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">
                {getPricingTypeLabel(service.pricing.type)}
              </div>
              <div className="font-bold text-lg text-red-600">
                {service.pricing.range}
              </div>
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
