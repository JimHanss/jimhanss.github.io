# Technical Plan: Tech Personal Homepage

## Affected Files and Modules

- `src/App.tsx`
  - Keep the single React component as the page orchestration layer.
  - Update markup for the hero, navigation labels, scroll progress, technology/status panels, project metadata, and contact section structure.
  - Read visible page content from `public/metadata.json`.
- `src/styles.css`
  - Primary implementation surface for the redesigned visual system.
  - Replace or extend the current abstract cube styling with a more technical interface language: grid overlays, data planes, signal rails, glass panels, precision borders, status indicators, and responsive constraints.
  - Add explicit focus states, pointer affordances, hover states, reduced-motion handling, and mobile layout guards.
- `public/metadata.json`
  - Own visible navigation, profile, hero, section, project, experience, and contact content.
  - Keep the JSON structure simple enough to edit without touching React source.
- `index.html`
  - No planned change unless metadata or font loading becomes necessary.
- `public/favicon.svg`
  - No planned change.
- `package.json`
  - No planned dependency or script changes.
- `specs/tech-personal-homepage/spec.md`
  - Source of requirements for implementation and validation.

## Architecture or Data Flow

The site remains a static React + Vite single-page application.

`src/main.tsx` mounts `<App />`, `src/App.tsx` fetches structured content from `public/metadata.json`, and `src/styles.css` supplies the visual system. The redesign should preserve this simple flow:

1. Static display content comes from `public/metadata.json`.
2. Page-local React code should focus on rendering, sticky navigation state, scroll progress, and reveal behavior.
3. Runtime browser behavior stays limited to:
   - sticky navigation state,
   - scroll progress calculation,
   - IntersectionObserver reveal animations.
4. Decorative visual layers must be CSS-driven and non-interactive with `aria-hidden="true"` or equivalent semantics.

No server data, client routing, external API calls, or persistent state are needed.

## Data Model Changes

The content model now lives in `public/metadata.json`.

Optional small additions may be made only if they materially improve maintainability:

- Add new JSON fields when additional visible page content needs to become editable.
- Add a real contact email if the placeholder should be replaced during implementation.

## API or Interface Changes

No public API changes are planned.

Internal component/interface changes:

- Expand `navState` from `{ isSticky, isShown }` to include scroll progress if the scroll meter remains.
- Keep `RevealStyle` and `revealDelay` for staged reveal animations.
- Use existing anchor IDs (`#home`, `#expertise`, `#work`, `#experience`, `#contact`) so deep links and navigation behavior remain stable.

## Implementation Steps

1. Update navigation and scroll state in `src/App.tsx`.
   - Replace the code-like nav label rendering with readable labels.
   - Make the scroll meter reflect actual document progress or remove it if it does not serve the design.
   - Preserve current sticky behavior but verify it does not cover section headings.

2. Redesign the hero markup.
   - Keep metadata `profile.name` and `profile.title` as the strongest first-viewport signals.
   - Add one or two clear CTAs, such as work and contact anchors.
   - Add technology/status content using metadata fields.
   - Replace the current cube-only visual layer with technical motifs: grid plane, data panels, signal rails, status dots, terminal-like metadata, or scan overlays.
   - Mark decorative layers as hidden from assistive technology.

3. Strengthen content sections.
   - Keep expertise, work, experience, and contact in their current order.
   - Add short section supporting copy where useful for context, without turning the page into a marketing landing page.
   - Improve work cards so title, status, description, stack tags, GitHub, and live links are easy to scan.
   - Remove fake filter links unless they become real controls; static labels are preferable to non-functional filters.

4. Rebuild the CSS visual system in `src/styles.css`.
   - Use CSS custom properties for core colors, surfaces, borders, shadows, and timing.
   - Preserve the current dark palette and cyan/violet identity while adding limited warm/status accents for depth.
   - Keep cards at restrained radii and avoid nested card layouts.
   - Add stable dimensions and responsive constraints for hero panels, grids, tags, and navigation.
   - Ensure decorative layers use `pointer-events: none` and remain behind content.

5. Add interaction and accessibility polish.
   - Add `:focus-visible` styles for links and interactive surfaces.
   - Add `cursor: pointer` where elements are clickable.
   - Keep hover effects color/border/shadow based, avoiding layout-shifting transforms.
   - Maintain `prefers-reduced-motion` support for reveal and decorative movement.
   - Ensure image alt text remains meaningful for the GitHub avatar if used.

6. Responsive pass.
   - Verify the hero name, role, CTAs, panels, nav, project rows, and contact links at 375px, 768px, 1024px, and 1440px.
   - Make sure there is no horizontal scroll.
   - Ensure the first viewport leaves a usable hint of subsequent content.

7. Validation and cleanup.
   - Run production build.
   - Run browser smoke checks with Vite dev server.
   - Inspect desktop and mobile screenshots.
   - Remove any unused CSS selectors or abandoned markup from the old design.

## Risks

- The hero can become visually busy if too many technology motifs compete with the name and role.
- Large uppercase hero text may clip or overflow on small screens if not constrained with responsive sizing.
- Fixed/sticky navigation can obscure anchored section headings.
- Decorative layers can accidentally intercept clicks or reduce text contrast if z-index and opacity are not controlled.
- Motion-heavy polish can harm accessibility or performance if reduced-motion handling is incomplete.
- The current placeholder email may look unfinished even if the layout is polished.

## Validation Commands

- `npm run build`
  - Runs TypeScript project build and Vite production build.
- `npm run dev -- --host 127.0.0.1`
  - Starts local Vite server for visual QA.
- Browser checks:
  - Desktop viewport: 1440px wide.
  - Tablet viewport: 768px wide.
  - Mobile viewport: 375px wide.
  - Verify no horizontal scroll, no overlap, visible first-viewport identity, usable nav, clear project cards, and accessible focus states.
- Optional focused checks:
  - Inspect `prefers-reduced-motion` behavior in browser emulation.
  - Test anchor navigation to each section after sticky nav appears.

## Documentation Updates Required

- Keep `specs/tech-personal-homepage/spec.md` as the requirement source.
- No README update is required unless implementation changes setup, dependencies, or deployment behavior.
- If new metadata fields are added, keep names clear and update `CODE_MAP.md`.

## Decisions Requiring Confirmation

- None required before implementation.

Open implementation choices that can be handled with reasonable defaults:

- Whether the scroll meter is retained as real progress or removed.
- Whether future hero status/stack badges need additional `metadata.json` fields.
- Whether to keep the placeholder email during visual implementation.
