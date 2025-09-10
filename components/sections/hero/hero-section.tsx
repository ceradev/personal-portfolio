"use client";

import { motion } from "framer-motion";
import { ScrollDownArrow } from "@/utils/scroll-down-arrow";
import { 
  HeroText,
  HeroButtons,
  HeroProfile,
  TechBadges,
} from "@/components/sections/hero/components";
import { HeroSectionProps } from "@/data/hero";

export function HeroSection({ isMobile }: Readonly<HeroSectionProps>) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-start pt-6">
      {/* Split content layout with improved mobile spacing */}
      <div className="container mx-auto px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side - Text content with improved mobile typography */}
        <motion.div
          className="text-left order-2 lg:order-1 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroText />
          <TechBadges />
          <HeroButtons />
        </motion.div>

        {/* Right side - Profile image with enhanced 3D effect and mobile optimization */}
        <HeroProfile />
      </div>

      {/* Scroll Down Arrow */}
      <ScrollDownArrow targetSection="about" />
    </section>
  );
}
