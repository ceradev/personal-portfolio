// Tipos para los proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  images?: string[]; // Nuevo campo para múltiples imágenes del proyecto
  demoUrl?: string;
  githubUrl?: string;
  impact?: string;
  category: string | string[];
  type: string | string[];
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  date: string;
  client?: string;
  role?: string;
  teamSize?: number;
  duration?: string;
  highlights?: string[];
  isDeployed?: boolean; // Nuevo campo para indicar si el proyecto está desplegado
}

// Importar los datos de proyectos
import projectsData from '../data/projects.json';

// Exportar los proyectos con el tipo correcto
export const projects: Project[] = projectsData as Project[];
