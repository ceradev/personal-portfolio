# Components Structure

This directory contains all the React components organized by functionality and purpose.

## Directory Structure

```
components/
├── layout/           # Layout and navigation components
├── sections/         # Main page sections
├── skills/           # Skills and proficiency components
├── projects/         # Project display components (currently empty)
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

### Section Components (`/sections`)
Main page sections that compose the portfolio:
- `AboutSection` - About me section
- `EnhancedProjectsSection` - Projects showcase section
- `ContactSection` - Contact information section

### Skills Components (`/skills`)
Components for displaying technical and personal skills:
- `TechSkillsIconGrid` - Technical skills with icons
- `LanguageProficiency` - Language proficiency display

### Projects Components (`/projects`)
Components for displaying portfolio projects:
- Currently empty (all project components have been removed as they were not being used)

### Education Components (`/education`)
Components for education and certification display:
- `EducationTimeline` - Education timeline

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
- `EnhancedThemeTransition` - Enhanced theme transitions
- `ExperienceStepper` - Experience stepper component

### UI Components (`/ui`)
Reusable UI components from shadcn/ui library:
- `Button` - Button component
- `Badge` - Badge component
- `Card` - Card component
- `Input` - Input component
- `Textarea` - Textarea component
- `Label` - Label component
- `Checkbox` - Checkbox component
- `Dialog` - Dialog component
- `DropdownMenu` - Dropdown menu component
- `Tabs` - Tabs component
- `Tooltip` - Tooltip component
- `ScrollArea` - Scroll area component

## Usage

Import components using the main index file:

```typescript
import { AboutSection, TechSkillsIconGrid, ContactForm } from '@/components';
```

Or import from specific categories:

```typescript
import { AboutSection } from '@/components/sections';
import { TechSkillsIconGrid } from '@/components/skills';
import { ContactForm } from '@/components/contact';
```
