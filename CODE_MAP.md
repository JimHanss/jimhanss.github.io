# Code Map

## Application Entry

- `index.html`
  - Vite HTML shell.
  - Loads `/src/main.tsx`.
- `src/main.tsx`
  - Creates the React root and renders `<App />` inside `StrictMode`.

## Homepage

- `src/App.tsx`
  - Owns the full single-page homepage layout.
  - Fetches runtime display content from `public/metadata.json`.
  - Renders a loading/error state if `metadata.json` is not available.
  - Defines page-local reveal delays, sticky navigation state, and scroll progress.
  - Renders the sections `#home`, `#expertise`, `#work`, `#experience`, and `#contact`.
  - Uses `IntersectionObserver` for reveal animations and falls back to visible content when the API is unavailable.

## Styling

- `src/styles.css`
  - Global visual system and all component styling.
  - Defines color, surface, border, shadow, typography, layout, and motion custom properties.
  - Implements the dark technology homepage treatment: scan/grid layers, data planes, signal rails, system panels, cards, project rows, timeline, and contact links.
  - Contains responsive rules for desktop, tablet, and mobile widths.
  - Contains `prefers-reduced-motion` handling and `:focus-visible` styles.

## Profile Data

- `public/metadata.json`
  - Runtime-editable content source for all visible navigation, profile, hero, section, project, experience, and contact information.
  - Served as a static asset by Vite and fetched from `${import.meta.env.BASE_URL}metadata.json`.
  - No external APIs are required for the page content.

## Build and Deployment

- `package.json`
  - `npm run dev`: starts Vite development server.
  - `npm run build`: runs TypeScript build and Vite production build.
  - `npm run preview`: serves the built site locally.
- `vite.config.ts`
  - React plugin and root deployment base.

## Specification Workflow

- `specs/tech-personal-homepage/spec.md`
  - Feature requirements and acceptance criteria.
- `specs/tech-personal-homepage/plan.md`
  - Technical implementation plan.
- `specs/tech-personal-homepage/tasks.md`
  - Executable task checklist and verification items.
