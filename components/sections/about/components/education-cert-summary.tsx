"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Code, Database, Cloud, BookOpen, Brain } from "lucide-react";
import { Badge } from "@/components/ui/display/badge";
import { aboutData } from "@/data/about-data";

export function EducationCertSummary() {
  const educationData = aboutData.education;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Cloud":
        return Cloud;
      case "Code":
        return Code;
      case "Database":
        return Database;
      case "BookOpen":
        return BookOpen;
      case "Brain":
        return Brain;
      default:
        return Code;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Formación & Certificaciones</h3>
      </div>
      
      {/* Educación principal */}
      <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20 flex-shrink-0">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h4 className="font-semibold text-foreground text-base">{educationData.main.degree}</h4>
          <Badge className="bg-primary/20 text-primary text-sm px-3 py-1.5 font-medium">
            {educationData.main.year}
          </Badge>
        </div>
        <p className="text-sm text-foreground/70 mb-2">{educationData.main.institution}</p>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-primary" />
          <p className="text-sm text-primary font-semibold">{educationData.main.highlight}</p>
        </div>
      </div>

      {/* Certificaciones destacadas */}
      <div className="flex-1">
        <p className="text-base font-semibold text-foreground/90 mb-4">Certificaciones Profesionales</p>
        
        {/* Certificaciones destacadas */}
        <div className="mb-6">
          <p className="text-sm text-foreground/70 mb-3 font-medium">Principales:</p>
          <div className="space-y-3">
            {educationData.certificates.filter(cert => cert.featured).map((cert, index) => {
              const IconComponent = getIconComponent(cert.icon);
              
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className={`p-4 rounded-lg border ${cert.color} hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${cert.color} flex-shrink-0`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h5>
                      <p className="text-xs text-foreground/70 mb-2">{cert.provider}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-background/50 text-foreground/80 text-xs px-2 py-1 border border-border/30">
                          {cert.month} {cert.year}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certificaciones adicionales */}
        <div>
          <p className="text-sm text-foreground/70 mb-3 font-medium">Especialización:</p>
          <div className="grid grid-cols-1 gap-2">
            {educationData.certificates.filter(cert => !cert.featured).map((cert, index) => {
              const IconComponent = getIconComponent(cert.icon);
              
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: false }}
                  className={`p-3 rounded-lg border ${cert.color} hover:shadow-sm transition-all duration-300`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded ${cert.color} flex-shrink-0`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h6 className="font-medium text-foreground text-xs mb-1">{cert.name}</h6>
                      <p className="text-xs text-foreground/60">{cert.month} {cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}