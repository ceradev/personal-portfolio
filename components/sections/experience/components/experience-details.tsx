"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, 
  MapPin, 
  ArrowUpRight,
  Building2,
  Info,
  LaptopMinimal,
  Target,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/layout/card";
import { ExperienceDetailsProps } from "@/types/experiences";

export function ExperienceDetails({ experience }: Readonly<ExperienceDetailsProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="mt-6 relative group">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-background backdrop-blur-2xl rounded-3xl border-2 border-gray-200/50 dark:border-gray-600/50 shadow-lg shadow-gray-500/10 dark:shadow-gray-700/10 hover:shadow-gray-600/20 dark:hover:shadow-gray-600/20 hover:border-gray-300/70 dark:hover:border-gray-500/70 transition-all duration-500" />
        
        <Card className="relative border-0 bg-transparent shadow-none">
          <CardContent className="p-4 md:p-6">
          {/* Enhanced Header */}
          <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-600 bg-background shadow-md shadow-gray-400/20 dark:shadow-gray-600/20 flex-shrink-0"
              >
                <Image
                  src={experience.logo || "/placeholders/placeholder.svg"}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 leading-tight"
                >
                  {experience.title}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 sm:gap-3 text-gray-700"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-1 sm:p-1.5 rounded-full bg-red-100 dark:bg-red-900/30"
                  >
                    <Building2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  </motion.div>
                  <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800 dark:text-gray-200 truncate">{experience.company}</span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-start sm:justify-end">
              {experience.url && (
                <motion.a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative flex items-center justify-center gap-2 px-3 py-2 sm:py-2.5 bg-background border-2 border-red-400/60 dark:border-red-500/60 hover:border-red-500/80 dark:hover:border-red-400/80 transition-all duration-300 backdrop-blur-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-xs sm:text-sm font-semibold rounded-xl">
                  Ver empresa
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.div>
                  </div>
                </motion.a>
              )}
            </div>
          </div>

          {/* Enhanced Period and location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
            <motion.div 
              whileHover={{ scale: 1.02, x: 2 }}
              className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-background border border-gray-200/60 dark:border-gray-600/60 hover:border-gray-400/80 dark:hover:border-gray-500/80 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30 flex-shrink-0"
              >
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </motion.div>
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm truncate">{experience.period}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, x: 2 }}
              className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-background border border-gray-200/60 dark:border-gray-600/60 hover:border-gray-400/80 dark:hover:border-gray-500/80 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30 flex-shrink-0"
              >
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </motion.div>
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm truncate">{experience.location}</span>
            </motion.div>
          </div>

          {/* Enhanced Description */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 relative group"
          >
            <div className="relative p-3 sm:p-4 rounded-xl bg-background border border-gray-200/60 dark:border-gray-600/60 hover:border-gray-300/80 dark:hover:border-gray-500/80 transition-all duration-300 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20 flex-shrink-0"
                >
                  <Info className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 bg-clip-text text-transparent">Descripción</h4>
              </div>
              <p className="text-foreground/90 dark:text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base font-medium">
              {experience.description}
            </p>
          </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-6 relative group"
          >
            <div className="relative p-3 sm:p-4 rounded-xl bg-background border border-gray-200/60 dark:border-gray-600/60 hover:border-gray-300/80 dark:hover:border-gray-500/80 transition-all duration-300 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30 flex-shrink-0"
                >
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100">Logros y Contribuciones</h4>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <motion.div
                    key={`${experience.id}-achievement-${i}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="flex items-start gap-2 sm:gap-3 group/achievement"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="mt-0.5 sm:mt-1 p-1 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex-shrink-0 shadow-sm"
                    >
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </motion.div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xs sm:text-sm group-hover/achievement:text-gray-900 dark:group-hover/achievement:text-gray-100 transition-colors duration-300">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Skills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="relative p-3 sm:p-4 rounded-xl bg-background border border-gray-200/60 dark:border-gray-600/60 hover:border-gray-300/80 dark:hover:border-gray-500/80 transition-all duration-300 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-1.5 sm:p-2 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20 flex-shrink-0"
                >
                  <LaptopMinimal className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-gray-100">Tecnologías y Herramientas</h4>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {experience.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  whileHover={{ 
                      scale: 1.1,
                      y: -2,
                    transition: { duration: 0.2 }
                  }}
                    className="group/skill relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 dark:from-gray-500/20 to-gray-300/10 dark:to-gray-400/10 rounded-lg blur-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                    <div 
                      className={`relative inline-flex items-center rounded-lg px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 text-xs sm:text-xs md:text-sm font-bold border-2 transition-all duration-300 ${
                      experience.status === "current" 
                          ? "bg-background hover:bg-background text-red-700 dark:text-red-300 border-2 border-red-400/70 dark:border-red-500/70 hover:border-red-500/90 dark:hover:border-red-400/90 shadow-md shadow-red-200/30 dark:shadow-red-800/20 backdrop-blur-sm" 
                          : "bg-background hover:bg-background text-gray-800 dark:text-gray-200 border-2 border-gray-400/60 dark:border-gray-500/60 hover:border-gray-500/80 dark:hover:border-gray-400/80 shadow-md shadow-gray-200/30 dark:shadow-gray-600/20 backdrop-blur-sm"
                      }`}
                  >
                    {skill}
                    </div>
                </motion.div>
              ))}
            </div>
          </div>
          </motion.div>
        </CardContent>
      </Card>
      </div>
    </motion.div>
  );
}
