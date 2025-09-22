# 🚀 Personal Portfolio - Ceradev

Un portfolio personal moderno y completamente responsive construido con Next.js 15, React 19, TypeScript y Tailwind CSS. Incluye animaciones fluidas, modo oscuro/claro, sistema de contacto funcional y una arquitectura de componentes perfectamente organizada.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ceradevs-projects/v0-modern-portfolio-website)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Organized-green?style=for-the-badge&logo=structure)](./components/sections/)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Arquitectura de Componentes](#-arquitectura-de-componentes)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Secciones del Portfolio](#-secciones-del-portfolio)
- [Componentes UI](#-componentes-ui)
- [Optimizaciones y Mejoras](#-optimizaciones-y-mejoras)
- [Sistema de Colores](#-sistema-de-colores)
- [Formulario de Contacto](#-formulario-de-contacto)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### 🎨 Diseño y UX
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop
- **Modo Oscuro/Claro**: Toggle automático con persistencia
- **Animaciones Fluidas**: Framer Motion para transiciones suaves
- **Gradientes Modernos**: Efectos visuales atractivos
- **Tipografía Optimizada**: Jerarquía visual clara

### 🚀 Funcionalidades
- **Navegación Suave**: Scroll automático entre secciones
- **Formulario de Contacto**: Envío real de emails con Resend
- **Galería de Proyectos**: Carousel interactivo con videos
- **Timeline de Experiencia**: Cronología profesional
- **Testimonios**: Carrusel de recomendaciones
- **Servicios**: Tarjetas interactivas con hover effects

### 📱 Optimización
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Lazy loading y optimización de imágenes
- **Accesibilidad**: ARIA labels y navegación por teclado
- **PWA Ready**: Configuración para Progressive Web App
- **Error Handling**: Supresión de warnings de desarrollo
- **Component Organization**: Arquitectura modular y escalable

## 🛠 Tecnologías

### Frontend
- **Next.js 15.2.4** - Framework React con App Router
- **React 19.1.1** - Biblioteca de UI con hooks modernos
- **TypeScript 5.9.2** - Tipado estático para JavaScript
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **Framer Motion 12.23.12** - Animaciones y transiciones

### UI Components
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconografía moderna
- **React Icons** - Biblioteca completa de iconos
- **Class Variance Authority** - Gestión de variantes CSS

### Backend y Servicios
- **Resend 6.1.0** - Servicio de envío de emails
- **Next.js API Routes** - Endpoints para formulario de contacto

### Herramientas de Desarrollo
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores
- **ESLint** - Linting de código
- **pnpm** - Gestor de paquetes rápido

## 🏗️ Arquitectura de Componentes

El proyecto utiliza una arquitectura de componentes perfectamente organizada y escalable:

### 📂 **Organización por Secciones**

Cada sección del portfolio tiene sus componentes organizados por funcionalidad:

#### 🚀 **Hero Section** (`components/sections/hero/components/`)
```
├── content/          # Contenido principal
│   ├── hero-text.tsx
│   ├── hero-profile.tsx
│   └── typewriter.tsx
├── interaction/      # Elementos interactivos
│   └── hero-buttons.tsx
└── layout/          # Elementos de presentación
    └── scroll-down-button.tsx
```

#### 👨‍💻 **About Section** (`components/sections/about/components/`)
```
├── skills/          # Habilidades técnicas y profesionales
│   ├── compact-tech-skills.tsx
│   └── professional-soft-skills.tsx
├── info/           # Información personal y profesional
│   ├── essential-info.tsx
│   ├── education-cert-summary.tsx
│   ├── languages-info.tsx
│   ├── practical-info.tsx
│   ├── professional-goal.tsx
│   └── value-proposition.tsx
└── layout/         # Elementos de presentación
    └── about-subtitle.tsx
```

#### 💼 **Experience Section** (`components/sections/experience/components/`)
```
├── timeline/       # Componentes de línea de tiempo
│   ├── timeline-section.tsx
│   └── timeline-node.tsx
├── content/       # Detalles de experiencias
│   └── experience-details.tsx
└── layout/        # Elementos de presentación
    ├── background-elements.tsx
    ├── subtitle-section.tsx
    └── mobile-hint.tsx
```

#### 🚀 **Projects Section** (`components/sections/projects/components/`)
```
├── player/        # Reproductor de video y controles
│   ├── project-video-player.tsx
│   ├── video-controls.tsx
│   ├── video-overlay.tsx
│   ├── video-content.tsx
│   └── playlist-sidebar.tsx
├── display/       # Visualización de proyectos
│   ├── project-card.tsx
│   ├── projects-carousel.tsx
│   ├── project-details-modal.tsx
│   └── project-filters.tsx
└── layout/        # Elementos de estructura
    ├── mobile-project-navigation.tsx
    └── projects-subtitle.tsx
```

#### 🛠️ **Services Section** (`components/sections/services/components/`)
```
├── cards/         # Tarjetas de servicios
│   └── service-card.tsx
├── layout/        # Elementos de estructura
│   ├── services-grid.tsx
│   └── services-subtitle.tsx
└── interaction/   # Elementos interactivos
    └── schedule-call.tsx
```

#### 💬 **Testimonials Section** (`components/sections/testimonials/components/`)
```
├── cards/         # Tarjetas de testimonios
│   ├── testimonial-card.tsx
│   └── testimonial-slide.tsx
├── carousel/      # Componentes del carrusel
│   ├── testimonials-carousel.tsx
│   └── carousel-navigation.tsx
└── layout/        # Elementos de estructura
    ├── testimonials-grid.tsx
    └── testimonials-subtitle.tsx
```

#### 📧 **Contact Section** (`components/sections/contact/components/`)
```
├── form/          # Componentes del formulario
│   ├── contact-form.tsx
│   ├── contact-form-fields.tsx
│   ├── contact-form-actions.tsx
│   └── contact-form-section.tsx
├── content/       # Información de contacto
│   ├── contact-info.tsx
│   └── contact-intro.tsx
└── layout/        # Elementos de presentación
    └── contact-subtitle.tsx
```

### 🎯 **Beneficios de la Arquitectura**

- **🔍 Navegación Intuitiva**: Componentes agrupados por funcionalidad
- **📈 Escalabilidad**: Fácil agregar nuevos componentes en la categoría correcta
- **️ Mantenibilidad**: Código bien organizado y estructurado
- **🔄 Reutilización**: Componentes modulares y bien separados
- **📚 Documentación**: README en cada sección explicando la estructura

## 📁 Estructura del Proyecto

```
personal-portfolio/
├── app/                          # App Router de Next.js
│   ├── api/contact/              # API para formulario de contacto
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── components/                   # Componentes React
│   ├── layout/                   # Componentes de layout
│   ├── sections/                 # Secciones del portfolio
│   │   ├── hero/                 # Sección hero
│   │   ├── about/                # Sección sobre mí
│   │   ├── experience/           # Experiencia profesional
│   │   ├── projects/             # Proyectos
│   │   ├── services/             # Servicios
│   │   ├── testimonials/         # Testimonios
│   │   └── contact/              # Formulario de contacto
│   └── ui/                       # Componentes UI reutilizables
├── data/                         # Datos estáticos
├── hooks/                        # Custom hooks
├── lib/                          # Utilidades
├── types/                        # Definiciones de tipos TypeScript
├── utils/                        # Utilidades adicionales
└── public/                       # Archivos estáticos
```

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/personal-portfolio.git
cd personal-portfolio
```

2. **Instalar dependencias**
```bash
pnpm install
# o
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```

4. **Ejecutar en desarrollo**
```bash
pnpm dev
# o
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Resend Configuration (para formulario de contacto)
RESEND_API_KEY=tu_api_key_de_resend
CONTACT_EMAIL=tu_email@ejemplo.com
FROM_EMAIL=onboarding@resend.dev

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Configuración de Resend

Para el formulario de contacto funcional:

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura las variables de entorno
4. Verifica tu dominio (opcional)

Ver [RESEND_SETUP.md](./RESEND_SETUP.md) para instrucciones detalladas.

## 🛠 Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Servidor de desarrollo
pnpm build        # Build de producción
pnpm start        # Servidor de producción
pnpm lint         # Linting del código
```

### Convenciones de Código

- **TypeScript**: Tipado estricto en todos los componentes
- **Props Readonly**: Todas las props marcadas como readonly
- **Componentes Funcionales**: Uso exclusivo de function components
- **CSS Modules**: Tailwind CSS con clases utilitarias
- **Naming**: PascalCase para componentes, camelCase para funciones

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

2. **Configurar variables de entorno** en el dashboard de Vercel

3. **Configurar dominio personalizado** (opcional)

## 📄 Secciones del Portfolio

### 🏠 Hero Section
- **Título principal** con animación de escritura
- **Botones de acción** (Contacto, CV)
- **Imagen de perfil** con efectos 3D
- **Scroll indicator** para navegación

### 👨‍💻 About Section
- **Información personal** estructurada
- **Habilidades técnicas** con iconos
- **Soft skills** con animaciones
- **Información práctica** (ubicación, disponibilidad)

### 💼 Experience Section
- **Timeline profesional** interactiva
- **Detalles de cada posición** expandibles
- **Logos de empresas** con hover effects
- **Fechas y responsabilidades**

### 🚀 Projects Section
- **Galería de proyectos** con carousel
- **Videos de demostración** integrados
- **Tecnologías utilizadas** con badges
- **Enlaces a repositorios** y demos

### 🛠 Services Section
- **Tarjetas de servicios** con animaciones
- **Descripciones detalladas** de cada servicio
- **Precios y disponibilidad**
- **Call-to-action** buttons

### 💬 Testimonials Section
- **Carrusel de testimonios** automático
- **Fotos de clientes** con efectos
- **Calificaciones con estrellas**
- **Navegación por gestos** en móvil

### 📧 Contact Section
- **Formulario de contacto** funcional
- **Validación en tiempo real**
- **Envío de emails** con Resend
- **Estados de carga** y feedback

## ⚡ Optimizaciones y Mejoras

### 🛠️ **Correcciones Implementadas**

#### **Error Handling y Warnings**
- ✅ **Supresión de DevTools warnings**: Eliminación de mensajes molestos en desarrollo
- ✅ **Framer Motion scroll offset**: Corrección de advertencias de posicionamiento
- ✅ **Redux DevTools errors**: Manejo de errores de extensiones del navegador
- ✅ **PWA manifest**: Corrección de rutas de iconos en el manifest

#### **Performance y Accesibilidad**
- ✅ **Scroll offset fix**: CSS global para elementos animados
- ✅ **Keyboard navigation**: Soporte completo de navegación por teclado
- ✅ **ARIA labels**: Etiquetas de accesibilidad en componentes interactivos
- ✅ **Semantic HTML**: Uso correcto de elementos semánticos

#### **Configuración Avanzada**
- ✅ **Next.js config**: Rewrites para iconos y headers de caché
- ✅ **Icon optimization**: Configuración optimizada de favicons y PWA icons
- ✅ **Error boundaries**: Manejo robusto de errores en componentes
- ✅ **Development tools**: Supresión inteligente de warnings de desarrollo

### 🔧 **Herramientas de Desarrollo**

```typescript
// DevToolsSuppressor - Elimina warnings molestos
import { DevToolsSuppressor } from "@/components/dev-tools-suppressor";

// Framer Motion Fix - Asegura posicionamiento correcto
import { framerMotionProps, useFramerMotionFix } from "@/utils/framer-motion-fix";
```

### 📱 **Configuración de PWA**

```json
// public/icons/site.webmanifest
{
  "name": "César Suárez | Desarrollador Full Stack",
  "icons": [
    {
      "src": "/icons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### 🚀 **Next.js Configuration**

```javascript
// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/icons/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000' }]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/android-chrome-192x192.png',
        destination: '/icons/android-chrome-192x192.png'
      }
    ]
  }
}
```

## 🎨 Sistema de Colores

El proyecto utiliza una paleta de colores consistente definida en `COLOR_PALETTE.md`:

### Colores Principales
- **Primary (Rojo)**: `#dc2626` - Color principal de marca
- **Success (Verde)**: `#22c55e` - Estados de éxito
- **Info (Azul)**: `#3b82f6` - Información y enlaces
- **Warning (Amarillo)**: `#f59e0b` - Alertas y calificaciones

### Modo Oscuro/Claro
- Variables CSS automáticas
- Transiciones suaves entre temas
- Persistencia en localStorage

## 📧 Formulario de Contacto

### Características
- **Validación completa** de campos
- **Envío real de emails** con Resend
- **Template HTML profesional**
- **Estados de carga** y feedback
- **Manejo de errores** robusto

### Configuración
1. Configurar API key de Resend
2. Personalizar template de email
3. Verificar dominio (producción)
4. Configurar rate limiting

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request
## 🎯 **Características Destacadas**

### 🏆 **Arquitectura Profesional**
- **7 secciones completamente organizadas** con estructura modular
- **Componentes reutilizables** y bien documentados
- **Separación clara de responsabilidades** por funcionalidad
- **Escalabilidad garantizada** para futuras mejoras

### 🚀 **Performance y UX**
- **Carga optimizada** con lazy loading y code splitting
- **Animaciones fluidas** sin afectar el rendimiento
- **Responsive design** perfecto en todos los dispositivos
- **Accesibilidad completa** con ARIA y navegación por teclado

### 🛠️ **Desarrollo Optimizado**
- **Zero warnings** en consola de desarrollo
- **Error handling robusto** en todos los componentes
- **TypeScript estricto** con tipado completo
- **Configuración avanzada** de Next.js y PWA

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐

## 📞 **Contacto**

- **Portfolio**: [cesarsuarez.dev](https://cesarsuarez.dev)
- **LinkedIn**: [César Suárez](https://linkedin.com/in/césar-aramis-suárez-orizondo/)
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **Email**: suarezorizondocesararamis@gmail.com
