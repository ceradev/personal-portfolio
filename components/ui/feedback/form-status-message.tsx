"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/display/button";

interface FormStatusMessageProps {
  type: "success" | "error";
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
  showAutoReset?: boolean;
}

export function FormStatusMessage({
  type,
  title,
  message,
  buttonText,
  onButtonClick,
  showAutoReset = false,
}: Readonly<FormStatusMessageProps>) {
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  const iconColor = type === "success" ? "text-success-500" : "text-destructive";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-8 sm:py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.2, 1], 
          rotate: type === "error" ? [0, 10, -10, 0] : 0 
        }}
        transition={{ 
          duration: 0.5, 
          times: type === "error" ? [0, 0.6, 0.8, 1] : [0, 0.8, 1] 
        }}
      >
        <Icon className={`h-12 sm:h-16 w-12 sm:w-16 ${iconColor} mb-4`} />
      </motion.div>
      <h3 className="text-xl font-semibold text-foreground drop-shadow-sm mb-2">
        {title}
      </h3>
      <p className="text-foreground/90 dark:text-foreground/95 mb-6">
        {message}
      </p>
      
      {showAutoReset && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
        >
          <Clock className="h-4 w-4" />
          <span>El formulario se reiniciará automáticamente...</span>
        </motion.div>
      )}
      
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={onButtonClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {buttonText}
        </Button>
      </motion.div>
    </motion.div>
  );
}
