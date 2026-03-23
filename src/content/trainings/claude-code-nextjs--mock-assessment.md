---
title: "Mock Assessment"
program: "Claude Code + Next.js"
programSlug: "claude-code-nextjs"
docSlug: "mock-assessment"
type: "program"
order: 3
---


> Run this on Day 4. Total time: ~2.5-3 hours + 45-60 min debrief.
> Claude Code is ON for Sections 1-3, OFF for Section 4.
> The goal is to prove the Engineer can DRIVE Claude Code effectively
> AND articulate their workflow. We're assessing AI workflow mastery,
> not programming skill — they already know JS/TS/NextJS.
>
> This is opinionated. It's designed to expose whether the Engineer
> has internalized Claude Code as a workflow, not just a tool.

## Table of Contents

- [Pre-Assessment Setup](#pre-assessment-setup)
- [Warm-up (30 min)](#warm-up-30-min)
- [Section 1: Bug Triage + Fix (45 min)](#section-1-bug-triage--fix-45-min)
- [Section 2: Feature Implementation (45 min)](#section-2-feature-implementation-45-min)
- [Section 3: Test Writing (30 min)](#section-3-test-writing-30-min)
- [Section 4: Workflow Q&A (30 min)](#section-4-workflow-qa-30-min)
- [Score Sheet](#score-sheet)
- [Verdict](#verdict)
- [Debrief Protocol (45-60 min)](#debrief-protocol-45-60-min)

---

## Pre-Assessment Setup

- Engineer has their terminal open with Claude Code ready on the real codebase
- Project runs locally (verified before assessment starts)
- Mentor has reviewed the assessment bugs and feature request beforehand
- Timer visible (Mentor manages time, Engineer shouldn't stress about clock)
- Mentor has the Engineer's CLAUDE.md files open for reference
- **Important:** Section 4 is NO CLAUDE CODE. Engineer must close all Claude Code sessions. Mentor verifies.

Tell the Engineer: *"This is a four-part assessment. You'll triage bugs, build a feature, write tests — all with Claude Code. Then we'll talk about your workflow without it. I'm not testing your JavaScript knowledge. I'm testing: can you drive Claude Code effectively, do you use planning and brainstorming, can you run parallel tabs, and do you understand your own code. Let's start with a warm-up."*

---

## Warm-up (30 min)

> Purpose: Settle nerves. Get the Engineer into their workflow rhythm before the scored sections.

**What happens:**
- Engineer picks any small task they want to do on the codebase (from the backlog, or a CLAUDE.md refinement, or a small improvement they've been thinking about)
- Mentor observes but doesn't ask questions — just let them work
- This is NOT scored, but it reveals their natural workflow

**What Mentor silently observes:**
- Does the Engineer start with planning or jump in?
- How specific are their prompts?
- Do they read Claude's output or accept blindly?
- Do they use CLAUDE.md references in prompts?

---

## Section 1: Bug Triage + Fix (45 min)

> **Purpose:** Can the Engineer use Claude Code to triage, investigate, plan, and fix real bugs? Do they use planning mode? Can they run parallel investigations?
>
> **Claude Code: ON**

### The Setup

Mentor provides 2-3 real bugs from the backlog. The bugs should have:
- **Bug A (straightforward):** Clear symptoms, one likely cause, fixable in ~15 min. Tests whether Engineer can triage and fix efficiently.
- **Bug B (moderate):** Multiple possible causes, requires investigation across Payload + NextJS. Tests planning mode usage.
- **Bug C (if time allows):** Related to Bug B or a subtle edge case. Tests whether Engineer can pivot.

**Example bug types for NextJS + Payload CMS:**
- Payload hook not firing on a specific operation (access control interaction)
- NextJS page showing stale data after Payload update (revalidation issue)
- API route returning wrong status code or missing error handling
- Relationship field not populating correctly in a specific query
- Client component hydration error on a page that uses Payload data

### What to observe

**Triage approach:**
- Does the Engineer read the bug report fully before prompting?
- Does the Engineer ask Claude to investigate before jumping to a fix?
- Does the Engineer form a hypothesis before coding?

**Planning mode:**
- Does the Engineer use planning mode for Bug B? (They should)
- Does the plan identify the right files and root cause?
- Does the Engineer review and challenge the plan?

**Parallel tabs:**
- For Bug B + C, does the Engineer use parallel tabs to investigate simultaneously?
- If not — that's not a concern on its own, but note it

**Testing:**
- Does the Engineer verify the fix works?
- Does the Engineer add or update tests?

### Questions to ask DURING the section

Ask these naturally while the Engineer works. Don't rapid-fire.

| Question | What you're looking for |
|----------|------------------------|
| "What's your hypothesis for this bug?" | Can they form a theory before prompting |
| "Why did you use planning mode here?" | Understanding of when planning adds value |
| "That fix looks right. How would you verify it?" | Testing instinct |
| "Claude suggested changing file X. Is that the right file?" | Critical review of Claude's output |
| "Could there be other causes? How would you rule them out?" | Systematic triage, not guessing |

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer triages systematically (read → investigate → hypothesize → plan → fix → verify). Uses planning mode for complex bugs. Reviews Claude's suggestions critically. Fixes are correct and tested. May use parallel tabs. | Engineer fixes bugs with Claude's help. Some investigation before fixing. Planning mode used but not always effectively. Fixes work but may lack tests. | Engineer jumps to random fixes without investigation. No planning mode. Accepts Claude's first suggestion without review. Fixes are wrong or untested. |

---

## Section 2: Feature Implementation (45 min)

> **Purpose:** Can the Engineer brainstorm, plan, and implement a feature using Claude Code? Do they explore alternatives before building?
>
> **Claude Code: ON**

### The Setup

Mentor provides a small feature request. The feature should:
- Touch both Payload CMS and NextJS (e.g., new field + updated page)
- Have 2-3 valid implementation approaches
- Be achievable in ~35 min by someone who knows the codebase (10 min for brainstorming/planning)

**Example feature requests:**

**Option A (Dashboard enhancement):**
*"Add a 'quick stats' card to the dashboard that shows the count of items in the 3 main collections, updated in real-time. Include a link to each collection's list view."*

**Option B (Content workflow):**
*"Add a 'scheduled publish' feature to one collection. Users can set a future publish date. Items with a future date show as 'scheduled' in the admin. Add a test for the scheduling logic."*

**Option C (Search/filter):**
*"Add full-text search to the main listing page. Users type in a search box, results filter in real-time. Search should work across title and description fields. The search should work server-side with Payload's query API."*

### What to observe

**Brainstorming:**
- Does the Engineer brainstorm before building? (They should — this was Day 3's lesson)
- Do they ask Claude to explore approaches? ("What are the ways to implement X?")
- Do they evaluate tradeoffs before picking an approach?
- If the Engineer skips brainstorming — note it as a concern

**Planning:**
- After choosing an approach, does the Engineer use planning mode?
- Is the plan reviewed before execution?
- Does the plan account for both Payload and NextJS changes?

**Prompt quality:**
- Are prompts specific? ("Add a number field to the products collection" vs "add a field")
- Do prompts reference existing patterns? ("Follow the pattern in the orders collection")
- Do prompts reference CLAUDE.md? ("Following the conventions in our CLAUDE.md")

**Parallel tabs:**
- Does the Engineer use multiple tabs? (e.g., one for Payload changes, one for NextJS page)
- How do they coordinate between tabs?

**Code review:**
- Does the Engineer read generated code before accepting?
- Do they catch out-of-scope changes?
- Do they verify the feature works?

### Questions to ask DURING the section

| Question | What you're looking for |
|----------|------------------------|
| "Why this approach over the alternatives?" | Brainstorming happened, tradeoffs considered |
| "Walk me through the plan before you execute" | Planning mode, not cowboy coding |
| "That prompt was pretty vague. How could you be more specific?" | Prompt engineering self-awareness |
| "You have two tabs open. What's each doing?" | Parallel tab coordination |
| "Claude changed 4 files but you asked about 2. What are the other 2?" | Critical diff review |
| "Does this feature work? Show me." | Verification instinct |

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer brainstorms first (explores 2-3 approaches, picks one with reasoning). Plans before building. Prompts are specific with pattern/CLAUDE.md references. Uses parallel tabs. Reviews all diffs. Feature works with tests. | Engineer builds the feature. Some brainstorming (may not be systematic). Uses planning mode. Prompts are decent. Feature mostly works. | No brainstorming — jumps straight to building. No planning. Vague prompts. Doesn't review diffs. Feature doesn't work or has obvious gaps. |

---

## Section 3: Test Writing (30 min)

> **Purpose:** Can the Engineer analyze an untested module and write meaningful tests? Do they think about edge cases? Are their test prompts specific?
>
> **Claude Code: ON**

### The Setup

Mentor identifies an untested or under-tested module in the codebase. It should be:
- A Payload hook, service function, or utility with non-trivial logic
- Something the Engineer hasn't worked on extensively (tests real analysis, not memory)
- Complex enough to have 4-6 meaningful test cases (happy path + edge cases)

### The Task

*"This module has no tests [or: only has a basic happy-path test]. I want you to analyze it, figure out what should be tested, and write comprehensive tests. Use Claude Code to help, but I want to see you direct the testing strategy, not just ask 'write tests.'"*

### What to observe

**Analysis:**
- Does the Engineer read and understand the module before prompting?
- Does the Engineer identify the key behaviors to test?
- Does the Engineer think about edge cases without being prompted?

**Prompt specificity:**
- `"Write tests"` → concern (too vague)
- `"Write tests for the beforeChange hook in the orders collection. Test cases: valid order creation, order with amount 0, order without required fields, order that exceeds inventory"` → strong

**Test quality:**
- Do tests cover happy path + error cases + edge cases?
- Are test names descriptive?
- Do tests actually assert meaningful things (not just "it doesn't crash")?
- Are mocks appropriate (interface-based, not monkey-patching)?

### Questions to ask DURING the section

| Question | What you're looking for |
|----------|------------------------|
| "Walk me through what this module does before you write tests" | Understanding before testing |
| "What edge cases should we test?" | Analytical thinking |
| "That test passes, but does it test the right thing?" | Critical review of AI-generated tests |
| "What's NOT tested that should be?" | Awareness of coverage gaps |
| "If I change [internal implementation detail], would this test still pass?" | Understanding brittle vs robust tests |

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer analyzes module first. Identifies 4+ test cases including edge cases. Prompts are specific about what to test. Tests are meaningful (not just "it runs"). Catches coverage gaps. | Engineer writes tests that cover happy path and some error cases. Prompts are reasonably specific. Tests work. | Engineer prompts "write tests" with no direction. Tests only cover happy path. Can't identify edge cases. Tests are superficial. |

---

## Section 4: Workflow Q&A (30 min)

> **Purpose:** Has the Engineer internalized Claude Code as a workflow? Can they articulate when and how to use it? Do they understand its limitations?
>
> **Claude Code: OFF** — Engineer closes all Claude Code sessions. Mentor verifies.

### Questions

Mentor picks 8-10 from this list. These are discussion questions — the Engineer should think and articulate.

**CLAUDE.md & Setup:**

1. *"You're joining a new NextJS + Payload CMS project tomorrow. Walk me through how you set up Claude Code for it."*
   - Expected: Create root CLAUDE.md with project overview, conventions, architecture. Create subdirectory CLAUDE.md files for collections, pages, components. Set up pre-commit hooks. Test that Claude follows the rules.
   - Red flag: "I'd just start coding" with no mention of CLAUDE.md

2. *"Your root CLAUDE.md is 100 lines long. What do you do?"*
   - Expected: Split into progressive disclosure — root keeps project-wide rules, subdirectories get layer-specific rules.
   - Red flag: "That's fine, more context is better"

3. *"A teammate keeps getting wrong output from Claude. Their CLAUDE.md is empty. What do you tell them?"*
   - Expected: Help them set up CLAUDE.md with project conventions. "Claude only knows what you tell it."
   - Red flag: "Claude is just bad at that"

**Planning Mode:**

4. *"When would you NOT use planning mode?"*
   - Expected: Simple edits, well-understood patterns, single-file changes where overhead > value.
   - Red flag: "Always use planning mode" or "Never use planning mode"

5. *"You used planning mode and Claude's plan is wrong — it suggests changing the wrong files. What do you do?"*
   - Expected: Challenge the plan, explain why it's wrong, ask for a revised plan. Don't execute a bad plan.
   - Red flag: "Execute it and fix after" or "Start over from scratch"

**Parallel Tabs:**

6. *"You have a feature to build, tests to write, and a bug to fix. How do you organize your tabs?"*
   - Expected: Tab A for feature (uses planning mode), Tab B for tests (after feature is committed), Tab C for bug fix. Coordinate via git.
   - Red flag: "One tab for everything" or "I don't use multiple tabs"

7. *"Two of your tabs are editing the same file. What happens? How do you prevent it?"*
   - Expected: Merge conflicts. Prevent by assigning different file areas to each tab. Use git status to check.
   - Red flag: "It's fine, Claude handles it"

**Brainstorming:**

8. *"Your Mentor gives you a vague feature request: 'improve the search experience.' Walk me through your first 15 minutes."*
   - Expected: Brainstorm with Claude — explore what "improve" means, identify current search limitations, propose 2-3 approaches with tradeoffs, decide on one, THEN plan and build.
   - Red flag: Immediately starts building something

**Prompt Craft:**

9. *"Give me an example of a bad prompt and a good prompt for the same task."*
   - Expected: Concrete NextJS/Payload example showing specificity, context, pattern references.
   - Red flag: Can't articulate what makes a prompt better

10. *"Claude just generated a Payload hook with a bug — it runs on the wrong lifecycle event (afterChange instead of beforeChange). How do you fix it without hand-editing?"*
    - Expected: Re-prompt with specific explanation: "This hook should run beforeChange, not afterChange, because [reason]. Update the hook to use beforeChange."
    - Red flag: "I'd just change the word in the code myself"

**Context & Limitations:**

11. *"When is it faster to NOT use Claude Code?"*
    - Expected: Simple renames, small config changes, adding an import, quick copy-paste — things where prompting takes longer than typing.
    - Red flag: "Never, Claude is always faster"

12. *"Your conversation is 40 messages deep and Claude starts generating code that contradicts earlier decisions. What do you do?"*
    - Expected: Try `/compact` first. If that doesn't help, start a fresh conversation with a brief that includes the key decisions and current state.
    - Red flag: "Keep going and correct each mistake" or "I don't know"

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer has a clear mental model of CLAUDE.md, planning, parallel tabs, and brainstorming. Gives concrete examples from the training week. Has opinions about when to use each technique. Can teach others. Admits limitations. | Engineer understands the basics. Can explain most concepts. Gives some examples. Has a general sense of when to use what. | Engineer treats Claude Code as "just a faster autocomplete." No clear workflow. Can't articulate when to use planning vs direct, parallel vs sequential, brainstorming vs building. |

---

## Score Sheet

| Section | Time | Claude Code | Strong | Acceptable | Concern |
|---------|------|-------------|--------|------------|---------|
| 1. Bug Triage + Fix | 45 min | ON | Systematic triage, planning mode for complex bugs, critical review, fixes tested | Fixes bugs, some planning, fixes work | No investigation, no planning, untested fixes |
| 2. Feature Implementation | 45 min | ON | Brainstorms first, plans, parallel tabs, specific prompts, feature works | Builds feature, some planning, mostly works | No brainstorming, no planning, vague prompts |
| 3. Test Writing | 30 min | ON | Analyzes first, specific test prompts, edge cases, meaningful assertions | Writes tests, covers happy path + some errors | Vague "write tests", happy path only |
| 4. Workflow Q&A | 30 min | OFF | Clear mental model, concrete examples, can teach others | Understands basics, some examples | No workflow, treats Claude as autocomplete |

---

## Verdict

**4 Strong:** Engineer is a Claude Code superman. Ready for full autonomous usage on real project work. They'll make the team more productive.

**3 Strong, 1 Acceptable:** Engineer is ready. Note the weak area and assign targeted practice. Schedule a 30-minute follow-up in a week.

**Mix of Strong and Acceptable:** Engineer is on the right track but needs more practice. Specifically:
- Section 1 Concern → Practice triage workflow: investigate → hypothesize → plan → fix → verify. Assign 3 bugs to fix with this protocol.
- Section 2 Concern → Practice brainstorming: take 3 feature requests and brainstorm each before building. Journal the alternatives explored.
- Section 3 Concern → Practice test specification: take 3 modules and write test plans (not tests — just the plan) specifying what to test and why.
- Section 4 Concern → Re-read the [cheat sheet](CLAUDE-CODE-CHEATSHEET.md). Set up Claude Code fresh on a small side project and journal every workflow decision.

**Any 2+ Concerns:** Engineer needs additional training time. Schedule 1-2 more days focused on the weak areas before allowing autonomous Claude Code usage on real project work.

---

## Debrief Protocol (45-60 min)

> Mentor leads. Can be 1:1 or group (if multiple engineers completed the training).

### Part 1: Mentor Feedback (15 min)

Mentor gives specific, honest feedback for each section.

**Good feedback examples:**
- *"Your bug triage was excellent — you investigated before fixing, used planning mode for Bug B, and caught that Claude's first suggestion was wrong. That's exactly the workflow we want."*
- *"The brainstorming for the feature was strong. You explored 3 approaches and picked the right one. The plan was clean. I noticed you used 3 tabs toward the end — the coordination was smooth."*
- *"Your test prompts were the most specific I've seen. 'Test the beforeChange hook with an order that has negative quantity' — that's how you get good AI output."*

**Honest feedback examples:**
- *"You skipped brainstorming in Section 2. You jumped straight to building and picked approach A without considering B or C. Approach C would have been simpler. The 5 minutes brainstorming would have saved you 15 minutes of rework."*
- *"In the bug triage, you accepted Claude's fix without testing it. In production, that fix would have broken the related feature. Always verify."*
- *"Your Section 4 answers about parallel tabs were theoretical. You talked about using them but during the actual assessment you used one tab for everything. Practice what you preach."*

### Part 2: Engineer Retrospective (15 min)

Engineer answers these questions (verbally or written):

1. **What's the most important thing you learned about Claude Code this week?**
2. **What will you do differently in your first week using Claude Code on real work?**
3. **What's still confusing or uncertain?**
4. **Rate yourself 1-5 on each:**
   - Planning mode (knowing when and how to use it)
   - Parallel tabs (running and coordinating multiple sessions)
   - Brainstorming (exploring before building)
   - CLAUDE.md (progressive disclosure, keeping it effective)
   - Prompt engineering (writing specific, contextual prompts)
   - Critical review (catching AI mistakes, questioning output)

### Part 3: Gap Remediation Plan (15-20 min)

Based on the assessment, Mentor creates a specific plan:

| If weak on... | Remediation |
|---------------|-------------|
| Planning mode | Fix 3 bugs this week: 1 without planning, 1 with planning, 1 where you decide. Journal the comparison. |
| Parallel tabs | Build one feature using 3+ tabs. Commit after each tab's work. Show the git log to Mentor. |
| Brainstorming | Take 3 feature requests. Brainstorm each (explore → decide → plan) before building. Show the brainstorming transcripts. |
| CLAUDE.md | Set up CLAUDE.md fresh for a test project. Progressively add rules as you hit problems. Show evolution over 3 days. |
| Prompt engineering | Keep a prompt log for 1 week: what you prompted → what happened → what you'd do differently. Review with Mentor. |
| Critical review | Disable auto-accept. Review every diff for 1 week. Flag 3 things Claude got wrong per day. |

### Part 4: Follow-up Schedule

| Scenario | Follow-up |
|----------|-----------|
| All Strong | 30-min check-in after 1 week of real work |
| Mixed Strong/Acceptable | 30-min check-in after 3 days + after 1 week |
| Any Concern | Extra practice day (schedule within 1 week) + 30-min check-in after 1 week |
| Multiple Concerns | 2 extra practice days + daily 15-min check-ins for 1 week |
