"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LaptopFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function LaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Base */}
      <div className="relative">
        {/* Screen */}
        <div className="relative bg-gray-900 rounded-t-lg p-2 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-lg p-1">
            {/* Screen Content Area */}
            <div className="relative bg-gray-100 rounded-md overflow-hidden aspect-video">
              {children}
            </div>
          </div>
          
          {/* Camera */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
          
          {/* Screen Hinge */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full"></div>
        </div>
        
        {/* Keyboard Base */}
        <div className="bg-gray-800 rounded-b-lg p-4 shadow-xl">
          {/* Trackpad */}
          <div className="w-24 h-16 bg-gray-700 rounded-lg mx-auto mb-2"></div>
          
          {/* Keyboard Area */}
          <div className="space-y-1">
            {/* Function Keys */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`func-key-${i}`} className="w-6 h-4 bg-gray-600 rounded-sm"></div>
              ))}
            </div>
            
            {/* Main Keyboard */}
            <div className="space-y-1">
              {/* Q-P Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`qp-key-${i}`} className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                ))}
              </div>
              
              {/* A-L Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`al-key-${i}`} className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                ))}
              </div>
              
              {/* Z-M Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`zm-key-${i}`} className="w-6 h-4 bg-gray-600 rounded-sm"></div>
                ))}
              </div>
            </div>
            
            {/* Space Bar */}
            <div className="flex justify-center">
              <div className="w-32 h-4 bg-gray-600 rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Laptop Stand/Base Shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-black/20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}

// Alternative more detailed laptop frame
export function DetailedLaptopFrame({ children, className = "" }: LaptopFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Container */}
      <div className="relative transform perspective-1000">
        {/* Screen */}
        <motion.div 
          className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl p-3 shadow-2xl"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "rotateX(-5deg)"
          }}
        >
          {/* Screen Bezel */}
          <div className="bg-black rounded-lg p-2 shadow-inner">
            {/* Screen Content Area */}
            <div className="relative bg-gray-50 rounded-md overflow-hidden aspect-video shadow-lg">
              {children}
            </div>
          </div>
          
          {/* Camera */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
          
          {/* Screen Hinge */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-700 rounded-full shadow-lg"></div>
        </motion.div>
        
        {/* Keyboard Base */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl p-6 shadow-xl">
          {/* Trackpad */}
          <div className="w-28 h-20 bg-gray-600 rounded-xl mx-auto mb-4 shadow-inner"></div>
          
          {/* Keyboard Area */}
          <div className="space-y-1.5">
            {/* Function Keys */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={`detailed-func-key-${i}`} className="w-7 h-5 bg-gray-500 rounded-sm shadow-sm"></div>
              ))}
            </div>
            
            {/* Main Keyboard */}
            <div className="space-y-1.5">
              {/* Q-P Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`detailed-qp-key-${i}`} className="w-7 h-5 bg-gray-500 rounded-sm shadow-sm"></div>
                ))}
              </div>
              
              {/* A-L Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={`detailed-al-key-${i}`} className="w-7 h-5 bg-gray-500 rounded-sm shadow-sm"></div>
                ))}
              </div>
              
              {/* Z-M Row */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`detailed-zm-key-${i}`} className="w-7 h-5 bg-gray-500 rounded-sm shadow-sm"></div>
                ))}
              </div>
            </div>
            
            {/* Space Bar */}
            <div className="flex justify-center">
              <div className="w-36 h-5 bg-gray-500 rounded-sm shadow-sm"></div>
            </div>
          </div>
          
          {/* Brand Logo Area */}
          <div className="flex justify-center mt-4">
            <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Laptop Stand/Base Shadow */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-3 bg-black/30 rounded-full blur-md"></div>
      </div>
    </div>
  );
}
