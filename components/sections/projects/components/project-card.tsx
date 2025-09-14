"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Info,
  Star,
  Calendar,
  Monitor,
  Code,
  Server,
  Layers,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Badge } from "@/components/ui/display/badge";
import { Card, CardContent } from "@/components/ui/layout/card";
import { type Project } from "@/types/projects";

interface ProjectCardProps {
  readonly project: Project;
  readonly onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  // Renderizar el icono de categoría
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Monitor className="h-4 w-4" />;
      case "Backend":
        return <Server className="h-4 w-4" />;
      case "Full Stack":
        return <Layers className="h-4 w-4" />;
      case "IA":
        return <Brain className="h-4 w-4" />;
      case "Freelance":
        return <Code className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  // Renderizar el indicador de estado
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 border-green-600/30">
            Completado
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-600/20 text-blue-600 hover:bg-blue-600/30 border-blue-600/30">
            En Progreso
          </Badge>
        );
      case "planned":
        return (
          <Badge className="bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            Planificado
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <Card className="group/card relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 bg-background backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full rounded-2xl">
        {/* Image with overlay */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

          {/* Status and featured badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {renderStatusBadge(project.status)}
            {project.featured && (
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Star className="h-3 w-3 mr-1" /> Destacado
              </Badge>
            )}
          </div>

          {/* Title and description overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-300 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Card content */}
        <CardContent className="flex-grow flex flex-col p-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={`${project.id}-tech-${tech}`}
                variant="outline"
                className="text-xs bg-background hover:bg-background"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge
                variant="outline"
                className="text-xs bg-background hover:bg-background"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Category and type */}
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-foreground/70">
            <div className="flex items-center gap-1">
              {renderCategoryIcon(project.category as string)}
              <span>{project.category}</span>
            </div>

            <span className="text-foreground/40">•</span>

            <span>
              {Array.isArray(project.type)
                ? project.type[0]
                : project.type}
            </span>
          </div>

          {/* Date */}
          <div className="text-xs text-foreground/60 flex items-center mb-4">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(project.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "short",
            })}
          </div>

          {/* Action buttons */}
          <div className="mt-auto flex gap-2">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 rounded-xl"
                onClick={() => onViewDetails(project)}
              >
                <Info className="h-4 w-4 mr-2" />
                Detalles
              </Button>
            </motion.div>

            <div className="flex gap-1">
              {project.demoUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-9 w-9 bg-background backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                    onClick={() => window.open(project.demoUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {project.githubUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-9 w-9 bg-background backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
