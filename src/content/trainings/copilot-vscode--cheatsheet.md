---
title: "Copilot Cheatsheet"
program: "VS Code Copilot"
programSlug: "copilot-vscode"
docSlug: "cheatsheet"
type: "program"
order: 2
---


> **This cheat sheet is for the Engineer** — keep it next to your screen. Bookmark it. Reference it constantly until it's second nature.
>
> **Roles:** "Engineer" = you, the person being trained. "Mentor" = the trainer/teacher guiding your learning.

## Table of Contents

- [The Golden Rule](#the-golden-rule)
- [1. Mode Selection Guide](#1-mode-selection-guide)
- [2. Keyboard Shortcuts](#2-keyboard-shortcuts)
- [3. Chat Participants & Variables](#3-chat-participants--variables)
- [4. Custom Instructions Hierarchy](#4-custom-instructions-hierarchy)
- [5. Planning Mode](#5-planning-mode)
- [6. Prompt Engineering](#6-prompt-engineering)
- [7. Agent Mode Best Practices](#7-agent-mode-best-practices)
- [8. MCP Configuration](#8-mcp-configuration)
- [9. Anti-Patterns — Don't Do These](#9-anti-patterns--dont-do-these)
- [Quick Reference](#quick-reference)

---

## The Golden Rule

**Ask Copilot how to approach the problem before asking it to solve it.** Maybe you're solving the wrong one.

```
BAD:  "Build a user authentication system"
GOOD: "I need to add user authentication to my web app. What are the different
       approaches — session-based vs JWT vs OAuth? What are the tradeoffs
       for my stack? Which would you recommend and why?"
```

---

## 1. Mode Selection Guide

| I need to... | Use this mode | Why |
|-------------|---------------|-----|
| Get a quick code suggestion as I type | **Inline completions** | Zero friction, Tab to accept |
| Apply a follow-up edit Copilot suggests | **Next Edit Suggestions (NES)** | Tab through chained edits after a change |
| Ask a question about my code or project | **Ask mode** (Chat panel) | Read-only, explores and explains without changing files |
| Edit a specific block of code in-place | **Inline Chat** (Cmd+I) | Quick targeted edits without leaving the editor |
| Make coordinated edits across files | **Edit mode** (Chat panel) | Proposes diffs across multiple files, you review each one |
| Build a feature end-to-end autonomously | **Agent mode** (Chat panel) | Plans, creates files, runs terminal commands, iterates on errors |

**Mode progression during training:**
- Day 1: Inline + NES + Ask + Inline Chat + Edit mode
- Day 2: All above + Agent mode
- Day 3 (Capstone): Agent mode as primary, others as support

---

## 2. Keyboard Shortcuts

### Inline Completions

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Alt+]` |
| Previous suggestion | `Alt+[` | `Alt+[` |
| Accept next word | `Cmd+→` | `Ctrl+→` |
| Trigger suggestion manually | `Alt+\` | `Alt+\` |

### Next Edit Suggestions (NES)

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Accept NES | `Tab` | `Tab` |
| Dismiss NES | `Esc` | `Esc` |
| Jump to next NES location | `Tab` (when arrow shown) | `Tab` (when arrow shown) |

### Chat & Modes

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Open Chat panel | `Cmd+Shift+I` | `Ctrl+Shift+I` |
| Inline Chat | `Cmd+I` | `Ctrl+I` |
| Quick Chat (floating) | `Cmd+Shift+Alt+L` | `Ctrl+Shift+Alt+L` |
| Switch mode (Ask/Edit/Agent) | Click mode dropdown in Chat | Click mode dropdown in Chat |
| Open model picker | Click model name in Chat | Click model name in Chat |
| Attach file to Chat | `#` then type filename | `#` then type filename |
| Add to Chat context | Right-click → "Copilot" → "Add to Chat" | Right-click → "Copilot" → "Add to Chat" |

### General

| Action | Mac | Windows/Linux |
|--------|-----|---------------|
| Fix with Copilot (on error) | Click lightbulb → "Fix using Copilot" | Click lightbulb → "Fix using Copilot" |
| Generate commit message | Click sparkle icon in Source Control | Click sparkle icon in Source Control |
| Explain terminal output | Click sparkle icon in terminal | Click sparkle icon in terminal |

---

## 3. Chat Participants & Variables

### Participants (type @ in Chat)

| Participant | What it does | Example |
|-------------|-------------|---------|
| `@workspace` | Searches your entire workspace for context | "@workspace where is authentication handled?" |
| `@terminal` | References terminal output and commands | "@terminal explain this error" |
| `@vscode` | VS Code settings, commands, and features | "@vscode how do I change the font size?" |
| `@github` | GitHub issues, PRs, repos (requires GitHub Copilot Chat) | "@github list open issues" |

### Variables (type # in Chat)

| Variable | What it provides | When to use |
|----------|-----------------|-------------|
| `#file` | Contents of a specific file | "Explain #file:src/auth.ts" |
| `#selection` | Currently selected code | "Refactor #selection to use async/await" |
| `#codebase` | Workspace-wide context search | "Find all API endpoints in #codebase" |
| `#editor` | Currently visible file in editor | "What does this function do? #editor" |
| `#terminalLastCommand` | Last terminal command + output | "Why did this test fail? #terminalLastCommand" |
| `#terminalSelection` | Selected text in terminal | "Explain #terminalSelection" |
| `#problems` | Current VS Code Problems panel entries | "Fix the errors in #problems" |
| `#changes` | Current git diff / staged changes | "Review #changes for issues" |

### Slash Commands (type / in Chat)

| Command | What it does |
|---------|-------------|
| `/explain` | Explain selected code or concept |
| `/fix` | Fix a problem in selected code |
| `/tests` | Generate tests for selected code |
| `/doc` | Generate documentation for selected code |
| `/new` | Scaffold a new project or file |
| `/newNotebook` | Create a new Jupyter notebook |

---

## 4. Custom Instructions Hierarchy

Copilot uses a layered instruction system. More specific instructions override more general ones.

```
.github/copilot-instructions.md          ← Project-wide: architecture, conventions, patterns
                                            Applied to ALL Copilot interactions in this repo

.instructions.md (with applyTo glob)      ← Scoped: rules for specific files/folders
                                            e.g., applyTo: "src/api/**" for API-specific rules

.github/copilot-instructions.md           ← Combined: project-wide + scoped = full context
   + matching .instructions.md files

AGENTS.md (project root or subdirs)       ← Agent mode only: extra rules for autonomous behavior
                                            e.g., "always run tests after changes"

.prompt.md files                          ← Reusable prompt templates for common tasks
                                            Invoked explicitly: #prompt:my-template
```

**What to put in each:**

| File | Contents | Example |
|------|----------|---------|
| `copilot-instructions.md` | Architecture, tech stack, naming conventions, error handling patterns | "Use repository pattern. All errors must be wrapped with context." |
| `.instructions.md` | File-scoped rules with `applyTo` front matter | "Tests in this folder use vitest. Mock external APIs. Use factory functions for test data." |
| `AGENTS.md` | Rules for Agent mode autonomy | "Run `npm test` after any code change. Commit with conventional commits." |
| `.prompt.md` | Reusable prompt templates | "Generate a CRUD endpoint following our API conventions for the given resource." |

**Setup order:**
1. Run Copilot's `/init` command — it generates a starter `copilot-instructions.md`
2. Edit it to match your actual stack and conventions
3. Create `.instructions.md` files for specialized directories (tests, API routes, etc.)
4. Create `AGENTS.md` when you start using Agent mode (Day 2)
5. Create `.prompt.md` files for recurring tasks

---

## 5. Planning Mode

Use the `/plan` command in Agent mode for anything bigger than a single function.

```
/plan I need to add a user notification system. Users should receive
notifications when events they're interested in are updated. Design
the data model, API endpoints, and implementation plan.
```

Copilot will outline:
- What files to create/modify
- Step-by-step implementation plan
- Dependencies and order of operations

**Review the plan. Challenge it. Then tell it to proceed.**

### When to use /plan

| Situation | Use /plan? |
|-----------|-----------|
| Adding a new feature with multiple files | Yes |
| Refactoring across several modules | Yes |
| Building a new project from scratch | Yes |
| Fixing a single bug | No — just describe the bug |
| Adding a one-line config change | No — just ask |

### How to review a plan

1. Does it match your architecture? (right layers, right patterns)
2. Does it handle errors and edge cases?
3. Is the order logical? (data model before API, API before UI)
4. Is anything missing? (tests, validation, error handling)
5. Is it trying to do too much? (scope creep)

If the plan is wrong, tell it why: "This plan puts validation in the handler. Move it to the service layer. Also, add a step for writing tests."

---

## 6. Prompt Engineering

### The specificity spectrum

```
Level 1 (vague):    "Add authentication"
Level 2 (better):   "Add JWT authentication to the API"
Level 3 (good):     "Add JWT authentication with access tokens (15min expiry)
                     and refresh tokens (7d expiry). Store refresh tokens in
                     the database. Add middleware that validates the access
                     token on protected routes."
Level 4 (expert):   "Add JWT authentication following our existing middleware
                     pattern in src/middleware/. Use the jsonwebtoken library.
                     Access tokens: 15min, RS256. Refresh tokens: 7d, stored in
                     the refresh_tokens table. Add POST /auth/login,
                     POST /auth/refresh, POST /auth/logout endpoints.
                     Protect all /api/* routes. Include unit tests for the
                     auth service using our existing test patterns in __tests__/."
```

### BAD vs GOOD prompts

```
BAD:  "Write tests"
GOOD: "Write unit tests for the UserService.createUser method. Test:
       - successful creation with valid input
       - validation error for missing email
       - duplicate email returns conflict error
       - database error is propagated correctly
       Use the same testing pattern as in order.service.test.ts"
```

```
BAD:  "Fix this bug"
GOOD: "This endpoint returns 500 when the user doesn't exist. It should
       return 404 with an error message. The bug is in src/handlers/user.ts.
       The service throws a NotFoundError but the handler doesn't catch it."
```

```
BAD:  "Refactor this"
GOOD: "Refactor this function to separate the HTTP concerns (request parsing,
       response formatting) from the business logic (validation, data
       transformation). The business logic should move to a service class
       that can be tested independently."
```

### Give context, get better results

```
"Look at how we handle errors in src/services/order.service.ts.
 Apply the same pattern to this new user service."

"Our API follows REST conventions: POST returns 201, GET returns 200,
 not-found returns 404 with {error: message}. Follow these conventions."

"Check the existing tests in __tests__/services/ to match our testing style."
```

---

## 7. Agent Mode Best Practices

### Scope your tasks

```
BAD:  "Build my entire application"
GOOD: "Add the user registration endpoint with validation, database storage,
       and unit tests. Follow the patterns in the existing order endpoint."
```

Agent mode works best with tasks that are:
- **Specific:** clear outcome, defined scope
- **Bounded:** one feature, one fix, one module
- **Verifiable:** you can tell if it worked (tests pass, endpoint works)

### The autonomy trap

Agent mode can run, modify files, execute commands, and iterate on errors. This is powerful but dangerous if you give it too much scope.

**Signs you've given too broad a prompt:**
- Agent creates files you didn't expect
- Agent modifies code outside the scope you intended
- Agent runs in circles fixing one error and creating another
- Agent's changes don't match your architecture

**How to recover:**
1. Stop the agent (click Stop)
2. Undo changes: `git checkout .` or review the diff carefully
3. Break the task into smaller pieces
4. Re-prompt with tighter scope

### Review diffs, always

Agent mode generates diffs for you to review before accepting. **Read them.** Every time.

- Does the change match what you asked for?
- Does it follow your project's patterns?
- Are there any changes outside the scope you requested?
- Does the test coverage make sense?

### Use Git as your safety net

Before starting an Agent mode session:
1. Commit your current work
2. Let the agent work
3. Review the diff (`git diff`)
4. If it's good, commit
5. If it's bad, `git checkout .` and re-prompt

---

## 8. MCP Configuration

MCP (Model Context Protocol) extends Copilot with external tools and data sources.

### Configuration file: `.vscode/mcp.json`

```json
{
  "servers": {
    "my-server-name": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
    }
  }
}
```

### Useful MCP servers

| Server | Purpose |
|--------|---------|
| `@modelcontextprotocol/server-filesystem` | Read/write files outside workspace |
| `@modelcontextprotocol/server-github` | Access GitHub repos, issues, PRs |
| `@modelcontextprotocol/server-postgres` | Query PostgreSQL databases |
| `@modelcontextprotocol/server-fetch` | Fetch URLs and web content |
| `@modelcontextprotocol/server-memory` | Persistent key-value memory |

### When MCP helps

- Agent mode needs to access external APIs or databases
- You want Copilot to read documentation from a URL
- You need to interact with tools outside VS Code

---

## 9. Anti-Patterns — Don't Do These

| Don't | Do Instead |
|-------|------------|
| Accept generated code without reading it | Read every line. Ask "why?" for anything unclear. |
| Use Agent mode for everything | Match the mode to the task (see Mode Selection Guide). |
| Give Agent mode unbounded scope | Break tasks into specific, verifiable pieces. |
| Skip reviewing Agent mode diffs | Read every diff. Check for out-of-scope changes. |
| Prompt "fix it" when something breaks | Paste the error, ask for explanation first, then fix. |
| Ignore custom instructions setup | Set up `copilot-instructions.md` on day 1. It shapes every response. |
| Let Agent mode run without Git safety | Commit before Agent sessions. Use `git diff` to review. |
| Copy-paste from AI into code you don't understand | If you can't explain it, don't ship it. |
| Ask "write tests" without specifying what to test | Specify test cases: happy path, edge cases, error cases. |
| Ignore when AI contradicts itself | Flag it: "Earlier you said X, now you're saying Y. Which is correct?" |
| Use only one model for everything | Try different models for different tasks. Compare results. |
| Skip `.instructions.md` for specialized directories | Scoped instructions dramatically improve output quality. |

---

## Quick Reference

| I want to... | How |
|-------------|-----|
| Get code as I type | Just type — inline completions appear automatically |
| Accept a suggestion | `Tab` |
| See alternative suggestions | `Alt+]` / `Alt+[` |
| Accept just one word | `Cmd+→` (Mac) / `Ctrl+→` |
| Ask about my project | Chat panel → Ask mode → `@workspace` + question |
| Edit code in-place | Select code → `Cmd+I` → describe the change |
| Edit multiple files | Chat panel → Edit mode → describe the change |
| Build a feature autonomously | Chat panel → Agent mode → describe the feature |
| Plan before building | Agent mode → `/plan` + describe the feature |
| Explain code | Select code → `/explain` in Chat |
| Fix an error | Click lightbulb on error → "Fix using Copilot" |
| Generate tests | Select code → `/tests` in Chat |
| Generate docs | Select code → `/doc` in Chat |
| Reference a file in Chat | Type `#file:` + filename |
| Use current selection in Chat | Type `#selection` |
| Search entire codebase | Use `#codebase` in Chat |
| Switch AI model | Click model name in Chat panel |
| Generate a commit message | Click sparkle icon in Source Control |
| Set up project instructions | Create `.github/copilot-instructions.md` |
| Create scoped instructions | Create `.instructions.md` with `applyTo` front matter |
| Configure Agent mode rules | Create `AGENTS.md` in project root |
| Create a reusable prompt | Create a `.prompt.md` file, use `#prompt:name` |
| Add an MCP server | Edit `.vscode/mcp.json` |
