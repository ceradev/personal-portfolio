"use client";

import Image from "next/image";
import {
  ExternalLink,
  Github,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/display/dialog";
import { ScrollArea } from "@/components/ui/layout/scroll-area";
import { type Project } from "@/types/projects";

interface ProjectDetailsDialogProps {
  readonly project: Project | null;
  readonly onClose: () => void;
}

export function ProjectDetailsDialog({ project, onClose }: ProjectDetailsDialogProps) {
  if (!project) return null;

  // Renderizar el icono de categoría
  const renderCategoryIcon = (category: string) => {
    if (category === "Frontend") return <Monitor className="h-4 w-4" />;
    if (category === "Backend") return <Server className="h-4 w-4" />;
    if (category === "Full Stack") return <Layers className="h-4 w-4" />;
    if (category === "IA") return <Brain className="h-4 w-4" />;
    if (category === "Freelance") return <Code className="h-4 w-4" />;
    return <Code className="h-4 w-4" />;
  };

  // Renderizar el indicador de estado
  const renderStatusBadge = (status: string) => {
    if (status === "completed") {
      return (
        <Badge className="bg-green-600/20 text-green-600 hover:bg-green-600/30 border-green-600/30">
          Completado
        </Badge>
      );
    }
    if (status === "in-progress") {
      return (
        <Badge className="bg-blue-600/20 text-blue-600 hover:bg-blue-600/30 border-blue-600/30">
          En Progreso
        </Badge>
      );
    }
    if (status === "planned") {
      return (
        <Badge className="bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
          Planificado
        </Badge>
      );
    }
    return null;
  };

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">
              {project.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              {renderStatusBadge(project.status)}
              {project.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  <Star className="h-3 w-3 mr-1" /> Destacado
                </Badge>
              )}
            </div>
          </div>
          <DialogDescription className="text-foreground/70 flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderCategoryIcon(project.category as string)}
              <span>{project.category}</span>
            </div>
            <span>•</span>
            <span>
              {Array.isArray(project.type)
                ? project.type.join(", ")
                : project.type}
            </span>
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-grow pr-4">
          <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2">Descripción</h4>
              <p className="text-foreground/80">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.impact && (
              <div className="p-4 rounded-lg bg-primary/10">
                <h4 className="text-lg font-bold mb-2">Impacto</h4>
                <p className="text-foreground/80">{project.impact}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Detalles</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-0.5 text-foreground/70" />
                    <div>
                      <span className="text-foreground/70 text-sm">
                        Fecha:
                      </span>
                      <div>
                        {new Date(project.date).toLocaleDateString(
                          "es-ES",
                          {
                            year: "numeric",
                            month: "long",
                          }
                        )}
                      </div>
                    </div>
                  </li>

                  {project.client && (
                    <li className="flex items-start gap-2">
                      <Code className="h-4 w-4 mt-0.5 text-foreground/70" />
                      <div>
                        <span className="text-foreground/70 text-sm">
                          Cliente:
                        </span>
                        <div>{project.client}</div>
                      </div>
                    </li>
                  )}

                  {project.role && (
                    <li className="flex items-start gap-2">
                      <Code className="h-4 w-4 mt-0.5 text-foreground/70" />
                      <div>
                        <span className="text-foreground/70 text-sm">
                          Rol:
                        </span>
                        <div>{project.role}</div>
                      </div>
                    </li>
                  )}

                  {project.duration && (
                    <li className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 mt-0.5 text-foreground/70" />
                      <div>
                        <span className="text-foreground/70 text-sm">
                          Duración:
                        </span>
                        <div>{project.duration}</div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Tecnologías</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={`${project.id}-modal-tech-${tech}`}
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.highlights && (
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-2">
                      Aspectos destacados
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight) => (
                        <li
                          key={`${
                            project.id
                          }-highlight-${highlight.slice(0, 20)}`}
                          className="flex items-start gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full mt-1.5 bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-6">
          <div className="flex gap-2 sm:mr-auto">
            {project.demoUrl && (
              <Button
                variant="outline"
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

          <DialogClose asChild>
            <Button variant="secondary">Cerrar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
