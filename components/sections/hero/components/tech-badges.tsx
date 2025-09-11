"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiDocker, SiGit } from "react-icons/si";
import { TechBadgeProps } from "@/types/hero";

const TECH_BADGES: TechBadgeProps[] = [
  {
    icon: FaReact,
    color: "text-blue-400",
    hoverColor: "text-blue-300",
    position: { top: "-top-2 -right-2 md:-top-6 md:-right-6" },
    animation: { duration: 6, type: "y", values: [0, -8, 0] }
  },
  {
    icon: SiTypescript,
    color: "text-blue-600",
    hoverColor: "text-blue-500",
    position: { top: "top-1/2", right: "-right-12 md:-right-16" },
    animation: { duration: 7, delay: 0.5, type: "y", values: [0, 12, 0] }
  },
  {
    icon: SiNextdotjs,
    color: "text-foreground",
    hoverColor: "text-gray-600",
    position: { bottom: "-bottom-12 -right-12 md:-bottom-16 md:-right-16" },
    animation: { duration: 6.5, delay: 1, type: "y", values: [0, -10, 0] }
  },
  {
    icon: SiJavascript,
    color: "text-yellow-500",
    hoverColor: "text-yellow-400",
    position: { top: "-top-8 -left-8 md:-top-12 md:-left-12" },
    animation: { duration: 5.5, delay: 1.5, type: "y", values: [0, -15, 0] }
  },
  {
    icon: FaPython,
    color: "text-green-500",
    hoverColor: "text-green-400",
    position: { top: "top-1/2", left: "-left-12 md:-left-16" },
    animation: { duration: 7.5, delay: 2, type: "y", values: [0, 10, 0] }
  },
  {
    icon: FaNodeJs,
    color: "text-green-600",
    hoverColor: "text-green-500",
    position: { bottom: "-bottom-12 -left-12 md:-bottom-16 md:-left-16" },
    animation: { duration: 6.8, delay: 2.5, type: "y", values: [0, -8, 0] }
  },
  {
    icon: SiTailwindcss,
    color: "text-cyan-500",
    hoverColor: "text-cyan-400",
    position: { top: "-top-10 md:-top-14", left: "left-1/2", transform: "transform -translate-x-1/2" },
    animation: { duration: 8, delay: 3, type: "x", values: [-8, 8, -8] }
  },
  {
    icon: SiMongodb,
    color: "text-green-700",
    hoverColor: "text-green-600",
    position: { bottom: "-bottom-16 md:-bottom-20", left: "left-1/2", transform: "transform -translate-x-1/2" },
    animation: { duration: 7.2, delay: 3.5, type: "x", values: [8, -8, 8] }
  },
  {
    icon: FaAws,
    color: "text-orange-500",
    hoverColor: "text-orange-400",
    position: { top: "-top-14 -right-14 md:-top-18 md:-right-18" },
    animation: { duration: 9, delay: 4, type: "combined", values: [0, -12, 0] }
  },
  {
    icon: SiDocker,
    color: "text-blue-500",
    hoverColor: "text-blue-400",
    position: { top: "top-1/4", left: "-left-14 md:-left-18" },
    animation: { duration: 8.5, delay: 4.5, type: "combined", values: [0, -10, 0] }
  },
  {
    icon: SiGit,
    color: "text-red-600",
    hoverColor: "text-red-500",
    position: { bottom: "-bottom-20 -right-6 md:-bottom-24 md:-right-8" },
    animation: { duration: 10, delay: 5, type: "combined", values: [0, 8, 0] }
  }
];

function TechBadge({ badge, index }: Readonly<{ badge: TechBadgeProps; index: number }>) {
  const IconComponent = badge.icon;
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    // Staggered fade-in animation for each badge
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150 + 1000); // Start after 1 second, then stagger by 150ms each

    return () => clearTimeout(timer);
  }, [index]);

  const handleTap = () => {
    setIsClicked(true);
    // Reset after animation completes
    setTimeout(() => setIsClicked(false), 600);
  };
  
  const getAnimationProps = () => {
    const baseTransition = {
      duration: badge.animation.duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut" as const,
      delay: badge.animation.delay || 0
    };

    switch (badge.animation.type) {
      case "y":
        return {
          animate: { y: badge.animation.values },
          transition: baseTransition
        };
      case "x":
        return {
          animate: { x: badge.animation.values },
          transition: baseTransition
        };
      case "rotate":
        return {
          animate: { rotate: badge.animation.values },
          transition: baseTransition
        };
      case "combined":
        return {
          animate: { 
            y: [0, -12, 0],
            rotate: [0, 15, 0, -15, 0]
          },
          transition: baseTransition
        };
      default:
        return {};
    }
  };

  const getHoverColor = () => {
    // Convertir las clases de Tailwind a colores RGB para el boxShadow
    const colorMap: Record<string, string> = {
      'text-blue-400': 'rgba(96, 165, 250, 0.8)', // blue-400
      'text-blue-600': 'rgba(37, 99, 235, 0.8)', // blue-600
      'text-foreground': 'rgba(156, 163, 175, 0.8)', // gray-500 para foreground
      'text-yellow-500': 'rgba(234, 179, 8, 0.8)', // yellow-500
      'text-green-500': 'rgba(34, 197, 94, 0.8)', // green-500
      'text-green-600': 'rgba(22, 163, 74, 0.8)', // green-600
      'text-cyan-500': 'rgba(6, 182, 212, 0.8)', // cyan-500
      'text-green-700': 'rgba(21, 128, 61, 0.8)', // green-700
      'text-orange-500': 'rgba(249, 115, 22, 0.8)', // orange-500
      'text-blue-500': 'rgba(59, 130, 246, 0.8)', // blue-500
      'text-red-600': 'rgba(220, 38, 38, 0.8)' // red-600
    };
    
    return colorMap[badge.color] || 'rgba(59, 130, 246, 0.8)'; // fallback azul
  };

  const getBorderColor = () => {
    // Convertir las clases de Tailwind a colores RGB para el borderColor
    const colorMap: Record<string, string> = {
      'text-blue-400': 'rgba(96, 165, 250, 0.6)', // blue-400
      'text-blue-600': 'rgba(37, 99, 235, 0.6)', // blue-600
      'text-foreground': 'rgba(156, 163, 175, 0.6)', // gray-500 para foreground
      'text-yellow-500': 'rgba(234, 179, 8, 0.6)', // yellow-500
      'text-green-500': 'rgba(34, 197, 94, 0.6)', // green-500
      'text-green-600': 'rgba(22, 163, 74, 0.6)', // green-600
      'text-cyan-500': 'rgba(6, 182, 212, 0.6)', // cyan-500
      'text-green-700': 'rgba(21, 128, 61, 0.6)', // green-700
      'text-orange-500': 'rgba(249, 115, 22, 0.6)', // orange-500
      'text-blue-500': 'rgba(59, 130, 246, 0.6)', // blue-500
      'text-red-600': 'rgba(220, 38, 38, 0.6)' // red-600
    };
    
    return colorMap[badge.color] || 'rgba(59, 130, 246, 0.6)'; // fallback azul
  };

  return (
    <motion.div
      className={`absolute ${Object.values(badge.position).join(' ')} backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-md rounded-full p-2 md:p-3 border border-border group cursor-pointer`}
      initial={{ 
        opacity: 0, 
        scale: 0.3,
        y: 20,
        rotate: -180
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? (isClicked ? 1.4 : 1) : 0.3,
        y: isVisible ? 0 : 20,
        rotate: isVisible ? 0 : -180,
        boxShadow: isClicked ? `0 0 25px ${getHoverColor()}` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderColor: isClicked ? getBorderColor() : 'hsl(var(--border))',
        ...getAnimationProps().animate
      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: isClicked ? 0.3 : 0.6, ease: "easeOut" },
        y: { duration: 0.6, ease: "easeOut" },
        rotate: { duration: 0.8, ease: "easeOut" },
        boxShadow: { duration: 0.3, ease: "easeOut" },
        borderColor: { duration: 0.3, ease: "easeOut" },
        ...getAnimationProps().transition
      }}
      onTap={handleTap}
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        <IconComponent className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-300 ${badge.color} group-hover:opacity-80`} />
      </div>
    </motion.div>
  );
}

export function TechBadges() {
  return (
    <>
      {TECH_BADGES.map((badge, index) => (
        <TechBadge key={`tech-badge-${index}-${badge.color}`} badge={badge} index={index} />
      ))}
    </>
  );
}
