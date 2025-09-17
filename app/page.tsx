"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import {
  TopNavigation,
  GlobalBackground,
  Footer,
  ThemeToggle,
} from "@/components/layout";
import { FloatingCallButton } from "@/components/ui/display";
import { ScrollProgress } from "@/utils/scroll-progress";
import { EnhancedThemeTransition } from "@/utils/enhanced-theme-transition";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  ExperienceSection,
} from "@/components/sections";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  const ref = useRef(null);
  useScroll({
    target: mounted ? ref : undefined,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      const scrollPosition = window.scrollY + 100;

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <main ref={ref} className="min-h-screen relative pt-16">
      {/* Global background for the entire application */}
      <GlobalBackground />

      <ScrollProgress />
      <TopNavigation activeSection={activeSection} />
      <EnhancedThemeTransition />

      {/* Theme Toggle */}
      <div className={`fixed ${isMobile ? "top-3" : "top-6"} right-6 z-50`}>
        <ThemeToggle />
      </div>

      {/* Floating Call Button */}
      <FloatingCallButton activeSection={activeSection} />

      {/* Add padding to the bottom on mobile to account for the bottom navigation */}
      <div className={isMobile ? "pb-16" : ""}>
        {/* Hero Section */}
        <HeroSection isMobile={isMobile} />

        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* About Section */}
        <AboutSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
