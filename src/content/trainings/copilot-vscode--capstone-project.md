---
title: "Capstone Project"
program: "VS Code Copilot"
programSlug: "copilot-vscode"
docSlug: "capstone-project"
type: "program"
order: 3
---


> Build this on Day 3. All code comes through Copilot Agent mode. Push to GitHub.
> Write the README yourself — not generated.
> **Day 4 morning, the Engineer defends every line to the Mentor.**

## Table of Contents

- [The Rules](#the-rules)
- [Pick Your Project](#pick-your-project)
  - [Option A — API Service: Event Booking](#option-a--api-service-event-booking)
  - [Option B — Interactive Dashboard](#option-b--interactive-dashboard)
  - [Option C — Full-Stack App: Link Shortener](#option-c--full-stack-app-link-shortener)
- [Shared Requirements](#shared-requirements)
- [Workflow Journal](#workflow-journal)
- [What the Mentor Checks](#what-the-mentor-checks)
- [README Template](#readme-template)
- [Tips](#tips)
- [Time Estimate](#time-estimate)

---

## The Rules

1. **All code comes through Copilot.** Agent mode is your primary tool. Use inline completions, Edit mode, and inline chat as support. You may NOT hand-write implementation code.
2. **Small hand-edits are allowed:** fixing a typo, renaming a variable, adjusting whitespace. New functions, new files, new logic — all through Copilot.
3. **The README is the one exception.** Write it yourself. It forces you to articulate your decisions in your own words.
4. **Keep a workflow journal.** This is as important as the code. See [Workflow Journal](#workflow-journal) section.
5. **Use Git throughout.** Commit after each meaningful feature. Use Copilot-generated commit messages.
6. **You already know your language.** This project tests your AI-assisted development workflow, not your programming knowledge.

---

## Pick Your Project

Choose one option based on what interests you. All options are language-agnostic — use whatever language and framework you're comfortable with.

### Option A — API Service: Event Booking

Build the backend for an **Event Booking** platform where users create events, other users book tickets, and everyone can view their bookings.

**Core Resources:**

**Events**
- `POST /events` — create an event (title, description, date, location, capacity, organizer_id)
- `GET /events` — list events with filters: `?date_from=X`, `?location=Y`, `?available=true`
- `GET /events/{id}` — get event details (include current booking count)
- `PUT /events/{id}` — update event (only by organizer)
- `DELETE /events/{id}` — cancel event (only by organizer)

**Bookings**
- `POST /bookings` — book a ticket (user_id, event_id)
- `GET /bookings?user_id=X` — list bookings for a user
- `DELETE /bookings/{id}` — cancel a booking

**Users**
- `POST /users` — register (name, email)
- `GET /users/{id}` — get profile with their events and bookings

**External API Integration:**
- When returning event details for outdoor events, enrich with weather forecast data using a public weather API (e.g., Open-Meteo)
- If the API is down or location not recognized, return the event without weather data (don't fail the request)
- Cache weather data — don't call the API on every request

**Business Rules:**
- Can't book an event at full capacity (return 409 Conflict)
- Can't book the same event twice (return 409 Conflict)
- Can't delete an event with existing bookings (return 409 Conflict, or cascade-cancel bookings — your choice, defend it)

---

### Option B — Interactive Dashboard

Build a **Data Dashboard** that fetches data from a public API, displays it with charts/tables, supports filtering, and persists user preferences.

**Requirements:**

**Data Source**
- Fetch data from a public API (e.g., REST Countries, OpenWeather, GitHub API, or any API with interesting data)
- Display at least 2 different visualizations (chart + table, or two different chart types)

**Features**
- Filtering: at least 2 filter criteria (e.g., region + population range, or language + continent)
- Sorting: clickable column headers or sort controls
- Search: text search across the displayed data
- Persistent preferences: save filter/sort preferences to localStorage or a config file
- Loading states: skeleton or spinner while data loads
- Error states: meaningful error display when API is down

**Technical Requirements**
- Component-based architecture (React, Vue, Svelte, Angular — your choice)
- At least one reusable component used in multiple places
- Responsive layout (works on mobile and desktop)
- Unit tests for at least one component and one utility function
- Clean separation: data fetching logic separated from display components

**External API Handling:**
- Graceful degradation when API is unavailable
- Data caching (don't re-fetch on every filter change if data hasn't changed)
- Rate limiting awareness (don't spam the API)

---

### Option C — Full-Stack App: Link Shortener

Build a **Link Shortener** with a web UI and API backend. Users create short links, share them, and view click analytics.

**API Endpoints:**

**Links**
- `POST /links` — create a short link (original_url, optional custom_slug)
- `GET /links` — list all links with click counts
- `GET /links/{slug}` — get link details + analytics
- `DELETE /links/{slug}` — delete a link
- `GET /{slug}` — redirect to original URL (the actual shortener)

**Analytics**
- `GET /links/{slug}/analytics` — click history (timestamps, referrers, user agents)

**Web UI:**
- Form to create a short link (with optional custom slug)
- Dashboard showing all links with click counts
- Detail view for a single link with analytics chart
- Copy-to-clipboard button for short URLs
- Responsive design

**Technical Requirements:**
- API and UI can be in the same project or separate — your choice, defend it
- Slug generation: random 6-character alphanumeric, or custom if provided
- Validate URLs before shortening (reject invalid URLs)
- Click tracking: log timestamp, referrer, and user agent on each redirect
- Unit tests for slug generation and URL validation
- Integration test for the redirect flow

**Business Rules:**
- Custom slugs must be unique (return 409 Conflict if taken)
- Original URLs must be valid (return 400 Bad Request if not)
- Redirect should be fast (302, not a page load)

---

## Shared Requirements

Regardless of which option you choose, your project must include:

### Code Quality
- Clean architecture appropriate to your language and framework
- Separation of concerns (don't put business logic in route handlers or UI components)
- Consistent error handling throughout
- No hardcoded secrets or config values

### Custom Instructions
- `.github/copilot-instructions.md` — project-wide conventions, architecture decisions, tech stack
- At least one `.instructions.md` file with `applyTo` scoping (e.g., for tests, API routes, or components)
- `AGENTS.md` with rules for Agent mode (e.g., "run tests after changes", "use conventional commits")

### Prompt Files
- At least one `.prompt.md` file for a reusable task (e.g., "add a new CRUD endpoint", "create a new component", "add tests for a module")

### Testing
- Unit tests with mocks/stubs where appropriate
- At least one test that verifies error handling (not just happy path)
- Tests should run with a single command

### Git
- Meaningful commits throughout the day (not one giant commit at the end)
- Copilot-generated commit messages (use the sparkle icon in Source Control)
- Clean commit history that tells the story of the project

### Documentation
- README written by the Engineer (see [README Template](#readme-template))
- Workflow journal (see [Workflow Journal](#workflow-journal))

---

## Workflow Journal

Keep a running journal throughout the day. **5-10 entries total** — not a novel, but enough to show your AI workflow evolution.

### Required categories (at least one entry each):

| Category | What to capture |
|----------|----------------|
| **Prompt failure** | A prompt that produced wrong/bad output. What you prompted, what happened, how you fixed the prompt. |
| **Mode choice** | A moment where you chose a specific mode (Agent vs Edit vs inline). Why that mode? Was it the right call? |
| **Instruction impact** | A moment where custom instructions (copilot-instructions.md, .instructions.md, AGENTS.md) visibly affected output quality. |
| **Agent autonomy** | A moment where Agent mode did something unexpected — good or bad. How did you handle it? |
| **Recovery** | A moment where you had to undo Agent mode changes or redirect it. What went wrong? What did you learn? |

### Journal entry format:

```
## Entry N — [Category]
**Time:** ~HH:MM
**What I prompted:** [your prompt, abbreviated]
**What happened:** [what Copilot produced]
**What was wrong/right:** [your analysis]
**What I did:** [how you fixed it / what you learned]
```

### Example entry:

```
## Entry 3 — Prompt failure
**Time:** ~11:30
**What I prompted:** "Add validation to the booking endpoint"
**What happened:** Copilot added validation in the route handler, not the service layer
**What was wrong:** Violated our architecture — validation belongs in the service
**What I did:** Re-prompted: "Move the validation logic from the handler to the
BookingService.createBooking method. The handler should only parse the request
and return the response. Follow the pattern in EventService."
Result: Copilot moved it correctly and matched the existing pattern.
```

---

## What the Mentor Checks

| Area | What the Mentor looks for |
|------|--------------------------|
| **Architecture** | Is the code well-structured? Separation of concerns? Does the project follow conventions appropriate to the language/framework? |
| **Custom instructions** | Does `copilot-instructions.md` reflect the actual project? Is it specific enough to shape Copilot's output? Are there scoped `.instructions.md` files? |
| **AGENTS.md** | Does it contain useful rules for Agent mode? Is it more than a placeholder? |
| **Prompt file** | Is the `.prompt.md` file reusable and well-structured? Would it actually help on a real project? |
| **Test coverage** | Are there meaningful tests? Do they test more than just the happy path? Do they run? |
| **Error handling** | Are errors handled consistently? Do API endpoints return appropriate status codes? Does the UI show meaningful error states? |
| **Journal quality** | Does the journal show genuine reflection? Are the entries specific (not generic)? Does the Engineer understand WHY things went wrong? |
| **README** | Did the Engineer write it (not generate it)? Does it explain architecture decisions? Can the Mentor understand the project without reading all the code? |
| **Git history** | Are there meaningful commits throughout the day? Do commit messages tell a story? Were Copilot-generated messages used? |
| **Code understanding** | Can the Engineer explain any line the Mentor points to? (This is tested during the Day 4 assessment.) |

---

## README Template

Your README should include (write it yourself, don't generate it):

```markdown
# [Project Name]

## What This Is
[1-2 sentences — what does this project do?]

## Architecture
[Explain your structure. What are the layers/modules? Why this approach?
Draw an ASCII diagram if it helps.]

## How to Run
[Exact commands to build, run, and use the project]

## How to Test
[Exact commands to run tests. What's tested, what's not.]

## Design Decisions
[At least 3 decisions you made and why:]
- Why I chose [architecture approach]...
- How I handle [error case / edge case]...
- Why I structured [specific thing] this way...
- [Trade-off you considered and which side you picked]...

## AI Workflow Reflection
[2-3 sentences: How did you use Copilot? What worked well?
What would you do differently next time?]

## What I'd Improve
[If you had more time, what would you add or change?]
```

---

## Tips

1. **Set up custom instructions first.** Before writing any feature code, configure `copilot-instructions.md`, create your `AGENTS.md`, and set up at least one `.instructions.md`. This shapes every interaction for the rest of the day.

2. **Build vertically, not horizontally.** Don't build all endpoints, then all tests, then all error handling. Build one complete feature at a time (endpoint + logic + tests + error handling), then move to the next.

3. **Use /plan before each feature.** In Agent mode, run `/plan` before building each major feature. Review the plan, adjust it, then let the agent execute.

4. **Commit after each feature.** Use Copilot-generated commit messages. This gives you a safety net and a clean history.

5. **Journal as you go.** Don't try to remember everything at the end of the day. Write journal entries when interesting things happen.

6. **The external API integration is the trickiest part.** Leave it for the afternoon if you're running behind. The core CRUD functionality matters more.

7. **If Agent mode spirals, stop it.** Click Stop, undo with Git, break the task into smaller pieces, re-prompt with tighter scope.

8. **Compare modes.** Try building one feature primarily with Agent mode and another with Edit mode + inline chat. Notice the difference. Write about it in your journal.

---

## Time Estimate

| Task | Estimated time |
|------|---------------|
| Custom instructions setup (copilot-instructions.md, AGENTS.md, .instructions.md, .prompt.md) | 30 min |
| Feature 1 (core resource + CRUD + tests) | 2 hrs |
| Feature 2 (second resource + relationships + tests) | 2 hrs |
| Feature 3 (external API integration / analytics / charts) | 1.5 hrs |
| Polish (error handling, edge cases, cleanup) | 30 min |
| README + workflow journal | 1 hr |
| **Total** | **~7.5 hrs** |

That's a full working day. Start early, take breaks, and don't try to build everything — a well-built project with 80% of features is better than a broken project with 100%.
