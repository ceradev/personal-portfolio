"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";

interface DeviceIndicatorProps {
  readonly isMobile: boolean;
  readonly className?: string;
}

export function DeviceIndicator({ isMobile, className = "" }: DeviceIndicatorProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/30 shadow-sm ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {isMobile ? (
        <>
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Smartphone className="h-4 w-4 text-primary" />
          </motion.div>
          <span className="text-xs font-medium text-foreground">
            Vista móvil optimizada
          </span>
        </>
      ) : (
        <>
          <motion.div
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Monitor className="h-4 w-4 text-primary" />
          </motion.div>
          <span className="text-xs font-medium text-foreground">
            Vista de escritorio
          </span>
        </>
      )}
    </motion.div>
  );
}

interface MobileGestureHintProps {
  readonly gesture: "swipe" | "tap" | "scroll";
  readonly message: string;
  readonly className?: string;
}

export function MobileGestureHint({ 
  gesture, 
  message, 
  className = "" 
}: MobileGestureHintProps) {
  const getGestureIcon = () => {
    switch (gesture) {
      case "swipe":
        return (
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <div className="w-1 h-1 bg-primary/60 rounded-full"></div>
            <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
          </motion.div>
        );
      case "tap":
        return (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 bg-primary rounded-full"
          />
        );
      case "scroll":
        return (
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-1 h-1 bg-primary rounded-full"></div>
            <div className="w-1 h-1 bg-primary/60 rounded-full"></div>
            <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-background/60 backdrop-blur-sm border border-border/20 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {getGestureIcon()}
      <span className="text-xs text-foreground/80 font-medium">
        {message}
      </span>
    </motion.div>
  );
}
