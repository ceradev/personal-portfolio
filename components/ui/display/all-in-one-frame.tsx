"use client";

import { ReactNode } from "react";

interface AllInOneFrameProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly size?: "small" | "medium" | "large";
}

export function AllInOneFrame({
  children,
  className = "",
  size = "medium",
}: AllInOneFrameProps) {
  // Size configurations
  const sizeConfig = {
    small: {
      width: "w-96",
      screenPadding: "p-2",
      bezelPadding: "p-2",
      cameraSize: "w-2 h-2",
      cameraTop: "top-3",
      barPadding: "p-3",
      barMargin: "mb-2",
      accentWidth: "w-24",
      accentHeight: "h-1",
      standWidth: "w-24",
      standHeight: "h-10",
      standMargin: "mt-2",
      shadowHeight: "h-1",
      shadowBottom: "-bottom-1",
    },
    medium: {
      width: "w-[32rem]",
      screenPadding: "p-2",
      bezelPadding: "p-2",
      cameraSize: "w-2 h-2",
      cameraTop: "top-3",
      barPadding: "p-3",
      barMargin: "mb-2",
      accentWidth: "w-24",
      accentHeight: "h-1",
      standWidth: "w-28",
      standHeight: "h-12",
      standMargin: "mt-2",
      shadowHeight: "h-2",
      shadowBottom: "-bottom-2",
    },
    large: {
      width: "w-[50rem]",
      screenPadding: "p-3",
      bezelPadding: "p-3",
      cameraSize: "w-3 h-3",
      cameraTop: "top-4",
      barPadding: "p-4",
      barMargin: "mb-3",
      accentWidth: "w-32",
      accentHeight: "h-1.5",
      standWidth: "w-32",
      standHeight: "h-14",
      standMargin: "mt-3",
      shadowHeight: "h-2",
      shadowBottom: "-bottom-2",
    },
  };

  const config = sizeConfig[size];

  return (
    <div className={`relative ${config.width} mx-auto ${className}`}>
      {/* All-in-One TV Container */}
      <div className="relative">
        {/* Screen */}
        <div
          className={`relative bg-card rounded-t-lg ${config.screenPadding} shadow-lg`}
        >
          {/* Screen Bezel */}
          <div className={`bg-card rounded-md ${config.bezelPadding}`}>
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
          ></div>
        </div>

        {/* Shadow */}
        <div
          className={`absolute ${config.shadowBottom} left-1/2 transform -translate-x-1/2 w-1/2 ${config.shadowHeight} bg-muted-foreground/30 rounded-full blur-sm`}
        ></div>
      </div>
    </div>
  );
}
