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

  return (
    <AnimatePresence>
      {showPlaylist && (
        <motion.div
          initial={{ 
            x: "100%", 
            opacity: 0 
          }}
          animate={{ 
            x: 0, 
            opacity: 1 
          }}
          exit={{ 
            x: "100%", 
            opacity: 0 
          }}
          className={`absolute ${isMobile ? 'top-2 right-2 left-2 w-auto' : 'top-6 right-6 w-64'} max-h-[${isMobile ? '80vh' : '76vh'}] bg-transparent backdrop-blur-xl border border-white/20 rounded-base ${isMobile ? 'p-2' : 'p-3'} overflow-y-auto shadow-2xl`}
        >
          <div className={`flex items-center justify-between ${isMobile ? 'mb-2' : 'mb-3'}`}>
            <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-bold text-white`}>Proyectos</h3>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className={`text-white hover:bg-white/20 rounded-full ${isMobile ? 'h-6 w-6' : 'h-7 w-7'}`}
            >
              ×
            </Button>
          </div>
          
          <div className={`${isMobile ? 'space-y-1' : 'space-y-2'}`}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                className={`${isMobile ? 'p-1.5' : 'p-2'} rounded-lg cursor-pointer transition-all ${
                  index === currentProjectIndex
                    ? 'bg-primary/20 border border-primary/50 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
                onClick={() => onSelectProject(index)}
              >
                <div className={`flex ${isMobile ? 'gap-1.5' : 'gap-2'}`}>
                  <div className={`relative rounded overflow-hidden flex-shrink-0 ${isMobile ? 'w-10 h-6' : 'w-12 h-8'}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {index === currentProjectIndex && (
                      <div className="absolute inset-0 bg-primary/30 flex items-center justify-center backdrop-blur-sm">
                        {isPlaying ? (
                          <Pause className={`text-white ${isMobile ? 'h-2 w-2' : 'h-3 w-3'}`} />
                        ) : (
                          <Play className={`text-white ${isMobile ? 'h-2 w-2' : 'h-3 w-3'}`} />
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-xs font-semibold text-white truncate ${isMobile ? 'mb-0.5' : 'mb-1'}`}>
                      {project.title}
                    </h4>
                    {!isMobile && (
                      <p className="text-xs text-gray-300 truncate">
                        {project.description}
                      </p>
                    )}
                    <div className={`flex items-center gap-1 ${isMobile ? 'mt-0.5' : 'mt-1'}`}>
                      {renderCategoryIcon(project.category as string)}
                      <span className="text-xs text-gray-400">
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
