import { Globe, Bot, Lightbulb, BarChart3 } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
  color: string; // Color identificativo del servicio
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
    color: 'info', // Azul - Tecnología, confianza
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
      range: 'Desde €500'
    }
  },
  {
    id: 'ai-automation',
    title: 'Automatizaciones de IA',
    description: 'Desarrollo de agentes inteligentes y sistemas automatizados que optimizan procesos empresariales.',
    icon: Bot,
    color: 'purple', // Púrpura - Innovación, inteligencia
    features: [
      'Agentes conversacionales',
      'Automatización de procesos',
      'Integración con APIs',
      'Análisis predictivo',
      'Sistemas inteligentes'
    ],
    technologies: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'Docker', 'AWS'],
    pricing: {
      type: 'project',
      range: 'Desde €1500'
    }
  },
  {
    id: 'consulting',
    title: 'Consultoría Técnica',
    description: 'Asesoramiento especializado en arquitectura de software, mejores prácticas y optimización.',
    icon: Lightbulb,
    color: 'success', // Verde - Crecimiento, soluciones
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
      range: 'Desde €50/h'
    }
  },
  {
    id: 'data-analysis',
    title: 'Análisis de Datos',
    description: 'Transformación de datos en insights accionables mediante análisis estadístico y visualización.',
    icon: BarChart3,
    color: 'warning', // Amarillo - Atención, insights
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
      range: 'Desde €800'
    }
  }
];
