"use client"

import { motion } from "framer-motion"
import { Calendar, Award, ExternalLink, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  period?: string
  description: string
  skills?: string[]
  url?: string
  logo?: string
  hours?: string
  official?: boolean
}

export function CertificationCard({
  title,
  issuer,
  date,
  period,
  description,
  skills,
  url,
  logo,
  hours,
  official = false,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, margin: "-100px" }}
      className={`bg-white dark:bg-neutral-900 rounded-xl shadow-sm border ${
        official ? "border-red-200 dark:border-red-800/50" : "border-neutral-200 dark:border-neutral-800"
      } overflow-hidden`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            {logo && (
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={logo || "/placeholder.svg"} alt={issuer} fill className="object-contain" sizes="48px" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">{issuer}</p>
            </div>
          </div>

          {official && (
            <Badge className="bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-none">
              Certificado Oficial
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-red-500 dark:text-red-400" />
            <span>{date}</span>
          </div>

          {period && (
            <div className="flex items-center">
              <span className="text-neutral-400 dark:text-neutral-600 mx-1">•</span>
              <span>{period}</span>
            </div>
          )}

          {hours && (
            <div className="flex items-center">
              <span className="text-neutral-400 dark:text-neutral-600 mx-1">•</span>
              <span>{hours}</span>
            </div>
          )}
        </div>

        {title === "Certificado de Prácticas no Laborales" && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-red-500 dark:text-red-400" />
              <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Conocimientos adquiridos:</h4>
            </div>
            <ul className="space-y-1 pl-6 list-disc text-sm text-neutral-700 dark:text-neutral-300">
              <li>Los fundamentos de la IA y las técnicas de prompting</li>
              <li>Transformación Tecnológica: Desarrollo en entornos modernos con Spring y Angular</li>
              <li>LogLab: Auditoría inteligente para Gitlab y Kubernetes</li>
            </ul>
          </div>
        )}

        <p className="text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>

        {skills && skills.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-red-500 dark:text-red-400" />
              <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Habilidades certificadas</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
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
    </motion.div>
  )
}
