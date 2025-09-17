"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MobileOptimizedContainerProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly enablePadding?: boolean;
  readonly enableSafeArea?: boolean;
}

export function MobileOptimizedContainer({
  children,
  className = "",
  enablePadding = true,
  enableSafeArea = true,
}: MobileOptimizedContainerProps) {
  return (
    <motion.div
      className={`
        ${enableSafeArea ? "safe-area-inset" : ""}
        ${enablePadding ? "px-4 sm:px-6 lg:px-8" : ""}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface MobileFriendlyCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly enableHover?: boolean;
  readonly enableTouch?: boolean;
}

export function MobileFriendlyCard({
  children,
  className = "",
  enableHover = true,
  enableTouch = true,
}: MobileFriendlyCardProps) {
  return (
    <motion.div
      className={`
        bg-background/80 backdrop-blur-sm rounded-xl border border-border/30
        shadow-sm hover:shadow-md transition-all duration-300
        ${enableTouch ? "active:scale-95" : ""}
        ${enableHover ? "hover:border-primary/30" : ""}
        ${className}
      `}
      whileHover={enableHover ? { y: -2, scale: 1.02 } : {}}
      whileTap={enableTouch ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

interface MobileResponsiveGridProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

export function MobileResponsiveGrid({
  children,
  className = "",
  columns = { mobile: 1, tablet: 2, desktop: 3 },
}: MobileResponsiveGridProps) {
  const gridClasses = `
    grid gap-4 sm:gap-6
    grid-cols-${columns.mobile || 1}
    sm:grid-cols-${columns.tablet || 2}
    lg:grid-cols-${columns.desktop || 3}
    ${className}
  `;

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

interface MobileTouchAreaProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly minHeight?: string;
  readonly enableFeedback?: boolean;
}

export function MobileTouchArea({
  children,
  className = "",
  minHeight = "44px", // iOS recommended minimum touch target
  enableFeedback = true,
}: MobileTouchAreaProps) {
  return (
    <motion.div
      className={`
        flex items-center justify-center
        ${enableFeedback ? "active:bg-primary/10" : ""}
        ${className}
      `}
      style={{ minHeight }}
      whileTap={enableFeedback ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}
