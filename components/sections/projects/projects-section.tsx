"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github as GithubIcon,
  Info,
  Star,
  Calendar,
  FolderOpen,
  Monitor,
  Code,
  Search,
  SortAsc,
  Filter,
  Brain,
  Server,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { Badge } from "@/components/ui/display/badge";
import { Card, CardContent } from "@/components/ui/layout/card";
import { Input } from "@/components/ui/form/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/layout/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/navigation/dropdown-menu";
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
import { SectionTitle } from "@/utils/section-title";
import { SectionTransition } from "@/utils/section-transition";
import { projects, type Project } from "@/data/types";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "name" | "featured">("date");

  // Filter categories
  const filterCategories = [
    "all",
    "Frontend",
    "Backend",
    "Full Stack",
    "IA",
    "Freelance",
  ];

  // Filter and sort projects
  const getFilteredAndSortedProjects = () => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter !== "all") {
      filtered = projects.filter(
        (project) => project.category === activeFilter
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.title.localeCompare(b.title);
        case "featured":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
  };

  const filteredAndSortedProjects = getFilteredAndSortedProjects();

  // Renderizar el icono de categoría
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "all":
        return <FolderOpen className="h-4 w-4" />;
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

  // Renderizar diálogo de detalles del proyecto
  const renderProjectDetailsDialog = () => {
    if (!selectedProject) return null;

    return (
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold">
                {selectedProject.title}
              </DialogTitle>
              <div className="flex items-center gap-2">
                {renderStatusBadge(selectedProject.status)}
                {selectedProject.featured && (
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Star className="h-3 w-3 mr-1" /> Destacado
                  </Badge>
                )}
              </div>
            </div>
            <DialogDescription className="text-foreground/70 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderCategoryIcon(selectedProject.category as string)}
                <span>{selectedProject.category}</span>
              </div>
              <span>•</span>
              <span>
                {Array.isArray(selectedProject.type)
                  ? selectedProject.type.join(", ")
                  : selectedProject.type}
              </span>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-grow pr-4">
            <div className="relative aspect-video w-full mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Descripción</h4>
                <p className="text-foreground/80">
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>
              </div>

              {selectedProject.impact && (
                <div className="p-4 rounded-lg bg-primary/10">
                  <h4 className="text-lg font-bold mb-2">Impacto</h4>
                  <p className="text-foreground/80">{selectedProject.impact}</p>
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
                          {new Date(selectedProject.date).toLocaleDateString(
                            "es-ES",
                            {
                              year: "numeric",
                              month: "long",
                            }
                          )}
                        </div>
                      </div>
                    </li>

                    {selectedProject.client && (
                      <li className="flex items-start gap-2">
                        <Code className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">
                            Cliente:
                          </span>
                          <div>{selectedProject.client}</div>
                        </div>
                      </li>
                    )}

                    {selectedProject.role && (
                      <li className="flex items-start gap-2">
                        <Code className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">
                            Rol:
                          </span>
                          <div>{selectedProject.role}</div>
                        </div>
                      </li>
                    )}

                    {selectedProject.duration && (
                      <li className="flex items-start gap-2">
                        <Calendar className="h-4 w-4 mt-0.5 text-foreground/70" />
                        <div>
                          <span className="text-foreground/70 text-sm">
                            Duración:
                          </span>
                          <div>{selectedProject.duration}</div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={`${selectedProject.id}-modal-tech-${tech}`}
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {selectedProject.highlights && (
                    <div className="mt-6">
                      <h4 className="text-lg font-bold mb-2">
                        Aspectos destacados
                      </h4>
                      <ul className="space-y-1">
                        {selectedProject.highlights.map((highlight) => (
                          <li
                            key={`${
                              selectedProject.id
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
              {selectedProject.demoUrl && (
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Demo
                </Button>
              )}

              {selectedProject.githubUrl && (
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                >
                  <GithubIcon className="h-4 w-4 mr-2" />
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
  };

  return (
    <SectionTransition
      id="projects"
      className="py-20 my-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionTitle title="Portafolio" />

        {/* Subtitle with animation and enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, margin: "-50px" }}
          className="text-center mb-16 relative"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />

          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-6">
            </div>
            
            <div className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Una selección de mis{" "}
              <span className="relative">
                <span className="text-red-600 font-bold">
                  proyectos más destacados
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
                />
              </span>{" "}
              y desarrollos técnicos
            </div>
          </div>
        </motion.div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-12">
          {/* Filter Tabs */}
          <div className="w-full lg:w-auto">
            <Tabs
              value={activeFilter}
              onValueChange={setActiveFilter}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-gradient-to-r from-background/80 via-background/60 to-background/80 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-3 gap-2 shadow-lg shadow-primary/10">
                {filterCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary/25 data-[state=active]:text-primary data-[state=active]:shadow-sm text-foreground/70 hover:text-foreground/90 text-xs lg:text-sm rounded-lg px-3 lg:px-4 py-2.5 lg:py-3 transition-all duration-300 flex items-center justify-center gap-1.5 min-h-[42px] lg:min-h-[46px] hover:bg-background/80 border-0 overflow-hidden m-0"
                  >
                    {category === "all" && (
                      <FolderOpen className="h-4 w-4 flex-shrink-0" />
                    )}
                    {category === "Frontend" && (
                      <Monitor className="h-4 w-4 flex-shrink-0" />
                    )}
                    {category === "Backend" && (
                      <Server className="h-4 w-4 flex-shrink-0" />
                    )}
                    {category === "Full Stack" && (
                      <Layers className="h-4 w-4 flex-shrink-0" />
                    )}
                    {category === "IA" && (
                      <Brain className="h-4 w-4 flex-shrink-0" />
                    )}
                    {category === "Freelance" && (
                      <Code className="h-4 w-4 flex-shrink-0" />
                    )}
                    <span className="hidden sm:inline">
                      {category === "all" ? "Todos" : category}
                    </span>
                    <span className="sm:hidden">
                      {category === "all"
                        ? "Todos"
                        : category === "Full Stack"
                        ? "Full"
                        : category}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full sm:w-64 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 focus:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
              />
            </div>

            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/50 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                >
                  <SortAsc className="h-4 w-4 mr-2" />
                  Ordenar
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => setSortBy("date")}
                  className={sortBy === "date" ? "bg-accent" : ""}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Más recientes
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("featured")}
                  className={sortBy === "featured" ? "bg-accent" : ""}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Destacados
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSortBy("name")}
                  className={sortBy === "name" ? "bg-accent" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Alfabético
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <p className="text-sm text-foreground/60">
            {filteredAndSortedProjects.length === projects.length
              ? `Mostrando todos los ${projects.length} proyectos`
              : `Mostrando ${filteredAndSortedProjects.length} de ${projects.length} proyectos`}
            {activeFilter !== "all" && (
              <span className="ml-1">
                en{" "}
                <span className="text-primary font-medium">{activeFilter}</span>
              </span>
            )}
            {searchQuery && (
              <span className="ml-1">
                para "
                <span className="text-primary font-medium">{searchQuery}</span>"
              </span>
            )}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${searchQuery}-${sortBy}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAndSortedProjects.length > 0 ? (
              filteredAndSortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <Card className="group/card relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full rounded-2xl">
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
                            className="text-xs bg-background/50 hover:bg-background"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-background/50 hover:bg-background"
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
                          onClick={() => setSelectedProject(project)}
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
                                className="h-9 w-9 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                              onClick={() =>
                                window.open(project.demoUrl, "_blank")
                              }
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
                                className="h-9 w-9 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 rounded-xl shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                              onClick={() =>
                                window.open(project.githubUrl, "_blank")
                              }
                            >
                              <GithubIcon className="h-4 w-4" />
                            </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              // No results state
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  No se encontraron proyectos
                </h3>
                <p className="text-foreground/70 max-w-md mb-6">
                  {searchQuery
                    ? `No hay proyectos que coincidan con "${searchQuery}"`
                    : `No hay proyectos en la categoría "${activeFilter}"`}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                <Button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 rounded-xl"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Limpiar filtros
                </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Project details dialog */}
        {renderProjectDetailsDialog()}
      </div>
    </SectionTransition>
  );
}
