import { AboutData } from '../types/about/about';

export const aboutData: AboutData = {
  personalInfo: [
    {
      icon: "Briefcase",
      label: "Experiencia",
      value: "1+ años",
      color: "bg-info-500/10 text-info-600 dark:text-info-400"
    },
    {
      icon: "MapPin",
      label: "Ubicación",
      value: "Tenerife, España",
      color: "bg-success-500/10 text-success-600 dark:text-success-400"
    },
    {
      icon: "Globe",
      label: "Disponibilidad",
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: "GraduationCap",
      label: "Educación",
      value: "Desarrollo Web",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ],
  additionalInfo: [
    { 
      icon: "Briefcase", 
      label: "Carnet de Conducir", 
      value: "B1, B",
      color: "bg-success-500/10 text-success-600 dark:text-success-400"
    },
    { 
      icon: "MapPin", 
      label: "Vehículo Propio", 
      value: "Disponible",
      color: "bg-info-500/10 text-info-600 dark:text-info-400"
    },
    { 
      icon: "Globe", 
      label: "Disponibilidad", 
      value: "Remoto / Presencial",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    { 
      icon: "Clock", 
      label: "Movilidad", 
      value: "Para viajar",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    }
  ],
  softSkills: [
    {
      icon: "Users",
      name: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
      color: "bg-info-500/10 text-info-600 dark:text-info-400"
    },
    {
      icon: "MessageCircle",
      name: "Comunicación",
      description: "Comunicación clara con stakeholders técnicos y no técnicos",
      color: "bg-success-500/10 text-success-600 dark:text-success-400"
    },
    {
      icon: "Lightbulb",
      name: "Resolución de Problemas",
      description: "Enfoque analítico para encontrar soluciones innovadoras",
      color: "bg-warning-500/10 text-warning-600 dark:text-warning-400"
    },
    {
      icon: "Target",
      name: "Orientación a Resultados",
      description: "Enfoque en entregar valor y cumplir objetivos del negocio",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
    },
    {
      icon: "Brain",
      name: "Aprendizaje Continuo",
      description: "Adaptabilidad y actualización constante de conocimientos",
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
    },
    {
      icon: "Clock",
      name: "Gestión del Tiempo",
      description: "Organización eficiente para cumplir deadlines",
      color: "bg-primary/10 text-primary dark:text-primary-400"
    }
  ],
  languages: [
    { 
      label: "Español", 
      level: "Nativo", 
      flag: "🇪🇸", 
      color: "bg-primary/10 text-primary dark:text-primary-400" 
    },
    { 
      label: "Inglés", 
      level: "Avanzado (C1)", 
      flag: "🇬🇧", 
      color: "bg-info-500/10 text-info-600 dark:text-info-400" 
    },
    { 
      label: "Sueco", 
      level: "Intermedio", 
      flag: "🇸🇪", 
      color: "bg-warning-500/10 text-warning-600 dark:text-warning-400" 
    }
  ],
  education: {
    main: {
      institution: "I.E.S Las Galletas",
      degree: "Desarrollo de Aplicaciones Web",
      year: "2024",
      highlight: "Matrícula de Honor"
    },
    certificates: [
      { 
        name: "Meta Front-End Developer", 
        provider: "Meta", 
        year: "2024", 
        month: "Octubre",
        featured: true,
        icon: "Code",
        color: "bg-blue-500/10 text-blue-600 border-blue-200"
      },
      { 
        name: "Full Stack Development", 
        provider: "Udemy", 
        year: "2023", 
        month: "Diciembre",
        featured: true,
        icon: "Database",
        color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
      },
      { 
        name: "React & Redux", 
        provider: "Udemy", 
        year: "2023", 
        month: "Agosto",
        featured: false,
        icon: "Code",
        color: "bg-blue-500/10 text-blue-600 border-blue-200"
      },
      { 
        name: "TypeScript Fundamentals", 
        provider: "Udemy", 
        year: "2023", 
        month: "Julio",
        featured: false,
        icon: "BookOpen",
        color: "bg-blue-500/10 text-blue-600 border-blue-200"
      },
      {
        name: "Python",
        provider: "Udemy",
        year: "2023",
        month: "Junio",
        featured: false,
        icon: "Code",
        color: "bg-yellow-500/10 text-yellow-600 border-yellow-200"
      },
      {
        name: "N8N Workflow Automation",
        provider: "Udemy",
        year: "2023",
        month: "Junio",
        featured: false,
        icon: "Brain",
        color: "bg-green-500/10 text-green-600 border-green-200"
      }
    ]
  },
  professionalGoals: [
    "Crear mi propia agencia digital especializada en Inteligencia Artificial",
    "Desarrollar soluciones tecnológicas que transformen negocios tradicionales",
    "Especializarme en aplicaciones web modernas y escalables",
    "Contribuir a la digitalización de empresas y emprendedores",
    "Dominar tecnologías emergentes y frameworks modernos",
    "Crear impacto real en la forma en que los negocios se conectan con sus clientes",
  ],
  aboutText: [
    "Me llamo César Suárez, soy un desarrollador Full-Stack especializado en aplicaciones web modernas, rápidas y escalables. Trabajo con tecnologías como React, Next.js, Angular, Spring Boot y PostgreSQL entre otras, creando soluciones que ayudan a empresas y emprendedores a digitalizar y optimizar sus negocios.",
    "Apasionado por el aprendizaje constante y la innovación, busco aportar valor real en cada proyecto mientras sigo ampliando mis conocimientos en desarrollo de aplicaciones, IA y tecnologías emergentes.",
    "Mi meta es crear mi propia agencia digital especializada en Inteligencia Artificial, ofreciendo soluciones tecnológicas que transformen la forma en que los negocios crecen y se conectan con sus clientes.",
    "Con experiencia en metodologías ágiles y trabajo en equipos multidisciplinarios, me enfoco en entender las necesidades del negocio para traducirlas en soluciones técnicas eficientes y escalables.",
  ]
}
