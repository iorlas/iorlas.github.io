# Travel Guides Section — Design Spec

## Overview

Cheatsheet-style city travel guides for iorlas.com. Denis visits cities, writes practical notes, sends links to friends/colleagues. No blogging, no country-level pages — just city-level reference cards grouped by country.

Growth rate: ~1-2 cities per year.

## URL Scheme

- `/travel` — index page listing all cities grouped by country
- `/travel/{country}/{city}` — individual city guide (e.g., `/travel/turkiye/istanbul`)

No separate country pages. Country is just a grouping label.

## Content Collection

Directory: `src/content/travel/`

File naming: `{country}--{city}.md` (e.g., `turkiye--istanbul.md`, `turkiye--alanya.md`)

### Frontmatter Schema

```yaml
title: "Istanbul"         # City name (required)
country: "Turkiye"        # Country display name (required)
countrySlug: "turkiye"    # URL slug for country (required)
citySlug: "istanbul"      # URL slug for city (required)
lastUpdated: 2026-03-22   # Date of last meaningful update (required)
draft: false              # Optional, defaults to false
```

## Template Sections

All sections are optional except the intro paragraph. Each guide is a single markdown file using H2 headings for sections. The layout auto-generates a table of contents from H2s.

Standard sections (order as listed):

1. **Intro** (no heading) — what kind of place, who goes there, vibe
2. `## Language` — key phrases with pronunciation
3. `## Money` — cash vs card, ATMs, exchange, price sense
4. `## Phone / SIM` — eSIM, local SIM, IMEI rules
5. `## Food` — restaurants, must-eat dishes
6. `## Shopping` — where to buy what
7. `## Transport` — local (taxi, public) + airport transfers
8. `## What to Visit` — sights and tips
9. `## Scams & Safety` — what to watch for

Authors can add custom sections as needed.

## Pages & Layouts

### `/travel` Index Page

- Lists cities grouped by country
- Each entry shows: city name (linked), one-line description, last-updated date
- Sorted by country name, then city name
- Same minimal style as the rest of iorlas.com (warm bg, clean type)

### City Guide Page

- Title: city name + country
- Last-updated date below title
- Table of contents: anchor links to each H2 section (horizontal on mobile, sidebar on desktop if space allows — start with horizontal top anchors for simplicity)
- Content rendered from markdown
- Back link to `/travel`

## Navigation Integration

- Add "Travel" link to the footer contact section on the main page
- Each guide links back to `/travel`

## Migration Plan

Migrate existing content from `_archive/guides/travel/Countries/`:

- `turkiye/istanbul.md` → `src/content/travel/turkiye--istanbul.md`
- `turkiye/alanya.md` → `src/content/travel/turkiye--alanya.md`
- Georgia is empty ("TBC") — skip for now

Content cleanup during migration:
- Convert Docusaurus `:::warning` admonitions to standard markdown (blockquotes or bold text)
- Strip Docusaurus frontmatter (`sidebar_position`, etc.)
- Add new frontmatter schema fields
- Keep all existing content as-is otherwise

## Out of Scope

- Search / filtering (not needed at 1-2 cities/year)
- Maps or embedded map widgets
- Comments or ratings
- RSS feed for travel content
- Country-level pages
