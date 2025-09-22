"use client";

import { motion } from "framer-motion";
import { 
  HeroText,
  HeroButtons,
  HeroProfile,
  ScrollDownButton,
} from "@/components/sections/hero/components";
import { HeroSectionProps } from "@/types/hero";

export function HeroSection(props: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pb-8 md:pb-16">
      {/* Split content layout with improved mobile centering */}
      <div className="container mx-auto px-2 sm:px-4 md:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center max-w-full overflow-hidden">
        {/* Left side - Text content with optimized mobile sizing */}
        <motion.div
          className="text-left order-2 lg:order-1 mt-4 sm:mt-6 lg:mt-0 w-full max-w-full overflow-hidden"
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

      {/* Scroll Down Button */}
      <ScrollDownButton targetSection="services" />
    </section>
  );
}
