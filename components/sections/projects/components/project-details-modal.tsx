"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, Monitor, Server, Layers, Brain, Code, Star, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Badge } from "@/components/ui/display/badge";
import { type Project } from "@/types/projects";

interface ProjectDetailsModalProps {
  readonly showModal: boolean;
  readonly project: Project;
  readonly onClose: () => void;
}

export function ProjectDetailsModal({
  showModal,
  project,
  onClose,
}: ProjectDetailsModalProps) {
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
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl max-w-4xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      {renderCategoryIcon(project.category as string)}
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(project.date).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {renderStatusBadge(project.status)}
                  {project.featured && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      <Star className="h-3 w-3 mr-1" /> Destacado
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                    <p className="text-muted-foreground">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="p-4 rounded-lg bg-primary/10">
                      <h3 className="text-lg font-semibold mb-2">Impacto</h3>
                      <p className="text-muted-foreground">{project.impact}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-primary/20 text-primary border-primary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.highlights && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Aspectos destacados</h3>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <li key={`${project.id}-highlight-${highlight.slice(0, 20)}`} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full mt-1.5 bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={onClose}
              >
                Cerrar
              </Button>
              {project.demoUrl && (
                <Button
                  onClick={() => window.open(project.demoUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Ver Código
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
