# Projects Section Components

Esta carpeta contiene todos los componentes relacionados con la sección de proyectos/portafolio, organizados por funcionalidad.

## Estructura de Carpetas

### 🎬 `player/`
Componentes del reproductor de video y controles:
- `project-video-player.tsx` - Reproductor principal de video de proyectos
- `video-controls.tsx` - Controles del reproductor (play, pause, volumen, etc.)
- `video-overlay.tsx` - Overlay y elementos superpuestos del video
- `video-content.tsx` - Contenido del video y manejo de medios
- `playlist-sidebar.tsx` - Barra lateral con lista de proyectos

### 📱 `display/`
Componentes de visualización y presentación:
- `project-card.tsx` - Tarjeta individual de proyecto
- `projects-carousel.tsx` - Carrusel de proyectos
- `project-details-modal.tsx` - Modal con detalles completos del proyecto
- `project-filters.tsx` - Filtros y búsqueda de proyectos

### 🎨 `layout/`
Componentes de estructura y navegación:
- `projects-subtitle.tsx` - Subtítulo animado de la sección
- `mobile-project-navigation.tsx` - Navegación específica para móviles

## Uso

Todos los componentes están exportados desde el archivo `index.ts` principal:

```typescript
import { 
  ProjectVideoPlayer,
  VideoControls,
  VideoOverlay,
  VideoContent,
  PlaylistSidebar,
  ProjectCard,
  ProjectsCarousel,
  ProjectDetailsModal,
  ProjectFilters,
  ProjectsSubtitle,
  MobileProjectNavigation,
  MobileProjectIndicator
} from './components';
```

## Funcionalidad

### Player
- **ProjectVideoPlayer**: Reproductor principal que maneja la reproducción de proyectos
- **VideoControls**: Controles completos del reproductor (play/pause, volumen, tiempo, etc.)
- **VideoOverlay**: Elementos superpuestos y overlay del video
- **VideoContent**: Manejo del contenido multimedia y reproducción
- **PlaylistSidebar**: Lista lateral con todos los proyectos disponibles

### Display
- **ProjectCard**: Representación visual de un proyecto individual
- **ProjectsCarousel**: Carrusel horizontal/vertical de proyectos
- **ProjectDetailsModal**: Modal con información detallada del proyecto
- **ProjectFilters**: Sistema de filtrado y búsqueda de proyectos

### Layout
- **ProjectsSubtitle**: Subtítulo con instrucciones de uso del reproductor
- **MobileProjectNavigation**: Navegación optimizada para dispositivos móviles

## Características Principales

- **Reproductor de Video Interactivo**: Sistema completo de reproducción de proyectos
- **Responsive Design**: Adaptación completa a diferentes tamaños de pantalla
- **Controles Avanzados**: Play/pause, volumen, tiempo, playlist, etc.
- **Filtrado Inteligente**: Búsqueda y filtrado por categorías, tecnologías, etc.
- **Navegación Móvil**: Interfaz optimizada para touch y gestos

## Organización

Esta estructura facilita:
- **Mantenimiento**: Componentes agrupados por funcionalidad
- **Escalabilidad**: Fácil agregar nuevos componentes en la categoría correcta
- **Claridad**: Nombres descriptivos y organización lógica
- **Reutilización**: Componentes bien separados y modulares
