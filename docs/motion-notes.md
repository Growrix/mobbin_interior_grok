# Motion notes (Prompt 3)

## Stack

- **GSAP** + **ScrollTrigger** (approved) — `src/components/home/useHomeChapterMotion.ts`
- No Lenis / scroll-jacking library in v1
- No WebGL / Three.js

## Home choreography

| Chapter | Behavior |
| --- | --- |
| Arrive | Fade/slide in hero copy + scale hero media |
| Philosophy | Pinned section with scrubbed reveal (light pin) |
| Selected work | Staggered `data-reveal` on grid items |
| Process | Pinned strip with scrub |
| Studio | Media scale settle + copy reveal |
| Consult | Panel fade-in via `data-reveal` |

Micro-interactions (CSS tokens):

- Buttons: transform/color/box-shadow via `button.css`
- Project cards: image scale + elevation on hover
- Nav links: color transition

All animations are interruptible (scroll-driven or short CSS transitions).

## prefers-reduced-motion

- `usePrefersReducedMotion` sets `document.documentElement.dataset.reducedMotion`
- GSAP hook **does not register** ScrollTrigger when reduced motion is true
- Global CSS forces visible state for `[data-chapter]` / `[data-reveal]`
- Test path: enable “Reduce motion” in OS settings → reload Home → chapters appear static with no pin

## Performance / LCP

- Home hero uses `next/image` with `priority` on first hero + first portfolio card
- Work grid uses responsive `sizes` on cards
- Remote images served from `images.unsplash.com` (configured in `next.config.ts`)

## Known gaps

- Inner pages use CSS-only hover states (no scroll narrative required by brief)
- Pin sections may feel long on small viewports — tune in visual review
