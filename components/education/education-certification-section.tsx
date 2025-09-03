"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, BadgeIcon as Certificate, ExternalLink, Code, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface EducationItem {
  id: string
  title: string
  institution: string
  location: string
  period: string
  description: string
  detailedDescription?: string
  achievements?: string[]
  technologies?: string[]
  url?: string
}

interface CertificationItem {
  id: string
  title: string
  issuer: string
  date: string
  expiry?: string
  description: string
  skills?: string[]
  url?: string
  hours?: string
  official?: boolean
}

export function EducationCertificationSection() {
  const educationData: EducationItem[] = [
    {
      id: "ed1",
      title: "Desarrollo de Aplicaciones Web",
      institution: "I.E.S Las Galletas",
      location: "Tenerife, España",
      period: "2022 - 2024",
      description: "Formación Superior en Desarrollo de Aplicaciones Web con matrícula de honor.",
      detailedDescription:
        "Formación completa en desarrollo de aplicaciones web, abarcando tanto tecnologías frontend como backend. El programa incluyó formación en lenguajes de programación como JavaScript, Java y PHP, así como en bases de datos SQL y NoSQL. También se abordaron metodologías de desarrollo ágil y gestión de proyectos.",
      achievements: [
        "Matrícula de honor en la formación",
        "Desarrollo de proyectos web completos desde el concepto hasta la implementación",
        "Implementación de aplicaciones con arquitecturas modernas",
        "Participación en hackathons y eventos de programación",
      ],
      technologies: [
        "JavaScript",
        "Java",
        "PHP",
        "HTML/CSS",
        "SQL",
        "Git",
        "React",
        "Angular",
        "Spring Boot",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      id: "ed2",
      title: "Bachillerato de Ciencias",
      institution: "I.E.S San Miguel",
      location: "Tenerife, España",
      period: "2020 - 2022",
      description: "Graduado en bachillerato de ciencias.",
      detailedDescription:
        "Formación en bachillerato con especialización en ciencias, incluyendo matemáticas, física, química y biología. Esta formación me proporcionó una base sólida en pensamiento lógico y resolución de problemas, habilidades fundamentales para mi posterior desarrollo como programador.",
      achievements: [
        "Graduado con buenas calificaciones",
        "Participación en proyectos científicos",
        "Desarrollo de habilidades analíticas y de resolución de problemas",
      ],
      technologies: ["Matemáticas", "Física", "Química", "Biología", "Lógica", "Análisis de datos"],
    },
  ]

  const certificationData: CertificationItem[] = [
    {
      id: "cert-atos",
      title: "Certificado de Prácticas no Laborales",
      issuer: "ATOS Consulting Canarias S.A.",
      date: "Mayo 2025",
      description: "Certificado oficial de prácticas no laborales en desarrollo y transformación tecnológica.",
      skills: [
        "IA y técnicas de prompting",
        "Transformación Tecnológica",
        "Spring",
        "Angular",
        "LogLab",
        "Auditoría para Gitlab",
        "Kubernetes",
      ],
      url: "https://eviden.com",
      hours: "720 horas",
      official: true,
    },
    {
      id: "cert1",
      title: "React Developer Certification",
      issuer: "Meta",
      date: "Junio 2023",
      description: "Certificación oficial de Meta para desarrollo con React y React Native.",
      skills: ["React", "React Native", "JavaScript", "Redux"],
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    },
    {
      id: "cert2",
      title: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      date: "Marzo 2023",
      expiry: "Marzo 2026",
      description: "Certificación que valida conocimientos en desarrollo y despliegue de aplicaciones en AWS.",
      skills: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"],
      url: "https://aws.amazon.com/certification/certified-developer-associate/",
    },
    {
      id: "cert3",
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "Enero 2023",
      description: "Certificación que demuestra conocimiento de la teoría y principios de Scrum.",
      skills: ["Scrum", "Agile", "Project Management"],
      url: "https://www.scrum.org/professional-scrum-certifications/professional-scrum-master-i-certification",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Education Column */}
        <div>
          <div className="mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Educación</h2>
          </div>

          <div className="space-y-4">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
                className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border/30 dark:border-border/40 p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary/70 hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-foreground/90 font-medium">{item.institution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-foreground/80 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/85 dark:text-foreground/90">
                      {item.detailedDescription || item.description}
                    </p>
                  </div>

                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                        <Award className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                        Logros
                      </h4>
                      <ul className="space-y-1 pl-5 list-disc text-sm text-foreground/85 dark:text-foreground/90">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                        <Code className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                        Tecnologías aprendidas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            className="bg-primary/10 hover:bg-primary/20 text-primary/90 dark:bg-primary/20 dark:text-primary-foreground border-none text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="mb-6 flex items-center">
            <Certificate className="h-6 w-6 text-red-500 dark:text-red-400 mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Certificaciones</h2>
          </div>

          <div className="space-y-4">
            {certificationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
                className={`backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border ${
                  item.official ? "border-red-300/50 dark:border-red-700/50" : "border-border/30 dark:border-border/40"
                } p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary/70 hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-foreground/90 font-medium">{item.issuer}</p>
                  </div>

                  {item.official && (
                    <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-none">
                      Oficial
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-foreground/80 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                    <span>
                      {item.date}
                      {item.expiry && ` - Válido hasta ${item.expiry}`}
                    </span>
                  </div>

                  {item.hours && (
                    <div className="flex items-center">
                      <span className="text-primary/70 mr-1.5">•</span>
                      <span>{item.hours}</span>
                    </div>
                  )}
                </div>

                <p className="text-sm text-foreground/85 dark:text-foreground/90 mb-3">{item.description}</p>

                {item.id === "cert-atos" && (
                  <div className="mb-3 text-sm text-foreground/85 dark:text-foreground/90">
                    <p className="font-medium mb-1">Conocimientos adquiridos:</p>
                    <ul className="space-y-1 pl-5 list-disc">
                      <li>Los fundamentos de la IA y las técnicas de prompting</li>
                      <li>Transformación Tecnológica: Desarrollo en entornos modernos con Spring y Angular</li>
                      <li>LogLab: Auditoría inteligente para Gitlab y Kubernetes</li>
                    </ul>
                  </div>
                )}

                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        className="bg-primary/10 hover:bg-primary/20 text-primary/90 dark:bg-primary/20 dark:text-primary-foreground border-none text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
