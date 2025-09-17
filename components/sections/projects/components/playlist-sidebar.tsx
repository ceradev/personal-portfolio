"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Monitor, Server, Layers, Brain, Code } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { type Project } from "@/types/projects";

interface PlaylistSidebarProps {
  readonly showPlaylist: boolean;
  readonly projects: Project[];
  readonly currentProjectIndex: number;
  readonly isPlaying: boolean;
  readonly isMobile: boolean;
  readonly onClose: () => void;
  readonly onSelectProject: (index: number) => void;
}

export function PlaylistSidebar({
  showPlaylist,
  projects,
  currentProjectIndex,
  isPlaying,
  isMobile,
  onClose,
  onSelectProject,
}: PlaylistSidebarProps) {
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

  // Mobile version - Bottom sheet style
  if (isMobile) {
    return (
      <AnimatePresence>
        {showPlaylist && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border rounded-t-2xl shadow-2xl z-50 max-h-[50vh]"
            >
              <div className="p-4">
                {/* Handle */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
                </div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">Proyectos</h3>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={onClose}
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    ×
                  </Button>
                </div>
                
                {/* Projects Grid */}
                <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[35vh] pr-2">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3 rounded-lg cursor-pointer transition-all ${
                        index === currentProjectIndex
                          ? 'bg-primary/20 border border-primary/50 shadow-lg'
                          : 'bg-muted/50 hover:bg-muted border border-border'
                      }`}
                      onClick={() => onSelectProject(index)}
                    >
                      <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                        <Image
                          src={project.image || "/placeholders/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        {index === currentProjectIndex && (
                          <div className="absolute inset-0 bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                            {isPlaying ? (
                              <Pause className="h-4 w-4 text-white" />
                            ) : (
                              <Play className="h-4 w-4 text-white ml-0.5" />
                            )}
                          </div>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-foreground truncate mb-1">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-1">
                        {renderCategoryIcon(project.category as string)}
                        <span className="text-xs text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Desktop version - Sidebar style
  return (
    <AnimatePresence>
      {showPlaylist && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          className="absolute top-6 right-6 w-80 max-h-[60vh] bg-background/95 backdrop-blur-xl border border-border rounded-xl p-4 overflow-y-auto shadow-2xl z-40"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-foreground">Proyectos</h3>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              ×
            </Button>
          </div>
          
          <div className="space-y-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg cursor-pointer transition-all ${
                  index === currentProjectIndex
                    ? 'bg-primary/20 border border-primary/50 shadow-lg'
                    : 'bg-muted/50 hover:bg-muted border border-border'
                }`}
                onClick={() => onSelectProject(index)}
              >
                <div className="flex gap-3">
                  <div className="relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image || "/placeholders/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {index === currentProjectIndex && (
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                        {isPlaying ? (
                          <Pause className="h-4 w-4 text-white" />
                        ) : (
                          <Play className="h-4 w-4 text-white ml-0.5" />
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground truncate mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-1">
                      {renderCategoryIcon(project.category as string)}
                      <span className="text-xs text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
