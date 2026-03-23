# iorlas.com — Brand Guide

The single source of truth for visual design and voice on Denis Tomilin's personal website. Every page, component, and piece of content derives from this document.

**Audience:** AI agents building/editing the site, and Denis reviewing their output.

---

## 1. Visual System

### 1.1 Color Palette

The site uses an **Electric Iris accent on warm neutral base**. Iris (purple) signals creativity, distinction, and unconventional thinking — no other consultant site looks like this. Warm stone grays provide professional grounding.

#### Accent — Iris (Electric Iris)

| Token | Hex | Use |
|-------|-----|-----|
| `iris-50` | `#f3f0fa` | Tinted backgrounds (blockquotes, highlights) |
| `iris-100` | `#e5ddf5` | Light borders, subtle hover backgrounds |
| `iris-200` | `#ccc0e6` | Borders on accent elements |
| `iris` | `#7C5CBA` | Primary accent — links, CTAs, active states, icons |
| `iris-hover` | `#674D9E` | Hover/pressed state for iris elements |
| `iris-dark` | `#553F85` | Active/pressed, dark accent when needed |

**Rules:**
- Iris is for interactive elements, highlights, and the occasional icon. Never for body text (fails WCAG on white/cream).
- One iris accent per visual "zone" — don't scatter it everywhere.
- Use `iris-50` and `iris-100` for backgrounds, never full `iris` as background with text on it.

#### Neutrals — Stone (Warm Gray)

The site uses Tailwind's `stone` palette — warm grays with a subtle yellow-brown undertone that harmonizes with iris.

| Token | Hex | Contrast vs #FAFAF9 | Use |
|-------|-----|---------------------|-----|
| `stone-50` | `#FAFAF9` | — | Page background |
| `stone-100` | `#F5F5F4` | — | Card backgrounds, alternate sections |
| `stone-200` | `#E7E5E4` | — | Borders, dividers |
| `stone-300` | `#D6D3D1` | — | Borders (stronger), disabled borders |
| `stone-400` | `#A6A09B` | ~2.7:1 ❌ | Decorative only — NOT for text |
| `stone-500` | `#79716B` | ~4.5:1 ✅ AA | Metadata, timestamps, captions (minimum readable) |
| `stone-600` | `#57534D` | ~7:1 ✅ AAA | Secondary body text, descriptions |
| `stone-700` | `#44403B` | ~9.6:1 ✅ AAA | Strong secondary text |
| `stone-800` | `#292524` | ~14:1 ✅ AAA | Primary body text |
| `stone-900` | `#1C1917` | ~16:1 ✅ AAA | Headings |

**The #1 Rule:** Never use stone-400 or lighter for any text that needs to be read. Stone-500 is the absolute floor for metadata. Stone-600 is the floor for anything longer than a timestamp.

#### Semantic Color Mapping

Map Tailwind classes to purpose, not raw values:

| Role | Token | When to use |
|------|-------|-------------|
| `text-heading` | stone-900 | h1, h2, h3, nav brand |
| `text-primary` | stone-800 | Body paragraphs, card titles, strong text |
| `text-secondary` | stone-600 | Descriptions, subtitles, secondary body |
| `text-tertiary` | stone-500 | Timestamps, metadata, captions, tech stack |
| `text-disabled` | stone-400 | Disabled states only (not readable text) |
| `bg-page` | stone-50 (#FAFAF9) | Page background (replaces hardcoded `#faf9f7`) |
| `bg-surface` | white (#FFFFFF) | Cards, badges, elevated elements |
| `bg-surface-alt` | stone-100 | Alternate sections, icon containers |
| `border-default` | stone-200 | Card borders, section dividers |
| `border-strong` | stone-300 | Emphasized borders, active states |

#### External Brand Colors

These are used only for their respective brand icons/links:

| Brand | Hex | Use |
|-------|-----|-----|
| LinkedIn | `#0A66C2` | LinkedIn icon fill + hover state |
| GitHub | `#181717` | GitHub icon fill |
| X (Twitter) | `#000000` | X icon fill |

Register these in `@theme` as `--color-linkedin`, `--color-github`, `--color-x` so they aren't hardcoded in templates.

### 1.2 Typography

#### Fonts

| Role | Family | Weight range | Source |
|------|--------|-------------|--------|
| Body, headings, UI | Inter | 400, 500, 600, 700 | Google Fonts |
| Code, metadata, timestamps | IBM Plex Mono | 400, 500 | Google Fonts |

#### Type Scale

Based on a Major Third (1.25) ratio from 16px base. Use these sizes consistently:

| Token | Size | Weight | Use |
|-------|------|--------|-----|
| `text-xs` | 12px | mono 400 | Timestamps, tech stack, copyright |
| `text-sm` | 13-14px | 400-500 | Secondary labels, badge text, nav links, descriptions |
| `text-base` | 15-16px | 400-600 | Body text, card titles, inline text |
| `text-lg` | 18px | 600 | Footer CTA heading, lead text |
| `text-xl` | 20px | 600-700 | Main claim, section emphasis |
| `text-2xl` | 24px | 700 | Hero name, page title |
| `text-3xl` | 30px | 700 | Large page headings (travel index) |

#### Line Height

| Context | Value | Class |
|---------|-------|-------|
| Headings | 1.25 | `leading-tight` |
| Subheadings | 1.375 | `leading-snug` |
| Body text | 1.625 | `leading-relaxed` |

#### Section Labels

Section headers use a distinctive pattern: `text-xs font-mono uppercase tracking-widest text-tertiary`

Example: `CREDENTIALS`, `PROJECTS`, `PUBLICATIONS`, `TRAVEL GUIDES`

### 1.3 Spacing

Base unit: 4px (Tailwind default). Prefer multiples of 8px for major spacing.

| Context | Value | Tailwind |
|---------|-------|----------|
| Tight gaps (icon ↔ text) | 4-6px | `gap-1` to `gap-1.5` |
| Component internal | 12-16px | `gap-3` to `gap-4`, `px-4` |
| Card padding | 20-24px | `px-5 py-4` or `px-6 py-5` |
| Page horizontal padding | 24px | `px-6` |
| Section vertical spacing | 32-64px | `mb-8` to `mb-16` |
| Page top padding | 32-56px | `pt-8 sm:pt-14` |

**Consistency rule:** Pick one card padding style and use it everywhere. Current: `px-5 py-4` for compact cards, `px-6 py-5` for featured cards. Keep this distinction intentional.

### 1.4 Borders & Radius

| Element | Border | Radius |
|---------|--------|--------|
| Cards | `border border-stone-200` | `rounded-lg` (8px) |
| Badges/pills | `border border-stone-200` | `rounded-full` |
| Photo | `ring-2 ring-iris/20` | `rounded-full` |
| Blockquotes | `border-l-4 border-iris/40` | `rounded-r-lg` |

### 1.5 Hover & Interaction

| Element | Hover pattern |
|---------|--------------|
| Card (group) | `hover:border-iris/30` + title turns `text-iris` |
| Text link | `text-iris hover:text-iris-hover` |
| Icon button | `hover:opacity-70` |
| Badge link | `hover:bg-iris-100` (for accent badges) |
| Nav link | `hover:text-iris` |

### 1.6 Layout

| Constraint | Value |
|------------|-------|
| Max content width | 960px (homepage), 1100px (guides with sidebar) |
| Narrow content | 720px (travel index, blog) |
| Page background | stone-50 (`#FAFAF9`) |
| Card background | white |
| Breakpoints | sm (640px), md (768px), lg (1024px) |

### 1.7 Dark Mode

Not implemented yet. When added:
- Override semantic tokens via `.dark` class or `prefers-color-scheme`
- Surface hierarchy inverts: lighter surfaces come forward
- Reduce iris intensity (use iris-400 equivalent)
- Text: stone-100 primary, stone-300 secondary (not pure white)
- Re-verify all contrast ratios

---

## 2. Voice & Tone

### 2.1 Character Line

Denis sounds like a sharp engineering leader explaining what he's built to a peer over coffee. Confident because he's done the work, not because he's performing confidence.

### 2.2 Voice Attributes

Voice is constant across all content. These traits define Denis's writing personality:

| Trait | We are | We are not |
|-------|--------|------------|
| **Confident** | Stating what we know, backed by built/shipped experience | Hedging with "I think maybe" or performing false humility |
| **Direct** | Getting to the point. First sentence carries weight. | Burying the lead under three paragraphs of setup |
| **Specific** | Naming tools, frameworks, numbers, timelines | Vague platitudes ("leveraging AI solutions") |
| **Warm** | Inviting conversation as equals ("Let's compare notes") | Corporate gatekeeping ("Schedule a consultation") |
| **Pragmatic** | "Does it actually work in production?" | Theoretical analysis without building experience |

### 2.3 Tone Map

The base voice stays constant. These dials shift per content type:

| Content type | Confidence | Warmth | Formality | Detail |
|--------------|-----------|--------|-----------|--------|
| **Homepage hero** | Highest | High | Low-med | Compressed |
| **About page** | High | Highest | Medium | Narrative |
| **Blog posts** | High | Medium | Low | Deep |
| **Travel guides** | Medium | Low | Lowest | Utility-first |
| **Project descriptions** | High | Medium | Low | Compressed |

### 2.4 Mechanical Rules

These are enforceable rules any AI agent can follow:

**Structure:**
- First person always ("I built..." not "One can observe...")
- Active voice (not "systems were designed" but "I designed")
- Lead with the conclusion or claim, not the buildup
- One idea per paragraph
- Short paragraphs (1-3 sentences for homepage, 2-4 for articles)

**Language:**
- Use contractions (it's, don't, won't, can't)
- Specific numbers over vague qualifiers ("18 years" not "many years")
- Name tools and frameworks explicitly ("Claude Code" not "AI tools")
- Average sentence length: 12-20 words, with deliberate variation

**Banned words/phrases** (strong AI markers or not-Denis):
- genuinely, navigate, dynamic, delve, landscape, foster, harness, underscore, nuanced, robust
- tapestry, interplay, leverage, crucial, pivotal, intricate, mitigate, enrich
- "thought leader", "paradigm shift", "synergy", "best-in-class"
- Hedged non-opinions ("There are many valid perspectives...")
- Engagement bait ("Comment YES if you agree!")
- Generic motivational platitudes
- Corporate buzzword soup without substance

**Punctuation:**
- Zero em dashes on marketing/social content (AI tell). On website body text: use sparingly, max 1-2 per page.
- Prefer periods and colons over em dashes
- Use `→` for progression/flow ("Python lead → Architect → CTO")
- Use `·` (middle dot) for inline lists ("Istanbul · Alanya · more coming")

### 2.5 Denis's Signature Moves

These recurring patterns make the voice distinctive. Use them deliberately:

1. **"Actually ship"** — The pragmatism marker. Denis distinguishes himself from people who talk about AI vs. people who deploy it. Use "actually" sparingly but pointedly.

2. **Progression arrows** — Career/evolution shown as `A → B → C`. Shows intentional growth, not random job-hopping.

3. **Credential stacking with understatement** — Lists facts and lets them speak. "1st Stripe Certified Architect" doesn't need "groundbreaking" in front of it.

4. **Peer invitation close** — "Let's compare notes" / "Always open to conversations about..." — positions as equal, not as seller.

5. **The human footnote** — Brief personal detail that breaks the professional surface. "Guitarist · ethical hacker background · traveler" — just enough to be real, not enough to be a lifestyle blog.

### 2.6 Golden Examples (On-Brand)

From the current homepage:

> "I architect Agentic AI systems and help enterprises **actually ship them**."

Why it works: First person, active, specific ("Agentic AI"), the "actually" signals pragmatism, bold emphasis on the differentiator.

> "Building with AI agents? Let's compare notes."

Why it works: Direct question, peer framing, casual invitation. Not "Schedule a consultation."

> "18+ years: C/C++ game dev → Python lead → Architect → CTO → AI Architect"

Why it works: Compressed career narrative with arrows showing intentional progression. Specific enough to be credible. The format itself signals "I move fast."

### 2.7 Anti-Examples (Off-Brand)

❌ "With over 18 years of experience navigating the dynamic landscape of software engineering, I have harnessed cutting-edge AI technologies to deliver robust solutions."

Why it fails: Every banned word. Passive. Vague. Could be anyone. Denis would never say this.

❌ "I'm passionate about helping organizations leverage AI to drive digital transformation."

Why it fails: "Passionate about helping" is the weakest possible opener. "Leverage" and "drive" are corporate filler. No specifics.

❌ "In this guide, I will attempt to share some insights on the topic of city exploration, which I have had the pleasure of experiencing."

Why it fails: Hedged ("attempt"), passive, formal, zero personality. Denis would write: "Here's what you need to know about Istanbul. I lived there."

### 2.8 Content-Specific Voice Notes

**Homepage:** Most compressed. Every word earns its place. Credential stacking, not storytelling. The homepage is a business card, not a memoir.

**Travel guides:** Utility voice. Imperative mood ("Book X", "Take the tram to Y", "Skip Z"). No filler, no travel-blog prose. These are cheatsheets — information density matters more than personality. Minimal Denis voice, maximum usefulness.

**Blog/articles:** This is where the full Denis voice lives. Stories from building, opinions backed by experience, teaching through narrative. First person, specific, opinionated.

**About page (future):** Career narrative voice. Warmer, more personal. The story of how Denis got from game dev to AI architect. Can include vulnerability and reflection. Still confident, but more human.

---

## 3. Component Reference

### 3.1 Card

```
bg-white border border-stone-200 rounded-lg px-5 py-4
hover:border-iris/30 transition-colors group
```
- Title: `text-base font-semibold text-stone-800 group-hover:text-iris`
- Description: `text-sm text-stone-600 leading-relaxed`
- Metadata: `text-xs font-mono text-stone-500`

### 3.2 Section Label

```
text-xs font-mono uppercase tracking-widest text-stone-500
```

### 3.3 Badge / Pill

```
inline-flex items-center gap-1.5 text-sm font-medium
text-stone-600 bg-white border border-stone-200 rounded-full px-4 py-2
```
Accent variant (Stripe): `text-iris bg-iris-50 border-iris-200 font-semibold`

### 3.4 Navigation

```
max-w-[960px] mx-auto px-6 py-4 flex items-center justify-between
```
- Brand: orbit SVG (iris stroke) + `text-base font-bold text-stone-900`
- Active link: `font-bold text-iris hover:text-iris-hover`
- Secondary link: `text-sm text-stone-500 hover:text-iris`

### 3.5 Footer

```
border-t border-stone-200/50 pt-10 pb-14 text-center
```
- Heading: `text-lg font-semibold text-stone-800`
- Subtext: `text-sm text-stone-500`
- Copyright: `text-xs text-stone-500 font-mono`

### 3.6 Prose (Travel Guides / Blog)

Applied via `@tailwindcss/typography`:
```
prose prose-stone max-w-none
  prose-headings:font-bold prose-headings:text-stone-900
  prose-p:text-base prose-p:leading-relaxed prose-p:text-stone-600
  prose-li:text-base prose-li:text-stone-600
  prose-a:text-iris prose-a:no-underline hover:prose-a:underline
  prose-strong:text-stone-800
  prose-blockquote:border-l-iris/40 prose-blockquote:bg-iris-50/30
```

---

## 4. Implementation Checklist

When this guide is adopted, migrate the codebase:

- [ ] Update `global.css` `@theme` to register the full stone + iris palette
- [ ] Replace all `gray-*` classes with `stone-*` equivalents
- [ ] Replace hardcoded `#faf9f7` with `bg-stone-50` (or a semantic `bg-page` token)
- [ ] Replace hardcoded `#0A66C2` with `text-linkedin` / `hover:text-linkedin`
- [ ] Audit all `stone-400` / `gray-400` text usage — upgrade to `stone-500` minimum
- [ ] Fix copyright text: `text-gray-300` → `text-stone-500` (currently unreadable)
- [ ] Verify all text/background combinations meet WCAG AA (4.5:1)
- [ ] Standardize card padding to one of two sizes
- [ ] Use `prose-stone` instead of `prose-gray` on travel guides
