"use client";

import { motion } from "framer-motion";
import { ScrollDownArrow } from "@/utils/scroll-down-arrow";
import { 
  HeroText,
  HeroButtons,
  HeroProfile,
} from "@/components/sections/hero/components";
import { HeroSectionProps } from "@/types/hero";

export function HeroSection({ isMobile }: Readonly<HeroSectionProps>) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-6 pb-8 md:pb-16">
      {/* Split content layout with improved laptop spacing */}
      <div className="container mx-auto px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-6 md:gap-8 lg:gap-16 xl:gap-20 items-center">
        {/* Left side - Text content with optimized laptop sizing */}
        <motion.div
          className="text-left order-2 lg:order-1 mt-6 lg:mt-0 lg:max-w-md xl:max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <HeroText />
          <HeroButtons />
        </motion.div>

        {/* Right side - Profile image with enhanced 3D effect and mobile optimization */}
        <HeroProfile />
      </div>

      {/* Scroll Down Arrow - Only visible on desktop */}
      <div className="hidden md:block">
        <ScrollDownArrow targetSection="services" />
      </div>
    </section>
  );
}
