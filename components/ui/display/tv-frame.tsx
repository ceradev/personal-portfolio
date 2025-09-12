"use client";

import { ReactNode } from "react";

interface TVFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export function TVFrame({ children, className = "" }: TVFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* TV Container */}
      <div className="relative">
        {/* Screen */}
        <div className="relative bg-gray-800 rounded-lg p-2 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-md p-1">
            {/* Screen Content Area */}
            <div className="relative bg-gray-50 rounded-sm overflow-hidden aspect-video">
              {children}
            </div>
          </div>
        </div>
        
        {/* TV Base */}
        <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg p-3 shadow-xl">
          {/* Stand */}
          <div className="flex justify-center">
            <div className="w-16 h-3 bg-gradient-to-b from-gray-500 to-gray-600 rounded-t-lg"></div>
          </div>
          
          {/* Base Platform */}
          <div className="flex justify-center mt-1">
            <div className="w-24 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* TV Shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-black/20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}

// Alternative more detailed TV frame with theme colors
export function DetailedTVFrame({ children, className = "" }: TVFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* TV Container */}
      <div className="relative">
        {/* Screen */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-3 shadow-2xl border border-gray-700">
          {/* Screen Bezel */}
          <div className="bg-black rounded-lg p-2 shadow-inner">
            {/* Screen Content Area */}
            <div className="relative bg-gradient-to-br from-background to-muted rounded-md overflow-hidden aspect-video shadow-lg">
              {children}
            </div>
          </div>
        </div>
        
        {/* TV Base */}
        <div className="bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 rounded-b-xl p-4 shadow-xl border-l border-r border-b border-gray-600">
          {/* Stand */}
          <div className="flex justify-center">
            <div className="w-20 h-4 bg-gradient-to-b from-gray-500 via-gray-600 to-gray-700 rounded-t-lg shadow-inner"></div>
          </div>
          
          {/* Base Platform */}
          <div className="flex justify-center mt-2">
            <div className="w-32 h-3 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"></div>
          </div>
          
          {/* Brand/Logo Area with primary color accent */}
          <div className="flex justify-center mt-2">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
        
        {/* TV Shadow */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full h-3 bg-black/30 rounded-full blur-md"></div>
      </div>
    </div>
  );
}

// Modern flat-screen TV frame
export function ModernTVFrame({ children, className = "" }: TVFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* TV Container */}
      <div className="relative">
        {/* Screen */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2 shadow-2xl">
          {/* Screen Bezel */}
          <div className="bg-black rounded-md p-1">
            {/* Screen Content Area */}
            <div className="relative bg-white rounded-sm overflow-hidden aspect-video">
              {children}
            </div>
          </div>
        </div>
        
        {/* TV Base */}
        <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-b-lg p-3 shadow-xl">
          {/* Stand */}
          <div className="flex justify-center">
            <div className="w-16 h-3 bg-gradient-to-b from-gray-500 to-gray-600 rounded-t-lg"></div>
          </div>
          
          {/* Base Platform */}
          <div className="flex justify-center mt-1">
            <div className="w-24 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* TV Shadow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-2 bg-black/20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
