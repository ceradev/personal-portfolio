# Components Structure

This directory contains all the React components organized by functionality and purpose.

## Directory Structure

```
components/
├── layout/           # Layout and navigation components
├── sections/         # Main page sections
├── skills/           # Skills and proficiency components
├── projects/         # Project display components
├── education/        # Education and certification components
├── contact/          # Contact form and related components
├── utils/            # Utility and helper components
├── ui/               # Reusable UI components (shadcn/ui)
└── index.ts          # Main export file
```

## Component Categories

### Layout Components (`/layout`)
Components related to the overall layout and navigation:
- `ThemeProvider` - Theme context provider
- `ThemeToggle` - Theme switching component
- `TopNavigation` - Top navigation bar
- `SideNavigation` - Side navigation menu

### Section Components (`/sections`)
Main page sections that compose the portfolio:
- `AboutSection` - About me section
- `EnhancedProjectsSection` - Projects showcase section
- `ContactSection` - Contact information section

### Skills Components (`/skills`)
Components for displaying technical and personal skills:
- `TechSkillsIconGrid` - Technical skills with icons
- `TechSkillsSpotifyGrid` - Spotify-style skills grid
- `TechSkillsSpotify` - Spotify-style skills layout
- `TechSkillsBadges` - Skills as badges
- `TechSkillsGrid` - Grid layout for skills
- `TechSkillsBadgesSimple` - Simplified skills badges
- `PersonalSkillsGrid` - Personal/soft skills grid
- `LanguageProficiency` - Language proficiency display

### Projects Components (`/projects`)
Components for displaying portfolio projects:
- `ProjectsSpotifyGrid` - Spotify-style projects grid
- `ProjectsSpotifyList` - Spotify-style projects list
- `ProjectsSpotifyRows` - Spotify-style projects rows
- `ProjectsCarousel` - Projects carousel/slider
- `ProjectsGallery` - Projects gallery layout

### Education Components (`/education`)
Components for education and certification display:
- `EducationCertificationSection` - Education and certifications section
- `EducationTimeline` - Education timeline
- `EducationCards` - Education cards layout
- `CertificationCard` - Individual certification card

### Contact Components (`/contact`)
Components for contact functionality:
- `ContactForm` - Contact form component

### Utility Components (`/utils`)
Helper and utility components:
- `TextReveal` - Text animation component
- `SmoothScrollLink` - Smooth scrolling link
- `SectionTransition` - Section transition animations
- `ScrollDownArrow` - Scroll down indicator
- `ScrollProgress` - Scroll progress indicator
- `SectionTitle` - Section title component
- `ExperienceTimeline` - Experience timeline
- `HomeButton` - Home navigation button
- `InteractiveMap` - Interactive map component
- `OptimizedBackground` - Optimized background component
- `EnhancedThemeTransition` - Enhanced theme transitions
- `ExperienceStepper` - Experience stepper component

### UI Components (`/ui`)
Reusable UI components from shadcn/ui library.

## Usage

Import components using the main index file:

```typescript
import { AboutSection, TechSkillsGrid, ContactForm } from '@/components';
```

Or import from specific categories:

```typescript
import { AboutSection } from '@/components/sections';
import { TechSkillsGrid } from '@/components/skills';
import { ContactForm } from '@/components/contact';
```
