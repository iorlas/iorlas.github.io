---
title: "Training Plan"
program: "VS Code Copilot"
programSlug: "copilot-vscode"
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
- [Copilot Feature Progression](#copilot-feature-progression)
- [Phase Goals & Verification Questions](#phase-goals--verification-questions)
  - [Day 0 — Pre-work](#day-0-pre-work)
  - [Day 1 — Foundations](#day-1-foundations)
  - [Day 2 — Planning & Agent Mode](#day-2-planning--agent-mode)
  - [Day 3 — Capstone Project](#day-3-capstone-project)
  - [Day 4 — Assessment](#day-4-assessment)
- [Day-by-Day Breakdown](#day-by-day-breakdown)
  - [Day 0 — Pre-work](#day-0--pre-work-self-paced-1-2-hrs)
  - [Day 1 — Foundations: Completions, Chat, Edit Mode, Custom Instructions](#day-1--foundations-completions-chat-edit-mode-custom-instructions)
  - [Day 2 — Planning & Agent Mode: Multi-Step Autonomous Development](#day-2--planning--agent-mode-multi-step-autonomous-development)
  - [Day 3 — Capstone Project](#day-3--capstone-project-full-day-ai-only)
  - [Day 4 — Assessment](#day-4--assessment-half-day-morning-only)
- [Key Resources Summary](#key-resources-summary)
- [Mentor Prep: What to Create](#mentor-prep-what-to-create)

---

## Goal

Engineer can use VS Code Copilot effectively as an AI-assisted development tool — choosing the right mode for the task, writing specific prompts, setting up custom instructions, using Agent mode for autonomous development, and critically reviewing AI-generated code. The engineer demonstrates they **understand** every line of code Copilot produces and can articulate when and how to use each AI feature.

**This training is about AI workflow, not programming.** Engineers already know their language and stack. The goal is to make them productive with AI tools.

## Target Audience

| Who | Prerequisites |
|-----|---------------|
| Mid-level to senior engineers | Proficient in at least one programming language and framework. Can build features independently. |
| Any stack | Language-agnostic. Engineer uses their preferred language/framework throughout. |
| New to Copilot | Little or no experience with GitHub Copilot. May have used ChatGPT or other AI tools casually. |

## Schedule Shape

```
[Day 0]  [Day 1]       [Day 2]         [Day 3]       [Day 4]
 prep     foundations    planning &      capstone      assessment
 1-2h     full day      agent mode      project       half day
                        full day        full day       (morning)
```

Total: 3.5 working days + 1-2 hours pre-work.

## Mentor Time Budget

| Phase | Mentor Time |
|-------|-------------|
| Day 0 (Pre-work) | ~15 min async (Slack/chat, verify setup) |
| Day 1 (Foundations) | ~1.5 hrs |
| Day 2 (Planning & Agent Mode) | ~1.5 hrs |
| Day 3 (Capstone) | ~30 min async (blocking issues only) |
| Day 4 (Assessment) | ~2.5 hrs (assessment + retrospective) |
| **Total** | **~6-8 hours** |

## Daily Mentor Rhythm

| Time | What Mentor Does |
|------|-----------------|
| Morning (15-20 min) | Brief intro: "today you learn X, here are the materials, here's what I expect by end of day" |
| Midday (10-15 min) | Quick check-in: "show me where you are, what's confusing" |
| End of day (30-45 min) | Review work + ask verification questions: "walk me through this, why did you choose X" |
| Async | Answer Slack/chat questions as they come up |

---

## Copilot Feature Progression

| Day | Inline/NES | Chat (Ask) | Inline Chat | Edit Mode | Agent Mode |
|-----|-----------|------------|-------------|-----------|------------|
| **Day 0** | Verify works | Verify works | No | No | No |
| **Day 1** | Yes | Yes | Yes | Yes (learn) | No |
| **Day 2** | Yes | Yes | Yes | Yes | Yes (learn) |
| **Day 3** | Yes | Questions | Small edits | Small edits | **Primary** |
| **Day 4** | **No AI** | **No AI** | **No AI** | **No AI** | **No AI** |

**The AI-only rule starts Day 1:** All code comes through Copilot. Engineers already know their language — there's no "hand-write first" phase. From the first exercise, every line of code is AI-generated. Small hand-edits (typo, variable rename) are allowed. New functions, new files, new logic — all through Copilot.

**Day 4 is NO AI:** The assessment proves the Engineer learned to think, not just to prompt.

---

## Phase Goals & Verification Questions

### Day 0 — Pre-work

**AI Goal:** Copilot is installed, subscription is active, inline completions and Chat panel both work. Engineer has bookmarked the cheat sheet.

#### Verification Questions
- Show me an inline completion — does it appear when you type?
- Open the Chat panel. Ask it a question about your code. Does it respond?
- Can you switch between Ask, Edit, and Agent modes? Show me the dropdown.
- Where is the model picker? What models are available?

---

### Day 1 — Foundations

**AI Goal:** Engineer can use inline completions, NES, Chat (Ask mode), inline chat, and Edit mode. Understands the Chat participants and variables. Has set up custom instructions. Can write specific prompts and distinguish bad prompts from good ones.

#### Verification Questions
- Show me your inline completion workflow — write a comment and let Copilot generate code from it.
- What's the difference between Ask mode and Edit mode? When do you use each?
- Use `@workspace` to find something in your project. What did it do?
- Use `#file` to reference a specific file in Chat. Show me.
- Open your `copilot-instructions.md`. What does it say? Why does it matter?
- Show me a bad prompt and a good prompt for the same task. What's the difference?
- Where are your `.instructions.md` files? What do they do that `copilot-instructions.md` doesn't?

---

### Day 2 — Planning & Agent Mode

**AI Goal:** Engineer can use Agent mode for autonomous multi-step development. Understands planning mode. Can configure MCP servers. Has practiced prompt engineering across models. Can scope tasks appropriately for Agent mode and recover when it goes off track.

#### Verification Questions
- Show me how you use `/plan` before building a feature. Walk me through a plan.
- What's the difference between Edit mode and Agent mode? When is Agent mode overkill?
- Show me your `AGENTS.md`. What rules did you add? Why?
- What happened when you gave Agent mode a too-broad prompt? How did you fix it?
- Show me your MCP configuration. What server did you add? What does it do?
- Show me your prompt log. What patterns did you notice about good vs bad prompts?
- Compare two models you tried. What was different about their output?
- Show me your `.prompt.md` file. When would you use it?

---

### Day 3 — Capstone Project

**AI Goal:** Engineer can independently build a complete project using Copilot Agent mode as the primary tool, with custom instructions shaping the output. Code is on GitHub with meaningful commits, tests, and a workflow journal.

#### Verification Questions
_(These are asked during the Day 4 assessment. See [ASSESSMENT.md](ASSESSMENT.md).)_

---

### Day 4 — Assessment

**AI Goal:** Engineer proves they can drive Copilot effectively under observation, understand every line of their generated code, and articulate AI workflow principles.

#### Verification
_The assessment IS the verification. See [ASSESSMENT.md](ASSESSMENT.md)._

---

## Day-by-Day Breakdown

### Day 0 — Pre-work (self-paced, 1-2 hrs)

> **Goal:** Engineer arrives on Day 1 with Copilot working and the cheat sheet bookmarked.

#### What to do

1. **Install GitHub Copilot extension** in VS Code
   - Install "GitHub Copilot" extension (includes inline completions)
   - Install "GitHub Copilot Chat" extension (includes Chat panel with Ask/Edit/Agent modes)
   - Sign in with GitHub account that has an active Copilot subscription

2. **Verify everything works**
   - Open a code file → inline completions should appear as you type
   - Open Chat panel (`Cmd+Shift+I` / `Ctrl+Shift+I`) → Ask a question → it responds
   - Check mode dropdown: Ask, Edit, and Agent modes are all available
   - Check model picker: can see available models (GPT-4o, Claude Sonnet, Gemini, etc.)
   - Check NES is enabled: Settings → search "next edit suggestions" → ensure it's on

3. **Read the overview**
   - [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview) — official overview (~20 min)
   - Skim, don't study — Day 1 will teach everything hands-on

4. **Bookmark the cheat sheet**
   - Open [COPILOT-CHEATSHEET.md](COPILOT-CHEATSHEET.md) and bookmark it
   - You'll reference this constantly during Days 1-3

#### Materials
- [GitHub Copilot in VS Code — Overview](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Copilot Setup Guide](https://code.visualstudio.com/docs/copilot/setup)
- [COPILOT-CHEATSHEET.md](COPILOT-CHEATSHEET.md) — your daily reference

#### Verification
_Mentor checks async via Slack: "Send me a screenshot of Copilot responding to a question in Chat."_

---

### Day 1 — Foundations: Completions, Chat, Edit Mode, Custom Instructions

> **Goal:** Engineer can use every Copilot feature except Agent mode. Has set up custom instructions. Knows the difference between a bad prompt and a good prompt.

**AI-only rule is active from today.** All code comes through Copilot. See [feature progression table](#copilot-feature-progression).

---

#### Morning: Inline Completions + Next Edit Suggestions (NES)

**What to learn:**
- Inline completions: Tab/Esc/Alt+] cycle, partial accept (Cmd+→), comment-driven development
- How to write a comment that guides Copilot to generate the code you want
- Next Edit Suggestions: how NES suggests follow-up edits after a change
- When to accept, when to dismiss, when to iterate

**Materials:**
- [Code completions in VS Code](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions) (~15 min)
- [Next Edit Suggestions](https://code.visualstudio.com/docs/copilot/next-edit-suggestions) (~10 min)

**Exercise — Completion Speed Drill (45 min):**
Build a data validation module using ONLY inline completions. No Chat, no inline chat.
1. Write a comment: `// Validate email format using regex`
2. Let Copilot generate the function. Accept or iterate.
3. Write another comment: `// Validate password: min 8 chars, 1 uppercase, 1 number`
4. Continue for 5-6 validation functions.
5. Goal: get comfortable with Tab/Esc/Alt+] and partial accept (Cmd+→).

**Exercise — NES Exploration (30 min):**
1. Rename a variable in one place.
2. Watch NES suggest the same rename in related locations. Accept with Tab.
3. Change a function signature (add a parameter).
4. Watch NES suggest updates to call sites. Follow the chain.
5. Note: NES works best for cascading edits — rename, type changes, pattern updates.

---

#### Afternoon: Chat Participants, Variables, and Slash Commands

**What to learn:**
- Chat panel: Ask mode (read-only exploration)
- Participants: `@workspace`, `@terminal`, `@vscode`, `@github`
- Variables: `#file`, `#selection`, `#codebase`, `#editor`, `#terminalLastCommand`, `#problems`, `#changes`
- Slash commands: `/explain`, `/fix`, `/tests`, `/doc`

**Materials:**
- [Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat) (~15 min)
- [Chat Participants and Variables reference](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) (~10 min)
- [COPILOT-CHEATSHEET.md — Participants & Variables section](COPILOT-CHEATSHEET.md#3-chat-participants--variables) (reference)

**Exercise — Ask Mode Conversation Practice (45 min):**
Using a project you're familiar with (or a small open-source project), practice these conversations in Ask mode:
1. `@workspace where is authentication handled?` — explore the project
2. `#file:src/main.ts explain this file` — understand a specific file
3. Select a function → `/explain` — explain the selection
4. Run a failing test → `@terminal explain this error` → `#terminalLastCommand`
5. Check Problems panel → `#problems list all current issues`
6. Use `#codebase` to find all API endpoints
7. Goal: practice using ALL participants and variables, not just typing questions.

---

#### Afternoon: Edit Mode + Inline Chat

**What to learn:**
- Edit mode: coordinated multi-file edits with diff review
- Inline chat (`Cmd+I`): targeted in-place edits without leaving the editor
- When to use Edit mode vs inline chat vs Ask mode
- How to review and accept/reject diffs

**Materials:**
- [Copilot Edit mode](https://code.visualstudio.com/docs/copilot/copilot-edits) (~15 min)
- [Inline Chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat) (~10 min)

**Exercise — Multi-File Edit (30 min):**
1. Switch to Edit mode in the Chat panel.
2. Ask: "Add input validation to all route handlers in this project. Each handler should validate required fields and return 400 with an error message for missing fields."
3. Review every diff Copilot proposes. For each file:
   - Does the validation logic make sense?
   - Is it consistent across handlers?
   - Did it change anything outside of validation?
4. Accept good changes. Reject bad ones. Re-prompt for the rejected ones with more specific instructions.

**Exercise — Inline Chat Flow (30 min):**
Pick a function in your codebase and use inline chat (`Cmd+I`) for these tasks:
1. Select the function → `Cmd+I` → "Refactor this to use early returns instead of nested if-else"
2. Select the same function → `Cmd+I` → "Add JSDoc/docstring with parameter descriptions"
3. Select the function → `Cmd+I` → "Write a unit test for this function"
4. Review each change before accepting.
5. Goal: get comfortable with the inline chat workflow (select → Cmd+I → describe → review → accept/reject).

---

#### End of Day: Custom Instructions Setup

**What to learn:**
- `.github/copilot-instructions.md` — project-wide conventions
- `.instructions.md` with `applyTo` — scoped rules for specific files/folders
- The instruction hierarchy and how it affects Copilot output
- Bad prompt vs good prompt comparison

**Materials:**
- [Custom Instructions for Copilot](https://code.visualstudio.com/docs/copilot/copilot-customization) (~15 min)
- [COPILOT-CHEATSHEET.md — Custom Instructions section](COPILOT-CHEATSHEET.md#4-custom-instructions-hierarchy) (reference)

**Exercise — Custom Instructions Setup (30 min):**
1. In your project, run Copilot's `@workspace /init` slash command. It generates a starter `copilot-instructions.md`.
2. Review what it generated. Edit it to accurately reflect your project:
   - What's your architecture? What patterns do you follow?
   - What's your tech stack? What libraries do you use?
   - What are your conventions? (naming, error handling, testing style)
3. Create one `.instructions.md` file with an `applyTo` glob. Examples:
   - For test files: `applyTo: "**/*.test.*"` → "Use vitest. Mock external dependencies. Use factory functions for test data."
   - For API routes: `applyTo: "src/api/**"` → "Follow REST conventions. Return proper status codes. Validate input in the service layer."
4. Ask Copilot to generate something in the scoped directory. Does the output match your instructions?

**Exercise — Bad Prompt vs Good Prompt (20 min):**
Try these 4 prompts for the same task (adding a new feature to your project). Do them in order:

| Level | Prompt | What to observe |
|-------|--------|----------------|
| 1. Vague | "Add a delete endpoint" | Copilot makes many assumptions. Output may not match your patterns. |
| 2. Basic | "Add a DELETE /users/{id} endpoint" | Better, but still missing details about error handling, response format. |
| 3. Specific | "Add a DELETE /users/{id} endpoint. Return 204 on success, 404 if not found. Use the same error handling pattern as the POST /users endpoint." | Much better. References existing patterns. |
| 4. Expert | "Add a DELETE /users/{id} endpoint following the pattern in user.handler.ts. Service validates user exists (404 if not), then calls repo.delete(). Return 204 No Content on success. Add a test case to user.handler.test.ts following the existing table-driven pattern." | Best. Specifies files, patterns, behavior, and tests. |

Compare all 4 outputs. Which is most useful? Show the comparison to your Mentor.

---

#### Mentor Time (~1.5 hrs)

- 15 min: morning — Mentor briefs: "today is foundations, here are the exercises, here's what I expect"
- 10 min: midday check — "show me your completions, show me a Chat conversation"
- 30 min: end of day — Mentor reviews custom instructions + 4-prompt comparison. Asks verification questions.
- Async: answer questions as they come up

#### Self-Assessment Checkpoint

Before moving to Day 2, the Engineer should be able to answer "yes" to all:
- [ ] I can get inline completions and navigate them (Tab, Esc, Alt+], Cmd+→)
- [ ] I can use NES to follow a chain of related edits
- [ ] I can use Chat with @workspace, @terminal, #file, #selection, #codebase
- [ ] I can use inline chat (Cmd+I) for targeted edits
- [ ] I can use Edit mode for multi-file changes and review diffs
- [ ] I have a `copilot-instructions.md` that reflects my project
- [ ] I have at least one `.instructions.md` with applyTo
- [ ] I can explain the difference between a bad prompt and a good prompt

---

### Day 2 — Planning & Agent Mode: Multi-Step Autonomous Development

> **Goal:** Engineer can use Agent mode and planning mode for autonomous, multi-step development. Understands model selection, prompt engineering, and MCP configuration.

**AI-only rule continues.** All code through Copilot. Agent mode is introduced today but NOT yet the primary mode — practice all modes.

---

#### Morning: Model Selection + Prompt Engineering

**What to learn:**
- Model picker: how to switch between GPT-4o, Claude Sonnet, Gemini, and other available models
- Different models have different strengths (speed vs quality, code vs explanation)
- Prompt engineering: the 4-level specificity spectrum
- `.prompt.md` files: reusable prompt templates

**Materials:**
- [AI Model Selection in Copilot](https://code.visualstudio.com/docs/copilot/copilot-chat#_change-the-ai-model) (~10 min)
- [Prompt crafting for Copilot](https://code.visualstudio.com/docs/copilot/prompt-crafting) (~15 min)
- [COPILOT-CHEATSHEET.md — Prompt Engineering section](COPILOT-CHEATSHEET.md#6-prompt-engineering) (reference)

**Exercise — Model Comparison (30 min):**
1. Pick a non-trivial task: "Write a rate limiter middleware using the sliding window algorithm."
2. Ask the same prompt in Chat with 3 different models (e.g., GPT-4o, Claude Sonnet, Gemini).
3. Compare:
   - Which explained the approach best?
   - Which produced the cleanest code?
   - Which was fastest?
   - Did any get the algorithm wrong?
4. Write 2-3 sentences about what you learned. There's no "best" model — they have tradeoffs.

**Exercise — Prompt Engineering Ladder (30 min):**
1. Pick a feature to add to your project.
2. Write 4 prompts at increasing specificity (see the [4-level spectrum from Day 1](#exercise--bad-prompt-vs-good-prompt-20-min)).
3. For each, note:
   - How many follow-up prompts did you need?
   - How much of the output could you use directly?
   - How much time did you spend reviewing vs re-prompting?
4. Conclusion: more specific prompts = less total time, even though the prompt itself takes longer to write.

**Exercise — Create a .prompt.md File (20 min):**
1. Identify a recurring task in your project (e.g., "add a new CRUD endpoint", "create a new component", "add tests for a service").
2. Create a `.prompt.md` file that templates this task.
3. Example:
   ```markdown
   ---
   mode: agent
   description: Generate a new CRUD endpoint
   ---
   Create a new CRUD endpoint for the {{resource}} resource.

   Follow the patterns in the existing {{example_file}}.
   Include: model, repository interface, service with validation, handler with proper status codes.
   Add unit tests for the service layer following the pattern in {{test_file}}.
   ```
4. Use it: reference the prompt file in Chat with `#prompt:your-file-name`.

---

#### Midday: Planning Mode

**What to learn:**
- The `/plan` command in Agent mode
- How to review, critique, and adjust a plan before execution
- When planning adds value vs when it's overhead

**Materials:**
- [COPILOT-CHEATSHEET.md — Planning Mode section](COPILOT-CHEATSHEET.md#5-planning-mode) (reference)

**Exercise — Plan and Build (45 min):**
1. Switch to Agent mode.
2. Run: `/plan I need to add [a feature] to my project. Design the data model, the implementation approach, and the file changes needed.`
3. Review the plan:
   - Does it match your architecture?
   - Is the order logical?
   - Is anything missing? (tests, error handling, validation)
   - Is it trying to do too much?
4. Give feedback: "Move validation to the service layer. Add a step for tests. Remove the database migration — I'll handle that separately."
5. Tell it to proceed. Watch it execute.
6. Review the result. Did it follow the plan?

**Exercise — With vs Without Planning (30 min):**
1. Build one small feature WITHOUT planning — just describe it and let Agent mode go.
2. Build another similar feature WITH `/plan` first.
3. Compare:
   - Which produced better-structured code?
   - Which required fewer corrections?
   - Which was faster overall (including re-work time)?
4. Write 2-3 sentences about when planning is worth the overhead.

---

#### Afternoon: Agent Mode

**What to learn:**
- Agent mode: what it can do (create files, run commands, iterate on errors, self-correct)
- How to scope tasks for Agent mode
- How to review Agent mode diffs
- The autonomy trap: what happens when you give too-broad prompts
- Using Git as a safety net

**Materials:**
- [Copilot Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) (~15 min)
- [COPILOT-CHEATSHEET.md — Agent Mode section](COPILOT-CHEATSHEET.md#7-agent-mode-best-practices) (reference)

**Exercise — Build from Scratch (60 min):**
1. Start a new small project (or a new module in your existing project).
2. In Agent mode, describe what you want to build: "Create a [specific feature] with [specific requirements]. Use [your framework]. Include tests."
3. Watch the autonomous loop: planning → file creation → code generation → error fixing → test running.
4. Observe:
   - Did it create the right files?
   - Did it follow your custom instructions?
   - Did it run tests? Did they pass?
   - Did it self-correct when something failed?
5. Review the final diff carefully before accepting.

**Exercise — Add a Feature (45 min):**
1. Using the project from the previous exercise (or your own project).
2. Ask Agent mode to add a feature that touches existing code: "Add [feature] to the existing [module]. It should integrate with the existing [component]."
3. Observe:
   - Does it understand the existing code?
   - Does it modify the right files?
   - Does it break anything existing?
   - Does it add tests?

**Exercise — The Autonomy Trap (30 min):**
1. Give Agent mode a deliberately too-complex prompt: "Build a complete user management system with authentication, authorization, password reset, email verification, and admin panel."
2. Watch what happens:
   - Does it create a coherent plan or scatter?
   - Does it create files you didn't expect?
   - Does it modify things outside the scope?
   - Does it run in circles (fix one error, create another)?
3. Stop it. Review the mess. Undo with Git.
4. Re-prompt with a tightly scoped version: "Add user registration. POST /users that validates email and password, stores in the database, and returns the created user. Include a test."
5. Compare the results. Write 2-3 sentences about scoping.

---

#### Afternoon: MCP Servers + Advanced Features

**What to learn:**
- MCP (Model Context Protocol): extending Copilot with external tools
- `.vscode/mcp.json` configuration
- Source control integration: Copilot commit messages, PR descriptions
- `AGENTS.md`: rules specifically for Agent mode
- Vision: using images/screenshots in Chat

**Materials:**
- [MCP Servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) (~15 min)
- [COPILOT-CHEATSHEET.md — MCP section](COPILOT-CHEATSHEET.md#8-mcp-configuration) (reference)

**Exercise — Configure an MCP Server (20 min):**
1. Create `.vscode/mcp.json` in your project.
2. Add at least one MCP server. Options:
   - Filesystem server (access files outside workspace)
   - Fetch server (fetch URLs and documentation)
   - Database server (if you have a database)
3. Verify: in Agent mode, ask Copilot to use the MCP tool. Does it work?

**Exercise — Source Control Integration (15 min):**
1. Make a meaningful code change.
2. In the Source Control panel, click the sparkle icon to generate a commit message.
3. Review the message. Is it accurate? Edit if needed, then commit.
4. If you have a PR open, try generating a PR description with Copilot.

**Exercise — AGENTS.md Setup (15 min):**
1. Create `AGENTS.md` in your project root.
2. Add rules that guide Agent mode behavior:
   ```markdown
   # Agent Mode Rules

   ## After Code Changes
   - Always run tests after modifying code
   - Run linter before committing

   ## Git
   - Use conventional commit format: type(scope): description
   - Commit after each logical change, not in bulk

   ## Architecture
   - Business logic goes in the service layer, never in handlers/controllers
   - All external API calls go through a dedicated client module
   ```
3. Test: ask Agent mode to add a feature. Does it follow your AGENTS.md rules?

---

#### Throughout the Day: Prompt Debugging Log

Keep a running log today. This is reviewed by the Mentor and becomes practice for the Day 3 journal.

| What I prompted | What happened | What was wrong | How I fixed it |
|----------------|---------------|----------------|----------------|
| (your prompt) | (Copilot's output) | (the problem) | (your fix/re-prompt) |

Aim for 5-8 entries by end of day. Focus on moments where Copilot surprised you (good or bad).

---

#### Optional: Cloud Coding Agent Demo

If your organization has GitHub Copilot Business/Enterprise:
1. Open a GitHub issue in a test repository.
2. Assign it to Copilot (or use the "Copilot" label, depending on your setup).
3. Watch Copilot create a PR autonomously from the issue description.
4. Review the PR. This is "fire and forget" AI — useful for simple tasks, dangerous for complex ones.

**Note:** This is a demo only. The training focuses on VS Code Copilot, not the cloud agent.

---

#### Mentor Time (~1.5 hrs)

- 15 min: morning — Mentor briefs: "today is Agent mode day, here are the exercises, be ready for the autonomy trap"
- 10 min: midday check — "show me your planning mode output, show me your prompt file"
- 45 min: end of day — Mentor reviews prompt log + AGENTS.md + MCP setup. Asks verification questions.
- Async: answer questions as they come up

#### Self-Assessment Checkpoint

Before moving to Day 3, the Engineer should be able to answer "yes" to all:
- [ ] I can switch between models and articulate their tradeoffs
- [ ] I can write prompts at the "expert" level (specific, contextual, pattern-referencing)
- [ ] I have a `.prompt.md` file that I've actually used
- [ ] I can use `/plan` to plan before building, and I know when planning is worth it
- [ ] I can use Agent mode to build features autonomously
- [ ] I know what happens when Agent mode scope is too broad, and how to fix it
- [ ] I have a working MCP server configured
- [ ] I have an `AGENTS.md` with meaningful rules
- [ ] I can generate commit messages with Copilot
- [ ] I have a prompt debugging log with 5+ entries

---

### Day 3 — Capstone Project (full day, AI-only)

> **Goal:** Engineer independently builds a complete project using Copilot Agent mode as the primary tool. Proves they can drive AI for a real deliverable.

#### The Assignment

See **[CAPSTONE-PROJECT.md](CAPSTONE-PROJECT.md)** for full details.

**Summary:**
- Engineer picks one of 3 project options (backend API / frontend dashboard / full-stack app)
- All code comes through Copilot — Agent mode is the primary tool
- Required deliverables:
  - Working project pushed to GitHub
  - Custom instructions (`.github/copilot-instructions.md` + `.instructions.md` + `AGENTS.md`)
  - At least one `.prompt.md` file
  - Unit tests
  - Git commits with Copilot-generated messages
  - README written by the Engineer (not generated)
  - Workflow journal (5-10 entries)

#### Engineer's Day

| Time | Activity |
|------|----------|
| First 30 min | Set up custom instructions, AGENTS.md, .instructions.md, .prompt.md |
| Morning | Feature 1: core resource with CRUD + tests |
| Midday | Feature 2: second resource with relationships + tests |
| Afternoon | Feature 3: external API / analytics / advanced feature |
| Last hour | Polish, README, finish journal |

#### Rules

1. **Agent mode is primary.** Use it for all feature building. Other modes (inline, edit, chat) are support tools.
2. **All code through Copilot.** No hand-writing implementation code.
3. **README is written by the Engineer.** This is the one exception — it forces you to articulate decisions in your own words.
4. **Keep the workflow journal.** 5-10 entries covering prompt failures, mode choices, instruction impact, agent autonomy, and recovery moments. See [CAPSTONE-PROJECT.md](CAPSTONE-PROJECT.md#workflow-journal) for format.
5. **Commit after each feature.** Use Copilot-generated commit messages.
6. **If you're stuck for more than 20 minutes, ask the Mentor.** But frame it as: "I'm trying to do X and getting Y. What am I misunderstanding?" — not "fix it for me."

#### Mentor Time

- ~0 hrs structured
- Available async on Slack/chat for blocking issues only (~30 min total max)
- Mentor does NOT review code today — that happens during the Day 4 assessment

---

### Day 4 — Assessment (half day, morning only)

> **Goal:** Engineer proves they can drive Copilot effectively, understand their code, and articulate AI workflow principles.

See **[ASSESSMENT.md](ASSESSMENT.md)** for full details.

#### Schedule

| Time | Section | Copilot | What happens |
|------|---------|---------|-------------|
| 0:00 - 0:30 | **Section 1: Live Demo** | ON | Mentor gives a feature request. Engineer builds it live with Copilot while Mentor observes mode choices, prompt quality, and error handling. |
| 0:30 - 1:00 | **Section 2: Code Defense** | OFF | Mentor walks through capstone code. Engineer explains every line, defends architecture, traces data flow. |
| 1:00 - 1:20 | **Section 3: AI Philosophy** | OFF | Discussion: when NOT to use Agent mode, instruction setup, catching AI bugs, teaching others. |
| 1:20 - 1:50 | **Debrief & Retrospective** | — | Mentor gives feedback. Engineer reflects. Next steps discussed. |

#### Scoring Summary

| Section | Strong | Acceptable | Concern |
|---------|--------|------------|---------|
| Live Demo | Effective modes, specific prompts, catches errors | Builds feature, decent prompts | Vague prompts, can't fix AI mistakes |
| Code Defense | Explains every line, has opinions | Explains most, some gaps | Can't explain own code |
| AI Philosophy | Clear mental model, can teach others | Understands basics | Treats AI as magic |

**Verdict:**
- 3 Strong = ready for real project work
- Mixed = revisit weak areas with specific practice
- Any Concern = needs more practice before using AI on real projects

---

## Key Resources Summary

### Core Curriculum

| Resource | Used on | Type |
|----------|---------|------|
| [GitHub Copilot in VS Code — Overview](https://code.visualstudio.com/docs/copilot/overview) | Day 0 | Official docs |
| [Code completions](https://code.visualstudio.com/docs/copilot/ai-powered-suggestions) | Day 1 | Official docs |
| [Next Edit Suggestions](https://code.visualstudio.com/docs/copilot/next-edit-suggestions) | Day 1 | Official docs |
| [Chat in VS Code](https://code.visualstudio.com/docs/copilot/copilot-chat) | Day 1 | Official docs |
| [Edit mode](https://code.visualstudio.com/docs/copilot/copilot-edits) | Day 1 | Official docs |
| [Inline Chat](https://code.visualstudio.com/docs/copilot/copilot-chat#_inline-chat) | Day 1 | Official docs |
| [Custom instructions](https://code.visualstudio.com/docs/copilot/copilot-customization) | Day 1 | Official docs |
| [Prompt crafting](https://code.visualstudio.com/docs/copilot/prompt-crafting) | Day 2 | Official docs |
| [Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) | Day 2 | Official docs |
| [MCP Servers](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) | Day 2 | Official docs |

### Training Materials (This Repo)

| Resource | Purpose |
|----------|---------|
| [COPILOT-CHEATSHEET.md](COPILOT-CHEATSHEET.md) | Daily reference for modes, shortcuts, prompting, anti-patterns |
| [CAPSTONE-PROJECT.md](CAPSTONE-PROJECT.md) | Day 3 project spec with 3 options and shared requirements |
| [ASSESSMENT.md](ASSESSMENT.md) | Day 4 assessment format, scoring rubrics, debrief guide |

---

## Mentor Prep: What to Create

1. **Feature request for assessment (Day 4):** Prepare a feature request appropriate to each capstone project option. It should require adding logic to existing code, not just a new standalone module. See [ASSESSMENT.md — Section 1](ASSESSMENT.md#section-1-live-demo--build-with-copilot-30-min) for examples.

2. **Copilot subscription access:** Ensure all engineers have active GitHub Copilot subscriptions before Day 0. Chat with Agent mode requires Copilot Individual, Business, or Enterprise.

3. **Test project (optional):** If engineers don't have a project to use on Day 1, prepare a small starter project in a common language (e.g., a simple Express/FastAPI/Spring Boot app with 2-3 endpoints) so they have code to practice with.

4. **Slack/chat channel:** Set up an async communication channel for questions. Most mentor time is async — quick answers to unblocking questions.

5. **Assessment scoring sheet:** Print or prepare a digital copy of the [score sheet from ASSESSMENT.md](ASSESSMENT.md#score-sheet) for each engineer.
