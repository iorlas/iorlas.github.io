---
title: "Claude Code Cheatsheet"
program: "Claude Code + Go"
programSlug: "claude-code-golang"
docSlug: "cheatsheet"
type: "program"
order: 2
---


> **This cheat sheet is for the Engineer** — keep it next to your screen. Print it. Reference it constantly until it's second nature.
>
> **Roles:** "Engineer" = you, the person being trained. "Mentor" = the trainer/teacher guiding your learning.

## Table of Contents

- [The Golden Rule](#the-golden-rule)
- [1. Planning Mode](#1-planning-mode)
- [2. Context Window](#2-context-window)
- [3. Prompting Techniques](#3-prompting-techniques)
- [4. CLAUDE.md — Your Project Rules](#4-claudemd--your-project-rules)
- [5. MCP & context7](#5-mcp--context7)
- [6. Debug Loop](#6-debug-loop)
- [7. Common Workflows](#7-common-workflows)
- [8. Anti-Patterns — Don't Do These](#8-anti-patterns--dont-do-these)
- [Quick Reference](#quick-reference)

---

## The Golden Rule

**Ask Claude how to approach the problem before asking it to solve the problem.** Maybe you're solving the wrong one.

```
BAD:  "Write a user service"
GOOD: "I need to add user management to my Go API. What are the different ways
       to structure this — should the service own validation or should the handler?
       What are the tradeoffs?"
```

---

## 1. Planning Mode

Use planning mode for anything bigger than a single function.

```
Engineer: "I need to add an orders endpoint with database storage.
           Plan the implementation before writing code."
```

Claude will outline:
- What files to create/modify
- What interfaces to define
- What the data flow looks like
- What tests to write

**Review the plan. Challenge it. Then say "go ahead."**

If you skip planning, you get spaghetti. Every time.

---

## 2. Context Window

Claude has finite memory. It forgets things as conversations get long.

**Signs Claude is losing context:**
- Repeats code you already wrote
- Forgets your project structure
- Contradicts earlier decisions
- Generates code that doesn't match your patterns

**What to do:**
- Use `/compact` — this compresses the conversation history, freeing up context without losing important details. Try this first before starting fresh.
- If `/compact` isn't enough, start a fresh conversation
- Begin the new conversation with a brief: "I'm building a Go REST API with clean architecture. Here's the structure: [paste tree]. I need to add X."
- Your CLAUDE.md is loaded automatically — it survives context resets

**Rule of thumb:** If Claude starts losing track, try `/compact` first. If the conversation is 30+ messages deep or `/compact` doesn't help, start fresh.

---

## 3. Prompting Techniques

### Be specific, not vague

```
BAD:  "Write a handler"

GOOD: "Write a net/http handler for POST /users that:
       - Parses JSON body with fields: name (string, required), email (string, required)
       - Validates both fields are non-empty
       - Calls userService.Create(ctx, user)
       - Returns 201 with the created user as JSON
       - Returns 400 with error message if validation fails
       - Returns 500 if service returns an error
       - Follow the error handling pattern in CLAUDE.md"
```

### Give context about your codebase

```
BAD:  "Add tests"

GOOD: "Add table-driven unit tests for UserService.Create.
       Mock the UserRepository interface. Test cases:
       - happy path (valid user)
       - empty name (expect validation error)
       - duplicate email (repo returns ErrDuplicate)
       Use testify/assert like the existing tests in order_service_test.go"
```

### Ask for explanation, not just code

```
"Write this function AND explain why you chose this approach over alternatives."

"I see you used a pointer receiver here. Explain why a value receiver wouldn't work."

"What are the edge cases in this code that could cause bugs in production?"
```

### Iterate, don't accept blindly

```
Engineer: "Write a repository for orders"
Claude:   [generates code]
Engineer: "Why did you use db.Query instead of db.QueryRow for GetByID?
           There's only one result."
Claude:   [fixes and explains]
```

---

## 4. CLAUDE.md — Your Project Rules

Lives in your project root. Claude reads it automatically every conversation.

**What to put in it:**
```markdown
# Project: My API Service

## Architecture
- Clean layered: handlers -> services -> repositories
- Every layer communicates through interfaces
- No business logic in handlers

## Conventions
- Use net/http standard library, no frameworks
- Use sqlx for database queries
- Error wrapping with fmt.Errorf("operation: %w", err)
- Table-driven tests with testify/assert
- Pointer receivers for methods that modify state, value receivers otherwise

## File Structure
cmd/api/main.go          — entry point
internal/handler/         — HTTP handlers
internal/service/         — business logic
internal/repository/      — data access
internal/model/           — domain types

## Testing
- Unit tests: mock interfaces, test behavior
- Integration tests: real DB (SQLite for tests)
- Run: make test
```

**Update it as your project evolves.** It's a living document. Your Mentor may have set up an initial CLAUDE.md for you -- review it and keep it current as you add features.

### Progressive Disclosure: Decomposing CLAUDE.md

As your project grows, a single CLAUDE.md becomes too long for Claude to process effectively. Decompose it into focused files that Claude loads as needed:

```
CLAUDE.md                          ← Top-level: project overview, key conventions, links to sub-files
internal/handler/CLAUDE.md         ← Handler-specific: HTTP patterns, response formats, middleware rules
internal/service/CLAUDE.md         ← Service-specific: validation rules, error handling, business logic patterns
internal/repository/CLAUDE.md      ← Repo-specific: SQL conventions, transaction patterns, migration rules
```

**How to decompose:**

1. **Start monolithic** (Days 1-5): One CLAUDE.md with everything. This is fine for small projects.
2. **Split when it hurts** (Weekend project): When CLAUDE.md is 50+ lines and Claude starts ignoring rules at the bottom, split by layer.
3. **Root CLAUDE.md becomes an index**: Keep only the project-wide rules (architecture, naming, testing philosophy). Reference sub-files: "See internal/handler/CLAUDE.md for HTTP conventions."
4. **Each sub-file covers ONE concern**: Handler CLAUDE.md doesn't repeat architecture rules — it only covers handler-specific patterns.

**Why this matters:** Claude reads CLAUDE.md at the start of every conversation. If it's 200 lines, Claude gives roughly equal attention to everything — which means less attention to the rule that matters right now. When the Engineer is working on a handler, Claude reads the root CLAUDE.md (general rules) + the handler CLAUDE.md (specific rules). Focused context = better output.

**Rule of thumb:** If you're copy-pasting the same correction to Claude more than twice, add it to the relevant CLAUDE.md.

---

## 5. MCP & context7

MCP (Model Context Protocol) connects Claude to external knowledge sources.

**context7** connects Claude to live documentation, so it looks up real Go stdlib docs instead of hallucinating.

**How to use:**
- Already configured during setup (your Mentor set this up for you)
- Claude automatically uses it when answering questions about Go packages
- If Claude seems wrong about a function signature or behavior, ask: "Look up the actual docs for net/http.Request"

**When it helps most:**
- Standard library functions you're unsure about
- Third-party library APIs (sqlx, testify, etc.)
- "Does this function return an error? What type?"

---

## 6. Debug Loop

When something breaks:

```
Step 1: Paste the error
        "I'm getting this error: [paste full error + stack trace]"

Step 2: Ask what it means
        "What does this error mean? What are the possible causes?"

Step 3: Ask for the fix
        "How do I fix this? Show me the minimal change."

Step 4: UNDERSTAND before you apply
        "Why did this happen? What was I doing wrong conceptually?"
```

**Never apply a fix you can't explain.** If you can't explain it, you'll make the same mistake again.

---

## 7. Common Workflows

### "I'm starting a new feature"
```
1. "I need to add [feature]. Plan the approach first — what files,
    what interfaces, what's the data flow?"
2. Review plan, adjust
3. "Implement the repository layer first with tests"
4. Review, verify tests pass
5. "Now the service layer with tests"
6. Review, verify
7. "Now the handler with tests"
8. Review, verify, done
```

### "I'm stuck on a concept"
```
"Explain Go interfaces to me like I'm a JavaScript developer.
 What's the equivalent in JS? Why doesn't Go need explicit 'implements'?"
```

If Claude's explanation still doesn't click, ask your Mentor -- some concepts land better with a human walkthrough.

### "I want to review my own code"
```
"Review this code for:
 - Non-idiomatic Go patterns
 - Error handling gaps
 - Missing edge cases
 - Test coverage holes
 Be harsh. I want to learn."
```

### "I need to understand existing code"
```
"Read this function and explain:
 1. What it does
 2. Why it's structured this way
 3. What would break if I changed X
 4. Any potential bugs or improvements"
```

---

## 8. Anti-Patterns — Don't Do These

| Don't | Do Instead |
|-------|------------|
| Accept generated code without reading it | Read every line. Ask "why?" for anything unclear. |
| Prompt "fix it" when something breaks | Paste the error, ask for explanation first, then fix. |
| Use AI for 100-line files without planning | Use planning mode. Break into steps. |
| Let conversations run 50+ messages | Use `/compact` to compress, or start fresh with a clear brief. |
| Copy-paste from AI into code you don't understand | If you can't explain it, don't ship it. |
| Ask "write tests" without specifying what to test | Specify test cases: happy path, edge cases, error cases. |
| Ignore when AI contradicts itself | Flag it: "Earlier you said X, now you're saying Y. Which is correct?" |

---

## Quick Reference

| I want to... | Prompt pattern |
|--------------|---------------|
| Plan before coding | "Plan the implementation for X before writing code" |
| Generate code | "Write [specific thing] following the patterns in CLAUDE.md" |
| Review my code | "Review this for idiomatic Go, error handling, and edge cases" |
| Debug an error | "Here's the error: [paste]. What does it mean and how do I fix it?" |
| Learn a concept | "Explain [concept] to me as a [JS/Node] developer" |
| Compare approaches | "What are the ways to do X? What are the tradeoffs?" |
| Understand code | "Read this and explain what it does, step by step" |
| Check my understanding | "Am I right that [your understanding]? Correct me if I'm wrong." |
