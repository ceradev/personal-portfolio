"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Briefcase, Calendar, Building, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  isCurrent?: boolean
}

export function ExperienceTimeline() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "exp2",
      title: "Becario en programación",
      company: "ATOS Consulting Canarias S.A.",
      location: "Santa Cruz de Tenerife, España",
      period: "Marzo 2024 - Mayo 2024",
      description: "Becario de Desarrollo Full Stack en Eviden con formación intensiva y proyecto simulado.",
      tasks: [
        "Liderazgo de un equipo de 6 desarrolladores en un proyecto simulado",
        "Diseño e implementación de un prototipo de biblioteca en línea",
        "Implementación de características de seguridad utilizando Keycloak",
        "Contenerización de la aplicación utilizando Docker para facilitar el despliegue",
      ],
      skills: ["Angular", "Spring Boot", "Keycloak", "Docker", "Git", "Agile"],
      url: "https://eviden.com",
      expanded: false,
      icon: <Building className="h-4 w-4" />,
      isCurrent: false,
    },
    {
      id: "exp1",
      title: "Junior Full-Stack Developer",
      company: "ATOS Consulting Canarias S.A. (Eviden)",
      location: "Santa Cruz de Tenerife, España",
      period: "Noviembre 2024 - Abril 2025",
      description:
        "Especializado en el desarrollo de aplicaciones web para diferentes industrias a nivel internacional.",
      tasks: [
        "Desarrollo de aplicaciones con Angular y Spring Boot para clientes internacionales",
        "Migración de sistemas heredados a frameworks modernos mejorando el rendimiento en un 40%",
        "Implementación de pipelines de CI/CD reduciendo el tiempo de despliegue en un 60%",
        "Colaboración en equipos multidisciplinarios utilizando metodologías ágiles",
      ],
      skills: ["Angular", "Spring Boot", "PostgreSQL", "CI/CD", "Docker", "Git"],
      url: "https://eviden.com",
      expanded: false,
      icon: <Briefcase className="h-4 w-4" />,
      isCurrent: false,
    },
    {
      id: "exp3",
      title: "Desarrollador de Software",
      company: "Novateq",
      location: "Remoto",
      period: "Actualidad",
      description: "Desarrollador en Novateq, enfocado en tecnologías modernas y mejora continua.",
      tasks: [
        "Contribución a proyectos de código abierto para mejorar habilidades técnicas",
        "Mentorización de desarrolladores junior en tecnologías web modernas",
        "Exploración de tecnologías y frameworks de vanguardia",
        "Desarrollo de proyectos personales para ampliar portafolio",
      ],
      skills: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"],
      expanded: true,
      icon: <Calendar className="h-4 w-4" />,
      isCurrent: true,
    },
  ])

  const toggleExpand = (id: string) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, expanded: !exp.expanded } : exp)))
  }

  return (
    <div className="relative w-full">
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
            whileHover={{ scale: 1.01 }}
          >
            {/* Experience card */}
            <div
              className={`backdrop-blur-md ${
                experience.isCurrent
                  ? "bg-primary/10 dark:bg-primary/20 border-primary"
                  : "bg-background/20 dark:bg-background/30 border-border hover:border-primary/30"
              } rounded-xl border transition-all duration-300 hover:shadow-md ${
                experience.isCurrent ? "shadow-md shadow-primary/20" : "hover:shadow-red-500/20"
              } overflow-hidden`}
            >
              {/* Card header */}
              <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${
                      experience.isCurrent ? "bg-primary/40 dark:bg-primary/50" : "bg-primary/20 dark:bg-primary/30"
                    } flex items-center justify-center`}
                  >
                    {experience.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                      {experience.isCurrent && (
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
                </div>

                <div className="flex items-center gap-2 text-sm text-foreground/60">
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

              {/* Card content */}
              <div className="px-5 pb-2">
                <p className="text-foreground/80 text-sm mb-3">{experience.description}</p>
              </div>

              {/* Expandable content */}
              <div className={`px-5 pb-5 ${experience.expanded ? "block" : "hidden"}`}>
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
                            experience.isCurrent
                              ? "bg-primary/30 hover:bg-primary/40"
                              : "bg-primary/20 hover:bg-primary/30"
                          } text-foreground border-none font-normal`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle button */}
              <div className="px-5 pb-3 flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/60 hover:text-foreground h-6 rounded-full px-2"
                  onClick={() => toggleExpand(experience.id)}
                >
                  {experience.expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Timeline vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20 z-0"></div>
    </div>
  )
}
