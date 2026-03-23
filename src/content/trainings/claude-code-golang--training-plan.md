---
title: "Training Plan"
program: "Claude Code + Go"
programSlug: "claude-code-golang"
docSlug: "training-plan"
type: "program"
order: 1
---


## Table of Contents

- [Goal](#goal)
- [Target Stack](#target-stack)
- [Trainee Profiles](#trainee-profiles)
- [Schedule Shape](#schedule-shape)
- [Mentor Time Budget](#mentor-time-budget)
- [Daily Mentor Rhythm](#daily-mentor-rhythm)
- [AI Assistant Rules Progression](#ai-assistant-rules-progression)
- [Phase Goals & Verification Questions](#phase-goals--verification-questions)
  - [Prep Phase](#prep-phase-day--1-day-0)
  - [Week 1](#week-1-days-1-5)
  - [Weekend](#weekend-days-6-7)
  - [Wrap-up Phase](#wrap-up-phase-days-8-9)
- [Prep Days](#prep-days)
  - [Day -1 — Backend Crash Course (Track 2)](#day--1--backend-crash-course-track-2-only)
  - [Day 0 — Pre-work (Both Tracks)](#day-0--pre-work-both-tracks-self-paced-2-3-hrs)
- [Intensive Week](#intensive-week)
  - [Day 1 — DX & First Contact](#day-1-monday--dx--first-contact)
  - [Day 2 — Go Fundamentals](#day-2-tuesday--go-fundamentals)
  - [Day 3 — Interfaces & Testing](#day-3-wednesday--interfaces--testing)
  - [Day 4 — Data Layer](#day-4-thursday--data-layer)
  - [Day 5 — Full Service & Concurrency](#day-5-friday--full-service--concurrency)
  - [Weekend — Solo Project](#weekend-saturday--sunday--solo-project)
  - [Day 8 — Review & Corrections](#day-8-monday--review--corrections)
  - [Day 9 — Final Check-in & Mock Interview](#day-9-tuesday--final-check-in--mock-interview)
- [Office Hours](#office-hours-wednesday-friday)
- [Key Resources Summary](#key-resources-summary)
- [Mentor Prep: What to Create](#mentor-prep-what-to-create)

---

## Goal

Engineer passes a senior fullstack Go interview after 8 training days (+ prep days). The interviewer knows the candidate had intensive training, not production experience. The candidate demonstrates they **understand** Go, can build REST API microservices, and uses AI-assisted development (Claude Code) effectively.

## Target Stack

- `net/http` (standard library, no frameworks)
- Plain SQL / sqlx for queries, `database/sql` for connections
- Clean layered architecture: handlers -> services -> repositories
- Unit tests with interface-based mocking
- Integration tests
- Concurrency: conceptual understanding for interviews (goroutines, channels, waitgroup, errgroup)

## Trainee Profiles

| Track | Who | Duration |
|-------|-----|----------|
| **Track 1** | Strong mid-level backend/Node.js/fullstack engineers | Day 0 + Days 1-9 (10 days) |
| **Track 2** | UI engineers with weaker backend skills | Day -1, Day 0 + Days 1-9 (12 days) |

## Schedule Shape

```
Track 2 only:  [Day -1] [Day 0]
Track 1 + 2:            [Day 0] [Day 1] [Day 2] [Day 3] [Day 4] [Day 5] [Sat] [Sun] [Day 8] [Day 9] [Office Hours...]
                         prep     ──────────── intensive week ──────────   solo project  wrap   final   as needed
```

## Mentor Time Budget

| Phase | Mentor Time |
|-------|-----------|
| Week 1 (Mon-Fri) | ~2 hrs/day |
| Weekend | ~30 min async (Slack/chat) |
| Day 8 (Monday) | ~2 hrs |
| Day 9 (Tuesday) | ~1.5-2 hrs |
| Office hours (Wed-Fri) | ~1 hr/day, only if needed |
| **Total** | **~15-17 hours over ~2 weeks** |

## Daily Mentor Rhythm

| Time | What Mentor Does |
|------|-------------|
| Morning (30 min) | Brief intro to the Engineer: "today you learn X, here are the materials, here's what I expect by end of day" |
| Midday (15 min) | Quick check-in with the Engineer: "show me where you are, what's confusing" |
| End of day (45-60 min) | Mentor reviews code + asks verification questions: "walk me through this, why did you do X" |
| Async | Mentor answers Engineer's Slack/chat questions as they come up |

## AI Assistant Rules Progression

| Day | AI for questions/debugging | AI for writing code |
|-----|---------------------------|---------------------|
| Day 0, Day 1, Day 2 | Yes, unlimited | No — hand-write everything |
| Day 3 | Yes | Pair programming: generate → explain every line → keep or reject |
| Day 4-5 | Yes | **AI-only.** Engineer may NOT hand-write code. All code comes from Claude. Small hand-edits (typo, variable rename) allowed. |
| Weekend | Yes | **AI-only.** Full project built entirely through AI. README written by engineer (not generated). |
| Day 8 | Yes | **AI-only for fixes.** Diagnose with AI, explain root cause to Mentor without AI. |
| Day 9 | No AI at all | No AI at all — mock interview is pure brain |

---

## Phase Goals & Verification Questions

### Prep Phase (Day -1, Day 0)

**Go Goal:** Engineer arrives on Day 1 ready to write Go. Environment works, basic syntax is familiar, no time wasted on setup.

**AI Goal:** Claude Code is installed and configured. Engineer understands what MCP/context7 are and can ask AI questions.

#### Go Verification Questions
- What is the difference between `var x int` and `x := 0`?
- What does `go mod tidy` do?
- Run `go build` — does it work? Show me.
- (Track 2) What HTTP method do you use to create a resource? To update? To delete?
- (Track 2) What does status code 404 mean? 500? 201?
- (Track 2) Write a SQL query that selects all users where age > 25, ordered by name.

#### AI Verification Questions
- Show me your Claude Code installation — run a question, does it respond?
- What is MCP? Why did we connect context7?
- Where is your CLAUDE.md? What's in it?

---

### Week 1 (Days 1-5)

**Go Goal:** Engineer can hand-write a complete REST API microservice from scratch with clean architecture (handlers -> services -> repos), database access, tests, and middleware. Understands concurrency concepts well enough for an interview conversation.

**AI Goal:** Engineer transitions from manual coding to AI-directed development. By end of week, the engineer can build features entirely through AI — prompts are specific, uses planning mode for complex tasks, can explain every line AI generates, knows when to start a fresh context, and can recover when AI produces wrong output.

#### Go Verification Questions — End of Week 1

**Fundamentals:**
- What is the zero value of a string? An int? A pointer? A slice?
- What happens if you dereference a nil pointer?
- Why does Go return errors instead of using exceptions?
- What's the difference between `fmt.Errorf("failed: %w", err)` and `fmt.Errorf("failed: %v", err)`?
- When do you use `errors.Is` vs `errors.As`?

**Memory & Types:**
- What's the difference between a value receiver and a pointer receiver? When do you use each?
- If I pass a struct to a function, does the function get the original or a copy?
- What is a slice internally? (Answer: pointer to backing array + length + capacity)
- What happens when you `append` to a slice that's at capacity?
- What's the difference between a nil slice and an empty slice? Does it matter?
- Why are maps reference types but structs are value types?

**HTTP & REST:**
- Write an HTTP handler that returns JSON from memory — no looking anything up.
- What's the difference between `http.Handle` and `http.HandleFunc`?
- How do you read a path parameter in Go 1.22+?
- What happens if you forget to close the request body?
- How does middleware work in Go? Show me the signature.

**Interfaces & Testing:**
- What does it mean that Go interfaces are "implicitly satisfied"?
- Why do we use interfaces for dependency injection instead of concrete types?
- Show me a table-driven test. Why is this pattern idiomatic in Go?
- If I change the database from Postgres to MongoDB, what layers need to change? (Answer: only the repository implementation)
- What's the difference between a mock and a fake?

**Database:**
- What does `SetMaxOpenConns` do? What happens if you set it too low?
- Why do we use sqlx instead of raw `database/sql`? What does it add?
- Show me how a transaction works. What happens if you forget to rollback on error?
- What's the repository pattern? Why not just call the DB from the handler?

**Architecture:**
- Draw the layers of your service. What depends on what?
- Why shouldn't business logic live in HTTP handlers?
- What's the purpose of having interfaces between layers?

**Concurrency:**
- What's a goroutine? How is it different from a thread?
- What's the difference between a buffered and unbuffered channel?
- When would you use `sync.WaitGroup` vs `errgroup.Group`?
- What's a goroutine leak? How do you prevent it?
- What does `context.WithCancel` do? When would you use it?

#### AI Verification Questions — End of Week 1

**Mindset:**
- When should the Engineer ask AI "how to approach this" before asking it to write code?
- Give me an example of a bad prompt and a good prompt for the same task.
- When does it make sense to start a fresh Claude Code conversation instead of continuing?

**Workflow:**
- Show me how you'd use planning mode to design a new endpoint.
- What's in your CLAUDE.md? Why does it matter?
- How does the Engineer use context7 to look up a Go stdlib function?

**Critical thinking:**
- Show me code Claude generated for you. Walk me through it line by line.
- Did Claude ever generate something wrong or non-idiomatic? How did you catch it?
- How does the Engineer decide whether to keep or reject AI-generated code?

---

### Weekend (Days 6-7)

**Go Goal:** Engineer can independently build a complete microservice end-to-end without Mentor support. Code is on GitHub with tests passing.

**AI Goal:** Engineer can use Claude Code at full speed for a real project — planning, generating, debugging, learning — while maintaining understanding of every line shipped.

#### Go Verification Questions — Monday Review (Mentor asks Engineer)
- Walk me through your project architecture. Why did you structure it this way?
- Show me your most complex endpoint. Walk me through the request lifecycle.
- Show me your tests. What's your coverage? What's NOT tested and why?
- What was the hardest part? How did you solve it?
- If you needed to add a caching layer, where would it go?
- Show me your error handling. What happens when the external API is down?
- Open a random file. Engineer explains every line.

#### AI Verification Questions — Monday Review (Mentor asks Engineer)
- How did you use Claude Code for this project? Show me your conversation history.
- Did you use planning mode? Show me where.
- Was there a moment where AI led you astray? How did you recover?
- Show me the README. Did you write it or did AI write it? Can you defend every claim in it?
- Show me your workflow journal. Walk me through one moment where Claude went wrong.
- How many fresh conversations did you start? Why each time?
- Show me your CLAUDE.md files. Did you decompose them? When and why?
- What's the longest conversation you had? What happened to output quality?

---

### Wrap-up Phase (Days 8-9)

**Go Goal:** Engineer can perform under interview conditions — design a system, live-code, explain concurrency, review unfamiliar code, defend architectural decisions. All without AI assistance.

**AI Goal:** Engineer has internalized AI-assisted development as a workflow. Can articulate when and how to use AI effectively. Understands its limitations.

#### Go Verification Questions — Mock Interview Bank

**System design (pick one):**
- Design a REST API for a task management system with users, projects, and tasks. What endpoints? What's the DB schema? How do you handle permissions?
- Design a notification service that sends emails and push notifications. How do you handle failures? Retries?
- Design an order service that validates inventory by calling another microservice. What happens if that service is slow? Down?

**Live coding (pick one):**
- Build a `GET /products?category=X&sort=price&order=asc` handler with query parameter parsing, validation, and a test.
- Build a middleware that logs request method, path, status code, and duration. Apply it to a handler.
- Build a service method that creates an order: validate input, check inventory (mock the call), save to DB (mock the repo), return the order. Write a test.

**Code review (Mentor shows the Engineer this code and asks "what's wrong?"):**
- Handler that doesn't check `err` after `json.Decode`
- Goroutine that captures a loop variable by reference (the classic closure bug)
- Repository that doesn't close `sql.Rows`
- Service that returns a concrete type instead of an interface
- Handler that calls the database directly (no service/repo layer)

**Concurrency Q&A:**
- I have 10 URLs to fetch. How do I fetch them all concurrently and return the first error? (Answer: errgroup)
- What's a race condition? How does `go test -race` help?
- Why is this code broken? `go func() { fmt.Println(i) }()` inside a for loop.

#### AI Verification Questions — Final
- If the Engineer starts a new Go project tomorrow, how do they set up Claude Code for it?
- What goes in CLAUDE.md for a new project?
- The Engineer is stuck on a bug for 30 minutes. Walk me through how to use AI to unblock.
- What can't AI help with? When is it better to read the docs or ask a person?
- Walk me through how you'd prompt Claude to build a new endpoint from scratch. Show me live.
- Claude just generated a function with a bug. How do you fix it without writing code yourself?
- When did you hit context limits this week? What did you do about it?
- Show me your Day 4 prompt log. What patterns did you discover about good vs bad prompts?

---

## Prep Days

### Day -1 — Backend Crash Course (Track 2 only)

> **Goal:** UI engineers understand HTTP, REST, and backend concepts well enough to not drown on Day 1.

#### Go Agenda
_None — this day is backend fundamentals only._

#### Backend Fundamentals

**What to learn:**
- HTTP protocol: request/response cycle, methods (GET, POST, PUT, DELETE), headers, body
- Status codes: 2xx, 3xx, 4xx, 5xx and what they mean
- REST conventions: resources, endpoints, CRUD mapping to HTTP methods
- What middleware is and why it exists
- What a microservice is vs a monolith
- JSON as data format

**Materials:**
- [MDN: An Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) — the protocol fundamentals (~30 min)
- [MDN: HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) — GET, POST, PUT, DELETE explained (~20 min)
- [MDN: HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) — reference, focus on common ones (~20 min)
- [FreeCodeCamp: Learn REST API Principles](https://www.freecodecamp.org/news/learn-rest-api-principles-by-building-an-express-app/) — practical REST walkthrough (~1 hr)

**SQL Basics:**
- [SQLBolt](https://sqlbolt.com/) — interactive SQL lessons, start to finish (~2-3 hrs)
- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/) — reference for SELECT, INSERT, UPDATE, DELETE, JOINs

#### AI Assistant Agenda
- Engineer installs Claude Code CLI
- Engineer creates project `CLAUDE.md` with Go conventions
- Engineer installs MCP + context7, connects Go stdlib docs
- Mentor explains what MCP is and why it matters
- **Rule: AI for questions and setup troubleshooting only**

#### Verification
_"Explain to me: what happens when a browser sends a POST request to create a user? Walk me through the full lifecycle."_

---

### Day 0 — Pre-work (Both Tracks, self-paced, 2-3 hrs)

> **Goal:** Engineer arrives on Day 1 with Go installed and "hello world" running.

#### Go Agenda

**What to do:**
- Install Go
- Install VS Code + Go extension
- Complete [A Tour of Go](https://go.dev/tour/) (the basics sections)
- Read through the [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) cheat sheet
- Run "hello world", make sure `go run`, `go build`, `go test` work

**Materials:**
- [A Tour of Go](https://go.dev/tour/) — official interactive tutorial (~2 hrs)
- [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) — side-by-side Node.js vs Go code examples (bookmark as reference)

#### AI Assistant Agenda
- **Track 2:** Claude Code + MCP already set up on Day -1
- **Track 1:** Engineer installs Claude Code CLI, creates `CLAUDE.md`, installs MCP + context7. Mentor explains what MCP is.
- **Rule: AI for questions only**

#### Track 2 Extra
- Review SQL basics if not finished on Day -1
- Re-read the HTTP/REST materials, try to explain REST to oneself

#### Verification
_None formal — Day 1 morning setup check will catch issues._

---

## Intensive Week

### Day 1 (Monday) — DX & First Contact

> **Goal:** Professional dev environment set up. Engineer can read, run, and navigate existing Go code.

#### Go Agenda

**What to learn:**
- VS Code + gopls: auto-format, auto-imports, go-to-definition
- golangci-lint: install, run, read output, fix a warning
- Pre-commit hooks: golangci-lint + gofmt on commit
- Makefile with `build`, `test`, `lint` targets
- Delve debugger: set a breakpoint in VS Code, hit it, inspect a variable, continue
- Go modules: `go mod init`, `go mod tidy`, what `go.sum` is
- **Go project structure & packages (Mentor explains, 20 min):**
  - `cmd/api/main.go` — entry point, wiring dependencies together
  - `internal/` — private to this module, can't be imported by other projects
  - `internal/handler/`, `internal/service/`, `internal/repository/`, `internal/model/` — the layers
  - How Go packages work: one package per directory, package name = directory name
  - Visibility: uppercase = exported (`UserService`), lowercase = private (`validate`)
  - Import paths and circular import restrictions — Go forbids them, which forces clean dependency direction
  - Comparison to Node.js: no `node_modules`, no `index.js` re-exports, no barrel files
- Read and run an existing Go service (find a small open-source Go API to clone and explore)
- Docker basics (read-only): "this is a Dockerfile for a Go service, this is what each line does"
- **Go memory model basics (afternoon reading):**
  - Stack vs heap — Go's escape analysis decides allocation, not the programmer
  - Value semantics vs reference semantics — structs are copied, maps/slices/channels are references
  - Slices internals: backing array, length, capacity, what `append` does when at capacity
  - Slice gotchas: sub-slicing shares the backing array, nil slice vs empty slice
  - Arrays vs slices — arrays are fixed-size value types (rarely used directly)

**Materials:**
- [Go in VS Code — Official Docs](https://code.visualstudio.com/docs/languages/go) — setup guide (~30 min)
- [VS Code Go Extension Wiki: Tools](https://github.com/golang/vscode-go/wiki/tools) — all tools the extension uses
- [A JavaScript Developer's Guide to Go](https://prateeksurana.me/blog/guide-to-go-for-javascript-developers/) — mental model bridge from JS to Go (~45 min read)
- [Effective Go](https://go.dev/doc/effective_go) — skim the overview sections, bookmark for reference (~1 hr skim)
- Learn Go with Tests: [Arrays and Slices](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/arrays-and-slices) — hands-on slices, append, variadic functions (~1 hr)
- [Go Slices: Usage and Internals (Go Blog)](https://go.dev/blog/slices-intro) — slice header, backing array, capacity (~30 min)
- [100 Go Mistakes: #21-#28](https://100go.co/) — slice and map gotchas (~20 min skim)

#### AI Assistant Agenda
- Engineer verifies Claude Code + MCP + context7 setup works
- Engineer practices using AI for questions: "what does this error mean?", "why is my module not initializing?"
- **Rule: AI for questions only, no code generation**

#### Mentor Time (~1.5 hrs)
- 30 min: morning — Mentor walks through DX setup with Engineer, explains linter rules, shows Makefile
- 15 min: midday — Mentor checks everyone has a working environment
- 20 min: afternoon — Mentor explains Go project structure & packages (see agenda above)
- 45 min: end of day — Mentor verifies: "show me your editor, run the project, set a breakpoint, inspect a variable. What does `internal/` mean? Why can't you import handler from repository?"

---

### Day 2 (Tuesday) — Go Fundamentals

> **Goal:** Engineer can hand-write a working HTTP handler that parses JSON and returns JSON.

#### Go Agenda

**What to learn:**
- Types, variables, constants
- Structs, struct tags (`json:"name"`)
- Pointers vs values — when to use which
- Method receivers: value receiver vs pointer receiver, when to use which
- Functions, multiple return values
- Error handling: no try/catch, explicit error returns, `fmt.Errorf`, `errors.Is`/`errors.As`
- Maps: declaration, zero value (nil map panic!), checking key existence
- Reinforce Day 1 memory model: pass struct to a function — copy or original?
- First `net/http` handler: parse JSON request body, return JSON response
- `json.Marshal` / `json.Unmarshal`

**Materials:**
- Learn Go with Tests: [Structs, Methods & Interfaces](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/structs-methods-and-interfaces) (~1.5 hrs hands-on)
- Learn Go with Tests: [Pointers & Errors](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/pointers-and-errors) (~1 hr hands-on)
- Learn Go with Tests: [Maps](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/maps) — map operations, nil map gotcha, key existence check (~45 min)
- [Eli Bendersky: REST Servers in Go Part 1 — Standard Library](https://eli.thegreenplace.net/2021/rest-servers-in-go-part-1-standard-library/) — build a REST API with `net/http` (~1 hr)
- [Alex Edwards: How to Properly Parse a JSON Request Body](https://www.alexedwards.net/blog/how-to-properly-parse-a-json-request-body) — production-quality JSON handling (~30 min)
- [Alex Edwards: HTTP Response Snippets](https://www.alexedwards.net/blog/golang-response-snippets) — copy-paste patterns for JSON responses (~15 min)

**Exercises:**
- Build a handler that accepts `POST /users` with JSON body `{"name": "...", "email": "..."}`, validates input, returns the created user with an ID
- Build a handler that accepts `GET /users/{id}` and returns a user (hardcoded in-memory map for now)

#### AI Assistant Agenda
- Engineer continues using AI for questions/debugging only
- End of day (15 min Mentor lecture): **the mindset talk**
  - "AI is a thinking partner, not a code generator"
  - "Ask how to approach a problem before asking AI to solve it — maybe you're solving the wrong one"
  - Mentor live demo: take a problem the Engineer struggled with today, show the conversation flow
- **Rule: AI for questions only, no code generation**

#### Mentor Time (~1.5 hrs)
- 30 min: morning — Mentor briefs: "today is fundamentals, here's what to read, here's what to build"
- 15 min: midday check
- 45 min: end of day — Mentor reviews code: "walk me through this handler line by line" + mindset lecture

#### Verification
_"Show me your handler. What happens if the JSON is malformed? What does the error return look like? Why doesn't Go have try/catch?"_

---

### Day 3 (Wednesday) — Interfaces & Testing

> **Goal:** Engineer can define service interfaces, write unit tests with table-driven tests and interface-based mocks.

#### Go Agenda

**What to learn:**
- Interfaces: implicit satisfaction, small interfaces, the Go philosophy
- Service layer: extract business logic from handlers into a service
- Dependency injection via interfaces (not frameworks)
- Unit tests: `go test`, `testing` package
- Table-driven tests
- Interface-based mocking (define interface -> create mock struct -> inject in tests)
- Why this is better than monkey patching (JS/Python comparison)
- Test coverage: `go test -cover`

**Materials:**
- Learn Go with Tests: [Dependency Injection](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/dependency-injection) (~1 hr)
- Learn Go with Tests: [Mocking](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/mocking) (~1.5 hrs)
- [5 Mocking Techniques for Go](https://www.myhatchpad.com/insight/mocking-techniques-for-go/) — overview of approaches (~30 min read)
- [Alex Edwards: Handlers and Servemuxes](https://www.alexedwards.net/blog/an-introduction-to-handlers-and-servemuxes-in-go) — deeper understanding of `http.Handler` interface (~30 min)

**Exercises:**
- Extract yesterday's handler logic into a `UserService` interface + implementation
- Write table-driven tests for the service with a mock repository
- Make the handler depend on the service interface, test the handler separately

#### AI Assistant Agenda
- Morning (25 min Mentor session): **prompting basics + planning mode + context limits**
  - Mentor demonstrates bad prompt vs good prompt — live comparison
  - "Review my handler" vs "Review this net/http handler for user creation, check error handling and JSON parsing"
  - Planning mode: what it is, when to use it ("anything bigger than a function")
  - Context window: it's finite, when to start a fresh conversation
- **Rule: AI as pair programmer.** Engineer generates code -> explains every line -> keeps or rejects
- Engineer's first time using AI to write Go code

**AI Exercise — First Contact (30 min):**
- Engineer writes a deliberately vague prompt: "add a delete endpoint." See what Claude produces.
- Engineer rewrites the prompt 3 times, each more specific. Compare outputs.
- Engineer shows all 4 outputs to Mentor at end of day: "which was best and why?"

This prepares them for Day 4 when AI becomes the only way to write code.

#### Mentor Time (~1.5 hrs)
- 25 min: morning — Mentor teaches AI techniques
- 15 min: midday check
- 45 min: end of day — Mentor reviews code: "why is this an interface? what happens if you remove it? show me your tests"

#### Verification
_"If I change the database tomorrow, what code do you need to change? Show me." (Answer should be: only the repository implementation, nothing else.)_

---

### Day 4 (Thursday) — Data Layer

> **Goal:** Engineer can build a repository with SQL queries, wire all three layers together, write integration tests.

#### Go Agenda

**What to learn:**
- `database/sql`: opening connections, `db.Query`, `db.Exec`, `db.QueryRow`
- Connection pooling: `SetMaxOpenConns`, `SetMaxIdleConns`, `SetConnMaxLifetime`
- sqlx: `StructScan`, `NamedExec`, `Select`, `Get` — less boilerplate than raw `database/sql`
- Repository pattern: separate struct, implements an interface, injected into services
- Transactions: `db.BeginTx`, commit, rollback
- Integration tests: test against a real database (use Docker or an in-memory SQLite for tests)
- Wire it all together: handler -> service -> repository -> database

**Materials:**
- [go-database-sql.org](http://go-database-sql.org/) — the community tutorial for `database/sql` (~1 hr)
- [Illustrated Guide to sqlx](https://jmoiron.github.io/sqlx/) — official sqlx docs (~45 min)
- [Three Dots Labs: The Repository Pattern in Go](https://threedots.tech/post/repository-pattern-in-go/) — clean separation of concerns (~30 min read)
- [Three Dots Labs: Database Transactions in Go](https://threedots.tech/post/database-transactions-in-go/) — transactions across layers (~30 min read)
- [Alex Edwards: Introduction to Using SQL Databases in Go](https://www.alexedwards.net/blog/introduction-to-using-sql-databases-in-go) — practical walkthrough (~45 min)
- [Go docs: Managing Connections](https://go.dev/doc/database/manage-connections) — connection pool tuning (~15 min)

**Exercises:**
- Create a `UserRepository` interface + Postgres/SQLite implementation using sqlx
- Implement `Create`, `GetByID`, `List`, `Update`, `Delete`
- Wire: handler calls service calls repository
- Write integration tests that test the full handler -> DB flow

#### AI Assistant Agenda
- Morning (15 min): Mentor announces **"AI-only" rule**:
  - "From today, you don't write code. Claude writes code. You direct, review, and explain."
  - Small hand-edits allowed (fixing a typo, renaming a variable). New code, new functions, new files — all through AI.
  - "If Claude generates something wrong, you can't just fix it by hand. Figure out how to get Claude to fix it."
- Morning (10 min): Mentor introduces **"wrong problem" check technique**
  - Before building a feature, Engineer asks AI: "what are the different ways to approach X, and what are the tradeoffs?"
  - Prevents wasted work on wrong architecture
- **Rule: AI writes all code.** Engineer directs, reviews, explains. Manual code is forbidden.

**AI Exercise — Prompt Debugging (during the day):**
- When Claude generates incorrect code (it will), the Engineer must fix it *through prompting*, not by hand
- Engineer keeps a log: "What I prompted → What Claude produced → What was wrong → How I fixed the prompt"
- Mentor reviews this log at end of day — it's as important as the code itself

**AI Exercise — Context Limits (end of day, 15 min):**
- By end of Day 4, the conversation will be long. Engineer should notice Claude losing context.
- Engineer tries `/compact`. Does it help?
- Engineer starts a fresh conversation with a brief. Compare quality of output.
- Report to Mentor: "Here's when Claude started degrading and what I did about it."

#### Mentor Time (~1.5 hrs)
- 10 min: Mentor teaches AI technique
- 30 min: morning intro — Mentor explains repo pattern, shows what clean layering looks like
- 15 min: midday
- 45 min: end of day — Mentor reviews code: "show me a query, explain connection pooling, walk me through handler -> service -> repo"

#### Verification
_"Trace a POST /users request from the HTTP handler all the way to the database INSERT and back. What happens at each layer? What happens if the DB is down?"_

---

### Day 5 (Friday) — Full Service & Concurrency

> **Goal:** Engineer can build a complete REST API microservice from scratch. Understands concurrency concepts for interviews.

#### Go Agenda

**What to learn — Full Service:**
- Build a complete service from scratch (new project, not extending previous days)
- Multiple endpoints: CRUD + at least one endpoint that calls an external API
- Middleware: logging, error recovery, request ID
- Clean architecture: handlers -> services -> repos (demonstrate the pattern is second nature)
- Configuration: environment variables, command-line flags
- Graceful shutdown
- Unit + integration tests

**What to learn — Concurrency (overview, ~2 hrs):**
- Goroutines: what they are, how they differ from threads
- Channels: buffered vs unbuffered, send/receive
- `sync.WaitGroup`: wait for N goroutines to finish
- `errgroup.Group`: like WaitGroup but with error handling and context cancellation
- `select` statement
- When to use what (interview Q&A prep)
- One exercise: build a simple concurrent HTTP fetcher that calls 3 URLs in parallel and returns results

**Materials — Full Service:**
- [Eli Bendersky: REST Servers Part 5 — Middleware](https://eli.thegreenplace.net/2021/rest-servers-in-go-part-5-middleware/) (~30 min)
- [Alex Edwards: Making and Using HTTP Middleware](https://www.alexedwards.net/blog/making-and-using-middleware) (~30 min)
- [Three Dots Labs: How to Implement Clean Architecture in Go](https://threedots.tech/post/introducing-clean-architecture/) (~45 min read)
- [Three Dots Labs: Common Anti-Patterns in Go Web Applications](https://threedots.tech/post/common-anti-patterns-in-go-web-applications/) (~20 min read)

**Materials — Concurrency:**
- Learn Go with Tests: [Concurrency](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/concurrency) (~45 min)
- Learn Go with Tests: [Select](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/select) (~30 min)
- [Go Concurrency Guide (GetStream)](https://getstream.io/blog/goroutines-go-concurrency-guide/) (~30 min read)
- [Mastering errgroup](https://dev.to/jones_charles_ad50858dbc0/go-concurrency-made-easy-mastering-errgroup-for-error-handling-and-task-control-219) (~20 min read)

#### AI Assistant Agenda
- **AI-only continues.** Engineer builds the entire Day 5 service through Claude Code.
- No new AI lectures — today is about building speed and judgment through practice.

**AI Exercise — Planning Mode Showdown (morning, 30 min):**
- Engineer builds the first endpoint (e.g., CRUD for the main resource) *without* using planning mode — just direct prompting.
- Engineer builds the second endpoint *with* planning mode — review the plan, adjust, then execute.
- Compare: which was faster? Which produced cleaner code? Which had fewer bugs?
- Engineer writes 2-3 sentences about what they learned. Mentor reviews at end of day.

**AI Exercise — The Bad Spec (afternoon, 20 min):**
- Mentor gives the Engineer a deliberately ambiguous requirement: "add an endpoint that handles orders"
- Engineer prompts Claude with this vague spec. Claude will make assumptions.
- Engineer must identify what Claude assumed, decide which assumptions are wrong, and re-prompt with a better spec.
- Goal: learn that AI output quality = prompt quality. Garbage in, garbage out.

#### Mentor Time (~2 hrs)
- 30 min: morning — Mentor leads concurrency whiteboard session (goroutines, channels, waitgroup, errgroup — when to use what, draw diagrams)
- 15 min: midday
- 60 min: end of day — Mentor reviews full service code: "walk me through the request lifecycle from handler to DB and back"

#### Verification
_"Walk me through the request lifecycle. What's a goroutine? When would you use errgroup vs WaitGroup? What happens if one of three parallel HTTP calls fails?"_

---

### Weekend (Saturday & Sunday) — Solo Project

> **Goal:** Engineer builds a complete REST API microservice independently. Proves they can do it without hand-holding.

#### Go Agenda

**The assignment:**

Build a REST API service from scratch. Requirements:
- At least 3 resource endpoints (e.g., users, orders, products)
- Full CRUD on at least one resource
- Database (Postgres or SQLite) with proper connection management
- At least one endpoint that calls an external API (e.g., a public API for exchange rates, weather, etc.)
- Clean architecture: handlers -> services -> repos
- Unit tests for services (with interface-based mocks)
- Integration tests for at least one endpoint
- Middleware: logging + error recovery
- Proper error handling throughout
- Push to GitHub
- **Engineer writes a README explaining design decisions** (architecture, why they structured it this way, tradeoffs considered)

**Reference materials:**
- All previous days' materials (bookmark them)
- [100 Go Mistakes](https://100go.co/) — self-review checklist, scan through relevant sections
- Claude Code cheat sheet (provided by mentor)

#### AI Assistant Agenda
- **AI-only for all code.** The entire weekend project is built through Claude Code. The Engineer never writes implementation code by hand.
- The README is the one exception — Engineer writes it themselves. It forces articulation of decisions in their own words.
- Engineer uses the Claude Code cheat sheet for reference
- **Progressive disclosure:** As the project grows, Engineer decomposes CLAUDE.md into per-layer files (see cheat sheet section 4). Root CLAUDE.md keeps project-wide rules; `internal/handler/CLAUDE.md`, `internal/service/CLAUDE.md`, `internal/repository/CLAUDE.md` hold layer-specific conventions.

**AI Challenge — The Workflow Journal:**
- Engineer keeps a short journal (5-10 bullet points total across the weekend, not a novel):
  - At least 2 moments where Claude produced wrong code and how they fixed the prompt
  - At least 1 moment where they hit context limits and what they did
  - At least 1 moment where planning mode helped (or didn't)
- Mentor reviews this journal on Monday — it's part of the Monday review alongside the code

#### Mentor Time
- ~0 hrs structured from Mentor
- Mentor available async on Slack/chat for blocking issues only (~30 min total max)

#### Verification
_The code on GitHub IS the verification. Monday review will expose everything._

---

### Day 8 (Monday) — Review & Corrections

> **Goal:** Weekend project is reviewed, gaps are identified and fixed, ready for mock interview.

#### Go Agenda

**What happens:**
- Mentor reviews weekend project code (Mentor reads it before the meeting)
- Mentor and Engineer walk through the code together: architecture, error handling, tests, naming
- Mentor identifies gaps: missing error cases, leaky abstractions, test coverage holes, non-idiomatic patterns
- Mentor and Engineer fix the top 3-5 issues together
- Mentor fills knowledge gaps on any weak areas

**Supplemental material if needed:**
- [Three Dots Labs: Database Transactions](https://threedots.tech/post/database-transactions-in-go/) — if transaction handling was weak
- [Learn Go with Tests: Context](https://quii.gitbook.io/learn-go-with-tests/go-fundamentals/context) — if context propagation was missing
- [Learn Go with Tests: Working Without Mocks](https://quii.gitbook.io/learn-go-with-tests/testing-fundamentals/working-without-mocks) — if testing approach needs refinement

#### AI Assistant Agenda
- **AI-only for fixes.** Mentor finds bugs/issues in the weekend project.
- Engineer uses AI to diagnose and fix — through prompting, not manual edits.
- But: Engineer must explain the root cause **without AI** to the Mentor.
- Practice the loop: "prompt AI to debug → understand the fix → explain to Mentor in your own words"

**AI Exercise — Blind Debugging (30 min):**
- Mentor introduces a subtle bug into the Engineer's weekend project (e.g., missing error check, wrong SQL query, off-by-one)
- Engineer must use Claude Code to find it — but can only describe symptoms, not look at the diff
- Tests the real workflow: "something is broken in production, use AI to help diagnose"

#### Mentor Time (~2 hrs)
- 45 min: Mentor reviews weekend project code (Mentor comes prepared, reads code beforehand)
- 30 min: Mentor and Engineer fix top issues together
- 30 min: Mentor runs mock interview warm-up questions (rapid-fire Go knowledge check)
- 15 min: Mentor identifies last gaps for Engineer to study overnight

#### Verification
_"Here's a bug in your code. Find it. Fix it. Explain why it happened." (With AI for the first one, without AI for the second.)_

---

### Day 9 (Tuesday) — Final Check-in & Mock Interview

> **Goal:** Engineer proves readiness for the real interview. Mentor identifies and helps fix any remaining gaps.

#### Go Agenda

**Mock interview format (~1.5 hrs):**

1. **System design (20 min):** Mentor asks: "Design a REST API for [scenario]. What endpoints? What's the data model? How do you structure the code?" Engineer uses whiteboard or paper.

2. **Live coding (30 min):** Mentor assigns: "Build an endpoint that does X." Engineer codes from scratch, in their editor, no AI. Timer running. Must include error handling and at least one test.

3. **Code review (20 min):** Mentor shows unfamiliar Go code. "What does this do? What's wrong with it? How would you improve it?"

4. **Concurrency Q&A (10 min):** "When would you use goroutines? What's the difference between WaitGroup and errgroup? What's a race condition?"

5. **Architecture discussion (10 min):** "Why did you structure your weekend project this way? What would you change if you needed to add feature X?"

**After the mock interview:**
- Engineer makes targeted fixes on gaps exposed
- Engineer does last-minute study on weak areas

#### AI Assistant Agenda
- **No AI at all.** The mock interview proves the Engineer learned, not that they can prompt.
- If gaps are found after the mock, the Engineer can use AI to study/practice for the remaining hours.

#### Mentor Time (~1.5-2 hrs)
- 1.5 hrs: Mentor runs the mock interview
- 30 min: Mentor debriefs, gives targeted feedback, provides final study recommendations

#### Verification
_The mock interview IS the verification._

---

## Office Hours (Wednesday-Friday)

Mentor available as needed, ~1 hr/day max. Topics:
- Engineer's lingering questions from the training
- Advanced Claude Code workflows
- Custom MCP setups
- Specific interview prep questions
- Mentor reviews additional practice work

---

## Key Resources Summary

### Core Curriculum
| Resource | Used on | Type |
|----------|---------|------|
| [A Tour of Go](https://go.dev/tour/) | Day 0 | Interactive tutorial |
| [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/) | Days 2-5 | TDD-based hands-on |
| [Eli Bendersky: REST Servers in Go (series)](https://eli.thegreenplace.net/2021/rest-servers-in-go-part-1-standard-library/) | Days 2, 5 | Tutorial series |
| [Alex Edwards blog posts](https://www.alexedwards.net/blog) | Days 2-4 | Practical guides |
| [Three Dots Labs blog](https://threedots.tech/) | Days 4-5 | Architecture patterns |
| [go-database-sql.org](http://go-database-sql.org/) | Day 4 | Database tutorial |
| [sqlx guide](https://jmoiron.github.io/sqlx/) | Day 4 | Library docs |

### Reference & Cheat Sheets
| Resource | Purpose |
|----------|---------|
| [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) | Node.js -> Go concept mapping |
| [JS Developer's Guide to Go](https://prateeksurana.me/blog/guide-to-go-for-javascript-developers/) | Mental model bridge |
| [Effective Go](https://go.dev/doc/effective_go) | Idiomatic Go reference |
| [100 Go Mistakes](https://100go.co/) | Self-review checklist |
| [Google Go Style Guide](https://google.github.io/styleguide/go/best-practices.html) | Style reference |

### Optional Evening Practice
| Resource | Purpose |
|----------|---------|
| [Exercism Go Track](https://exercism.org/tracks/go) | Syntax drilling, 140+ exercises |
| go-kata [#06](https://github.com/MedUnes/go-kata) (middleware), [#08](https://github.com/MedUnes/go-kata) (retry), [#15](https://github.com/MedUnes/go-kata) (testing), [#16](https://github.com/MedUnes/go-kata) (HTTP client) | Production patterns |

### Track 2 (UI Engineers) Prep Materials
| Resource | Purpose |
|----------|---------|
| [MDN: HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) | Protocol fundamentals |
| [MDN: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) | GET, POST, PUT, DELETE |
| [MDN: HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) | Status code reference |
| [FreeCodeCamp: REST API Principles](https://www.freecodecamp.org/news/learn-rest-api-principles-by-building-an-express-app/) | Practical REST walkthrough |
| [SQLBolt](https://sqlbolt.com/) | Interactive SQL lessons |
| [W3Schools SQL](https://www.w3schools.com/sql/) | SQL reference |

---

## Mentor Prep: What to Create

1. **Claude Code cheat sheet (one-pager):** planning mode, context limits, good vs bad prompts, "ask approach before solution" rule, MCP/context7 usage. Mentor hands out before the weekend.

2. **"Go for Node devs" additions:** Mentor adds any team-specific conventions, code examples from the target codebase if accessible.

3. **Weekend project spec:** The assignment above is a starting point — Mentor customizes with domain-relevant scenarios instead of generic CRUD.

4. **Mock interview question bank:** Mentor prepares 5-10 system design prompts, 5-10 live coding exercises, 5-10 code review snippets.
