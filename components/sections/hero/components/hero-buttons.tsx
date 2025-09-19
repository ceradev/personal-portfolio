"use client";

import { motion } from "framer-motion";
import { FileText, FolderOpen, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/display/button";
import { SOCIAL_LINKS, CV_DOWNLOAD } from "@/data/hero-data";

export function HeroButtons() {
  const handleOpenCV = () => {
    // Abrir el CV directamente en una nueva pestaña
    window.open(CV_DOWNLOAD.href, "_blank", "noopener,noreferrer");
  };

  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="flex flex-nowrap items-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 lg:px-6"
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
          className="bg-gradient-to-r from-primary via-red-500 to-primary hover:from-primary/90 hover:via-red-500/90 hover:to-primary/90 text-primary-foreground rounded-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-3 lg:py-2 group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-1 sm:gap-2 font-medium">
            <FolderOpen className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Mis proyectos</span>
            <span className="sm:hidden">Proyectos</span>
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
          onClick={handleOpenCV}
          className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-3 lg:py-2 font-medium relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm bg-background/50 text-xs sm:text-sm whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-1 sm:gap-2">
            <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
            Ver CV
          </span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10 rounded-full"
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

       {/* Mobile scroll arrow - separate section */}
       <div className="md:hidden w-full flex justify-center mt-0.5">
         <motion.div
           className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-red-500/20 border border-primary/60 hover:border-primary hover:from-primary/30 hover:to-red-500/30 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
           whileHover={{ scale: 1.15, rotate: 5 }}
           whileTap={{ scale: 0.9 }}
           onClick={handleScrollToServices}
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 3.4, duration: 0.5 }}
         >
           <motion.div
             animate={{ y: [0, 6, 0] }}
             transition={{
               duration: 1.5,
               repeat: Number.POSITIVE_INFINITY,
               repeatType: "loop",
               ease: "easeInOut",
             }}
           >
             <ChevronDown className="h-6 w-6 text-primary hover:text-primary-foreground transition-colors duration-300" />
           </motion.div>
           <motion.div
             className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-red-500/30 rounded-full blur"
             initial={{ opacity: 0 }}
             whileHover={{ opacity: 1 }}
             transition={{ duration: 0.3 }}
           />
         </motion.div>
       </div>
     </motion.div>
   );
 }
