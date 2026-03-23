---
title: "Assessment"
program: "VS Code Copilot"
programSlug: "copilot-vscode"
docSlug: "assessment"
type: "program"
order: 4
---


> Run this on Day 4 (morning only). Total time: ~80 minutes + 30 min retrospective.
> This assessment has sections WITH and WITHOUT Copilot.
> The goal is to prove the Engineer can USE AI effectively AND UNDERSTAND the code it produces.
>
> This is opinionated. It's designed to expose whether the Engineer learned
> to think with AI, not just type into it.

## Table of Contents

- [Pre-Assessment Setup](#pre-assessment-setup)
- [Section 1: Live Demo — Build with Copilot (30 min)](#section-1-live-demo--build-with-copilot-30-min)
- [Section 2: Code Defense — No Copilot (30 min)](#section-2-code-defense--no-copilot-30-min)
- [Section 3: AI Workflow Philosophy — No Copilot (20 min)](#section-3-ai-workflow-philosophy--no-copilot-20-min)
- [Score Sheet](#score-sheet)
- [Verdict](#verdict)
- [Debrief & Retrospective (30 min)](#debrief--retrospective-30-min)

---

## Pre-Assessment Setup

- Engineer has VS Code open with Copilot enabled and their capstone project loaded
- Mentor has reviewed the capstone project code beforehand
- Mentor has a feature request prepared (see Section 1)
- Timer visible (Mentor manages time)
- Mentor has the capstone project's workflow journal open for reference
- **Important:** Sections 2 and 3 are NO COPILOT. Engineer must disable Copilot or close the Chat panel. Mentor verifies.

Tell the Engineer: *"This is a three-part assessment. First, you'll build a feature with Copilot while I watch and ask questions. Then you'll explain your capstone code without AI help. Finally, we'll discuss your AI workflow. I'm looking for: can you drive Copilot effectively, do you understand your own code, and have you developed good AI habits. Let's start."*

---

## Section 1: Live Demo — Build with Copilot (30 min)

> **Purpose:** Can the Engineer use Copilot effectively in real time? Do they choose the right mode for the task? Are their prompts specific? Do they catch and fix AI mistakes?
>
> **Copilot: ON**

### The Task

Mentor gives the Engineer a feature request appropriate to their capstone project. The feature should:
- Require adding logic to an existing module (not just a new standalone file)
- Need at least one test
- Be achievable in 25 minutes by someone who knows the codebase

**Example feature requests by project type:**

**Option A (Event Booking):**
*"Add a waitlist feature. When an event is at capacity, users can join a waitlist. If a booking is cancelled, the first person on the waitlist is automatically booked. Add a test for the auto-booking logic."*

**Option B (Dashboard):**
*"Add an export feature. Users should be able to export the currently filtered data as a CSV file. The export should respect all active filters and sort order. Add a test for the CSV generation logic."*

**Option C (Link Shortener):**
*"Add link expiration. When creating a link, users can optionally set an expiration date. Expired links should return 410 Gone instead of redirecting. Add a test for the expiration check."*

### What to observe

**Mode selection:**
- Does the Engineer start with `/plan` or jump straight in?
- Do they use Agent mode for the full feature, or break it up?
- Do they switch modes appropriately (e.g., Agent for scaffolding, inline chat for quick fixes)?

**Prompt quality:**
- Are prompts specific about what to build, where, and how?
- Do prompts reference existing patterns? ("Follow the pattern in BookingService")
- Do prompts mention custom instructions or project conventions?

**Error handling:**
- When Copilot produces wrong code (it will), how does the Engineer respond?
- Do they re-prompt with better instructions, or try to hand-edit?
- Do they catch logical errors, not just syntax errors?

**Code review:**
- Does the Engineer read the generated diffs before accepting?
- Do they catch out-of-scope changes?
- Do they verify tests actually pass?

### Questions to ask DURING the demo

Ask these naturally while the Engineer works. Don't rapid-fire — weave them into the workflow.

| Question | What you're looking for |
|----------|------------------------|
| "Why did you choose Agent mode for this?" | Understanding of mode tradeoffs |
| "Why not use Edit mode here?" | Awareness that modes have different strengths |
| "That generated code looks wrong. What will you do?" | Re-prompting skill, not hand-editing |
| "What custom instruction is affecting this output?" | Awareness of instruction hierarchy |
| "The test is passing. But does it test the right thing?" | Critical review of AI-generated tests |
| "Stop for a second — explain what this function does." | Understanding of generated code |
| "That prompt was vague. How could you make it more specific?" | Prompt engineering self-awareness |

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer uses /plan first, picks appropriate modes, prompts are specific with project references, catches AI mistakes and re-prompts effectively, reads every diff, feature works with tests | Engineer builds the feature, mostly right mode choices, prompts are decent, catches some mistakes, feature mostly works | Engineer uses only one mode for everything, prompts are vague, accepts code without reading, can't fix AI mistakes through prompting, feature doesn't work |

---

## Section 2: Code Defense — No Copilot (30 min)

> **Purpose:** Does the Engineer understand the code they shipped? Can they explain architecture, logic, and edge cases without AI assistance?
>
> **Copilot: OFF** — Engineer disables Copilot extension or closes all Copilot panels. Mentor verifies.

### The Walk-Through

Mentor opens the capstone project and navigates through it. The Engineer explains everything.

**Phase 1: Architecture (10 min)**

1. *"Walk me through the project structure. What's in each directory/module?"*
   - Looking for: clear articulation of separation of concerns
   - Red flag: "I'm not sure why it's structured this way" or "Copilot set it up"

2. *"Draw me the data flow for [main feature]. From request to response."*
   - Looking for: understanding of layers and how they connect
   - Red flag: can't trace a request through the code

3. *"Why did you structure it this way? What alternative did you consider?"*
   - Looking for: conscious decision-making, not just "AI did it"
   - Red flag: no opinions about architecture

**Phase 2: Random File Walk (10 min)**

Mentor opens 3-4 random files and points to specific functions/sections.

4. *"Explain this function line by line."*
   - Looking for: understanding of every line, including error handling
   - Red flag: "I think this does..." or "I'm not sure why this is here"

5. *"What happens if [input] is null/empty/invalid here?"*
   - Looking for: knowledge of edge cases
   - Red flag: "I didn't think about that" (for an obvious case)

6. *"This error is caught here. What happens to it? Where does the user see it?"*
   - Looking for: end-to-end error tracing
   - Red flag: "It just gets logged" with no user-facing response

**Phase 3: Deep Dive (10 min)**

7. *"Show me your most complex piece of logic. Walk me through it."*
   - Looking for: the Engineer knows where complexity lives and can explain it
   - Red flag: can't identify what's complex or can't explain the logic

8. *"If I changed [dependency/database/API], what would break?"*
   - Looking for: understanding of dependencies and coupling
   - Red flag: "Everything?" or "Nothing?"

9. *"Show me a test. What is it actually testing? What's NOT tested that should be?"*
   - Looking for: understanding of test purpose and coverage gaps
   - Red flag: can't explain what the test verifies

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer explains every line confidently, has opinions about tradeoffs, knows edge cases, can trace data flow end-to-end, identifies coverage gaps | Engineer explains most code, occasional hesitation on details, generally understands architecture, some gaps in edge case awareness | Engineer can't explain their own code, says "Copilot wrote this" as an explanation, can't trace data flow, doesn't know what tests verify |

---

## Section 3: AI Workflow Philosophy — No Copilot (20 min)

> **Purpose:** Has the Engineer internalized AI-assisted development as a discipline? Can they teach it? Do they understand the limitations?
>
> **Copilot: OFF**

### Questions

Mentor picks 6-8 from this list. These are discussion questions, not trivia — the Engineer should think and articulate, not give one-word answers.

**Mode & Workflow:**

1. *"When would you NOT use Agent mode, even for a multi-file change?"*
   - Expected: "When the change is well-defined and I know exactly what to edit — Edit mode or inline chat is faster and gives me more control. Agent mode adds overhead for simple changes."
   - Red flag: "I'd always use Agent mode" or can't articulate tradeoffs

2. *"You're starting a new project tomorrow. Walk me through how you set up Copilot for it."*
   - Expected: create copilot-instructions.md, .instructions.md for key directories, AGENTS.md for agent mode rules, .prompt.md for recurring tasks
   - Red flag: "I'd just start coding" with no mention of instructions

3. *"What's the difference between copilot-instructions.md, .instructions.md, AGENTS.md, and .prompt.md? When do you use each?"*
   - Expected: clear hierarchy — project-wide vs scoped vs agent-only vs reusable templates
   - Red flag: can't distinguish between them or hasn't used them

**Prompt Engineering:**

4. *"Give me an example of a bad prompt and a good prompt for the same task."*
   - Expected: concrete example showing specificity, context, pattern references
   - Red flag: can't articulate what makes a prompt better

5. *"Copilot just generated a function with a subtle bug — it uses the wrong comparison operator. How do you fix it without hand-editing?"*
   - Expected: re-prompt with specific error description, reference the exact line, explain what's wrong and what it should be
   - Red flag: "I'd just fix it by hand"

**Critical Thinking:**

6. *"How do you catch security bugs in AI-generated code? Give me an example."*
   - Expected: review diffs for injection vulnerabilities, check input validation, look for hardcoded secrets, verify auth checks are in place
   - Red flag: "I trust Copilot to write secure code" or no concrete approach

7. *"Agent mode just made changes to 5 files but you only asked it to change 2. What do you do?"*
   - Expected: review all diffs, understand why extra files changed, undo unintended changes, re-prompt with tighter scope
   - Red flag: "Accept all changes" or "it probably knows what it's doing"

8. *"A junior engineer asks you: 'How should I use Copilot?' Give them your top 3 rules."*
   - Expected: concrete, opinionated advice based on experience (e.g., "always set up instructions first", "read every diff", "ask approach before solution")
   - Red flag: generic advice with no personal experience behind it

**Self-Awareness:**

9. *"What was your biggest AI workflow mistake this week? What did you learn?"*
   - Expected: specific example from their journal, genuine reflection
   - Red flag: "I didn't make any mistakes" or can't recall specifics

10. *"When is it faster to NOT use AI?"*
    - Expected: simple edits, config changes, small refactors where you know exactly what to change, reading documentation
    - Red flag: "Never, AI is always faster"

### Scoring

| Strong | Acceptable | Concern |
|--------|------------|---------|
| Engineer has a clear mental model of modes and when to use each, gives concrete examples from experience, has opinions about instruction setup, can teach others, admits limitations | Engineer understands the basics, can explain most concepts, gives some examples, has a general sense of when to use what | Engineer treats AI as magic, no clear workflow discipline, can't distinguish modes, no instruction setup process, can't identify limitations |

---

## Score Sheet

| Section | Time | Copilot | Strong | Acceptable | Concern |
|---------|------|---------|--------|------------|---------|
| 1. Live Demo | 30 min | ON | Effective mode switching, specific prompts, catches errors, re-prompts well, feature works | Builds feature, decent prompts, catches some errors | One mode for everything, vague prompts, can't fix AI mistakes |
| 2. Code Defense | 30 min | OFF | Explains every line, has opinions, knows edge cases, traces data flow | Explains most code, some hesitation, general understanding | Can't explain own code, no opinions, can't trace flow |
| 3. AI Philosophy | 20 min | OFF | Clear mental model, concrete examples, can teach others, admits limits | Understands basics, some examples, general awareness | Treats AI as magic, no workflow discipline |

---

## Verdict

**All 3 Strong:** Engineer is ready. They can drive AI effectively, understand their code, and have developed genuine workflow discipline. They'll be productive on a real team.

**Mix of Strong and Acceptable:** Engineer is on the right track. Mentor identifies specific weak areas and gives targeted advice. Schedule a 30-minute follow-up in a week to check progress.

**Any Concern:** Engineer needs more practice. Specifically:
- Section 1 Concern → Engineer needs to practice mode selection and prompt engineering. Assign: redo a feature from their capstone using all modes deliberately.
- Section 2 Concern → Engineer is accepting code without understanding it. Assign: take one module from capstone, disable Copilot, and rewrite it by hand. Then compare.
- Section 3 Concern → Engineer hasn't internalized the workflow. Assign: re-read the [Copilot Cheat Sheet](COPILOT-CHEATSHEET.md), set up instructions for a new mini-project, and journal the experience.

**Multiple Concerns:** Schedule an additional practice day before the Engineer starts real project work.

---

## Debrief & Retrospective (30 min)

> Can be 1:1 or group (if multiple engineers completed the training). The Mentor leads.

### Part 1: Mentor Feedback (10 min)

Mentor gives specific, honest feedback for each section. Examples:

**Good feedback:**
- *"Your mode switching in the live demo was excellent — you planned with Agent mode, then dropped to inline chat for the test fix. That shows real judgment."*
- *"In the code defense, you hesitated on the error handling flow. Spend 15 minutes tracing errors through your code tonight — you understand the concept but need to internalize the path."*
- *"Your prompt engineering was the strongest part. The way you referenced existing patterns in your prompts — 'follow the pattern in EventService' — that's exactly how senior engineers use AI tools."*

**Honest feedback:**
- *"You accepted the Agent mode diff without reading it. Two of the five files it changed weren't related to your task. In real work, that's how bugs sneak in."*
- *"When I asked you to explain the middleware, you said 'Copilot set it up.' That's not good enough. You shipped it — you own it. Before you write any real code, make sure you can explain every line."*
- *"Your custom instructions file was basically empty. That means Copilot was working without guardrails. The quality difference between 'no instructions' and 'good instructions' is huge."*

### Part 2: Engineer Retrospective (10 min)

Engineer answers these questions (verbally or written):

1. **What's the most important thing you learned about working with AI this week?**
2. **What will you do differently in your first week using Copilot on a real project?**
3. **What's still confusing or uncertain?**
4. **Rate yourself 1-5 on each:**
   - Prompt engineering (writing effective prompts)
   - Mode selection (choosing the right tool for the task)
   - Code review (catching AI mistakes)
   - Custom instructions (setting up Copilot for a project)
   - Understanding generated code (explaining what AI produced)

### Part 3: Next Steps (10 min)

Based on the assessment results, Mentor recommends:

| If... | Then... |
|-------|---------|
| Strong across the board | Start using Copilot on real project work immediately. Schedule a 30-min check-in after 1 week. |
| Weak on prompt engineering | Practice with the [prompt engineering section of the cheat sheet](COPILOT-CHEATSHEET.md#6-prompt-engineering). Build one feature per day for 3 days using the 4-level specificity spectrum. |
| Weak on code understanding | Spend 30 min/day reading AI-generated code and explaining it aloud. Disable Copilot for 1 hour per day for the first week. |
| Weak on custom instructions | Re-do instruction setup for an existing project. Compare Copilot output before and after instructions. |
| Weak on mode selection | Build one feature using each mode (inline, edit, agent) in the first week. Journal the experience. |
