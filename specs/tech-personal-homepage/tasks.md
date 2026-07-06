# Tasks: Tech Personal Homepage

## Implementation

- [x] T001 Inspect the current homepage behavior in `src/App.tsx`, `src/styles.css`, and the profile content source; note any local changes before editing.
- [x] T002 Update `src/App.tsx` navigation rendering so every section link shows readable labels and preserves the existing anchor targets.
- [x] T003 Update `src/App.tsx` scroll state so the scroll meter either reflects real document progress or is removed from the UI.
- [x] T004 Redesign the hero markup in `src/App.tsx` around the existing `profile.name`, `profile.title`, and `profile.intro`, adding clear work/contact actions.
- [x] T005 Add hero technology/status content using local constants or existing profile fields without introducing new dependencies.
- [x] T006 Replace the hero's old cube-only decorative structure with accessible, non-interactive technical motifs such as grids, signal rails, data panels, terminal metadata, or status badges.
- [x] T007 Strengthen expertise, work, experience, and contact markup while preserving the current section order and anchor IDs.
- [x] T008 Remove or replace fake project filter links so the work section does not present non-functional controls.
- [x] T009 Improve project card structure so title, description, status, stack tags, GitHub link, and live link are scannable at desktop and mobile widths.
- [x] T010 Rebuild `src/styles.css` around reusable CSS custom properties for colors, surfaces, borders, shadows, spacing, and motion timing.
- [x] T011 Implement the upgraded dark technology visual system in `src/styles.css`, preserving cyan/violet/warm accents and adding grid, glass, precision-border, and signal details.
- [x] T012 Add stable responsive constraints for hero typography, hero panels, navigation, content cards, tags, contact links, and section spacing.
- [x] T013 Add interaction polish: pointer affordance, hover states, active/focus-visible states, and link feedback without layout-shifting transforms.
- [x] T014 Ensure accessibility details are covered: meaningful avatar alt text if used, `aria-hidden` on decorative layers, readable labels, sufficient contrast, and `prefers-reduced-motion` support.
- [x] T015 Clean up unused legacy CSS selectors and obsolete markup after the redesign is in place.

## Documentation and Repository Hygiene

- [x] T016 Update `.gitignore` if implementation introduces new generated files, local screenshots, browser artifacts, or temporary outputs that should not be committed.
- [x] T017 Create or update `PROJECT_PROGRESS.md` with the implemented feature status, completed tasks, validation evidence, and remaining follow-ups.
- [x] T018 Create or update `CODE_MAP.md` with the current React/Vite app structure and the responsibilities of `App.tsx`, `styles.css`, and `metadata.json`.
- [x] T019 Update `specs/tech-personal-homepage/tasks.md` task checkboxes as implementation progresses.

## Verification

- [x] T020 Run `npm run build` and fix any TypeScript or Vite build failures.
- [x] T021 Start the Vite dev server with `npm run dev -- --host 127.0.0.1` for browser QA.
- [x] T022 Verify desktop layout at 1440px: first viewport identity, technical motifs, CTA visibility, sticky nav behavior, project cards, and contact area.
- [x] T023 Verify tablet layout at 768px: no horizontal scroll, no content overlap, readable nav, hero, cards, and contact links.
- [x] T024 Verify mobile layout at 375px: no horizontal scroll, no clipped hero text, usable CTAs, readable project metadata, and contact links wrapping correctly.
- [x] T025 Verify anchor navigation for `#home`, `#expertise`, `#work`, `#experience`, and `#contact`, including sticky-nav offset behavior.
- [x] T026 Verify reduced-motion behavior so reveal and decorative animations do not disrupt users with `prefers-reduced-motion`.
- [x] T027 Verify keyboard focus visibility across navigation, CTAs, project links, and contact links.
- [x] T028 Capture final visual QA notes and any residual risks in `PROJECT_PROGRESS.md`.
