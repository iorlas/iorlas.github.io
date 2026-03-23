---
title: "Training Plan"
program: "Claude Code + Next.js"
programSlug: "claude-code-nextjs"
docSlug: "training-plan"
type: "program"
order: 1
---


## Table of Contents

- [Goal](#goal)
- [Target Audience](#target-audience)
- [Schedule Shape](#schedule-shape)
- [Mentor Time Budget](#mentor-time-budget)
- [Daily Mentor Rhythm](#daily-mentor-rhythm)
- [Feature Progression](#feature-progression)
- [Phase Goals & Verification Questions](#phase-goals--verification-questions)
  - [Day 1 — Foundation + Setup](#day-1--foundation--setup)
  - [Day 2 — Codebase Hardening](#day-2--codebase-hardening)
  - [Day 3 — Speed + Advanced Workflows](#day-3--speed--advanced-workflows)
  - [Day 4 — Mock Assessment](#day-4--mock-assessment)
- [Day-by-Day Breakdown](#day-by-day-breakdown)
  - [Day 1 — Foundation + Setup](#day-1--foundation--setup-1)
  - [Day 2 — Codebase Hardening](#day-2--codebase-hardening-1)
  - [Day 3 — Speed + Advanced Workflows](#day-3--speed--advanced-workflows-1)
  - [Day 4 — Mock Assessment](#day-4--mock-assessment-1)
- [Key Resources Summary](#key-resources-summary)
- [Mentor Prep: What to Create](#mentor-prep-what-to-create)

---

## Goal

Engineer becomes a "Claude Code superman" after 4 training days. They fix bugs fast using planning mode, run 4-5 parallel tabs, brainstorm before building, and have hardened the codebase (CLAUDE.md, linters, pre-commit hooks) for AI-assisted development. The engineer already knows JS/TS/NextJS/Payload CMS — this training is about **AI workflow mastery**, not programming.

## Target Audience

| Who | Prerequisites |
|-----|---------------|
| Mid-level to senior NextJS/fullstack engineer | Proficient in JS/TS, NextJS, familiar with Payload CMS. Can build features independently. |
| Copilot experience | Has used GitHub Copilot for inline completions. No Claude Code experience. |
| Joining an existing codebase | Real exercises on the actual production codebase, not toy projects. |

## Schedule Shape

```
[Day 1]         [Day 2]            [Day 3]              [Day 4]
foundation      codebase           speed +               mock
+ setup         hardening          advanced              assessment
full day        full day           full day              half day
```

Total: 3.5 working days. No weekend project.

## Mentor Time Budget

| Phase | Mentor Time |
|-------|-------------|
| Day 1 (Foundation + Setup) | ~1.5 hrs |
| Day 2 (Codebase Hardening) | ~1.5 hrs |
| Day 3 (Speed + Advanced) | ~1.5 hrs |
| Day 4 (Mock Assessment) | ~2.5-3 hrs (assessment + debrief) |
| **Total** | **~7-8 hours over 4 days** |

## Daily Mentor Rhythm

| Time | What Mentor Does |
|------|-----------------|
| Morning (30 min) | Brief intro: "today you learn X, here are the materials, here's what I expect by end of day" |
| Midday (15 min) | Quick check-in: "show me where you are, what's confusing" |
| End of day (45-60 min) | Review work + ask verification questions: "walk me through this, why did you choose X" |
| Async | Answer Slack/chat questions as they come up |

---

## Feature Progression

| Day | Planning Mode | Parallel Tabs | Brainstorming | CLAUDE.md | Pre-commit/Linters |
|-----|--------------|---------------|---------------|-----------|-------------------|
| **Day 1** | No | No | No | Basic (create root) | No |
| **Day 2** | Introduced (first bug fix) | Introduced (2 tabs) | No | Progressive disclosure (root + subdirs) | Set up |
| **Day 3** | Mastery (compared with/without) | Mastery (3-5 tabs) | Introduced + practiced | Refined | Active |
| **Day 4** | **Scored** | **Scored** | **Scored** | **Scored** | Active |

**AI-only from Day 1:** The engineer already knows JS/TS/NextJS. There's no "hand-write first" phase. From the first exercise, all code comes through Claude Code. Small hand-edits (typo, variable rename) allowed. New functions, new files, new logic — all through Claude Code.

---

## Phase Goals & Verification Questions

### Day 1 — Foundation + Setup

**Goal:** Engineer understands what Claude Code is, how it differs from Copilot, has completed the Skilljar courses, and can navigate the codebase using Claude Code. Has created a basic CLAUDE.md.

#### Verification Questions (EOD, Mentor asks)

1. What is the tool use system in Claude Code? How does it differ from Copilot's inline completions?
2. What is the context window? What happens when it fills up? What do you do about it?
3. Show me your CLAUDE.md. What's in it? Why does it matter?
4. Show me how you'd explore the codebase to find where Payload collections are defined — using Claude Code, not file browser.
5. What did the "Codebase Treasure Hunt" reveal about the project structure?
6. What's the difference between asking Claude a question in Chat vs giving it a task in Claude Code?
7. Show me one thing Claude Code did better than Copilot would. Show me one thing where Copilot's inline completions might be faster.

---

### Day 2 — Codebase Hardening

**Goal:** Engineer has set up progressive CLAUDE.md files, pre-commit hooks, linters, identified docs gaps, and completed their first bug fix using planning mode. Has been introduced to parallel tabs.

#### Verification Questions (EOD, Mentor asks)

1. Show me your CLAUDE.md files. How did you decide what goes in root vs subdirectory files?
2. What pre-commit hooks did you set up? Why those specifically?
3. What docs gaps did you find? How did Claude Code help identify them?
4. Walk me through your bug fix. Why did you use planning mode? What did the plan look like before you executed?
5. What happened when you tried two tabs? What worked? What was awkward?
6. If Claude keeps generating code that violates a convention, what do you do? (Answer: add it to the relevant CLAUDE.md)
7. What's progressive disclosure and why does it matter for Claude Code?

---

### Day 3 — Speed + Advanced Workflows

**Goal:** Engineer has mastered planning mode (can articulate when it helps vs hurts), brainstormed a feature design, run 3-5 parallel tabs, and handled advanced workflows. Ready for the mock assessment.

#### Verification Questions (EOD, Mentor asks)

1. Show me your "with vs without planning" comparison. When was planning mode worth the overhead? When wasn't it?
2. Walk me through how you brainstormed the feature design. What alternatives did you explore? How did you decide?
3. How many parallel tabs did you run? What was in each? How did you coordinate?
4. Show me a prompt that failed and how you fixed it. What did you learn about prompt quality?
5. How did you handle context window limits today? When did you `/compact` vs start fresh?
6. Show me the Payload migration test. What edge cases did you find?
7. What advanced feature did you explore (slash commands, MCP, hooks)? Show me.
8. If a junior engineer asked you "how should I use Claude Code?", what are your top 3 rules?

---

### Day 4 — Mock Assessment

**Goal:** Engineer proves they can use Claude Code effectively under observation. See [MOCK-ASSESSMENT.md](MOCK-ASSESSMENT.md) for full details.

#### Verification

_The assessment IS the verification._

---

## Day-by-Day Breakdown

### Day 1 — Foundation + Setup

> **Goal:** Engineer understands Claude Code, completes Skilljar courses, can navigate the real codebase with Claude Code, and has created a basic CLAUDE.md.

---

#### Morning: Mentor Brief + Intro (30 min)

**Mentor demo (20 min):**
- Show Claude Code on the real codebase — "watch me fix a bug" live
- Show how it differs from Copilot: agentic execution, tool use, file creation, terminal commands
- Show planning mode briefly: "I'll use this for bigger tasks, you'll learn it on Day 2"
- Show context window: "this is finite, we'll talk about managing it"

**Engineer brief (10 min):**
- "Today is setup + learning. By end of day, you'll explore this codebase through Claude Code."
- Hand out [CLAUDE-CODE-CHEATSHEET.md](CLAUDE-CODE-CHEATSHEET.md) — "bookmark this, reference it constantly"

---

#### Morning + Early Afternoon: Skilljar Courses (self-paced, ~3 hrs)

**What to complete:**
1. [Claude 101](https://anthropic.skilljar.com/claude-101) (~1 hr) — what Claude is, how it thinks, prompting basics
2. [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) (~2 hrs) — Claude Code CLI, tool use, workflows

**While taking courses, note down:**
- 3 things that surprised you about how Claude Code works
- 2 differences from Copilot that matter most
- 1 question you want to ask the Mentor

---

#### Afternoon: Install + Configure Claude Code (30-45 min)

**What to do:**
1. Install Claude Code CLI
2. Configure authentication
3. First launch on the real codebase — "Hello, describe this project to me"
4. Explore: "Show me the project structure", "What Payload collections exist?", "Where are the NextJS pages?"
5. Read [Claude Code Docs](https://code.claude.com/docs) — overview and getting started sections

---

#### Afternoon: Exercise — Codebase Treasure Hunt (60-90 min)

Using ONLY Claude Code (no file browser, no manual grep), answer these questions about the codebase:

1. How many Payload collections are there? Name them all.
2. Which collection has the most complex access control? What does it do?
3. Find the main NextJS layout. What providers/wrappers does it set up?
4. What environment variables does the project require? Where are they used?
5. Is there a Payload hook that sends emails or notifications? What triggers it?
6. What testing framework is used? Find an existing test and describe what it tests.

**Rules:**
- All exploration through Claude Code CLI
- You can ask Claude follow-up questions ("show me that file", "explain this hook")
- Write your answers in a file — `treasure-hunt-answers.md`
- This is graded on thoroughness, not speed

---

#### End of Day: Create Basic CLAUDE.md (30 min)

Based on what you learned from the treasure hunt, create a `CLAUDE.md` in the project root.

Include:
- Project overview (what this app does)
- Tech stack
- Key directories and what lives where
- Any conventions you observed (naming, patterns, testing approach)

This is a starter — you'll expand it dramatically on Day 2.

---

#### Mentor Time (~1.5 hrs)

- 30 min: morning — Mentor demo + brief
- 15 min: midday — Mentor checks Skilljar progress and Claude Code setup
- 45 min: end of day — Mentor reviews treasure hunt answers + CLAUDE.md + asks verification questions

---

#### Self-Assessment Checkpoint

Before moving to Day 2, the Engineer should be able to answer "yes" to all:
- [ ] I completed both Skilljar courses
- [ ] Claude Code is installed and working on the real codebase
- [ ] I can navigate the codebase using Claude Code (find files, read code, ask questions)
- [ ] I have a basic CLAUDE.md in the project root
- [ ] I can explain 3 differences between Claude Code and Copilot
- [ ] I understand what context window means and that it's finite

---

### Day 2 — Codebase Hardening

> **Goal:** Engineer hardens the codebase for AI-assisted development. Sets up progressive CLAUDE.md, pre-commit hooks, linters, identifies docs gaps. Completes first bug fix with planning mode. Tries two parallel tabs.

---

#### Morning: Mentor Brief (30 min)

**Topics (Mentor explains):**
- Progressive disclosure: why one big CLAUDE.md stops working (20 min)
  - Show [Progressive Disclosure blog post](https://alexop.dev/posts/stop-bloating-your-claude-md-progressive-disclosure-ai-coding-tools/)
  - Show [Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
  - Show [Payload CMS's own CLAUDE.md](https://github.com/payloadcms/payload/blob/main/CLAUDE.md) — "look how a real project does it"
  - Show [NextJS AI Agents Guide](https://nextjs.org/docs/app/guides/ai-agents)
- Planning mode introduction (10 min):
  - What it is: Claude outlines an approach before executing
  - When to use: "anything bigger than a function"
  - You'll practice it on a real bug fix today

---

#### Morning: CLAUDE.md Progressive Disclosure (90 min)

**Exercise — Expand CLAUDE.md to progressive disclosure:**

1. **Review your Day 1 CLAUDE.md.** What's missing? What's too vague?
2. **Create subdirectory CLAUDE.md files.** Aim for 3-5 files:
   - `src/payload/collections/CLAUDE.md` — collection patterns, hook conventions, field naming, access control patterns
   - `src/app/CLAUDE.md` — NextJS page conventions, data fetching patterns, server vs client components
   - `src/components/CLAUDE.md` — component patterns, styling conventions, props patterns
   - (Optional) `src/payload/hooks/CLAUDE.md` — hook patterns, error handling in hooks
   - (Optional) `tests/CLAUDE.md` — testing conventions, test data patterns
3. **Root CLAUDE.md becomes an index:** Keep only project-wide rules. Reference subdirectory files.
4. **Test it:** Start a fresh Claude Code conversation. Ask it to make a change in each area. Does it follow the rules in the relevant CLAUDE.md?

**Materials:**
- [Progressive Disclosure blog](https://alexop.dev/posts/stop-bloating-your-claude-md-progressive-disclosure-ai-coding-tools/)
- [Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [Payload CMS CLAUDE.md](https://github.com/payloadcms/payload/blob/main/CLAUDE.md)
- [NextJS AI Agents Guide](https://nextjs.org/docs/app/guides/ai-agents)

---

#### Midday: Pre-commit Hooks + Linters (60 min)

**Exercise — Set up pre-commit hooks using Claude Code:**

Prompt Claude Code to set up:
1. **ESLint** — configured for the project's NextJS + TypeScript patterns
2. **Prettier** — consistent formatting
3. **Husky + lint-staged** — pre-commit hooks that run linter and formatter on staged files
4. Verify: make a commit with a linting violation — does the hook catch it?

**Why this matters for AI-assisted development:** Claude Code generates code that follows your CLAUDE.md but may not follow your linter rules. Pre-commit hooks catch the gap automatically. The Engineer never ships poorly formatted or linting-violating AI-generated code.

---

#### Afternoon: Docs Gap Analysis (45 min)

**Exercise — Use Claude Code to audit documentation:**

1. Ask Claude Code: "Analyze this codebase and identify what's undocumented or poorly documented. Look at: README, code comments, API documentation, collection field descriptions, environment variable docs."
2. Prioritize the gaps: "Which of these gaps would cause the most confusion for a new developer?"
3. Fix the top 3 gaps — using Claude Code, not by hand.
4. Update relevant CLAUDE.md files with any documentation conventions you establish.

---

#### Afternoon: Exercise — First Bug Fix with Planning Mode (60 min)

**Mentor provides a real bug from the backlog.** The bug should be:
- Non-trivial (requires understanding data flow across Payload and NextJS)
- Not a quick typo fix
- Something the Engineer hasn't seen before

**Workflow (Engineer follows this):**
1. Read the bug report
2. Ask Claude Code to investigate: "Here's the bug: [description]. Help me understand what's happening."
3. **Use planning mode:** "Plan the fix before implementing it. Show me what files need to change and why."
4. Review the plan. Challenge it. Ask: "Are there other possible causes?"
5. Execute the plan
6. Verify the fix
7. Write a brief explanation of what caused the bug and why the fix works

---

#### Afternoon: Exercise — Two-Tab Introduction (30 min)

**First time running parallel tabs:**

1. Open two terminal tabs with Claude Code
2. Tab A: Continue refining CLAUDE.md files based on what you learned during the bug fix
3. Tab B: Write tests for the bug fix you just completed
4. Notice: they work on different files, so no conflicts

**Reflection questions (write 2-3 sentences):**
- Was it useful having two tabs?
- What was awkward?
- When would you want more tabs?

---

#### Optional: Superpowers Framework (30 min)

If time allows, explore the [Superpowers framework](https://github.com/obra/superpowers):
- What is it?
- What skills does it add to Claude Code?
- Install it and try one skill (e.g., brainstorming, debugging)
- Is it useful for your workflow?

---

#### Mentor Time (~1.5 hrs)

- 30 min: morning — Mentor briefs progressive disclosure + planning mode
- 15 min: midday — Mentor checks CLAUDE.md progress and linter setup
- 45 min: end of day — Mentor reviews CLAUDE.md files, bug fix, docs gaps, asks verification questions

---

#### Self-Assessment Checkpoint

Before moving to Day 3, the Engineer should be able to answer "yes" to all:
- [ ] I have 4+ CLAUDE.md files (root + subdirectories)
- [ ] Pre-commit hooks are set up and working (ESLint, Prettier, Husky)
- [ ] I completed a bug fix using planning mode
- [ ] I identified and fixed documentation gaps
- [ ] I've run two parallel tabs and understand the coordination pattern
- [ ] I can explain what progressive disclosure is and why it matters
- [ ] I can explain when to use planning mode vs direct prompting

---

### Day 3 — Speed + Advanced Workflows

> **Goal:** Engineer masters planning mode, learns brainstorming workflow, runs 3-5 parallel tabs, and handles advanced workflows. Ready for tomorrow's mock assessment.

---

#### Morning: Mentor Brief (30 min)

**Topics (Mentor explains):**
- Planning mode mastery (10 min):
  - When it helps: complex tasks, unfamiliar code, multi-file changes
  - When it hurts: simple edits, well-understood patterns (overhead > value)
  - The comparison exercise today will prove this
- Brainstorming workflow (10 min):
  - The 3-step pattern: Explore → Decide → Plan (see cheat sheet)
  - "This is how senior engineers use Claude Code — they don't jump to code"
  - Mentor live demo: brainstorm a feature in 5 minutes
- Parallel tabs strategy (10 min):
  - Review the [cheat sheet parallel tabs section](CLAUDE-CODE-CHEATSHEET.md#5-parallel-tabs)
  - "Today you go from 2 tabs to 3-5. Coordination via git."

---

#### Morning: Exercise — "With vs Without Planning" (90 min)

**Two bug fixes, two approaches:**

**Bug A — Fix WITHOUT planning mode (45 min):**
1. Mentor provides a bug from the backlog
2. Engineer fixes it using direct prompting — no plan, just describe and go
3. Note: time spent, number of back-and-forths, quality of first attempt

**Bug B — Fix WITH planning mode (45 min):**
1. Mentor provides a similar-complexity bug
2. Engineer uses planning mode: investigate → plan → review plan → execute
3. Note: time spent, number of back-and-forths, quality of first attempt

**After both:**
- Write 3-5 sentences comparing the approaches
- When was planning mode worth the overhead? When wasn't it?
- Show the comparison to Mentor at end of day

---

#### Midday: Exercise — Brainstorming-First Feature Design (60 min)

**Mentor provides a small feature request.** The feature should:
- Have at least 2-3 valid approaches
- Touch both Payload CMS and NextJS
- Be implementable in ~45 min after the design is chosen

**Workflow (Engineer follows the 3-step brainstorming pattern):**

1. **EXPLORE (15 min):** "I need to add [feature]. What are the different ways to approach this in our NextJS + Payload CMS stack? What are the tradeoffs?"
2. **DECIDE (10 min):** "Given our constraints [list them], which approach is best? Why? What are the risks?" — Engineer picks one and explains why to Mentor.
3. **PLAN + BUILD (35 min):** "Plan the implementation for approach X, then build it."

**The point:** Brainstorming prevents rework. The 15 minutes exploring alternatives saves 30+ minutes of building the wrong thing.

---

#### Afternoon: Parallel Tab Mastery (90 min)

**Exercise — Run 3-5 tabs on different tasks:**

Set up tabs for concurrent work:

| Tab | Task |
|-----|------|
| Tab A | Implement the feature from the brainstorming exercise (if not finished) |
| Tab B | Write tests for the feature |
| Tab C | Fix a small bug from the backlog |
| Tab D (optional) | Refine CLAUDE.md based on today's learnings |
| Tab E (optional) | Write documentation for the feature |

**Rules:**
- Each tab works on different files
- When a tab finishes, commit before starting a new task in it
- Use git to coordinate (pull/check status before starting overlapping work)
- Track: how many tabs were you comfortable with? Where did coordination break down?

---

#### Afternoon: Exercise — Payload CMS Migration Testing (45 min)

**Exercise — Test migration edge cases:**

Using Claude Code:
1. Identify a recent or upcoming Payload collection schema change
2. Write a migration (or review an existing one)
3. Test idempotency: "Run this migration twice. Does it break?"
4. Test edge cases: "What happens if there's existing data that doesn't fit the new schema?"
5. Document findings: what edge cases did Claude Code help you find vs miss?

---

#### Afternoon: Advanced Features (30-45 min, pick one)

**Option A — Custom slash commands:**
- Learn how to create custom slash commands for Claude Code
- Create one that's useful for your codebase (e.g., `/new-collection`, `/add-page`)
- See [Claude Code Common Workflows](https://code.claude.com/docs/en/common-workflows)

**Option B — MCP servers:**
- Learn what MCP servers are and how they extend Claude Code
- Configure one that's useful for your workflow (e.g., database, documentation)
- Test it: does Claude Code use the MCP tools appropriately?

**Option C — Hooks:**
- Learn about Claude Code hooks (pre/post tool use)
- Set up a hook that's useful for your workflow
- Example: auto-format files after Claude edits them

---

#### Mentor Time (~1.5 hrs)

- 30 min: morning — Mentor briefs planning mastery + brainstorming + parallel tabs
- 15 min: midday — Mentor checks progress on comparison exercise and brainstorming
- 45 min: end of day — Mentor reviews all exercises, asks verification questions, previews tomorrow's assessment

---

#### Self-Assessment Checkpoint

Before the Day 4 mock assessment, the Engineer should be able to answer "yes" to all:
- [ ] I can articulate when planning mode is worth the overhead (with evidence from today)
- [ ] I've brainstormed a feature design using the 3-step pattern
- [ ] I've run 3+ parallel tabs and understand coordination patterns
- [ ] I can debug prompts (know what went wrong with a prompt and how to fix it)
- [ ] I've tested a Payload migration for edge cases
- [ ] I've explored at least one advanced feature (slash commands, MCP, or hooks)
- [ ] I can explain my AI workflow to a junior engineer in 3 rules
- [ ] I feel ready for tomorrow's assessment

---

### Day 4 — Mock Assessment

> **Goal:** Engineer proves they can use Claude Code effectively under observation. Fixes bugs, implements features, writes tests, and articulates workflow philosophy.

See **[MOCK-ASSESSMENT.md](MOCK-ASSESSMENT.md)** for full details.

---

#### Schedule

| Time | Section | Claude Code | What happens |
|------|---------|-------------|-------------|
| 0:00 - 0:30 | **Warm-up** | ON | Engineer picks a small task and works on it while Mentor observes. Settles nerves. |
| 0:30 - 1:15 | **Section 1: Bug Triage + Fix** | ON | Mentor provides 2-3 real bugs. Engineer triages, plans, and fixes. |
| 1:15 - 2:00 | **Section 2: Feature Implementation** | ON | Mentor provides a small feature. Engineer brainstorms, plans, builds. |
| 2:00 - 2:30 | **Section 3: Test Writing** | ON | Mentor points to an untested module. Engineer analyzes and writes tests. |
| 2:30 - 3:00 | **Section 4: Workflow Q&A** | OFF | Discussion: CLAUDE.md design, planning mode, parallel tabs, prompt craft. |
| 3:00 - 3:45+ | **Debrief** | — | Mentor gives feedback. Gap remediation plan if needed. |

---

#### Scoring Summary

| Section | Strong | Acceptable | Concern |
|---------|--------|------------|---------|
| Bug Triage | Uses planning, triages effectively, fixes quickly, tests fix | Fixes bugs, some planning, decent workflow | No planning, random changes, can't triage |
| Feature Impl | Brainstorms first, plans, uses parallel tabs, clean code | Builds feature, some planning, mostly works | No brainstorming, no planning, messy code |
| Test Writing | Identifies gaps, specific test cases, edge cases covered | Writes tests, covers happy path | Vague "add tests", no edge cases |
| Workflow Q&A | Clear mental model, concrete examples, can teach others | Understands basics, gives some examples | Can't explain workflow, no opinions |

**Verdict:**
- 4 Strong = ready for full autonomous Claude Code usage on real work
- Mix of Strong/Acceptable = ready, with specific practice areas noted
- Any Concern = needs more practice; schedule follow-up exercises

---

## Key Resources Summary

### Core Curriculum (Provided)

| Resource | Used on | Type |
|----------|---------|------|
| [Claude 101](https://anthropic.skilljar.com/claude-101) | Day 1 | Skilljar course (~1 hr) |
| [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) | Day 1 | Skilljar course (~2 hrs) |
| [Claude Code Docs](https://code.claude.com/docs) | Day 1 | Official documentation |
| [Progressive Disclosure blog](https://alexop.dev/posts/stop-bloating-your-claude-md-progressive-disclosure-ai-coding-tools/) | Day 2 | Blog post |
| [Writing a Good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md) | Day 2 | Blog post |
| [Payload CMS CLAUDE.md](https://github.com/payloadcms/payload/blob/main/CLAUDE.md) | Day 2 | Real-world example |
| [NextJS AI Agents Guide](https://nextjs.org/docs/app/guides/ai-agents) | Day 2 | Official docs |
| [Claude Code Common Workflows](https://code.claude.com/docs/en/common-workflows) | Day 3 | Official docs |
| [Superpowers](https://github.com/obra/superpowers) | Day 2-3 | Optional framework |

### Training Materials (This Repo)

| Resource | Purpose |
|----------|---------|
| [CLAUDE-CODE-CHEATSHEET.md](CLAUDE-CODE-CHEATSHEET.md) | Daily reference for planning, prompting, parallel tabs, anti-patterns |
| [MOCK-ASSESSMENT.md](MOCK-ASSESSMENT.md) | Day 4 assessment format, scoring rubrics, debrief guide |

---

## Mentor Prep: What to Create

1. **Bug backlog (Day 2 + Day 3):** Identify 4-5 real bugs of varying complexity from the backlog. Day 2 bug fix should be non-trivial (requires understanding data flow). Day 3 needs two bugs of similar complexity for the planning comparison exercise.

2. **Feature request (Day 3):** Prepare a small feature that touches both Payload CMS and NextJS, has 2-3 valid approaches, and is implementable in ~45 min. Examples:
   - "Add a 'recently viewed' section to the dashboard"
   - "Add webhook notifications when a collection item is published"
   - "Add CSV export for a collection's data"

3. **Assessment prep (Day 4):** See [MOCK-ASSESSMENT.md](MOCK-ASSESSMENT.md). Prepare:
   - 2-3 assessment bugs from the backlog
   - A small assessment feature request
   - An untested module for the test writing section
   - Print the score sheet

4. **Codebase access:** Ensure the Engineer has:
   - Repo access and can clone/pull
   - Environment variables / .env file
   - Database access (or local DB setup instructions)
   - Can run the project locally before Day 1

5. **Slack/chat channel:** Set up async communication for questions between mentor check-ins.

6. **Cheat sheet handout:** Print or share [CLAUDE-CODE-CHEATSHEET.md](CLAUDE-CODE-CHEATSHEET.md) before Day 1.
