"use client";

import { motion } from "framer-motion";
import { FileText, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/display/button";
import { SOCIAL_LINKS, CV_DOWNLOAD } from "@/data/hero-data";

export function HeroButtons() {
  const handleOpenCV = () => {
    // Abrir el CV directamente en una nueva pestaña
    window.open(CV_DOWNLOAD.href, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="flex flex-nowrap items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 lg:px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
      >
        <Button
          variant="outline"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              window.scrollTo({
                top: projectsSection.offsetTop,
                behavior: "smooth",
              });
            }
          }}
          className="bg-primary hover:bg-red-800 dark:hover:bg-red-300 hover:border-red-800 dark:hover:border-red-300 border-2 border-primary/50 dark:border-primary/50 text-primary-foreground hover:text-white dark:hover:text-black rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-4 group relative overflow-hidden transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
        >
          <motion.span
            className="relative z-10 flex items-center gap-2 sm:gap-2 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <FolderOpen className="h-3 w-3 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Mis proyectos</span>
            <span className="sm:hidden">Proyectos</span>
          </motion.span>
        </Button>
      </motion.div>

      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          onClick={handleOpenCV}
          className="border-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg font-medium text-xs sm:text-base"
        >
          <motion.span
            className="relative z-10 flex items-center gap-2 sm:gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <FileText className="h-3 w-3 sm:h-5 sm:w-5" />
            Ver CV
          </motion.span>
        </Button>
      </motion.div>

      <motion.div
        className="flex items-center gap-1 sm:gap-1.5 ml-0.5 sm:ml-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <Link
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          className="group relative"
        >
          <motion.div
            className="p-2 sm:p-2.5 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-info-600/50 hover:bg-info-600/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70 group-hover:text-info-600 transition-colors duration-300" />
            <motion.div
              className="absolute -inset-1 bg-info-600/20 rounded-full blur"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          className="group relative"
        >
          <motion.div
            className="p-2 sm:p-2.5 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-gray-600/50 hover:bg-gray-600/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
            <motion.div
              className="absolute -inset-1 bg-gray-600/20 rounded-full blur"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        <Link href={SOCIAL_LINKS.email} className="group relative">
          <motion.div
            className="p-2 sm:p-2.5 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
            <motion.div
              className="absolute -inset-1 bg-primary/20 rounded-full blur"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
