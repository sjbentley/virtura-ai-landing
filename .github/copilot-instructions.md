# Copilot Instructions for Brainwave Landing Page

## Project Overview

This is a modern React landing page built with Vite and Tailwind CSS, featuring futuristic UI/UX design with animations, gradients, and interactive elements. The project has been customized from the original JavaScript Mastery template for "Virtura AI" with viral marketing features.

## Architecture & Tech Stack

- **Framework**: React 18 with Vite build tool
- **Styling**: Tailwind CSS with extensive custom configuration
- **Key Dependencies**: `react-just-parallax`, `react-router-dom`, `scroll-lock`
- **Build Commands**: `npm run dev` (port 5173), `npm run build`, `npm run preview`

## Custom Tailwind Configuration

The project uses a heavily customized Tailwind config with:

### Color System
- **Brand colors**: `color.1` through `color.6` (#AC6AFF, #FFC876, etc.)
- **Neutral palette**: `n.1` through `n.13` (from white #FFFFFF to dark grays)
- **Stroke colors**: Single stroke color `stroke.1` for UI elements

### Typography Classes
- **Headers**: `.h1` through `.h6` with responsive sizes
- **Body text**: `.body-1`, `.body-2` for content
- **Special text**: `.tagline` (Space Grotesk, uppercase, letter-spaced), `.quote`, `.button`

### Custom Utilities
- **Container**: Max-width responsive container with custom padding
- **Spacing**: Custom values like `0.25` (1px), `7.5`, `15`
- **Z-index**: Named z-index values (`z-1` through `z-5`)

## Component Patterns

### Layout Components
- **Section**: Wrapper component with optional crosses/grid lines (`src/components/Section.jsx`)
- **Header**: Fixed header with backdrop blur and brand logo
- **Footer**: Simple footer component

### Asset Organization
- **SVG Components**: React components in `src/assets/svg/` (ButtonGradient, SectionSvg, PlusSvg)
- **Static Assets**: Icons and images in organized folders (`socials/`, etc.)
- **Asset Exports**: Centralized in `src/assets/index.js`

### Animation & Visual Effects

The project heavily uses:
- **Gradient backgrounds**: `bg-gradient-to-r`, `bg-conic-gradient`
- **Backdrop filters**: `backdrop-blur-xl` for glassmorphism
- **Pulse animations**: `animate-pulse` for glowing effects
- **Custom animations**: Defined in Tailwind for scanning lines, floating particles

## Development Patterns

### State Management
- Simple React useState for form states and UI interactions
- No external state management library

### Styling Approach
- **Mobile-first**: Responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- **Utility-first**: Heavy use of Tailwind utilities over custom CSS
- **Component-scoped**: Animations and effects defined inline with style props

### Form Integration
- **Viral Loops**: Custom modal component with event handling
- **Form states**: Loading, success, and error handling
- **Modal Pattern**: Glassmorphism modal with backdrop blur effects

## File Structure Conventions

```
src/
├── components/           # React components
├── assets/              # Static assets with organized subfolders
│   ├── svg/            # React SVG components
│   └── socials/        # Social media icons
├── constants/          # Data constants and configuration
└── App.jsx            # Main application component
```

## Key Integration Points

### Viral Loops Form
- Custom event handling for `vl-event` listeners
- Modal integration with backdrop blur and glassmorphism
- Loading states and success animations with particle effects

### Animation System
- Particles and floating elements generated with array mapping
- Keyframe animations defined via inline styles
- Responsive animation delays for staggered effects

## Development Workflow

### Running the Project
```bash
npm run dev          # Development server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint with React rules
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and use the `Section` wrapper for consistency
3. Follow the established color and typography patterns
4. Add responsive breakpoints for mobile-first design

### Styling Guidelines
- Use custom color classes (`color.1`, `n.8`) instead of default Tailwind colors
- Apply backdrop blur and gradient effects for futuristic aesthetic
- Include hover states and transitions for interactive elements
- Follow the established spacing scale (`px-5 md:px-10 lg:px-15`)

## Asset Management

- SVG icons go in `src/assets/socials/` or appropriate subfolder
- React SVG components in `src/assets/svg/`
- Export all assets through `src/assets/index.js`
- Use meaningful names and organize by feature/type