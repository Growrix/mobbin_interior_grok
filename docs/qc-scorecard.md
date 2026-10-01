# QC scorecard — Tier B + Square DoD (Prompt 4)

**Project:** Atelier North Interiors (temporary brand)  
**Reviewer:** Cloud agent (automated + manual checklist)  
**Visual review status:** Ready for human visual review (not production-shipped)

## Anti-Generic Frontend QC — Tier B

| Check | Result | Notes |
| --- | --- | --- |
| Distinct from Square.com clone | **Pass** | Clay/olive/brass palette; no `#006AFF` identity |
| Distinct from generic interior template | **Pass** | Asymmetric grids, editorial services rows, chapter narrative |
| Token-driven UI | **Pass** | Semantic vars in `globals.css`; component CSS uses vars |
| Home scroll chapters | **Pass** | Six chapters + GSAP + reduced-motion path |
| Purposeful motion (not decorative floaters) | **Pass** | Scroll-linked reveals/pins only |
| Photography rules documented | **Pass** | `docs/art-direction-ia.md` |
| Placeholder labeling | **Pass** | Badges/copy mark sample projects |
| No undeclared deps | **Pass** | `next`, `react`, `gsap` only beyond Next scaffold |

## skill.md Definition of Done — core components

| Component | States | Tokens | Keyboard | Result |
| --- | --- | --- | --- | --- |
| Button (`Button.tsx` + `button.css`) | default/hover/focus/active/disabled/loading | Yes | Native button focus | **Pass** |
| Primary nav (`SiteHeader.tsx`) | link hover/active; menu toggle expanded | Yes | Escape closes mobile menu | **Pass** |
| Text fields (`TextField.tsx`) | idle/hover/focus/error/disabled | Yes | Labels + `aria-invalid` | **Pass** |
| Consult form | idle/submitting/success/error/validation empty | Yes | Submit + reset | **Pass** |
| Project card | hover/active on link; badge | Yes | Single link target (no nested buttons) | **Pass** |
| Filter chips | default/hover/active/focus | Yes | `role="tablist"` buttons | **Pass** |

## design.md Don’ts audit

| Rule | Result |
| --- | --- |
| No nested interactive elements | **Pass** (header CTA is styled link, not button-in-link) |
| No arbitrary spacing outside scale | **Pass** (spacing vars only in component CSS) |
| Sentence case body | **Pass** |
| Interactive states defined | **Pass** (see component CSS) |

## Accessibility

| Check | Result |
| --- | --- |
| Skip link to `#main` | **Pass** |
| Landmarks (`header`, `main`, `footer`, `nav`) | **Pass** |
| Focus-visible rings | **Pass** (`:focus-visible` global + controls) |
| Form labels & error announcements | **Pass** (`role="alert"` / `aria-live`) |
| Reduced motion path | **Pass** |

## Performance (static review)

| Check | Result | Notes |
| --- | --- | --- |
| LCP candidate prioritized on Home | **Pass** | Hero `priority` image |
| CLS risk from images | **Pass** | Fixed aspect on cards; explicit width/height on case studies |
| Build succeeds | **Pass** | `npm run build` |

## Ordered remediations (non-blocking)

1. Replace Google fonts with licensed client fonts when brand kit exists.
2. Swap Unsplash URLs for licensed project photography.
3. Tune ScrollTrigger pin duration on mobile after human motion review.
4. Add real form endpoint + spam protection when backend is approved.

## Verdict

**ready** for human visual review — **not** production deploy.
