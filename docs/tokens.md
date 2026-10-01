# Design tokens — Atelier North Interiors (temporary)

Semantic CSS variables live in `src/app/globals.css`. Components must reference tokens — not raw hex/px.

## Color

| Token | Role |
| --- | --- |
| `--color-bg` | Page background (limewash) |
| `--color-bg-inverse` | Footer, CTA inverse panels |
| `--color-surface` | Section bands |
| `--color-surface-muted` | Subtle fills |
| `--color-surface-elevated` | Cards, inputs |
| `--color-text` | Primary text (ink) |
| `--color-text-muted` | Secondary copy |
| `--color-text-inverse` | Text on inverse surfaces |
| `--color-accent` | Primary CTA / clay accent |
| `--color-accent-hover` | CTA hover |
| `--color-accent-subtle` | Brass highlights |
| `--color-olive` | Secondary accent |
| `--color-border` | Hairlines |
| `--color-border-strong` | Emphasis borders |
| `--color-focus-ring` | Focus-visible |
| `--color-success` / `--color-success-bg` | Form success |
| `--color-error` / `--color-error-bg` | Form error |

**Remap note:** Square `#006AFF` is intentionally **not** used.

## Typography

| Token | Size / usage |
| --- | --- |
| `--text-xs` … `--text-xl` | Body scale (10–18px equivalent) |
| `--text-display-sm` | Section titles (clamp) |
| `--text-display-md` | Page titles |
| `--text-display-lg` | Home hero |
| `--font-display` | Cormorant Garamond |
| `--font-body` | Source Sans 3 |

## Spacing (4px grid)

`--space-1` (4px) through `--space-12` (160px).

## Radius & elevation

- `--radius-sm`, `--radius-md`, `--radius-full`
- `--shadow-sm`, `--shadow-md`

## Motion

- `--duration-fast`, `--duration-base`
- `--ease-out`, `--ease-in-out`
- `html[data-reduced-motion="true"]` disables transitions globally

## Layout

- `--content-max`, `--gutter`, `--header-height`
