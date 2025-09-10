"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, Building, MapPin, ExternalLink, ChevronDown, ChevronUp, Check } from "lucide-react"
import { Button } from "@/components/ui/display/button"
import { Badge } from "@/components/ui/display/badge"
import { useMobile } from "@/hooks/use-mobile"

interface Experience {
  id: string
  title: string
  company: string
  location?: string
  period: string
  description: string
  tasks: string[]
  skills?: string[]
  url?: string
  expanded?: boolean
  icon?: React.ReactNode
  status: "completed" | "current" | "future"
}

export function ExperienceStepper() {
  const isMobile = useMobile()

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "exp2",
      title: "Becario en programación",
      company: "ATOS Consulting Canarias S.A.",
      location: "Santa Cruz de Tenerife, España",
      period: "Marzo 2024 - Mayo 2024",
      description: "Becario de Desarrollo Full Stack en Eviden con formación intensiva y proyecto simulado.",
      tasks: [
        "Formación intensiva de 4 semanas en tecnologías web",
        "Participación en proyecto simulado durante 4 semanas",
        "Experiencia con Java, JavaScript, Angular y Spring Boot",
        "Trabajo con metodologías Agile y control de versiones GIT",
      ],
      skills: ["Java", "JavaScript", "Angular", "Spring Boot", "GIT", "Agile"],
      url: "https://eviden.com",
      expanded: false,
      icon: <Building className="h-4 w-4" />,
      status: "completed",
    },
    {
      id: "exp1",
      title: "Desarrollador Full Stack",
      company: "ATOS Consulting Canarias S.A. (Eviden)",
      location: "Santa Cruz de Tenerife, España",
      period: "Noviembre 2024 - Abril 2025",
      description:
        "Junior Full-Stack Developer en Eviden, con experiencia en apps web usando Angular, Spring Boot y PostgreSQL.",
      tasks: [
        "Creación de herramientas internas para mejorar procesos",
        "Realización de auditorías en GitLab y Kubernetes",
        "Trabajo con IA, prompting y automatización",
        "Desarrollo en entornos de transformación tecnológica",
      ],
      skills: ["Angular", "Spring Boot", "PostgreSQL", "GitLab", "Kubernetes", "IA"],
      url: "https://eviden.com",
      expanded: false,
      icon: <Briefcase className="h-4 w-4" />,
      status: "completed",
    },
    {
      id: "exp3",
      title: "Desarrollador de Software",
      company: "Novateq",
      location: "Remoto",
      period: "Actualidad",
      description: "Desarrollador en Novateq, enfocado en tecnologías modernas y mejora continua.",
      tasks: [
        "Participación en la organización Nova Devs",
        "Desarrollo de proyectos individuales para crecimiento profesional",
        "Colaboración en proyectos grupales para mejorar habilidades de trabajo en equipo",
        "Aprendizaje continuo de nuevas tecnologías y metodologías",
      ],
      skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      expanded: true,
      icon: <Calendar className="h-4 w-4" />,
      status: "current",
    },
  ])

  const toggleExpand = (id: string) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, expanded: !exp.expanded } : exp)))
  }

  // Función para obtener el color del paso según su estado
  const getStepColor = (status: Experience["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500 dark:bg-green-600"
      case "current":
        return "bg-primary"
      case "future":
        return "bg-gray-400 dark:bg-gray-600"
      default:
        return "bg-gray-400 dark:bg-gray-600"
    }
  }

  // Función para obtener el icono del paso según su estado
  const getStepIcon = (status: Experience["status"], icon: React.ReactNode) => {
    switch (status) {
      case "completed":
        return <Check className="h-4 w-4 text-white" />
      case "current":
        return <div className="h-4 w-4 text-white">{icon}</div>
      case "future":
        return <div className="h-4 w-4 text-white/70">{icon}</div>
      default:
        return <div className="h-4 w-4 text-white/70">{icon}</div>
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        {/* Línea vertical conectora - ajustada para móvil */}
        <div
          className={`absolute ${isMobile ? "left-4" : "left-6"} top-8 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-primary to-gray-400 dark:from-green-600 dark:via-primary dark:to-gray-600`}
        ></div>

        {/* Experiencias como pasos */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-100px" }}
              className={`relative ${isMobile ? "pl-12" : "pl-16"}`}
            >
              {/* Indicador de paso (círculo con icono) - tamaño reducido en móvil */}
              <motion.div
                className={`absolute left-0 top-0 ${isMobile ? "w-8 h-8" : "w-12 h-12"} rounded-full ${getStepColor(
                  experience.status,
                )} flex items-center justify-center shadow-lg z-10 ${
                  experience.status === "current" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {getStepIcon(experience.status, experience.icon)}
              </motion.div>

              {/* Contenido del paso */}
              <motion.div
                className={`backdrop-blur-md ${
                  experience.status === "current"
                    ? "bg-primary/10 dark:bg-primary/20"
                    : "bg-background/20 dark:bg-background/30"
                } rounded-xl border ${
                  experience.status === "completed"
                    ? "border-green-500/30 dark:border-green-600/30"
                    : experience.status === "current"
                      ? "border-primary"
                      : "border-gray-400/30 dark:border-gray-600/30"
                } overflow-hidden transition-all duration-300 hover:shadow-md ${
                  experience.status === "completed"
                    ? "hover:shadow-green-500/10"
                    : experience.status === "current"
                      ? "shadow-md shadow-primary/20 hover:shadow-primary/30"
                      : "hover:shadow-gray-400/10"
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Cabecera del paso - reorganizada para móvil */}
                <div className={`p-4 sm:p-5 flex flex-col gap-2`}>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`${isMobile ? "text-base" : "text-lg"} font-semibold text-foreground`}>
                        {experience.title}
                      </h3>
                      {experience.status === "current" && (
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                          Actual
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm text-foreground/70">
                      <span className="font-medium">{experience.company}</span>
                      {experience.url && (
                        <a
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 inline-flex items-center"
                        >
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1 text-primary" />
                      <span>{experience.period}</span>
                    </div>
                    {experience.location && (
                      <div className="flex items-center">
                        <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
                        <span>{experience.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descripción breve */}
                <div className="px-4 sm:px-5 pb-2">
                  <p className="text-foreground/80 text-sm mb-3">{experience.description}</p>
                </div>

                {/* Contenido expandible */}
                <div className={`px-4 sm:px-5 pb-5 ${experience.expanded ? "block" : "hidden"}`}>
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-foreground mb-2">Responsabilidades</h4>
                    <ul className="space-y-2 pl-5 list-disc text-sm text-foreground/80">
                      {experience.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>

                  {experience.skills && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            className={`${
                              experience.status === "completed"
                                ? "bg-green-500/20 hover:bg-green-500/30"
                                : experience.status === "current"
                                  ? "bg-primary/30 hover:bg-primary/40"
                                  : "bg-gray-400/20 hover:bg-gray-400/30"
                            } text-foreground border-none font-normal`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Botón para expandir/contraer */}
                <div className="px-4 sm:px-5 pb-3 flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground/60 hover:text-foreground h-6 rounded-full px-2"
                    onClick={() => toggleExpand(experience.id)}
                  >
                    {experience.expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </motion.div>

              {/* Línea de conexión al siguiente paso (excepto el último) */}
              {index < experiences.length - 1 && (
                <div
                  className={`absolute ${isMobile ? "left-4" : "left-6"} top-8 bottom-0 w-0.5 bg-gradient-to-b from-current to-next h-full`}
                ></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
