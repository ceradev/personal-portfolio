"use client";

import { motion } from "framer-motion";

export function ContactSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, margin: "-50px" }}
      className="text-center mb-16 relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10" />
      
      <div className="relative">
        <div className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium px-4 sm:px-6">
          Conectemos y hagamos realidad tu próximo{" "}
          <span className="relative">
            <span className="text-primary font-bold">
              proyecto digital
            </span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-400"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
