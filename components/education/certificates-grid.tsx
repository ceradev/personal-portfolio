"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ExternalLink, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Certificate {
  id: string
  title: string
  provider: string
  date: string
  description?: string
  skills: string[]
  logo: string
  url?: string
  featured?: boolean
}

export function CertificatesGrid() {
  const certificatesData: Certificate[] = [
    {
      id: "aws-cloud-practitioner",
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2024",
      description: "Fundamentos de servicios y arquitectura en la nube AWS",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"],
      logo: "/aws-logo.png",
      url: "#",
      featured: true,
    },
    {
      id: "meta-frontend",
      title: "Meta Front-End Developer",
      provider: "Meta",
      date: "2024",
      description: "Certificación profesional en desarrollo frontend moderno",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
      logo: "/meta-logo-abstract.png",
      url: "#",
      featured: true,
    },
    {
      id: "udemy-fullstack",
      title: "Full Stack Web Development",
      provider: "Udemy",
      date: "2023",
      description: "Desarrollo completo de aplicaciones web modernas",
      skills: ["Node.js", "MongoDB", "Express", "React"],
      logo: "/udemy-logo.png",
      url: "#",
    },
    {
      id: "udemy-javascript",
      title: "JavaScript Avanzado",
      provider: "Udemy",
      date: "2023",
      description: "Conceptos avanzados y patrones en JavaScript",
      skills: ["JavaScript", "ES6+", "Async/Await", "Design Patterns"],
      logo: "/udemy-logo.png",
      url: "#",
    },
    {
      id: "udemy-react",
      title: "React & Redux",
      provider: "Udemy",
      date: "2023",
      description: "Desarrollo de aplicaciones React con gestión de estado",
      skills: ["React", "Redux", "Hooks", "Context API"],
      logo: "/udemy-logo.png",
      url: "#",
    },
    {
      id: "udemy-typescript",
      title: "TypeScript Fundamentals",
      provider: "Udemy",
      date: "2023",
      description: "Tipos estáticos para aplicaciones JavaScript escalables",
      skills: ["TypeScript", "Type Safety", "Interfaces", "Generics"],
      logo: "/udemy-logo.png",
      url: "#",
    },
  ]

  return (
    <div className="py-6">
      {/* Featured Certificates - Destacados */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-primary/80" />
          <h3 className="text-xl font-semibold text-foreground/90">Certificaciones Destacadas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificatesData.filter(cert => cert.featured).map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-background/40 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {/* Logo */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-border/50 flex-shrink-0">
                      <Image
                        src={certificate.logo || "/placeholder.svg"}
                        alt={certificate.provider}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground text-base leading-tight">
                            {certificate.title}
                          </h4>
                          <p className="text-sm text-foreground/70 mt-0.5">
                            {certificate.provider}
                          </p>
                        </div>
                        {certificate.url && (
                          <ExternalLink className="h-4 w-4 text-foreground/50 group-hover:text-primary/80 transition-colors flex-shrink-0" />
                        )}
                      </div>
                      
                      {certificate.description && (
                        <p className="text-sm text-foreground/60 mt-2 line-clamp-2">
                          {certificate.description}
                        </p>
                      )}
                      
                      {/* Date */}
                      <div className="flex items-center gap-1 mt-2 text-sm text-foreground/60">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{certificate.date}</span>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {certificate.skills.slice(0, 3).map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-primary/15 hover:bg-primary/25 text-foreground/80 text-sm px-3 py-1.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {certificate.skills.length > 3 && (
                          <Badge className="bg-primary/10 text-foreground/60 text-sm px-3 py-1.5">
                            +{certificate.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Certificates - Grid más compacto */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-4 w-4 text-foreground/60" />
          <h3 className="text-lg font-medium text-foreground/80">Otras Certificaciones</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certificatesData.filter(cert => !cert.featured).map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/40 bg-background/30 backdrop-blur-sm">
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    {/* Logo más pequeño */}
                    <div className="relative w-8 h-8 rounded-md overflow-hidden border border-border/40 flex-shrink-0">
                      <Image
                        src={certificate.logo || "/placeholder.svg"}
                        alt={certificate.provider}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm leading-tight truncate">
                        {certificate.title}
                      </h4>
                      <p className="text-sm text-foreground/60 truncate">
                        {certificate.provider}
                      </p>
                    </div>
                    
                    {certificate.url && (
                      <ExternalLink className="h-3 w-3 text-foreground/40 group-hover:text-primary/70 transition-colors flex-shrink-0" />
                    )}
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center gap-1 mb-2 text-sm text-foreground/60">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{certificate.date}</span>
                  </div>
                  
                  {/* Skills compactos */}
                  <div className="flex flex-wrap gap-0.5">
                    {certificate.skills.slice(0, 2).map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-primary/12 text-foreground/75 text-sm px-3 py-1.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {certificate.skills.length > 2 && (
                      <Badge className="bg-primary/8 text-foreground/60 text-sm px-3 py-1.5">
                        +{certificate.skills.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
