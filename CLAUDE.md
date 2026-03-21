# iorlas.com — Personal Website Rebuild

## Project Context

This is Denis Tomilin's personal website at iorlas.com. It's being rebuilt from Docusaurus to Astro + Tailwind.

**Full project brief:** Read `~/Documents/Knowledge/Projects/084-personal-website/README.md` for complete context including:
- Who Denis is (career, credentials, positioning)
- Design direction and references
- Content architecture
- Brand guidelines

**Deadline context:** This site is needed as a link for the Anthropic Claude Ambassador Program application. The site must be live and representing Denis well by 2026-03-23.

## Repository

- **Repo:** github.com/iorlas/iorlas.github.io
- **Production:** https://iorlas.com (GitHub Pages, custom domain via CNAME)
- **Deployment:** GitHub Actions → GitHub Pages (push to main auto-deploys)

## Phase 1: Scaffold (do this first)

1. Create branch `feat/astro-rebuild`
2. Move all existing content to `_archive/` (don't delete — IT Squad Ops guide has real content)
3. Initialize Astro project with:
   - Astro + TypeScript
   - Tailwind CSS
   - Content Collections for blog + guides
   - ESLint + Prettier
4. Create minimal landing page ("Hello, I'm Denis Tomilin")
5. Update `.github/workflows/deploy.yml` for Astro build
6. Preserve `CNAME` file in `public/` for custom domain
7. Push, verify deployment works on the branch
8. Merge to main only when deployment is confirmed working

## Phase 2: Content & Design

See README.md for full content plan. Key pages:
- `/` — Profile landing page (hero + highlights)
- `/about` — Professional bio
- `/guides/` — Knowledge bases (migrate IT Squad Ops, add agentic AI)
- `/projects/` — Kay, brainstorm skill, notable builds
- `/blog/` — Posts (Content Collection)

## Tech Stack

- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS
- **Content:** Astro Content Collections (Markdown/MDX)
- **Deployment:** GitHub Pages via GitHub Actions
- **Analytics:** Google Tag Manager (GTM-MKL37N3C — preserve from old site)

## Design Principles

- Clean, professional, not flashy
- "Consultant, insider, innovator" — not geeky/eccentric
- Mobile-responsive
- Dark/light mode support
- Fast (leverage Astro's zero-JS default)

## Content from old site worth keeping

Located in `_archive/` after migration:
- `guides/it-squad-ops/` — 9 files of real delivery methodology content
- `guides/travel/` — Turkey and Georgia travel notes (lower priority)

## Do NOT

- Add excessive JavaScript or client-side frameworks
- Use template/generic portfolio designs
- Include any Russian location references (Denis is based in Istanbul, Turkiye)
- Over-engineer — this is a content site, keep it simple
- Skip testing deployment before merging to main
