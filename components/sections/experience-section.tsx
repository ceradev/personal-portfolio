"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "@/components/utils/section-title"
import { SectionTransition } from "@/components/utils/section-transition"
import { 
  Calendar, 
  MapPin, 
  Briefcase,
  Sparkles,
  ArrowUpRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Experience {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly location: string
  readonly period: string
  readonly description: string
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
    skills: ["Java", "JavaScript", "Angular", "Spring Boot", "GIT", "Agile"],
    url: "https://eviden.com",
    status: "completed",
    logo: "/atos-abstract.png"
  }
] as const

interface ExperienceCardProps {
  readonly experience: Experience
  readonly index: number
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-background/40 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-6">
          {/* Header con logo y status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Logo de la empresa */}
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border/50 bg-background/50 flex-shrink-0">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={experience.company}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {experience.title}
                </h3>
                <p className="text-sm text-foreground/70 font-medium">
                  {experience.company}
                </p>
              </div>
            </div>
            
            {/* Status badge y link */}
            <div className="flex items-center gap-2">
              {experience.status === "current" && (
                <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Actual
                </span>
              )}
              {experience.url && (
                <motion.a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Información de periodo y ubicación */}
          <div className="flex items-center gap-4 mb-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-sm text-foreground/80 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: i * 0.05 + 0.2,
                  duration: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  className={`${
                    experience.status === "current" 
                      ? "bg-primary/15 hover:bg-primary/25 text-primary" 
                      : "bg-foreground/10 hover:bg-foreground/15 text-foreground/80"
                  } transition-all duration-300 text-xs px-2 py-1`}
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <SectionTransition id="experience" className="py-20 my-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionTitle title="Experiencia Profesional" />
        
        {/* Subtitle with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Mi trayectoria profesional y{" "}
            <span className="text-primary font-semibold">experiencias clave</span>{" "}
            en el desarrollo de software
          </p>
        </motion.div>

        {/* Experience cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
