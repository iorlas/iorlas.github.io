---
title: "Mock Interview"
program: "Claude Code + Go"
programSlug: "claude-code-golang"
docSlug: "mock-interview"
type: "program"
order: 4
---


> Run this on Day 9 (Tuesday). Total time: ~1.5 hours.
> No Claude Code. No AI. No Google. Just the Engineer, their brain, and their editor.
>
> This is opinionated. It's designed to feel like a real senior Go interview where the
> Mentor knows the Engineer is fresh but expects them to think like an engineer.

## Table of Contents

- [Pre-Interview Setup](#pre-interview-setup)
- [Section 1: Warm-up & Fundamentals (10 min)](#section-1-warm-up--fundamentals-10-min)
- [Section 2: System Design (20 min)](#section-2-system-design-20-min)
- [Section 3: Live Coding (30 min)](#section-3-live-coding-30-min)
- [Section 4: Code Review (15 min)](#section-4-code-review-15-min)
- [Section 5: Concurrency Q&A (10 min)](#section-5-concurrency-qa-10-min)
- [Section 6: Architecture & Weekend Project Discussion (10 min)](#section-6-architecture--weekend-project-discussion-10-min)
- [Post-Interview Debrief (15 min)](#post-interview-debrief-15-min)

---

## Pre-Interview Setup

- Engineer has their IDE open (VS Code with Go extension)
- Whiteboard or paper available for system design
- Timer visible (Mentor manages time, Engineer shouldn't stress about clock)
- Record the session if Engineer agrees (useful for post-review)

Tell the Engineer: *"This simulates a real interview. I know you learned Go last week. I'm not looking for 10 years of production war stories. I'm looking for: can you think in Go, can you build things, can you explain your decisions. Let's go."*

---

## Section 1: Warm-up & Fundamentals (10 min)

> Purpose: Settle nerves. Check baseline understanding. Find out if the basics stuck.

Mentor picks 5-6 from this list. Go rapid-fire — don't let the Engineer ramble.

**Language basics:**
- What's the zero value of a string? A pointer? A slice? A map?
- What's the difference between `:=` and `var x = ...`?
- I have a struct with 10 fields. I pass it to a function. What happens — copy or reference?
- When do you use a pointer receiver vs a value receiver on a method?

**Error handling:**
- Go doesn't have try/catch. How do you handle errors? Why does Go do it this way?
- What's `%w` in `fmt.Errorf`? When would you use `errors.Is`?
- Show me a function signature that can fail. (Engineer should write `func Foo() (Result, error)`)

**Slices and memory:**
- What is a slice internally? (Looking for: pointer to backing array + length + capacity)
- What happens when you `append` to a full slice?
- I take a sub-slice `b := a[2:5]`. I modify `b[0]`. Does `a` change? Why?

**Scoring:**
- Engineer gets 5+ correct and is confident → strong foundation, move on
- Engineer gets 3-4 correct with hesitation → acceptable, note weak areas
- Engineer gets <3 correct → serious concern, but continue

---

## Section 2: System Design (20 min)

> Purpose: Can the Engineer think about a system before touching code? Do they ask clarifying questions?

### The Prompt

*"Design a REST API for a simple **Expense Tracker**. Users can create expenses, categorize them, and get spending reports. Multiple users, each sees only their own data. Walk me through your design."*

### What to listen for

**Clarifying questions (green flags):**
- "Do users need authentication or can I assume user_id is passed?"
- "What kind of reports — monthly totals? By category?"
- "How many users are we talking about? Does scale matter?"
- "Do expenses have receipts/attachments or just metadata?"

If the Engineer doesn't ask any clarifying questions, prompt: *"What assumptions are you making?"*

**Endpoints the Engineer should identify:**
```
POST   /users                    — create user
POST   /expenses                 — create expense (amount, category, description, date)
GET    /expenses?category=X      — list expenses with filters
GET    /expenses/{id}            — single expense
PUT    /expenses/{id}            — update
DELETE /expenses/{id}            — delete
GET    /reports/monthly?month=X  — spending by category for a month
```

**Data model:**
```
users:    id, name, email, created_at
expenses: id, user_id, amount, category, description, date, created_at

(Maybe categories as a separate table, maybe just strings — either is fine,
 but the Engineer should have an opinion and defend it)
```

**Architecture:**
- Engineer should mention layers: handler → service → repository
- Engineer should mention interfaces between layers
- Engineer should mention where validation lives (service, not handler)
- Bonus: Engineer mentions middleware for auth/logging

**Follow-up pushback questions:**
- *"You put validation in the handler. Why not the service?"* (If the Engineer did this — push them to service)
- *"What if I want to add a budget feature that alerts when spending exceeds X? Where does that logic go?"* (Answer: service layer, not handler)
- *"Categories are strings. What if someone types 'food' vs 'Food' vs 'FOOD'?"* (Looking for: normalization in service layer)
- *"How would you handle the monthly report query efficiently? One SQL query or fetch all and aggregate in Go?"* (Looking for: SQL GROUP BY, not in-memory aggregation)

**Scoring:**
- Engineer asked clarifying questions + clean layer separation + defended decisions → strong
- Engineer had a reasonable design but missed some nuances → acceptable
- Engineer jumped straight to coding, no architecture discussion → concern

---

## Section 3: Live Coding (30 min)

> Purpose: Can the Engineer write Go that compiles and works under pressure? This is the hardest section.

### The Task

*"Build the expense creation endpoint. I want to see: the handler, the service method, the repository interface, and one test. You have 25 minutes. Don't worry about perfection — I want to see how you think."*

Mentor provides this starter (or lets the Engineer start from scratch):
```go
// You can assume these exist:
// - A database connection (db *sqlx.DB)
// - A running HTTP server
// - Standard imports available

// Build: POST /expenses
// Request body: {"user_id": 1, "amount": 42.50, "category": "food", "description": "Lunch"}
// Response: 201 Created with the expense JSON
// Validation: amount > 0, category non-empty, user_id must exist
```

### What to watch for

**In the model:**
```go
type Expense struct {
    ID          int64     `json:"id" db:"id"`
    UserID      int64     `json:"user_id" db:"user_id"`
    Amount      float64   `json:"amount" db:"amount"`
    Category    string    `json:"category" db:"category"`
    Description string    `json:"description" db:"description"`
    CreatedAt   time.Time `json:"created_at" db:"created_at"`
}
```
- Does the Engineer use struct tags? (`json`, `db`)
- Does the Engineer use appropriate types? (`float64` for money is acceptable for an interview, but if the Engineer mentions `decimal` or `int64 cents` — bonus points)

**In the repository interface:**
```go
type ExpenseRepository interface {
    Create(ctx context.Context, expense *Expense) (*Expense, error)
}
```
- Is it an interface, not a concrete type?
- Does it take `context.Context`?
- Does it return an error?

**In the service:**
```go
type ExpenseService struct {
    repo ExpenseRepository
}

func (s *ExpenseService) CreateExpense(ctx context.Context, expense *Expense) (*Expense, error) {
    if expense.Amount <= 0 {
        return nil, fmt.Errorf("amount must be positive")
    }
    // ...validation...
    return s.repo.Create(ctx, expense)
}
```
- Is validation in the service, not the handler?
- Does the Engineer take the repo as a dependency (interface)?
- Does the Engineer return errors properly?

**In the handler:**
```go
func (h *Handler) CreateExpense(w http.ResponseWriter, r *http.Request) {
    var req CreateExpenseRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "invalid JSON", http.StatusBadRequest)
        return
    }
    // ...call service...
    // ...write response with 201...
}
```
- Does the Engineer check the decode error?
- Does the Engineer return proper status codes? (201, not 200)
- Does the Engineer separate HTTP concerns from business logic?

**In the test:**
```go
func TestCreateExpense_ValidInput(t *testing.T) {
    mockRepo := &MockExpenseRepository{...}
    svc := NewExpenseService(mockRepo)

    expense, err := svc.CreateExpense(ctx, &Expense{Amount: 42.50, Category: "food"})

    assert.NoError(t, err)
    assert.Equal(t, 42.50, expense.Amount)
}
```
- Does the Engineer use a mock based on the interface?
- Is it table-driven? (Bonus, not required under time pressure)
- Does the Engineer test at least one error case?

**Red flags:**
- Business logic in the handler (validation, data transformation)
- No error checking after JSON decode
- Returning 200 for creation (should be 201)
- No interface for the repository
- `panic` instead of returning errors
- No tests at all

**Time management:**
- If the Engineer is stuck after 10 minutes, Mentor gives a hint: *"Start with the model struct, then the repository interface, then the service."*
- If the Engineer finishes early, Mentor asks: *"Add a test case for negative amount."*

**Scoring:**
- Engineer's code compiles + correct layer separation + test + proper error handling → strong
- Mostly right but minor issues (wrong status code, missing one error check) → acceptable
- Doesn't compile or no layer separation → concern

---

## Section 4: Code Review (15 min)

> Purpose: Can the Engineer read and critique unfamiliar Go code? This tests understanding, not production.

Mentor shows the Engineer these code snippets one at a time. Ask: *"What's wrong with this code?"*

### Snippet 1: The unchecked error

```go
func GetUser(db *sql.DB, id int) User {
    var user User
    db.QueryRow("SELECT name, email FROM users WHERE id = ?", id).Scan(&user.Name, &user.Email)
    return user
}
```

**Expected answer:** `QueryRow().Scan()` returns an error that's not checked. If the user doesn't exist, `user` will be zero-valued and returned as if it's valid. Should be:
```go
func GetUser(db *sql.DB, id int) (User, error) {
    var user User
    err := db.QueryRow(...).Scan(...)
    if err != nil {
        return User{}, fmt.Errorf("get user %d: %w", id, err)
    }
    return user, nil
}
```

### Snippet 2: The closure bug

```go
func processItems(items []string) {
    for _, item := range items {
        go func() {
            fmt.Println(item)
        }()
    }
}
```

**Expected answer:** Classic closure bug. All goroutines capture the same `item` variable. By the time they run, `item` is the last element. Fix:
```go
go func(it string) {
    fmt.Println(it)
}(item)
```
Bonus: Engineer mentions this was fixed in Go 1.22 (loop variable scoping change), but should still know the pattern.

### Snippet 3: The DB in the handler

```go
func CreateOrderHandler(w http.ResponseWriter, r *http.Request) {
    var order Order
    json.NewDecoder(r.Body).Decode(&order)

    if order.Amount <= 0 {
        http.Error(w, "invalid amount", 400)
        return
    }

    db, _ := sql.Open("postgres", os.Getenv("DATABASE_URL"))
    defer db.Close()

    _, err := db.Exec("INSERT INTO orders (amount, user_id) VALUES ($1, $2)",
        order.Amount, order.UserID)
    if err != nil {
        http.Error(w, "db error", 500)
        return
    }

    w.WriteHeader(201)
}
```

**Expected answers (multiple issues):**
1. JSON decode error is not checked
2. Opening a new DB connection on every request (should be shared, passed as dependency)
3. `sql.Open` error is ignored (`_`)
4. Business logic (validation) is in the handler
5. No service/repository layer — handler directly writes SQL
6. No response body on 201
7. Hardcoded status code numbers instead of `http.StatusCreated`

If the Engineer catches 3+, that's strong. If the Engineer catches the architecture issue (no layers), that's the most important one.

### Snippet 4: The nil interface trap (bonus, if time allows)

```go
func getError() error {
    var err *MyError = nil
    return err
}

func main() {
    if err := getError(); err != nil {
        fmt.Println("got error:", err) // This prints! Why?
    }
}
```

**Expected answer:** A nil pointer wrapped in a non-nil interface. The interface value has a type (`*MyError`) even though the pointer is nil. An interface is only nil when both its type and value are nil. This is a famous Go gotcha.

**Scoring:**
- Engineer caught major issues in all snippets + explained why → strong
- Engineer caught obvious issues (unchecked error, closure) but missed architecture → acceptable
- Engineer missed unchecked errors → concern (this is Go 101)

---

## Section 5: Concurrency Q&A (10 min)

> Purpose: Can the Engineer talk about concurrency intelligently? Not deep expertise, but conceptual fluency.

### Questions (Mentor picks 4-5)

1. *"What is a goroutine? How is it different from an OS thread?"*
   - Lightweight, managed by Go runtime, smaller stack (~2KB vs ~1MB)
   - Multiplexed onto OS threads by the Go scheduler

2. *"I need to fetch data from 3 microservices in parallel and combine the results. How?"*
   - `errgroup.Group` — launches goroutines, collects first error, cancels context
   - Engineer should mention error handling, not just "use goroutines"

3. *"What's the difference between WaitGroup and errgroup?"*
   - WaitGroup: just waits, no error handling
   - errgroup: waits + collects errors + supports context cancellation

4. *"What's a race condition? How do you detect it in Go?"*
   - Two goroutines accessing shared state without synchronization
   - `go test -race` flag — the race detector

5. *"When would you NOT use goroutines?"*
   - When the operation is fast and synchronous
   - When adding goroutines adds complexity without meaningful speedup
   - When you have a simple sequential pipeline
   - Good answer: "Concurrency is not parallelism. Don't add goroutines just because you can."

6. *"What's a channel? When would you use a buffered vs unbuffered channel?"*
   - Unbuffered: synchronization point, sender blocks until receiver is ready
   - Buffered: sender doesn't block until buffer is full, useful for decoupling speed differences

7. *"What is context cancellation and why does it matter for HTTP services?"*
   - If client disconnects, context is cancelled, downstream work should stop
   - Prevents wasted resources on requests nobody is waiting for

**Scoring:**
- Engineer can explain concepts clearly + knows when NOT to use concurrency → strong
- Engineer knows the tools (goroutines, channels, waitgroup) but can't articulate tradeoffs → acceptable
- Engineer confuses goroutines with threads or can't explain basic channel semantics → concern

---

## Section 6: Architecture & Weekend Project Discussion (10 min)

> Purpose: Can the Engineer defend their own code? This uses the Engineer's weekend project.

### Questions

1. *"Walk me through the architecture of your weekend project. Why this structure?"*
   - Looking for: can the Engineer articulate handler → service → repo and WHY

2. *"Open [random file in their project]. Explain this function to me line by line."*
   - Catches "Claude wrote this and I don't understand it"

3. *"You used an interface for the repository. What if I told you to remove it and just use the concrete type? What breaks?"*
   - Tests break (can't mock). Swap implementations becomes impossible.

4. *"If I asked you to add Redis caching to the book details endpoint, where would you put it?"*
   - Service layer (cache before calling repo), or a new caching layer/decorator
   - NOT in the handler, NOT in the repository

5. *"What would you do differently if you started this project over?"*
   - Looking for self-awareness, not a "perfect" answer
   - Good: "I'd add better input validation", "I'd structure errors differently"
   - Red flag: "Nothing, it's perfect" or "I'd use a framework"

6. *"Show me your error handling for the external API call. What happens if the API is down for 5 minutes?"*
   - Should degrade gracefully (return book without enrichment)
   - Should not crash or return 500

**Scoring:**
- Engineer explains everything confidently, admits weaknesses, has opinions → strong
- Engineer can explain most things, has some "Claude did this" moments → acceptable
- Engineer can't explain their own code or has no opinions about tradeoffs → serious concern

---

## Post-Interview Debrief (15 min)

> The Mentor conducts the debrief. The Engineer listens, asks questions, and takes notes.

### Score Sheet

| Section | Strong | Acceptable | Concern |
|---------|--------|------------|---------|
| 1. Fundamentals | Engineer gets 5+ correct, confident | Engineer gets 3-4 correct | Engineer gets <3 correct |
| 2. System Design | Engineer asked clarifying Qs + clean layers + defended decisions | Reasonable design, missed nuances | No architecture discussion |
| 3. Live Coding | Engineer's code compiles + layers + test + errors | Mostly right, minor issues | Doesn't compile or no layers |
| 4. Code Review | Engineer caught 3+ issues per snippet | Caught obvious issues | Missed unchecked errors |
| 5. Concurrency | Engineer explains + knows when NOT to use | Knows tools, not tradeoffs | Can't explain basics |
| 6. Architecture | Engineer explains everything, has opinions | Mostly explains, some gaps | Can't explain own code |

### Verdict

- **4+ Strong:** Engineer is ready for the interview. They'll do well.
- **Mixed Strong/Acceptable:** Engineer is ready, but should prep the weak areas tonight. Mentor gives specific study topics.
- **Any Concern:** Engineer is not ready. Mentor identifies the gaps and schedules another day if possible.

### Feedback: Mentor to Engineer

Mentor gives the Engineer specific, honest feedback:
- *"Your error handling is solid. In the interview, make sure you always wrap errors with context — you did it in the test but forgot in the handler."*
- *"You hesitated on the closure bug. Review goroutine scoping — it's a common interview question."*
- *"Your architecture explanation was excellent. Lead with that in the real interview — it shows maturity."*

Don't say "you did great" if the Engineer didn't. The Engineer needs honest feedback, not confidence.
