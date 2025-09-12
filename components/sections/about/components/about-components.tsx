"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Globe, GraduationCap, Users, MessageCircle, Target, Lightbulb, Clock, Brain } from "lucide-react";
import { Badge } from "@/components/ui/display/badge";

interface ProfessionalGoalProps {
  readonly goal: string;
  readonly index: number;
}

export function ProfessionalGoal({ goal, index }: ProfessionalGoalProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      viewport={{ once: false }}
      whileHover={{ x: 3, scale: 1.02 }}
      className="flex items-start p-3 bg-background/5 rounded-lg border border-border/10 hover:bg-background/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
      <span className="text-foreground/90 leading-relaxed">{goal}</span>
    </motion.div>
  );
}

export function AboutSubtitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, margin: "-50px" }}
      className="text-center mb-12 relative"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />

      <div className="relative">
        <div className="text-xl text-black dark:text-white max-w-4xl mx-auto leading-relaxed font-medium">
          Desarrollador Full Stack especializado en{" "}
          <span className="relative">
            <span className="text-red-600 font-bold">soluciones empresariales</span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false }}
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400"
            />
          </span>{" "}
          y tecnologías modernas
        </div>
        <p className="text-foreground/90 text-base leading-relaxed my-6 font-light max-w-3xl mx-auto">
          Mi enfoque se centra en entender las necesidades del negocio y traducirlas en soluciones técnicas eficientes y escalables.
        </p>
      </div>
    </motion.div>
  );
}

// Componente para información personal esencial
export function EssentialInfo() {
  const essentialData = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Experiencia",
      value: "1+ años",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Ubicación",
      value: "Tenerife, España",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Disponibilidad",
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      label: "Educación",
      value: "Desarrollo Web",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: false, margin: "-50px" }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
    >
      {essentialData.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: false }}
          whileHover={{ y: -2, scale: 1.02 }}
          className="flex items-center gap-3 p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
        >
          <div className={`p-2 rounded-lg ${item.color}`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-foreground/60 font-medium">{item.label}</p>
            <p className="text-sm font-semibold text-foreground truncate">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Componente para resumen de educación y certificaciones
export function EducationCertSummary() {
  const educationData = {
    main: {
      institution: "I.E.S Las Galletas",
      degree: "Desarrollo de Aplicaciones Web",
      year: "2024",
      highlight: "Matrícula de Honor"
    },
    certificates: [
      { name: "AWS Cloud Practitioner", provider: "Amazon Web Services", year: "2024", featured: true },
      { name: "Meta Front-End Developer", provider: "Meta", year: "2024", featured: true },
      { name: "Full Stack Development", provider: "Udemy", year: "2023", featured: true },
      { name: "JavaScript Avanzado", provider: "Udemy", year: "2023", featured: false },
      { name: "React & Redux", provider: "Udemy", year: "2023", featured: false },
      { name: "TypeScript Fundamentals", provider: "Udemy", year: "2023", featured: false }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Formación & Certificaciones</h3>
      </div>
      
      {/* Educación principal */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="font-medium text-foreground text-sm">{educationData.main.degree}</h4>
          <Badge className="bg-primary/20 text-primary text-xs px-2 py-1">
            {educationData.main.year}
          </Badge>
        </div>
        <p className="text-sm text-foreground/70 mb-1">{educationData.main.institution}</p>
        <p className="text-xs text-primary font-medium">{educationData.main.highlight}</p>
      </div>

      {/* Certificaciones destacadas */}
      <div>
        <p className="text-sm font-medium text-foreground/80 mb-3">Certificaciones Profesionales:</p>
        
        {/* Certificaciones destacadas */}
        <div className="mb-3">
          <p className="text-xs text-foreground/60 mb-2 font-medium">Principales:</p>
          <div className="flex flex-wrap gap-2">
            {educationData.certificates.filter(cert => cert.featured).map((cert, index) => (
              <Badge
                key={cert.name}
                className="bg-primary/15 hover:bg-primary/25 text-primary text-xs px-3 py-1.5 border border-primary/30 hover:border-primary/50 transition-all duration-300 font-medium"
              >
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certificaciones adicionales */}
        <div>
          <p className="text-xs text-foreground/60 mb-2 font-medium">Especialización:</p>
          <div className="flex flex-wrap gap-2">
            {educationData.certificates.filter(cert => !cert.featured).map((cert, index) => (
              <Badge
                key={cert.name}
                className="bg-background/50 hover:bg-primary/10 text-foreground/80 text-xs px-3 py-1.5 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                {cert.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Componente para habilidades sociales relevantes para empresas
export function ProfessionalSoftSkills() {
  const softSkills = [
    {
      icon: <Users className="h-4 w-4" />,
      name: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <MessageCircle className="h-4 w-4" />,
      name: "Comunicación",
      description: "Comunicación clara con stakeholders técnicos y no técnicos",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <Lightbulb className="h-4 w-4" />,
      name: "Resolución de Problemas",
      description: "Enfoque analítico para encontrar soluciones innovadoras",
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Target className="h-4 w-4" />,
      name: "Orientación a Resultados",
      description: "Enfoque en entregar valor y cumplir objetivos del negocio",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Brain className="h-4 w-4" />,
      name: "Aprendizaje Continuo",
      description: "Adaptabilidad y actualización constante de conocimientos",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      name: "Gestión del Tiempo",
      description: "Organización eficiente para cumplir deadlines",
      color: "bg-red-500/10 text-red-600 dark:text-red-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Users className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Habilidades Profesionales</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-start gap-3 p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`p-2 rounded-lg ${skill.color} flex-shrink-0`}>
              {skill.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground mb-1">{skill.name}</h4>
              <p className="text-xs text-foreground/70 leading-relaxed">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Componente para idiomas
export function LanguagesInfo() {
  const languages = [
    { label: "Español", level: "Nativo", flag: "🇪🇸", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    { label: "Inglés", level: "Avanzado (C1)", flag: "🇬🇧", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    { label: "Sueco", level: "Intermedio", flag: "🇸🇪", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Globe className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Idiomas</h3>
      </div>
      
      <div className="space-y-3">
        {languages.map((language, index) => (
          <motion.div
            key={language.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{language.flag}</span>
              <span className="text-sm font-medium text-foreground">{language.label}</span>
            </div>
            <Badge className={`${language.color} text-xs px-3 py-1.5 font-medium`}>
              {language.level}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Componente para información práctica (carnet, coche, etc.)
export function PracticalInfo() {
  const practicalInfo = [
    {
      icon: <Briefcase className="h-4 w-4" />,
      label: "Carnet de Conducir",
      value: "B1, B",
      color: "bg-green-500/10 text-green-600 dark:text-green-400"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      label: "Vehículo Propio",
      value: "Disponible",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Globe className="h-4 w-4" />,
      label: "Disponibilidad",
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Movilidad",
      value: "Para viajar",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      viewport={{ once: false, margin: "-50px" }}
      className="bg-background/20 backdrop-blur-sm rounded-xl border border-border/30 p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Información Práctica</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {practicalInfo.map((info, index) => (
          <motion.div
            key={info.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="flex items-center gap-3 p-3 bg-background/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`p-2 rounded-lg ${info.color} flex-shrink-0`}>
              {info.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-foreground/60 font-medium">{info.label}</p>
              <p className="text-sm font-semibold text-foreground truncate">{info.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}