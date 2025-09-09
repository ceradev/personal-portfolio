"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiDocker, SiGit } from "react-icons/si";
import { TechBadgeProps } from "@/data/hero";

const TECH_BADGES: TechBadgeProps[] = [
  {
    icon: FaReact,
    color: "text-blue-400",
    hoverColor: "text-blue-300",
    position: { top: "-top-2 -right-2 md:-top-6 md:-right-6" },
    animation: { duration: 4, type: "y", values: [0, -5, 0] }
  },
  {
    icon: SiTypescript,
    color: "text-blue-600",
    hoverColor: "text-blue-500",
    position: { top: "top-1/2", right: "-right-12 md:-right-16" },
    animation: { duration: 5, delay: 1, type: "y", values: [0, 10, 0] }
  },
  {
    icon: SiNextdotjs,
    color: "text-foreground",
    hoverColor: "text-gray-600",
    position: { bottom: "-bottom-12 -right-12 md:-bottom-16 md:-right-16" },
    animation: { duration: 4.5, delay: 0.5, type: "y", values: [0, -8, 0] }
  },
  {
    icon: SiJavascript,
    color: "text-yellow-500",
    hoverColor: "text-yellow-400",
    position: { top: "-top-8 -left-8 md:-top-12 md:-left-12" },
    animation: { duration: 3.5, delay: 2, type: "y", values: [0, -12, 0] }
  },
  {
    icon: FaPython,
    color: "text-green-500",
    hoverColor: "text-green-400",
    position: { top: "top-1/2", left: "-left-12 md:-left-16" },
    animation: { duration: 4.8, delay: 1.5, type: "y", values: [0, 8, 0] }
  },
  {
    icon: FaNodeJs,
    color: "text-green-600",
    hoverColor: "text-green-500",
    position: { bottom: "-bottom-12 -left-12 md:-bottom-16 md:-left-16" },
    animation: { duration: 5.2, delay: 3, type: "y", values: [0, -6, 0] }
  },
  {
    icon: SiTailwindcss,
    color: "text-cyan-500",
    hoverColor: "text-cyan-400",
    position: { top: "-top-10 md:-top-14", left: "left-1/2", transform: "transform -translate-x-1/2" },
    animation: { duration: 6, delay: 0.8, type: "x", values: [-5, 5, -5] }
  },
  {
    icon: SiMongodb,
    color: "text-green-700",
    hoverColor: "text-green-600",
    position: { bottom: "-bottom-16 md:-bottom-20", left: "left-1/2", transform: "transform -translate-x-1/2" },
    animation: { duration: 5.5, delay: 2.5, type: "x", values: [5, -5, 5] }
  },
  {
    icon: FaAws,
    color: "text-orange-500",
    hoverColor: "text-orange-400",
    position: { top: "-top-14 -right-14 md:-top-18 md:-right-18" },
    animation: { duration: 7, delay: 1.2, type: "combined", values: [0, -8, 0] }
  },
  {
    icon: SiDocker,
    color: "text-blue-500",
    hoverColor: "text-blue-400",
    position: { top: "top-1/4", left: "-left-14 md:-left-18" },
    animation: { duration: 6.5, delay: 3.5, type: "combined", values: [0, -6, 0] }
  },
  {
    icon: SiGit,
    color: "text-red-600",
    hoverColor: "text-red-500",
    position: { bottom: "-bottom-20 -right-6 md:-bottom-24 md:-right-8" },
    animation: { duration: 8, delay: 4, type: "combined", values: [0, 6, 0] }
  }
];

function TechBadge({ badge }: Readonly<{ badge: TechBadgeProps }>) {
  const IconComponent = badge.icon;
  
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
            y: [0, -8, 0],
            rotate: [0, 10, 0, -10, 0]
          },
          transition: baseTransition
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`absolute ${Object.values(badge.position).join(' ')} backdrop-blur-sm bg-background/30 dark:bg-background/40 shadow-md rounded-full p-2 md:p-3 border border-border group`}
      {...getAnimationProps()}
      whileHover={{ 
        scale: 1.3, 
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" 
      }}
    >
      <IconComponent className={`h-4 w-4 md:h-5 md:w-5 ${badge.color} group-hover:${badge.hoverColor} transition-colors`} />
    </motion.div>
  );
}

export function TechBadges() {
  return (
    <>
      {TECH_BADGES.map((badge, index) => (
        <TechBadge key={`tech-badge-${index}-${badge.color}`} badge={badge} />
      ))}
    </>
  );
}
