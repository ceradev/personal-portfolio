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
    name: 'Propietario',
    role: 'Gerente',
    company: 'Bar Guantanamera',
    content: 'César desarrolló una aplicación web completa que transformó completamente la gestión de nuestro bar. El sistema de reservas en tiempo real y la integración con mapas han mejorado significativamente la experiencia de nuestros clientes y la eficiencia operativa.',
    rating: 5,
    project: 'Bar Guantanamera',
  },
  {
    id: 'testimonial-2',
    name: 'Moises Hernandez Rojas',
    role: 'Desarrollador Senior',
    company: 'Eviden',
    content: 'César demostró excelentes habilidades técnicas en el desarrollo de la aplicación de routing de entornos. Su capacidad para crear formularios dinámicos unificados y manejar la internacionalización con ngx-translate fue impresionante. Un desarrollador muy profesional.',
    rating: 5,
    project: 'Routing de entornos',
  },
  {
    id: 'testimonial-3',
    name: 'Janja Vogrin',
    role: 'Project Manager',
    company: 'Eviden',
    content: 'El calendario de eventos que desarrolló César para nuestro equipo ha sido una herramienta fundamental. La gestión de eventos en tiempo real y la interfaz moderna han mejorado considerablemente nuestra organización y productividad.',
    rating: 5,
    project: 'Calendario de eventos',
  },
  {
    id: 'testimonial-4',
    name: 'Andrés',
    role: 'Fundador',
    company: 'Alphonics',
    content: 'César creó una plataforma web excepcional para la promoción musical. El reproductor musical integrado y el panel de administración han facilitado enormemente la conexión con nuestra audiencia y la gestión de contenido digital.',
    rating: 5,
    project: 'Alphonics',
  },
  {
    id: 'testimonial-5',
    name: 'Bibliotecario',
    role: 'Administrador',
    company: 'Librería Online',
    content: 'La aplicación web desarrollada por César para nuestra librería ha optimizado completamente la administración del inventario. El sistema de reservas y la interfaz intuitiva han mejorado significativamente la experiencia tanto para nosotros como para nuestros usuarios.',
    rating: 5,
    project: 'Librería online',
  },
  {
    id: 'testimonial-6',
    name: 'Cliente',
    role: 'Empresario',
    company: 'Proyecto Personal',
    content: 'El portfolio personal de César demuestra su profesionalismo y habilidades técnicas excepcionales. Su capacidad para crear interfaces modernas, responsivas y con animaciones fluidas es realmente impresionante. Definitivamente recomiendo sus servicios.',
    rating: 5,
    project: 'Portfolio Personal',
  }
];
