import { Globe, Smartphone, Lightbulb, BarChart3 } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
  pricing?: {
    type: 'hourly' | 'project' | 'monthly';
    range: string;
  };
}

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y aplicaciones web responsivas utilizando las últimas tecnologías.',
    icon: Globe,
    features: [
      'Diseño responsivo',
      'Optimización SEO',
      'Rendimiento optimizado',
      'Integración de APIs',
      'Mantenimiento continuo'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    pricing: {
      type: 'project',
      range: '€500 - €5000'
    }
  },
  {
    id: 'mobile-development',
    title: 'Desarrollo Móvil',
    description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    icon: Smartphone,
    features: [
      'Apps nativas',
      'Apps multiplataforma',
      'UI/UX optimizada',
      'Integración de servicios',
      'Publicación en stores'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricing: {
      type: 'project',
      range: '€1000 - €8000'
    }
  },
  {
    id: 'consulting',
    title: 'Consultoría Técnica',
    description: 'Asesoramiento especializado en arquitectura de software, mejores prácticas y optimización.',
    icon: Lightbulb,
    features: [
      'Arquitectura de software',
      'Code review',
      'Optimización de rendimiento',
      'Mejores prácticas',
      'Mentoría técnica'
    ],
    technologies: ['Clean Architecture', 'Design Patterns', 'DevOps', 'Cloud', 'Testing'],
    pricing: {
      type: 'hourly',
      range: '€50 - €100/h'
    }
  },
  {
    id: 'data-analysis',
    title: 'Análisis de Datos',
    description: 'Transformación de datos en insights accionables mediante análisis estadístico y visualización.',
    icon: BarChart3,
    features: [
      'Análisis estadístico',
      'Visualización de datos',
      'Dashboards interactivos',
      'Machine Learning',
      'Reportes automatizados'
    ],
    technologies: ['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Pandas'],
    pricing: {
      type: 'project',
      range: '€800 - €3000'
    }
  }
];
