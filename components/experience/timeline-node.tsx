"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TimelineNodeProps } from "@/data/experiences";

export function TimelineNode({ experience, index, isActive, onClick }: Readonly<TimelineNodeProps>) {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Enhanced Timeline dot */}
      <motion.div
        className={`relative z-10 w-20 h-20 rounded-full border-4 cursor-pointer transition-all duration-500 ${
          isActive 
            ? "border-red-500 bg-gradient-to-br from-gray-800 to-gray-900 shadow-md shadow-red-500/40" 
            : "border-gray-300 bg-gradient-to-br from-white to-gray-100 hover:border-red-400 hover:from-gray-50 hover:to-gray-200 shadow-md shadow-gray-400/20 hover:shadow-red-400/30"
        }`}
        onClick={onClick}
        whileHover={{ 
          scale: 1.15,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Enhanced Company logo */}
        <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
          <Image
            src={experience.logo || "/placeholder.svg"}
            alt={experience.company}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Pulse effect for active state */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
      
      {/* Enhanced Company name and period */}
      <motion.div
        className="text-center mt-4 max-w-28 md:max-w-36 group-hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: index * 0.15 + 0.3,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.h4 
          className={`text-sm md:text-base font-bold truncate transition-colors duration-300 ${
            isActive 
              ? "text-red-600" 
              : "text-gray-800 group-hover:text-red-500"
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {experience.company.split(' ')[0]}
        </motion.h4>
        <motion.p 
          className="text-xs md:text-sm text-gray-600 mt-2 leading-tight font-medium"
          whileHover={{ scale: 1.02 }}
        >
          {experience.period}
        </motion.p>
        
        {/* Active indicator line */}
        {isActive && (
          <motion.div
            className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        )}
      </motion.div>
    </div>
  );
}
