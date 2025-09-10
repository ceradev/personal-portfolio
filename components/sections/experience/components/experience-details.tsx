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
      <div className="mt-8 relative group">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-gray-50/90 to-white/95 backdrop-blur-2xl rounded-3xl border-2 border-gray-200 shadow-lg shadow-gray-500/20 hover:shadow-gray-600/30 hover:border-gray-300 transition-all duration-500" />
        
        <Card className="relative border-0 bg-transparent shadow-none">
          <CardContent className="p-6 md:p-10">
          {/* Enhanced Header */}
          <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-6">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-gray-300 bg-gradient-to-br from-white to-gray-100 shadow-md shadow-gray-400/20 flex-shrink-0"
              >
                <Image
                  src={experience.logo || "/placeholder.svg"}
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
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                >
                  {experience.title}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-1.5 rounded-full bg-red-100"
                  >
                    <Building2 className="h-4 w-4 text-red-600 flex-shrink-0" />
                  </motion.div>
                  <span className="font-semibold text-base md:text-lg text-gray-800">{experience.company}</span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-start md:justify-end">
              {experience.url && (
                <motion.a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-100 to-white border border-gray-300 hover:border-red-400 rounded-xl text-red-600 hover:text-red-700 transition-all duration-300 text-sm md:text-base font-semibold">
                  Ver empresa
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.a>
              )}
            </div>
          </div>

          {/* Enhanced Period and location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-8">
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-100 to-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30"
              >
              <Calendar className="h-4 w-4 text-white flex-shrink-0" />
              </motion.div>
              <span className="font-semibold text-gray-800 text-sm md:text-base">{experience.period}</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02, x: 5 }}
              className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-100 to-white border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30"
              >
              <MapPin className="h-4 w-4 text-white flex-shrink-0" />
              </motion.div>
              <span className="font-semibold text-gray-800 text-sm md:text-base">{experience.location}</span>
            </motion.div>
          </div>

          {/* Enhanced Description */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 relative group"
          >
            <div className="relative p-6 rounded-xl bg-white/90 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                >
                  <Info className="h-5 w-5 text-primary" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Descripción</h4>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg font-medium">
              {experience.description}
            </p>
          </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-8 relative group"
          >
            <div className="relative p-6 rounded-xl bg-white/90 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-md shadow-red-500/30"
                >
                  <Target className="h-5 w-5 text-white" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">Logros y Contribuciones</h4>
              </div>
              <div className="space-y-3">
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
                    className="flex items-start gap-3 group/achievement"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 p-1 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex-shrink-0 shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </motion.div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover/achievement:text-gray-900 transition-colors duration-300">
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
            <div className="relative p-6 rounded-xl bg-white/90 border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 shadow-md shadow-primary/20"
                >
                  <LaptopMinimal className="h-5 w-5 text-primary" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">Tecnologías y Herramientas</h4>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
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
                      scale: 1.15,
                      y: -5,
                    transition: { duration: 0.2 }
                  }}
                    className="group/skill relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-300/10 rounded-xl blur-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                    <div 
                      className={`relative inline-flex items-center rounded-xl px-3 md:px-4 py-2 md:py-2.5 text-sm md:text-base font-bold border-2 transition-all duration-300 ${
                      experience.status === "current" 
                          ? "bg-gradient-to-r from-red-100 to-red-50 hover:from-red-200 hover:to-red-100 text-red-700 border-red-300 shadow-md shadow-red-200/50" 
                          : "bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-800 border-gray-300 shadow-md shadow-gray-200/50"
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
