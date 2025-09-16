"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarButtonProps {
  className?: string;
}

export function AvatarButton({ className = "" }: Readonly<AvatarButtonProps>) {
  const scrollToTop = () => {
    console.log("Avatar clicked - scrolling to top"); // Debug log
    
    // Smooth scroll animation
    const scrollToTopSmooth = () => {
      const currentPosition = window.pageYOffset;
      const targetPosition = 0;
      const distance = currentPosition - targetPosition;
      const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Max 1 second
      const startTime = performance.now();
      
      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };
      
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        
        window.scrollTo(0, currentPosition - (distance * easedProgress));
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    };
    
    // Use smooth scroll animation
    scrollToTopSmooth();
  };

  return (
    <motion.button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollToTop();
      }}
      type="button"
      aria-label="Volver al inicio"
      className={`relative rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background cursor-pointer z-[70] ${className || 'w-10 h-10'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/images/profile-icon.png"
        alt="Avatar - Volver al inicio"
        width={className?.includes('w-8') ? 32 : 40}
        height={className?.includes('h-8') ? 32 : 40}
        className="w-full h-full object-cover"
        priority
      />
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-primary/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Volver al inicio
      </div>
    </motion.button>
  );
}
