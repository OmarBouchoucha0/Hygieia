# Project Tech Stack & Skills

## Core Framework
- **Angular 17+** — Modern standalone components, signals, SSR optional
- **TypeScript** — Strict mode enabled

## UI Component Library
- **PrimeNG** — Rich component suite (tables, dialogs, charts, etc.)
  - Install: `npm install primeng primeicons primeflex`
  - Theme: Use **Tailwind-compatible** preset or custom CSS variables
  - Key components: Table, Dialog, Toast, Chart, FileUpload, Calendar

## Styling Engine
- **Tailwind CSS** — Utility-first CSS framework
  - Configuration: `tailwind.config.js`
  - Custom theme extensions for PrimeNG integration

## Typography System

### Display/Headings
- **Space Grotesk** (Google Fonts)
  - Weights: 400, 500, 600, 700
  - Use for: Page titles, section headers, navigation branding
  - Style: Geometric, modern, slightly technical/mature feel

### Body/UI Text
- **IBM Plex Sans** (Google Fonts)
  - Weights: 400, 500, 600
  - Use for: Paragraphs, labels, buttons, form inputs
  - Style: Technical, precise, highly legible

### Fallback Stack
- `font-sans: 'IBM Plex Sans', 'Inter', system-ui, sans-serif`
- `font-display: 'Space Grotesk', 'IBM Plex Sans', sans-serif`

