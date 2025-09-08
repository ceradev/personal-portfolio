"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"
import { 
  Calendar, 
  MapPin, 
  ArrowUpRight,
  ChevronDown,
  Building2,
  Star,
  Zap,
  Rocket,
  BadgeCheck,
  Info,
  LaptopMinimal,
  Target,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface Experience {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly location: string
  readonly period: string
  readonly description: string
  readonly achievements: string[]
  readonly skills: string[]
  readonly url?: string
  readonly status: "completed" | "current"
  readonly logo: string
}

const EXPERIENCES: Experience[] = [
  {
    id: "current",
    title: "Desarrollador de Software",
    company: "Novateq",
    location: "Remoto",
    period: "Actualidad",
    description: "Desarrollador enfocado en tecnologías modernas y mejora continua, trabajando en proyectos individuales y grupales con aprendizaje continuo de nuevas tecnologías.",
    achievements: [
      "Desarrollo de aplicaciones web escalables con React y Next.js",
      "Implementación de arquitecturas serverless en AWS",
      "Optimización de rendimiento que mejoró la velocidad de carga en 40%",
      "Integración de APIs REST y GraphQL para múltiples servicios"
    ],
    skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
    status: "current",
    logo: "/placeholder-logo.png"
  },
  {
    id: "atos-dev",
    title: "Desarrollador Full Stack",
    company: "ATOS Consulting Canarias S.A. (Eviden)",
    location: "Santa Cruz de Tenerife",
    period: "Nov 2024 - Abr 2025",
    description: "Junior Full-Stack Developer especializado en desarrollo de aplicaciones web usando Angular, Spring Boot y PostgreSQL, con enfoque en herramientas internas y automatización.",
    achievements: [
      "Desarrollo de herramientas internas que redujeron el tiempo de procesamiento en 30%",
      "Implementación de pipelines CI/CD con GitLab para automatización de despliegues",
      "Creación de microservicios con Spring Boot para arquitectura distribuida",
      "Integración de soluciones de IA para automatización de procesos"
    ],
    skills: ["Angular", "Spring Boot", "PostgreSQL", "GitLab", "Kubernetes", "IA"],
    url: "https://eviden.com",
    status: "completed",
    logo: "/atos-abstract.png"
  },
  {
    id: "atos-intern",
    title: "Becario en Programación",
    company: "ATOS Consulting Canarias S.A.",
    location: "Santa Cruz de Tenerife",
    period: "Mar 2024 - May 2024",
    description: "Becario de Desarrollo Full Stack con formación intensiva en tecnologías web y experiencia práctica en proyectos simulados con metodologías Agile.",
    achievements: [
      "Completación exitosa de 3 proyectos simulados usando metodologías Agile",
      "Desarrollo de una aplicación web completa con Java y Angular",
      "Participación activa en ceremonias Scrum y revisiones de código",
      "Aprendizaje acelerado de tecnologías enterprise en entorno profesional"
    ],
    skills: ["Java", "JavaScript", "Angular", "Spring Boot", "GIT", "Agile"],
    url: "https://eviden.com",
    status: "completed",
    logo: "/atos-abstract.png"
  }
] as const

interface TimelineNodeProps {
  readonly experience: Experience
  readonly index: number
  readonly isActive: boolean
  readonly onClick: () => void
}

function TimelineNode({ experience, index, isActive, onClick }: TimelineNodeProps) {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Enhanced Timeline dot */}
      <motion.div
        className={`relative z-10 w-20 h-20 rounded-full border-4 cursor-pointer transition-all duration-500 ${
          isActive 
            ? "border-red-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-md shadow-red-500/40" 
            : "border-gray-300 bg-gradient-to-br from-white to-gray-100 hover:border-red-400 hover:from-gray-50 hover:to-gray-200 shadow-md shadow-gray-400/20 hover:shadow-red-400/30"
        }`}
        onClick={onClick}
        whileHover={{ 
          scale: 1.15,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Enhanced Company logo */}
        <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={experience.company}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Pulse effect for active state */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
      
      {/* Enhanced Company name and period */}
      <motion.div
        className="text-center mt-4 max-w-28 md:max-w-36 group-hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: index * 0.15 + 0.3,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.h4 
          className={`text-sm md:text-base font-bold truncate transition-colors duration-300 ${
            isActive 
              ? "text-red-600" 
              : "text-gray-800 group-hover:text-red-500"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {experience.company.split(' ')[0]}
        </motion.h4>
        <motion.p 
          className="text-xs md:text-sm text-gray-600 mt-2 leading-tight font-medium"
          whileHover={{ scale: 1.02 }}
        >
          {experience.period}
        </motion.p>
        
        {/* Active indicator line */}
        {isActive && (
          <motion.div
            className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        )}
      </motion.div>
    </div>
  )
}

interface ExperienceDetailsProps {
  readonly experience: Experience
}

function ExperienceDetails({ experience }: ExperienceDetailsProps) {
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
  )
}

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<string | null>(EXPERIENCES[0].id)

  const handleNodeClick = (experienceId: string) => {
    setActiveExperience(activeExperience === experienceId ? null : experienceId)
  }

  const selectedExperience = EXPERIENCES.find(exp => exp.id === activeExperience)

  return (
    <SectionTransition id="experience" className="py-20 my-8 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-blue-500/8 to-purple-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -15, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-20 right-1/4 w-16 h-16 bg-gradient-to-r from-green-500/8 to-primary/6 rounded-full blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionTitle title="Trayectoria Profesional" />
        
        {/* Subtitle with animation and enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-16 relative"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-6">
          </div>
            
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
            Mi trayectoria profesional y{" "}
              <span className="relative">
                <span className="text-red-600 font-bold">
                  experiencias clave
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
                />
              </span>{" "}
            en el desarrollo de software
          </p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2"
            >
              <Rocket className="h-4 w-4 text-red-500 animate-bounce" />
            Haz clic en cualquier punto del timeline para ver los detalles
            </motion.p>
          </div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Enhanced Timeline line */}
          <motion.div
            className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-gray-300 via-red-500 to-gray-300 rounded-full shadow-lg shadow-gray-400/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              ease: "easeInOut"
            }}
            viewport={{ once: true }}
          />
          
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute top-10 left-4 right-4 md:left-8 md:right-8 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Timeline nodes */}
          <div className="flex justify-between items-start relative px-2 md:px-0 overflow-x-auto scrollbar-hide">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="flex-1 flex justify-center min-w-[120px] md:min-w-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TimelineNode
                  experience={experience}
                  index={index}
                  isActive={activeExperience === experience.id}
                  onClick={() => handleNodeClick(experience.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Experience details accordion */}
          <AnimatePresence mode="wait">
            {selectedExperience && (
              <ExperienceDetails experience={selectedExperience} />
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Mobile timeline hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center md:hidden"
        >
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-white border border-gray-200 backdrop-blur-sm shadow-sm">
            <motion.div
              animate={{ 
                y: [0, -3, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ChevronDown className="h-4 w-4 text-red-500" />
            </motion.div>
            <p className="text-sm text-gray-700 font-medium">
            Desliza horizontalmente para ver todas las experiencias
          </p>
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <BadgeCheck className="h-3 w-3 text-red-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  )
}
