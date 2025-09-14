export interface ProjectType {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  icon: string;
  features: string[];
}

export interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'design';
}

export interface BudgetCalculation {
  basePrice: number;
  featuresTotal: number;
  complexityMultiplier: number;
  timelineMultiplier: number;
  totalPrice: number;
  breakdown: {
    project: number;
    features: number;
    complexity: number;
    timeline: number;
  };
}

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Página web estática para promocionar productos o servicios',
    basePrice: 500,
    icon: '🌐',
    features: ['responsive-design', 'seo-optimization', 'contact-form']
  },
  {
    id: 'corporate-website',
    name: 'Sitio Web Corporativo',
    description: 'Sitio web completo para empresas con múltiples páginas',
    basePrice: 1500,
    icon: '🏢',
    features: ['cms', 'blog', 'multi-language', 'admin-panel']
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online',
    description: 'Plataforma de comercio electrónico completa',
    basePrice: 3000,
    icon: '🛒',
    features: ['payment-integration', 'inventory-management', 'user-accounts', 'order-tracking']
  },
  {
    id: 'web-application',
    name: 'Aplicación Web',
    description: 'Aplicación web dinámica con funcionalidades complejas',
    basePrice: 5000,
    icon: '⚡',
    features: ['real-time-features', 'api-integration', 'user-dashboard', 'advanced-security']
  },
  {
    id: 'mobile-app',
    name: 'Aplicación Móvil',
    description: 'Aplicación móvil nativa o híbrida',
    basePrice: 8000,
    icon: '📱',
    features: ['push-notifications', 'offline-mode', 'native-features', 'app-store-deployment']
  },
  {
    id: 'custom-solution',
    name: 'Solución Personalizada',
    description: 'Desarrollo completamente personalizado según necesidades específicas',
    basePrice: 10000,
    icon: '🔧',
    features: ['custom-architecture', 'advanced-integrations', 'scalability', 'maintenance']
  }
];

export const PROJECT_FEATURES: ProjectFeature[] = [
  // Frontend Features
  {
    id: 'responsive-design',
    name: 'Diseño Responsivo',
    description: 'Adaptable a todos los dispositivos',
    price: 200,
    category: 'frontend'
  },
  {
    id: 'seo-optimization',
    name: 'Optimización SEO',
    description: 'Optimizado para motores de búsqueda',
    price: 300,
    category: 'frontend'
  },
  {
    id: 'animations',
    name: 'Animaciones Avanzadas',
    description: 'Efectos visuales y transiciones',
    price: 400,
    category: 'frontend'
  },
  {
    id: 'pwa',
    name: 'Progressive Web App',
    description: 'Funcionalidad de aplicación nativa',
    price: 600,
    category: 'frontend'
  },

  // Backend Features
  {
    id: 'api-integration',
    name: 'Integración de APIs',
    description: 'Conexión con servicios externos',
    price: 500,
    category: 'backend'
  },
  {
    id: 'user-authentication',
    name: 'Autenticación de Usuarios',
    description: 'Sistema de login y registro',
    price: 400,
    category: 'backend'
  },
  {
    id: 'real-time-features',
    name: 'Funciones en Tiempo Real',
    description: 'Chat, notificaciones en vivo',
    price: 800,
    category: 'backend'
  },
  {
    id: 'advanced-security',
    name: 'Seguridad Avanzada',
    description: 'Protección contra vulnerabilidades',
    price: 600,
    category: 'backend'
  },

  // Database Features
  {
    id: 'database-design',
    name: 'Diseño de Base de Datos',
    description: 'Estructura optimizada de datos',
    price: 300,
    category: 'database'
  },
  {
    id: 'data-analytics',
    name: 'Analytics de Datos',
    description: 'Análisis y reportes de datos',
    price: 500,
    category: 'database'
  },

  // Deployment Features
  {
    id: 'cloud-deployment',
    name: 'Despliegue en la Nube',
    description: 'Hosting en servicios cloud',
    price: 200,
    category: 'deployment'
  },
  {
    id: 'ci-cd',
    name: 'CI/CD Pipeline',
    description: 'Automatización de despliegues',
    price: 400,
    category: 'deployment'
  },
  {
    id: 'monitoring',
    name: 'Monitoreo y Logs',
    description: 'Seguimiento de rendimiento',
    price: 300,
    category: 'deployment'
  }
];

export const COMPLEXITY_LEVELS = [
  { level: 'simple', multiplier: 1, label: 'Simple', description: 'Funcionalidades básicas' },
  { level: 'medium', multiplier: 1.5, label: 'Medio', description: 'Funcionalidades intermedias' },
  { level: 'complex', multiplier: 2, label: 'Complejo', description: 'Funcionalidades avanzadas' },
  { level: 'enterprise', multiplier: 3, label: 'Empresarial', description: 'Solución empresarial completa' }
];

export const TIMELINE_OPTIONS = [
  { weeks: 2, multiplier: 1.5, label: 'Urgente (2 semanas)' },
  { weeks: 4, multiplier: 1.2, label: 'Rápido (1 mes)' },
  { weeks: 8, multiplier: 1, label: 'Normal (2 meses)' },
  { weeks: 12, multiplier: 0.9, label: 'Flexible (3 meses)' }
];
