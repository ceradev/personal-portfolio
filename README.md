# 🚀 Personal Portfolio - César Rodríguez

Un portfolio personal moderno y completamente responsive construido con Next.js 15, React 19, TypeScript y Tailwind CSS. Incluye animaciones fluidas, modo oscuro/claro, y un sistema de contacto funcional.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ceradevs-projects/v0-modern-portfolio-website)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Desarrollo](#-desarrollo)
- [Despliegue](#-despliegue)
- [Secciones del Portfolio](#-secciones-del-portfolio)
- [Componentes UI](#-componentes-ui)
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

## 📞 Contacto

**César Rodríguez**
- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [github.com/tu-usuario](https://github.com/tu-usuario)
- 🌐 Portfolio: [tu-portfolio.com](https://tu-portfolio.com)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐