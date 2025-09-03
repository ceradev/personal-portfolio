"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, ExternalLink, GraduationCap, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  period: string
  year: string
  description: string
  achievements?: string[]
  skills?: string[]
  url?: string
  logo?: string
}

export function EducationCards() {
  // Actualizar el array educationData con la información correcta
  const educationData: Education[] = [
    {
      id: "ed1",
      institution: "I.E.S Las Galletas",
      degree: "Formación Superior",
      field: "Desarrollo de Aplicaciones Web",
      location: "Tenerife, España",
      period: "2022 - 2024",
      year: "2024",
      description:
        "Formación Superior en Desarrollo de Aplicaciones Web con matrícula de honor. Adquisición de habilidades técnicas en desarrollo web frontend y backend, bases de datos, y metodologías de desarrollo.",
      achievements: [
        "Matrícula de honor",
        "Desarrollo de proyectos web completos",
        "Implementación de aplicaciones con tecnologías modernas",
      ],
      skills: ["HTML/CSS", "JavaScript", "Java", "SQL", "PHP", "Frameworks Web"],
      logo: "/ies-letters.png",
    },
    {
      id: "ed3",
      institution: "ATOS Consulting Canarias S.A.",
      degree: "Prácticas no laborales",
      field: "Desarrollo Full Stack",
      location: "Santa Cruz de Tenerife, España",
      period: "Marzo 2024 - Mayo 2024",
      year: "2024",
      description:
        "Becario de Desarrollo Full Stack en Eviden: formación intensiva de 4 semanas seguida de 4 semanas de proyecto simulado. Experiencia con Java, JavaScript, Angular, Spring Boot, GIT y metodologías Agile.",
      achievements: [
        "Completé formación intensiva en tecnologías empresariales",
        "Participé en proyecto simulado con metodologías ágiles",
        "Desarrollé aplicaciones con Angular y Spring Boot",
      ],
      skills: ["Angular", "Spring Boot", "Java", "JavaScript", "Git", "Metodologías Ágiles", "PostgreSQL"],
      url: "https://eviden.com",
      logo: "/atos-abstract.png",
    },
    {
      id: "ed2",
      institution: "I.E.S San Miguel",
      degree: "Bachillerato",
      field: "Ciencias",
      location: "Tenerife, España",
      period: "2020 - 2022",
      year: "2022",
      description:
        "Graduado en bachillerato de ciencias, con formación en matemáticas, física y otras disciplinas científicas que proporcionaron una base sólida para mi posterior formación en desarrollo web.",
      achievements: [
        "Graduado con buenas calificaciones",
        "Participación en proyectos científicos",
        "Base sólida en matemáticas y lógica",
      ],
      skills: ["Matemáticas", "Física", "Lógica", "Resolución de Problemas"],
      logo: "/ies-letters.png",
    },
  ]

  // Agrupar educación por año
  const educationByYear: Record<string, Education[]> = {}
  educationData.forEach((edu) => {
    if (!educationByYear[edu.year]) {
      educationByYear[edu.year] = []
    }
    educationByYear[edu.year].push(edu)
  })

  // Ordenar años de más reciente a más antiguo
  const sortedYears = Object.keys(educationByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {sortedYears.map((year) => (
        <div key={year} className="space-y-6">
          {/* Año con línea decorativa */}
          <div className="flex items-center gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-semibold px-4 py-1 rounded-full text-sm">
              {year}
            </div>
            <div className="h-px flex-grow bg-neutral-200 dark:bg-neutral-800"></div>
          </div>

          {/* Tarjetas de educación para este año */}
          <div className="grid grid-cols-1 gap-6">
            {educationByYear[year].map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-100px" }}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Logo de la institución (lado izquierdo) */}
                  <div className="md:w-1/5 p-6 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50">
                    {education.logo ? (
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={education.logo || "/placeholder.svg"}
                          alt={education.institution}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-red-600 dark:text-red-400" />
                      </div>
                    )}
                  </div>

                  {/* Detalles de la educación (lado derecho) */}
                  <div className="md:w-4/5 p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                            {education.degree}
                          </h3>
                          {education.url && (
                            <a
                              href={education.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-lg text-neutral-700 dark:text-neutral-300 font-medium">{education.field}</p>
                        <p className="text-neutral-600 dark:text-neutral-400">{education.institution}</p>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-red-500 dark:text-red-400" />
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-red-500 dark:text-red-400" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 mb-4">{education.description}</p>

                    {education.achievements && education.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 flex items-center mb-2">
                          <Award className="h-4 w-4 mr-2 text-red-500 dark:text-red-400" />
                          Logros
                        </h4>
                        <ul className="space-y-1 pl-6 list-disc text-sm text-neutral-700 dark:text-neutral-300">
                          {education.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {education.skills && education.skills.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                          Habilidades adquiridas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {education.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              className="bg-red-50 hover:bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30 border-none"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
