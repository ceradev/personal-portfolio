"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, X, MessageCircle } from "lucide-react";
import { Button } from "./button";

interface FloatingCallButtonProps {
  readonly className?: string;
  readonly activeSection?: string;
}

export function FloatingCallButton({ className = "", activeSection = "home" }: FloatingCallButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show button after scrolling down 300px, but hide in footer and home sections
      const shouldShow = window.scrollY > 300 && 
                        activeSection !== "home" && 
                        activeSection !== "footer";
      setIsVisible(shouldShow);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/suarezorizondocesararamis", "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className={`fixed z-50 ${isMobile ? "bottom-20 right-4" : "bottom-6 right-6"} ${className}`}
        >
          <AnimatePresence>
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3"
              >
                {/* Close button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={() => setIsExpanded(false)}
                    size="icon"
                    className="w-12 h-12 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* Calendly button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleCalendlyClick}
                    className="w-12 h-12 rounded-full bg-success-500 hover:bg-success-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    title="Agendar llamada"
                  >
                    <Calendar className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* WhatsApp button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-12 h-12 rounded-full bg-success-600 hover:bg-success-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    title="Contactar por WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={() => setIsExpanded(true)}
                  size="icon"
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                >
                  <Phone className="h-6 w-6" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-background/90 dark:bg-background/80 backdrop-blur-md border border-border rounded-lg px-3 py-2 shadow-lg"
            >
              <p className="text-sm font-medium text-foreground whitespace-nowrap">
                ¡Agenda una llamada!
              </p>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-background/90 dark:bg-background/80 border-r border-b border-border rotate-45" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
