---
title: "Claude Code Cheatsheet"
program: "Claude Code + Next.js"
programSlug: "claude-code-nextjs"
docSlug: "cheatsheet"
type: "program"
order: 2
---


> **This cheat sheet is for the Engineer** — keep it next to your screen. Reference it constantly until it's second nature.
>
> **Roles:** "Engineer" = you, the person being trained. "Mentor" = the trainer/teacher guiding your learning.

## Table of Contents

- [The Golden Rule](#the-golden-rule)
- [1. Planning Mode](#1-planning-mode)
- [2. Context Window](#2-context-window)
- [3. Prompting Techniques](#3-prompting-techniques)
- [4. CLAUDE.md Progressive Disclosure](#4-claudemd-progressive-disclosure)
- [5. Parallel Tabs](#5-parallel-tabs)
- [6. Brainstorming Workflow](#6-brainstorming-workflow)
- [7. Debug Loop](#7-debug-loop)
- [8. NextJS + Payload CMS Tips](#8-nextjs--payload-cms-tips)
- [9. Anti-Patterns — Don't Do These](#9-anti-patterns--dont-do-these)
- [Quick Reference](#quick-reference)

---

## The Golden Rule

**Ask Claude how to approach the problem before asking it to solve the problem.** Maybe you're solving the wrong one.

```
BAD:  "Add a new collection to Payload"

GOOD: "I need to add user profile management to our Payload CMS app.
       What are the different ways to structure this — should profiles be
       a separate collection or extend the existing Users collection?
       What are the tradeoffs for our NextJS frontend?"
```

---

## 1. Planning Mode

Use planning mode for anything bigger than a single function or component.

```
Engineer: "I need to add an orders collection with webhook integration
           and a NextJS dashboard page. Plan the implementation before
           writing code."
```

Claude will outline:
- What files to create/modify
- What collections, hooks, and endpoints to define
- What the data flow looks like (Payload → API → NextJS pages)
- What tests to write

**Review the plan. Challenge it. Then say "go ahead."**

### When to use planning mode

- New Payload collections with relationships
- New NextJS pages or API routes
- Anything touching more than 2 files
- Migrations or schema changes
- Bug fixes where you don't understand the root cause yet

### Plan review checklist

- [ ] Does it match our project's architecture?
- [ ] Are Payload hooks in the right lifecycle stage?
- [ ] Does the NextJS page use the right rendering strategy (SSR/SSG/client)?
- [ ] Are there tests?
- [ ] Is it doing too much in one shot?

---

## 2. Context Window

Claude has finite memory. It forgets things as conversations get long.

**Signs Claude is losing context:**
- Repeats code you already wrote
- Forgets your project structure or Payload collection schemas
- Contradicts earlier decisions
- Generates code that doesn't match your patterns
- Starts hallucinating import paths or collection slugs

**What to do:**
- Use `/compact` — compresses conversation history, freeing up context. Try this first.
- If `/compact` isn't enough, start a fresh conversation
- Begin the new conversation with a brief: "I'm working on a NextJS + Payload CMS app. Here's the structure: [paste tree]. I need to add X."
- Your CLAUDE.md files are loaded automatically — they survive context resets

**Rule of thumb:** If Claude starts losing track, try `/compact` first. If the conversation is 30+ messages deep or `/compact` doesn't help, start fresh.

---

## 3. Prompting Techniques

### Be specific, not vague

```
BAD:  "Add a collection"

GOOD: "Create a Payload CMS collection called 'products' with fields:
       - name (text, required, unique)
       - price (number, required, min: 0)
       - category (relationship to 'categories' collection)
       - status (select: draft/published, default: draft)
       Add an afterChange hook that revalidates the /products NextJS page.
       Follow the collection patterns in CLAUDE.md."
```

### Give context about your codebase

```
BAD:  "Add tests"

GOOD: "Add integration tests for the products collection.
       Test cases:
       - create product with valid data (expect 201)
       - create product with missing name (expect 400)
       - create product with negative price (expect validation error)
       - create product linked to non-existent category
       Use the test patterns from orders.test.ts"
```

### Ask for explanation, not just code

```
"Write this hook AND explain why you chose afterChange vs beforeChange."

"I see you used server components here. Explain why a client component
 wouldn't work for this use case."

"What are the edge cases in this migration that could cause data loss?"
```

### Iterate, don't accept blindly

```
Engineer: "Add revalidation to the product page"
Claude:   [generates code]
Engineer: "Why did you use revalidatePath instead of revalidateTag?
           We use tag-based revalidation everywhere else."
Claude:   [fixes and explains]
```

---

## 4. CLAUDE.md Progressive Disclosure

### Start monolithic, split when it hurts

**Root CLAUDE.md** — project-wide rules:
```markdown
# Project: MyApp (NextJS + Payload CMS)

## Architecture
- NextJS App Router for frontend
- Payload CMS as headless backend
- Shared TypeScript types from Payload-generated types

## Conventions
- Use server components by default, client components only when needed
- Payload hooks for business logic, not API routes
- All collections in src/payload/collections/
- Pages in src/app/
```

**Split when CLAUDE.md exceeds ~50 lines or Claude ignores bottom rules.**

```
CLAUDE.md                               ← Project overview + key conventions
src/payload/collections/CLAUDE.md       ← Collection patterns, hook conventions, field naming
src/app/CLAUDE.md                       ← NextJS page conventions, data fetching patterns
src/components/CLAUDE.md                ← Component patterns, client vs server decisions
```

### When to decompose

1. Claude keeps generating code that violates a rule from the bottom of your CLAUDE.md
2. You're copy-pasting the same correction more than twice
3. Your CLAUDE.md exceeds 50 lines
4. You have layer-specific patterns that only matter when working on that layer

---

## 5. Parallel Tabs

Run multiple Claude Code instances on different tasks simultaneously.

### Strategy

| Tabs | What to do in each |
|------|--------------------|
| 2 tabs | Tab A: main feature work. Tab B: tests for what Tab A built. |
| 3 tabs | Tab A: feature. Tab B: tests. Tab C: docs/CLAUDE.md updates. |
| 4-5 tabs | Tab A: feature. Tab B: related feature. Tab C: tests. Tab D: bug fix. Tab E: docs. |

### Coordination rules

1. **Each tab works on different files.** Don't have two tabs editing the same file — merge conflicts.
2. **Use git as the coordination layer.** When Tab A finishes, commit. Tab B pulls or works on non-overlapping files.
3. **Name your tabs mentally.** Know what each is doing. Don't let them drift into the same task.
4. **Start with 2 tabs.** Add more as you get comfortable. 5 tabs is expert-level.

### When NOT to use parallel tabs

- Learning a new concept (focus > speed)
- Debugging (one bug at a time, one conversation)
- When tasks depend on each other (sequential, not parallel)

---

## 6. Brainstorming Workflow

Before building, brainstorm. Three steps:

```
Step 1: EXPLORE
        "I need to add [feature]. What are the different ways to
         approach this in a NextJS + Payload CMS stack?
         What are the tradeoffs?"

Step 2: DECIDE
        "Given our constraints [list them], which approach is best?
         Why? What are the risks?"

Step 3: PLAN
        "OK, let's go with approach X. Plan the implementation —
         what files, what order, what tests."
```

### When to brainstorm

- New features (always)
- Bug fixes where the root cause is unclear
- Architectural decisions (new collection design, API structure)
- When you're about to invest more than 30 minutes of work

### When to skip brainstorming

- Typo fixes
- Adding a field to an existing collection
- Tasks with a clear, obvious approach
- You've already brainstormed this exact pattern before

---

## 7. Debug Loop

When something breaks:

```
Step 1: PASTE the error
        "I'm getting this error: [paste full error + stack trace]"

Step 2: UNDERSTAND what it means
        "What does this error mean? What are the possible causes
         in a NextJS + Payload CMS context?"

Step 3: FIX it
        "How do I fix this? Show me the minimal change."

Step 4: COMPREHEND why it happened
        "Why did this happen? What was I doing wrong conceptually?"
```

**Never apply a fix you can't explain.** If you can't explain it, you'll make the same mistake again.

### Common NextJS + Payload debug patterns

- **"Module not found"** → Check import paths, Payload auto-generated types location
- **"Hydration mismatch"** → Server/client component boundary issue
- **"Cannot read properties of undefined"** → Missing null checks on Payload relationship fields
- **"API route 405"** → Wrong HTTP method or missing route handler export

---

## 8. NextJS + Payload CMS Tips

### Payload CMS conventions

- Collections define your data model — think of them as database tables
- Hooks (`beforeChange`, `afterChange`, `beforeDelete`) are where business logic lives
- Access control is per-collection, per-operation — don't forget it
- Use Payload's generated types — never hand-write interfaces for collection data

### NextJS conventions

- Server components by default — `"use client"` only when you need interactivity
- Use `fetch` with Payload's REST API or import Payload directly in server components
- `revalidatePath` / `revalidateTag` for cache invalidation after Payload changes
- Layouts for shared UI, pages for route-specific content

### Testing

- Integration tests for Payload collections (create, read, update, delete + hooks)
- Test Payload hooks in isolation when complex
- Test NextJS pages with appropriate rendering assertions
- Always test migrations against real data shape, not empty databases

### Migrations

- Always test migrations forward AND consider rollback
- Check for data that doesn't fit the new schema
- Payload migrations are idempotent — test by running twice

---

## 9. Anti-Patterns — Don't Do These

| Don't | Do Instead |
|-------|------------|
| Accept generated code without reading it | Read every line. Ask "why?" for anything unclear. |
| Prompt "fix it" when something breaks | Paste the error, ask for explanation first, then fix. |
| Use Claude for 100-line changes without planning | Use planning mode. Break into steps. |
| Let conversations run 50+ messages | Use `/compact` to compress, or start fresh with a clear brief. |
| Copy-paste code you don't understand | If you can't explain it, don't ship it. |
| Ask "write tests" without specifying what to test | Specify test cases: happy path, edge cases, error cases. |
| Ignore when Claude contradicts itself | Flag it: "Earlier you said X, now you're saying Y. Which is correct?" |
| Have two tabs editing the same file | One tab per file area. Use git to coordinate. |
| Skip brainstorming for new features | 5 minutes brainstorming saves 30 minutes of rework. |
| Build the whole feature, then test | Build layer by layer, test each layer. |

---

## Quick Reference

| I want to... | Prompt pattern |
|--------------|---------------|
| Plan before coding | "Plan the implementation for X before writing code" |
| Generate code | "Write [specific thing] following the patterns in CLAUDE.md" |
| Review my code | "Review this for NextJS best practices, Payload conventions, and edge cases" |
| Debug an error | "Here's the error: [paste]. What does it mean and how do I fix it?" |
| Compare approaches | "What are the ways to do X in NextJS + Payload? What are the tradeoffs?" |
| Brainstorm a feature | "I need to add [feature]. Explore the different approaches before we decide." |
| Understand code | "Read this and explain what it does, step by step" |
| Check my understanding | "Am I right that [your understanding]? Correct me if I'm wrong." |
| Start fresh | "I'm working on [project context]. Here's the structure: [tree]. I need to do X." |
| Parallel work | Open a new terminal tab, start Claude Code, work on a different task area |
