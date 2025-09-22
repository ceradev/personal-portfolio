"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MobileFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly size?: "small" | "medium" | "large";
  readonly currentProjectIndex?: number;
  readonly totalProjects?: number;
}

export function MobileFrame({
  children,
  className = "",
  size = "medium",
  currentProjectIndex,
  totalProjects,
}: MobileFrameProps) {
  // Enhanced size configurations for more realistic mobile appearance
  const sizeConfig = {
    small: {
      width: "w-72",
      height: "h-[32rem]",
      containerPadding: "p-3",
      screenPadding: "p-2",
      bezelPadding: "p-2",
      borderRadius: "rounded-[2.5rem]",
      screenRadius: "rounded-[1.5rem]",
      notchWidth: "w-20",
      notchHeight: "h-6",
      notchRadius: "rounded-full",
      homeIndicator: "w-12 h-1",
      shadowSize: "shadow-2xl",
      borderWidth: "border-2",
    },
    medium: {
      width: "w-80",
      height: "h-[36rem]",
      containerPadding: "p-4",
      screenPadding: "p-3",
      bezelPadding: "p-3",
      borderRadius: "rounded-[3rem]",
      screenRadius: "rounded-[2rem]",
      notchWidth: "w-24",
      notchHeight: "h-7",
      notchRadius: "rounded-full",
      homeIndicator: "w-14 h-1.5",
      shadowSize: "shadow-2xl",
      borderWidth: "border-2",
    },
    large: {
      width: "w-96",
      height: "h-[40rem]",
      containerPadding: "p-5",
      screenPadding: "p-4",
      bezelPadding: "p-4",
      borderRadius: "rounded-[3.5rem]",
      screenRadius: "rounded-[2.5rem]",
      notchWidth: "w-28",
      notchHeight: "h-8",
      notchRadius: "rounded-full",
      homeIndicator: "w-16 h-2",
      shadowSize: "shadow-2xl",
      borderWidth: "border-2",
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
      {/* Enhanced Mobile Device Container */}
      <div className={`${config.width} ${config.height} mx-auto relative bg-gradient-to-b from-card via-card/95 to-card ${config.containerPadding} ${config.borderRadius} ${config.shadowSize} ${config.borderWidth} border-border flex flex-col justify-center max-w-full overflow-hidden`}>
        {/* Screen Bezel with more realistic proportions */}
        <div className={`bg-black ${config.bezelPadding} ${config.screenRadius} h-full`}>
          {/* Dynamic Island / Notch with Project Counter */}
          <div className="flex justify-center mt-3 mb-6">
            {currentProjectIndex !== undefined && totalProjects ? (
              <div className="flex items-center gap-2 bg-white dark:bg-black rounded-full px-3 py-1.5 border border-gray-600">
                <span className="text-xs font-medium text-black dark:text-white">
                  {currentProjectIndex + 1}/{totalProjects}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalProjects }, (_, index) => (
                    <div
                      key={index}
                      className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                        index === currentProjectIndex 
                          ? 'bg-red-500' 
                          : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${config.notchWidth} ${config.notchHeight} bg-black ${config.notchRadius}`}></div>
            )}
          </div>
          
          {/* Screen Content Area - better aspect ratio */}
          <div className={`relative bg-gradient-to-br from-background to-muted ${config.screenRadius} overflow-hidden h-[calc(100%-4rem)] shadow-inner`}>
            {children}
          </div>
          
          {/* Home Indicator - more realistic */}
          <div className="flex justify-center mt-3">
            <div className={`${config.homeIndicator} bg-foreground/40 rounded-full`}></div>
          </div>
        </div>
        
        {/* Enhanced Side Buttons */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 space-y-4">
          <div className="w-1.5 h-12 bg-muted-foreground/60 rounded-full shadow-sm"></div>
          <div className="w-1.5 h-10 bg-muted-foreground/60 rounded-full shadow-sm"></div>
        </div>
        
        {/* Enhanced Power Button */}
        <div className="absolute right-2 top-1/3 w-1.5 h-16 bg-muted-foreground/60 rounded-full shadow-sm"></div>
        
        {/* Additional realistic details */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-muted-foreground/40 rounded-full mt-1"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-muted-foreground/40 rounded-full mb-1"></div>
      </div>
      
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 rounded-full blur-2xl opacity-60"></div>
    </motion.div>
  );
}

// Alternative modern mobile frame with more realistic proportions
export function ModernMobileFrame({
  children,
  className = "",
  size = "medium",
  currentProjectIndex,
  totalProjects,
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
          {/* Dynamic Island with Project Counter */}
          <div className="flex justify-center mt-2 mb-1">
            {currentProjectIndex !== undefined && totalProjects ? (
              <div className="flex items-center gap-2 bg-black rounded-full px-3 py-1.5 border border-gray-600">
                <span className="text-xs font-medium text-white">
                  {currentProjectIndex + 1}/{totalProjects}
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalProjects }, (_, index) => (
                    <div
                      key={index}
                      className={`w-1 h-1 rounded-full transition-colors duration-200 ${
                        index === currentProjectIndex 
                          ? 'bg-red-500' 
                          : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className={`${config.notchWidth} ${config.notchHeight} bg-black rounded-full`}></div>
            )}
          </div>
          
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
