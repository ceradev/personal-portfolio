"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/display/button";
import { LoadingSpinner } from "@/components/ui/feedback/loading-spinner";

interface ContactFormActionsProps {
  isSubmitting: boolean;
  onSubmit: () => void;
}

export function ContactFormActions({ isSubmitting, onSubmit }: ContactFormActionsProps) {
  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div 
      variants={formItemVariants} 
      whileHover={{ scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
    >
      <Button
        type="submit"
        onClick={onSubmit}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
        disabled={isSubmitting}
      >
        <motion.span
          className="absolute inset-0 bg-white/20 rounded-md"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0.3 }}
          transition={{ duration: 0.4 }}
        />

        {isSubmitting ? (
          <div className="flex items-center">
            <LoadingSpinner />
            Enviando...
          </div>
        ) : (
          <div className="flex items-center">
            <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            Enviar Mensaje
          </div>
        )}
      </Button>
    </motion.div>
  );
}
