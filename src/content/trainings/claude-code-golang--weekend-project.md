---
title: "Weekend Project"
program: "Claude Code + Go"
programSlug: "claude-code-golang"
docSlug: "weekend-project"
type: "program"
order: 3
---


> Build this over Saturday and Sunday. Use Claude Code freely. Push to GitHub. Write a README.
> **Monday morning, the Engineer walks the Mentor through every line.**

## Table of Contents

- [The Scenario](#the-scenario)
- [Requirements](#requirements)
  - [Core Resources](#core-resources)
  - [External API Integration](#external-api-integration)
  - [Architecture](#architecture)
  - [Database](#database)
  - [Testing](#testing)
  - [Middleware](#middleware)
  - [Error Handling](#error-handling)
- [What the Mentor Checks on Monday](#what-the-mentor-checks-on-monday)
- [README Template](#readme-template)
- [Tips](#tips)
- [Time Estimate](#time-estimate)

---

## The Scenario

You're building the backend for a **Book Exchange** platform where users can list books they want to give away and claim books from other users. There's also integration with an external API to enrich book data.

This is not a real product. It's designed to test every skill from the training week.

---

## Requirements

### Core Resources

**Users**
- `POST /users` — register a new user (name, email, city)
- `GET /users/{id}` — get user profile
- Fields: id, name, email, city, created_at

**Books**
- `POST /books` — list a book for exchange (title, author, isbn, condition, user_id)
- `GET /books` — list available books with filters: `?city=X`, `?author=X`, `?status=available`
- `GET /books/{id}` — get book details (enriched with external data)
- `PATCH /books/{id}` — update book info (only by the owner)
- `DELETE /books/{id}` — remove a listing (only by the owner)
- Fields: id, title, author, isbn, condition (new/good/fair/poor), status (available/claimed/exchanged), user_id, created_at

**Exchanges**
- `POST /exchanges` — claim a book (requester_id, book_id, message)
- `GET /exchanges?user_id=X` — list exchanges for a user (both as giver and requester)
- `PATCH /exchanges/{id}` — accept or reject (only by the book owner)
- Fields: id, book_id, requester_id, status (pending/accepted/rejected), message, created_at

### External API Integration

When returning book details (`GET /books/{id}`), enrich the response with data from the **Open Library API**:
- `https://openlibrary.org/isbn/{isbn}.json`
- Fetch: cover image URL, number of pages, publish date, subjects
- If the external API is down or ISBN not found, return the book without enrichment (don't fail the request)
- Cache the enrichment data — don't call the external API on every request (in-memory cache is fine)

### Architecture

Must follow clean layered architecture:
```
cmd/api/main.go
internal/handler/     — HTTP handlers, request parsing, response formatting
internal/service/     — business logic, validation, orchestration
internal/repository/  — database access, SQL queries
internal/model/       — domain types (User, Book, Exchange)
internal/middleware/   — logging, error recovery
```

- Handlers depend on service interfaces
- Services depend on repository interfaces
- No business logic in handlers
- No HTTP concerns in services
- No SQL outside repositories

### Database

- Use SQLite for simplicity (no Docker needed for the weekend)
- Use sqlx for queries
- Create tables at startup (simple migration in main.go is fine)
- Proper connection configuration

### Testing

**Required:**
- Unit tests for at least one service (with mocked repository)
  - Test happy path
  - Test validation failures
  - Test when repository returns an error
- At least one integration test that hits the HTTP handler and verifies the response
- Table-driven tests where applicable

**Bonus (if time allows):**
- Test the external API enrichment with a mock HTTP server (`httptest.NewServer`)
- Test the exchange flow end-to-end: create user -> list book -> claim book -> accept exchange

### Middleware

- Request logging: method, path, status code, duration
- Error recovery: catch panics, return 500, log the stack trace

### Error Handling

- Proper HTTP status codes: 201 for created, 400 for bad input, 404 for not found, 500 for server errors
- Structured error responses: `{"error": "book not found"}`
- Error wrapping with context: `fmt.Errorf("service.GetBook: %w", err)`
- Define sentinel errors where appropriate (e.g., `ErrNotFound`, `ErrUnauthorized`)

---

## What the Mentor Checks on Monday

| Area | What the Mentor looks for |
|------|----------------|
| **Architecture** | Are the layers clean? Does the handler ever import the repository? Does the service ever touch `http.Request`? |
| **Interfaces** | Are services and repositories defined as interfaces? Could the Mentor swap SQLite for Postgres by changing one file? |
| **Error handling** | Is every error checked? Are they wrapped with context? Is `errors.Is` used anywhere? |
| **Testing** | Do tests use interface mocks, not real DB? Are test cases meaningful (not just happy path)? |
| **HTTP** | Correct status codes? Proper JSON parsing with error handling? Does malformed JSON return 400, not 500? |
| **External API** | Does the service gracefully handle API failures? Is there caching? |
| **Code quality** | Does `golangci-lint` pass? Is naming idiomatic? No unused variables/imports? |
| **README** | Does it explain the architecture? Can the Mentor understand your decisions without reading all the code? |

---

## README Template

Your README should include (write it yourself, don't generate it mindlessly):

```markdown
# Book Exchange API

## Architecture
[Explain your layer structure and why]

## How to Run
[Commands to build and run]

## How to Test
[Commands to run tests, what's tested]

## Design Decisions
[At least 3 decisions you made and why:]
- Why I structured X this way...
- How I handle external API failures...
- My approach to error handling...

## What I'd Improve
[If you had more time, what would you add or change?]
```

---

## Tips

1. **Start with the database schema.** Define your tables first. Everything else flows from the data model.
2. **Build vertically, not horizontally.** Don't build all handlers, then all services, then all repos. Build the full stack for Users first (handler + service + repo + tests), then Books, then Exchanges.
3. **Use Claude Code planning mode** before each resource. "I need to add the Books resource. Plan the files, interfaces, and data flow."
4. **Test as you go.** Don't leave tests for Sunday night. Write the test right after the implementation.
5. **The external API integration is the trickiest part.** Leave it for last if you're running out of time — it's a bonus, not a blocker.
6. **If you're stuck for more than 20 minutes, ask Claude.** But phrase it as "I'm trying to do X and getting Y. What am I misunderstanding?" not just "fix it."
7. **Commit often.** Small, meaningful commits. "Add user repository with tests" not "WIP."

---

## Time Estimate

| Task | Estimated time |
|------|---------------|
| Database schema + setup | 1 hr |
| Users (full stack + tests) | 2 hrs |
| Books (full stack + tests) | 3 hrs |
| Exchanges (full stack + tests) | 3 hrs |
| External API + caching | 1.5 hrs |
| Middleware | 30 min |
| README + polish | 1 hr |
| **Total** | **~12 hrs** |

Split across Saturday and Sunday, that's ~6 hrs/day. Intense but doable for a motivated engineer.
