import { Globe, Bot, Lightbulb, BarChart3 } from "lucide-react";

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
    id: 'ai-automation',
    title: 'Automatizaciones de IA',
    description: 'Desarrollo de agentes inteligentes y sistemas automatizados que optimizan procesos empresariales.',
    icon: Bot,
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
      range: '€1500 - €10000'
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
