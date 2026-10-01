# Atelier North Interiors — marketing site (temporary brand)

Tier B editorial immersive marketing site for an interior design studio placeholder brand. Built with Next.js, semantic CSS tokens, and GSAP ScrollTrigger chapter motion on Home.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Documentation

- [`docs/art-direction-ia.md`](docs/art-direction-ia.md) — IA, chapter beats, Mobbin refs
- [`docs/tokens.md`](docs/tokens.md) — CSS token table
- [`docs/motion-notes.md`](docs/motion-notes.md) — GSAP choreography + reduced motion
- [`docs/qc-scorecard.md`](docs/qc-scorecard.md) — Tier B QC / DoD

## Stack (approved for this build)

- Next.js (App Router) + React + TypeScript
- Tailwind scaffold present; visual values driven by CSS variables in component stylesheets
- GSAP + ScrollTrigger (Home only)
- `next/image` with Unsplash placeholder photography (labeled in UI)

No CMS, auth, analytics, WebGL, or deploy configured in v1.
