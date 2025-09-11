"use client";

import { ServicesSubtitle, ServicesGrid, CallToAction } from "./components";
import { servicesData } from "@/data/services-data";
import { motion } from "framer-motion";
export function ServicesSection() {
  return (
    <section 
      id="services" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSubtitle />
        
        {/* Enhanced grid with container animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServicesGrid services={servicesData} />
        </motion.div>
        
        {/* Call to action section */}
        <CallToAction />
      </div>
    </section>
  );
}
