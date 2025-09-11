"use client";

import { motion } from "framer-motion";
import { Download, FolderOpen, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/display/button";
import { SOCIAL_LINKS, CV_DOWNLOAD } from "@/data/hero-data";

export function HeroButtons() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV_DOWNLOAD.href;
    link.download = CV_DOWNLOAD.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="flex flex-wrap items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              window.scrollTo({
                top: projectsSection.offsetTop,
                behavior: "smooth",
              });
            }
          }}
          className="bg-gradient-to-r from-primary via-red-500 to-primary hover:from-primary/90 hover:via-red-500/90 hover:to-primary/90 text-primary-foreground rounded-full px-8 py-3 group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2 font-medium">
            <FolderOpen className="h-4 w-4" />
            Mis proyectos
          </span>
          <motion.span
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-red-500/50 to-primary/50 rounded-full blur"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          onClick={handleDownloadCV}
          className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-full px-8 py-3 font-medium relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-background/50"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Descargar CV
          </span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-red-500/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute -inset-1 bg-primary/20 rounded-full blur"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>

      <motion.div
        className="flex items-center gap-3 ml-2"
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
            className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="h-5 w-5 text-foreground/70 group-hover:text-blue-500 transition-colors duration-300" />
            <motion.div
              className="absolute -inset-1 bg-blue-500/20 rounded-full blur"
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
            className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-gray-600/50 hover:bg-gray-600/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-5 w-5 text-foreground/70 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
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
            className="p-3 rounded-full backdrop-blur-sm bg-background/30 dark:bg-background/40 border border-border hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="h-5 w-5 text-foreground/70 group-hover:text-red-500 transition-colors duration-300" />
            <motion.div
              className="absolute -inset-1 bg-red-500/20 rounded-full blur"
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
