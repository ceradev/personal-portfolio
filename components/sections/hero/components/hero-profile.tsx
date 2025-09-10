"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TechBadges } from "./tech-badges";

export function HeroProfile() {
  return (
    <motion.div
      className="relative order-1 lg:order-2 flex justify-center mx-auto max-w-[280px] md:max-w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Enhanced decorative elements with synchronized glow effect */}
        <motion.div
          className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/50 shadow-md shadow-primary/20"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ 
            opacity: 1,
            rotate: [0, 8, 0, -8, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.5 },
            rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/50 shadow-md shadow-primary/20"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ 
            opacity: 1,
            rotate: [0, -8, 0, 8, 0] 
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.7 },
            rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }}
        />

        {/* Enhanced animated rings with synchronized rotation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 shadow-md shadow-primary/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3 },
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
          }}
        />

        <motion.div
          className="absolute inset-4 rounded-full border-2 border-dashed border-primary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotate: -360 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.5 },
            scale: { duration: 0.8, delay: 0.5 },
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
          }}
        />

        {/* Additional orbital ring for more tech badges */}
        <motion.div
          className="absolute inset-[-20px] rounded-full border border-dashed border-primary/15"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            rotate: 360 
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.7 },
            scale: { duration: 0.8, delay: 0.7 },
            rotate: { duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }
          }}
        />

        {/* Dynamic light halo behind profile - synchronized with image */}
        <motion.div
          className="absolute inset-6 rounded-full bg-gradient-to-r from-primary/30 via-red-500/20 to-primary/30 blur-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.9 },
            scale: { duration: 0.8, delay: 0.9 },
            rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Enhanced profile image with synchronized interactive effects */}
        <motion.div
          className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            scale: { duration: 0.2, ease: "easeOut" },
            borderColor: { duration: 0.2, ease: "easeOut" },
            boxShadow: { duration: 0.2, ease: "easeOut" }
          }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(220, 38, 38, 0.8)",
            boxShadow: "0 0 40px rgba(220, 38, 38, 0.4)",
          }}
        >
          <Image src="/avatar-profile.png" alt="César Suárez" fill className="object-cover" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          
          {/* Animated overlay with synchronized pulse effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1.1 },
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Floating tech stack badges */}
      <TechBadges />
    </motion.div>
  );
}
