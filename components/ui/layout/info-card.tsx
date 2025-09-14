"use client";

import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/layout/card";

interface InfoCardProps {
  readonly title: string;
  readonly icon?: React.ReactNode;
  readonly children: React.ReactNode;
  readonly delay?: number;
}

export function InfoCard({ title, icon, children, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: false, margin: "-50px" }}
      whileHover={{ scale: 1.02 }}
      className="backdrop-blur-md bg-background/20 dark:bg-background/30 rounded-xl border border-border p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10 h-full flex flex-col"
    >
      <CardHeader className="pb-2 px-0 pt-0 flex-shrink-0">
        <CardTitle className="text-xl font-semibold text-foreground flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 pt-4 flex-1 flex flex-col">
        {children}
      </CardContent>
    </motion.div>
  );
}
