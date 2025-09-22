"use client";

import { ReactNode } from "react";

interface AllInOneFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly currentProjectIndex?: number;
  readonly totalProjects?: number;
}

export function AllInOneFrame({
  children,
  className = "",
  currentProjectIndex,
  totalProjects,
}: AllInOneFrameProps) {
  // Desktop-only configuration - fixed size
  const config = {
    width: "w-[48rem]",
    screenPadding: "p-5",
    bezelPadding: "p-5",
    cameraSize: "w-4 h-4",
    cameraTop: "top-2",
    barPadding: "p-6",
    barMargin: "mb-5",
    accentWidth: "w-32",
    accentHeight: "h-2",
    standWidth: "w-32",
    standHeight: "h-14",
    standMargin: "mt-1",
    shadowHeight: "h-4",
    shadowBottom: "-bottom-4",
  };

  return (
    <div className={`hidden md:block relative ${config.width} mx-auto ${className}`}>
      {/* All-in-One TV Container */}
      <div className="relative">
        {/* Screen */}
        <div
          className={`relative bg-card rounded-t-lg ${config.screenPadding} shadow-lg`}
        >
          {/* Screen Bezel */}
          <div className={`bg-card rounded-md ${config.bezelPadding}`}>
            {/* Webcam/Counter Area */}
            <div className="flex justify-center mb-4">
              {currentProjectIndex !== undefined && totalProjects ? (
                <div className="flex items-center gap-2 bg-white dark:bg-black rounded-full px-3 py-1.5 shadow-sm border border-gray-200 dark:border-gray-400">
                  <span className="text-xs font-medium text-gray-700 dark:text-white">
                    Proyecto {currentProjectIndex + 1} de {totalProjects}
                  </span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalProjects }, (_, index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                          index === currentProjectIndex 
                            ? 'bg-red-500' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`${config.cameraSize} bg-muted-foreground/20 rounded-full`}></div>
              )}
            </div>
            
            {/* Screen Content Area */}
            <div className="relative bg-gradient-to-br from-background to-muted rounded-sm overflow-hidden aspect-video shadow-lg">
              {children}
            </div>
          </div>
        </div>

        {/* Horizontal Bar Above Stand */}
        <div
          className={`bg-card rounded-b-lg ${config.barPadding} shadow-xl w-full`}
        >
          {/* Red Accent Line */}
          <div className={`flex justify-center ${config.barMargin}`}>
            <div
              className={`${config.accentWidth} ${config.accentHeight} bg-primary rounded-full`}
            ></div>
          </div>
        </div>

        {/* Central Trapezoidal Stand */}
        <div className={`flex justify-center ${config.standMargin}`}>
          <div
            className={`${config.standWidth} ${config.standHeight} bg-card border-2 border-primary rounded-t-lg shadow-inner`}
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          >
          </div>
        </div>

        {/* Shadow */}
        <div
          className={`absolute ${config.shadowBottom} left-1/2 transform -translate-x-1/2 w-1/2 ${config.shadowHeight} bg-muted-foreground/30 rounded-full blur-sm`}
        ></div>
      </div>
    </div>
  );
}
