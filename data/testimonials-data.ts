export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  project?: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María González',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'César transformó completamente nuestra presencia digital. Su trabajo en el desarrollo de nuestra plataforma web fue excepcional, entregando resultados que superaron nuestras expectativas.',
    rating: 5,
    project: 'Plataforma E-commerce',
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Rodríguez',
    role: 'Director de Tecnología',
    company: 'InnovateCorp',
    content: 'La consultoría técnica de César nos ayudó a optimizar nuestros procesos de desarrollo. Su conocimiento profundo y enfoque metodológico fueron clave para nuestro éxito.',
    rating: 5,
    project: 'Consultoría DevOps',
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    role: 'Product Manager',
    company: 'DataFlow Inc',
    content: 'El análisis de datos que realizó César para nuestro proyecto fue increíble. Los insights que obtuvimos nos permitieron tomar decisiones estratégicas importantes.',
    rating: 5,
    project: 'Dashboard Analytics',
  },
  {
    id: 'testimonial-4',
    name: 'David López',
    role: 'Fundador',
    company: 'MobileFirst',
    content: 'La aplicación móvil desarrollada por César es simplemente perfecta. La atención al detalle y la experiencia de usuario son excepcionales.',
    rating: 5,
    project: 'App Móvil React Native',
  },
  {
    id: 'testimonial-5',
    name: 'Laura Sánchez',
    role: 'Marketing Director',
    company: 'GrowthHub',
    content: 'Trabajar con César fue una experiencia increíble. Su profesionalismo, comunicación clara y entrega puntual hacen que sea un desarrollador de confianza.',
    rating: 5,
    project: 'Sitio Web Corporativo',
  },
  {
    id: 'testimonial-6',
    name: 'Roberto Fernández',
    role: 'CTO',
    company: 'CloudTech',
    content: 'La arquitectura de software que diseñó César para nuestro sistema es robusta y escalable. Definitivamente lo recomiendo para proyectos complejos.',
    rating: 5,
    project: 'Arquitectura Microservicios',
  }
];
