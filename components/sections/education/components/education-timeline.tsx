"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/display/badge"

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  startDate: string
  endDate: string
  description: string
  technologies?: string[]
  logo: string
  year: number
}

export function EducationTimeline() {
  // Actualizar el array educationData con la información correcta
  const educationData: Education[] = [
    {
      id: "ies-galletas",
      institution: "I.E.S Las Galletas",
      degree: "Formación Superior",
      field: "Desarrollo de Aplicaciones Web",
      location: "Tenerife, España",
      startDate: "Sep 2022",
      endDate: "Jun 2024",
      description: "Formación Superior en Desarrollo de Aplicaciones Web con matrícula de honor.",
      technologies: ["JavaScript", "Java", "PHP", "HTML/CSS", "SQL", "Git"],
      logo: "/ies-letters.png",
      year: 2024,
    },
    {
      id: "atos-practicas",
      institution: "ATOS Consulting Canarias S.A.",
      degree: "Prácticas no laborales",
      field: "Desarrollo Full Stack",
      location: "Santa Cruz de Tenerife, España",
      startDate: "Mar 2024",
      endDate: "May 2024",
      description: "Formación intensiva y proyecto simulado en desarrollo full stack empresarial.",
      technologies: ["Angular", "Spring Boot", "Java", "JavaScript", "Git", "PostgreSQL"],
      logo: "/atos-abstract.png",
      year: 2024,
    },
    {
      id: "ies-san-miguel",
      institution: "I.E.S San Miguel",
      degree: "Bachillerato",
      field: "Ciencias",
      location: "Tenerife, España",
      startDate: "Sep 2020",
      endDate: "Jun 2022",
      description: "Graduado en bachillerato de ciencias con enfoque en matemáticas y física.",
      technologies: ["Matemáticas", "Física", "Química", "Biología"],
      logo: "/ies-letters.png",
      year: 2022,
    },
  ]

  return (
    <div className="relative py-8 w-full">
      {/* Timeline central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/20 z-0"></div>

      {/* Education items */}
      <div className="relative z-10">
        {educationData.map((education, index) => (
          <motion.div
            key={education.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary/80 shadow-md shadow-primary/20 z-10"></div>

            {/* Year indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-7 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/20 text-xs font-medium text-foreground/80">
              {education.year}
            </div>

            {/* Content card - alternating sides */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-background/30 backdrop-blur-sm rounded-lg border border-border/50 p-4 hover:border-primary/30 transition-all duration-300"
              >
                {/* Institution and logo */}
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <div className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/50">
                      <Image
                        src={education.logo || "/placeholder.svg"}
                        alt={education.institution}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className={`text-sm font-semibold text-foreground ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                    {education.institution}
                  </h3>
                </div>

                {/* Degree and field */}
                <div className="mb-2">
                  <h4 className="text-xs font-medium text-foreground/90">{education.degree}</h4>
                  <p className="text-xs text-foreground/70">{education.field}</p>
                </div>

                {/* Date and location */}
                <div className="flex flex-col gap-1 mb-2 text-[10px] text-foreground/60">
                  <div className={`flex items-center gap-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <Calendar className="h-3 w-3" />
                    <span>
                      {education.startDate} - {education.endDate}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <MapPin className="h-3 w-3" />
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* Technologies */}
                {education.technologies && (
                  <div className={`flex flex-wrap gap-1 mt-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    {education.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-primary/10 hover:bg-primary/20 text-foreground/80 text-[10px] px-1.5 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Empty space for the other side */}
            <div className="w-5/12"></div>
          </motion.div>
        ))}
      </div>

      {/* Mobile view - stacked timeline */}
      <div className="md:hidden space-y-6 mt-8 w-full">
        {educationData.map((education, index) => (
          <motion.div
            key={`mobile-${education.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-8 border-l-2 border-primary/20"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-primary/80 shadow-md shadow-primary/20"></div>

            {/* Year indicator */}
            <div className="absolute left-0 transform -translate-x-1/2 top-6 bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-primary/20 text-xs font-medium text-foreground/80">
              {education.year}
            </div>

            <div className="bg-background/30 backdrop-blur-sm rounded-lg border border-border/50 p-3 hover:border-primary/30 transition-all duration-300">
              {/* Institution and logo */}
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-border/50">
                  <Image
                    src={education.logo || "/placeholder.svg"}
                    alt={education.institution}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xs font-semibold text-foreground">{education.institution}</h3>
              </div>

              {/* Degree and field */}
              <div className="mb-2">
                <h4 className="text-xs font-medium text-foreground/90">{education.degree}</h4>
                <p className="text-[10px] text-foreground/70">{education.field}</p>
              </div>

              {/* Date and location */}
              <div className="flex flex-col gap-1 mb-2 text-[10px] text-foreground/60">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {education.startDate} - {education.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Technologies */}
              {education.technologies && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {education.technologies.map((tech) => (
                    <Badge
                      key={`mobile-tech-${tech}`}
                      className="bg-primary/10 hover:bg-primary/20 text-foreground/80 text-[10px] px-1.5 py-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
