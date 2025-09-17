"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MobileFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly size?: "small" | "medium" | "large";
}

export function MobileFrame({
  children,
  className = "",
  size = "medium",
}: MobileFrameProps) {
  // Size configurations optimized for mobile viewing
  const sizeConfig = {
    small: {
      containerPadding: "p-2",
      screenPadding: "p-1",
      bezelPadding: "p-1",
      borderRadius: "rounded-xl",
      screenRadius: "rounded-lg",
      notchWidth: "w-16",
      notchHeight: "h-6",
      notchRadius: "rounded-b-lg",
      homeIndicator: "w-8 h-1",
      shadowSize: "shadow-lg",
    },
    medium: {
      containerPadding: "p-3",
      screenPadding: "p-2",
      bezelPadding: "p-2",
      borderRadius: "rounded-2xl",
      screenRadius: "rounded-xl",
      notchWidth: "w-20",
      notchHeight: "h-7",
      notchRadius: "rounded-b-xl",
      homeIndicator: "w-10 h-1",
      shadowSize: "shadow-xl",
    },
    large: {
      containerPadding: "p-4",
      screenPadding: "p-3",
      bezelPadding: "p-3",
      borderRadius: "rounded-3xl",
      screenRadius: "rounded-2xl",
      notchWidth: "w-24",
      notchHeight: "h-8",
      notchRadius: "rounded-b-2xl",
      homeIndicator: "w-12 h-1.5",
      shadowSize: "shadow-2xl",
    },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Mobile Device Container */}
      <div className={`relative bg-gradient-to-b from-gray-800 to-gray-900 ${config.containerPadding} ${config.borderRadius} ${config.shadowSize}`}>
        {/* Screen Bezel */}
        <div className={`bg-black ${config.bezelPadding} ${config.screenRadius}`}>
          {/* Dynamic Island / Notch */}
          <div className={`${config.notchWidth} ${config.notchHeight} bg-black ${config.notchRadius} mx-auto mb-2`}></div>
          
          {/* Screen Content Area */}
          <div className={`relative bg-gradient-to-br from-background to-muted ${config.screenRadius} overflow-hidden aspect-video shadow-inner`}>
            {children}
          </div>
          
          {/* Home Indicator */}
          <div className="flex justify-center mt-2">
            <div className={`${config.homeIndicator} bg-white/30 rounded-full`}></div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 space-y-2">
          <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
          <div className="w-1 h-6 bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Power Button */}
        <div className="absolute right-1 top-1/3 w-1 h-12 bg-gray-600 rounded-full"></div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full blur-xl opacity-50"></div>
    </motion.div>
  );
}

// Alternative modern mobile frame with more realistic proportions
export function ModernMobileFrame({
  children,
  className = "",
  size = "medium",
}: MobileFrameProps) {
  const sizeConfig = {
    small: {
      width: "w-64",
      height: "h-96",
      padding: "p-2",
      borderRadius: "rounded-3xl",
      screenRadius: "rounded-2xl",
      notchWidth: "w-16",
      notchHeight: "h-5",
      homeIndicator: "w-8 h-1",
    },
    medium: {
      width: "w-80",
      height: "h-[28rem]",
      padding: "p-3",
      borderRadius: "rounded-3xl",
      screenRadius: "rounded-2xl",
      notchWidth: "w-20",
      notchHeight: "h-6",
      homeIndicator: "w-10 h-1",
    },
    large: {
      width: "w-96",
      height: "h-[32rem]",
      padding: "p-4",
      borderRadius: "rounded-3xl",
      screenRadius: "rounded-2xl",
      notchWidth: "w-24",
      notchHeight: "h-7",
      homeIndicator: "w-12 h-1.5",
    },
  };

  const config = sizeConfig[size];

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Modern Mobile Device */}
      <div className={`${config.width} ${config.height} mx-auto bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 ${config.padding} ${config.borderRadius} shadow-2xl border border-gray-700`}>
        {/* Screen Area */}
        <div className="relative h-full bg-black rounded-2xl overflow-hidden">
          {/* Dynamic Island */}
          <div className={`${config.notchWidth} ${config.notchHeight} bg-black rounded-full mx-auto mt-2 mb-1`}></div>
          
          {/* Screen Content */}
          <div className="relative h-[calc(100%-3rem)] bg-gradient-to-br from-background to-muted rounded-b-2xl overflow-hidden">
            {children}
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className={`${config.homeIndicator} bg-white/40 rounded-full`}></div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-1 top-1/2 transform -translate-y-1/2 space-y-3">
          <div className="w-1 h-10 bg-gray-600 rounded-full"></div>
          <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Power Button */}
        <div className="absolute right-1 top-1/3 w-1 h-16 bg-gray-600 rounded-full"></div>
      </div>
      
      {/* Ambient light effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-2xl"></div>
    </motion.div>
  );
}
