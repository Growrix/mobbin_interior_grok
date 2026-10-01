# Atelier North Interiors — art direction & IA (Prompt 1)

**Status:** Temporary brand — replace before client handoff.  
**Tier:** B editorial immersive (Locomotive/Obys-class pacing, DOM-first).

## Sitemap (v1)

| Route | Surface | Purpose |
| --- | --- | --- |
| `/` | Home | Scroll narrative chapters |
| `/work` | Projects | Filterable portfolio grid |
| `/work/[slug]` | Case study | Project template with gallery |
| `/services` | Services | Editorial rows (not equal cards) |
| `/process` | Process | Discovery → style detail |
| `/studio` | About | People & approach placeholders |
| `/contact` | Consult | Form with full states |

## Home chapter beat sheet

| # | Chapter | Pin? | DOM focus | Reduced-motion alt |
| --- | --- | --- | --- | --- |
| 1 | Arrive | No | Hero headline + hero image | Static layout, no fade dependency |
| 2 | Philosophy | Yes (light) | Split copy on surface band | Instant visibility, no scrub |
| 3 | Selected work | No | Asymmetric 3-up project grid | Grid visible immediately |
| 4 | Process | Yes (light) | Horizontal step strip | Steps visible, no pin |
| 5 | Studio | No | Image + studio copy | Static image/text |
| 6 | Consult CTA | No | Inverse panel + primary CTA | Static panel |

Motion implementation: `src/components/home/useHomeChapterMotion.ts` (GSAP ScrollTrigger).

## Art direction brief

### Photography & image rules

- Prefer natural light, material close-ups, and room scale — never stock “smiling family on sofa” clichés.
- Hero and portfolio aspects: 4:5 cards on grid, wide hero ~16:10, gallery mixed 4:3.
- Always label placeholder photography in captions/badges.
- Captions: sentence case, short, factual (location/year/“placeholder”).

### Material & light metaphors

- **Ink** (`--color-bg-inverse`) for contrast bands and footer — grounded, gallery-like.
- **Limewash ground** (`--color-bg`, `--color-surface`) for calm fields.
- **Clay / brass accents** (`--color-accent`, `--color-accent-subtle`) for CTAs and metadata — warm, not fintech blue.
- **Olive focus** (`--color-focus-ring`, `--color-olive`) for accessible focus and subtle secondary accent.

### Layout

- Asymmetric grids: staggered project columns on desktop, not uniform card soup.
- Editorial rows on Services: unequal two-column narrative blocks separated by hairline rules.
- Whitespace as a material — chapter padding uses `--space-10`–`--space-12` scale.

## Mobbin references used

Search: *interior design studio portfolio gallery and project detail* (web).

| Flow | App | Use |
| --- | --- | --- |
| [Projects](https://mobbin.com/flows/63c600fe-090b-426b-b5db-008c3fa6213a) | Variant | Dark editorial grid density reference |
| [Portfolio detail](https://mobbin.com/flows/58da429f-39c1-4cc1-8cb6-ca5f1c505a70) | Contra | Hero + project grid rhythm (palette remapped) |
| [Explore / Project detail](https://mobbin.com/flows/ebfb91fc-5196-4f7a-aaa8-acbecfc08f10) | Behance | Filterable portfolio + case study metadata patterns |

Square extract (`design.md`) used for **token discipline, states, DoD** — not brand clone.

## Temporary font pairing (installed)

| Role | Font | Notes |
| --- | --- | --- |
| Display | Cormorant Garamond (Google) | Editorial serif for headlines |
| Body | Source Sans 3 (Google) | Calm UI/body sans |

## Surface acceptance (Tier B snapshot)

- Home: six narrative chapters with motion + reduced-motion path.
- Work: category filters + placeholder case studies.
- Services: four editorial sections, varied copy length.
- Process: numbered phases with tactile cards.
- Studio: placeholder team cards, no fake awards.
- Contact: idle/submitting/success/error + field validation empty states.

**Not done until:** human visual review and real brand kit replace temporary tokens/copy.
