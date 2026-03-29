---
title: "I Built a Database MCP Server Because Existing Ones Drove Me Crazy"
date: 2026-03-29
description: "The behind-the-scenes story of building a2db: what broke with dbhub, the bugs I hit along the way, and what I learned about MCP server development."
draft: false
tags:
  - iorlas_tools
  - iorlas_agents
  - iorlas_mcp
---

This is the behind-the-scenes story. If you just want to see what a2db does, check the [GitHub repo](https://github.com/agentic-eng/a2db). This post is about the journey: what drove me to build it, the bugs I ran into, and the lessons that apply to any MCP server.

## How it started

I run a content aggregation project called aggre. Few million content records, tens of millions of comments, all in PostgreSQL. When I started using AI agents for analytical queries against this database, I needed an MCP server to bridge the gap.

[dbhub](https://github.com/bytebase/dbhub) by Bytebase was the best option. I know because I evaluated everything: Google's MCP Toolbox (40+ databases but verbose), the official Postgres MCP (minimal), PGMCP (needs an OpenAI key for NL-to-SQL). dbhub had the right design: two tools, multiple databases, clean interface.

I used it for about a day. Then the friction started compounding.

## Death by a thousand round trips

My typical analytical question: "What's the content extraction rate by domain?" That's not one query. It's five:

1. Total content count
2. Content with extracted text
3. Breakdown by domain
4. Recent activity check
5. Error rate

With dbhub, each query is a separate MCP tool call. Each call repeats the full connection string. Each result comes back, the agent processes it, sends the next one. Five round trips for one question.

By the end of the day I'd burned through tokens just repeating `{"dsn": "postgresql://user:password@host/aggre"}` dozens of times. The actual SQL was maybe 30% of the token cost. The rest was ceremony.

## The integer incident

At some point the agent ran `SELECT COUNT(*) FROM silver_content`. It crashed.

```
sequence item 0: expected str instance, int found
```

The TSV formatter was joining values with `"\t".join(row)` - which requires strings. PostgreSQL's COUNT returns an integer. So every query with a number needed an explicit `::text` cast: `SELECT COUNT(*)::text, ROUND(avg_score, 2)::text`. Every single one.

This is the kind of thing that's trivial to fix (call `str()` on values before joining) but maddening to work around query after query. The agent doesn't know about this limitation, so it writes normal SQL, gets an error, adds the cast, retries. Two tool calls wasted per query.

## The night build

I had a free evening and a clear list of complaints. The plan was simple: fix every single one.

### Batch queries

The core design decision. Instead of one query per call:

```json
{
  "connection": {"project": "aggre", "env": "prod", "db": "aggre"},
  "queries": {
    "total": {"sql": "SELECT COUNT(*) AS cnt FROM silver_content"},
    "by_domain": {"sql": "SELECT domain, COUNT(*) FROM silver_content GROUP BY domain LIMIT 5"},
    "recent": {"sql": "SELECT title, fetched_at FROM silver_content ORDER BY fetched_at DESC LIMIT 3"}
  }
}
```

One call, one connection spec (shared at the top level), named results. The agent gets everything it needs to answer "what's the extraction rate by domain?" in a single round trip.

### TSV inside JSON

The response format was an interesting problem. Pure JSON is great for structure but terrible for token efficiency - every row repeats every column name, plus braces and commas everywhere. Pure TSV is compact but you lose metadata.

The solution: JSON envelope with TSV data:

```json
{
  "total": {"data": "cnt\n58505", "rows": 1, "truncated": false, "time_ms": 4},
  "by_domain": {"data": "domain\tcount\nreddit.com\t59\ngithub.com\t18", "rows": 5, "truncated": false, "time_ms": 12}
}
```

Metadata (row count, truncation, timing) is structured and parseable. Row data is compact TSV. On a 100-row, 5-column result, this uses 40-60% fewer tokens than full JSON. The agent can still switch to `format="json"` when it needs column names on every row.

### The type casting fix

One line: call `str(value)` on every cell before formatting. Integers, floats, Decimals, datetimes, booleans, arrays, NULLs - all handled. No more `::text` casts in SQL. Sounds obvious, but the reason nobody did it is that the TSV formatter was written with the assumption that database drivers return strings. asyncpg returns native Python types. Small mismatch, big annoyance.

## The bugs I didn't expect

The interesting part of this build wasn't the features. It was the bugs that only surface when an MCP server meets a real MCP client.

### The Pydantic union trap

My first version of the `execute` tool accepted `queries: dict[str, dict] | list[dict]`. Clean type hint, both formats supported.

It worked in unit tests. It worked in my first manual test. Then it started failing intermittently in production.

```
2 validation errors for executeArguments
queries.dict[str,dict[any,any]] Input should be a valid dictionary
queries.list[dict[str,any]] Input should be a valid list
```

Pydantic's "smart union" matching tries each branch and picks the one that validates. But with MCP, the input comes through JSON serialization from an external client (Claude Code, Cursor, etc.). The JSON encoding can vary slightly between calls - different key ordering, different nesting depth. Sometimes neither branch matched.

The fix was embarrassingly simple: accept `Any`, validate manually with `isinstance` checks. But the lesson is important: **MCP tool parameter types aren't Python type hints for Python callers. They're JSON Schema generators for external clients.** Different contract, different failure modes.

### FastMCP's double-serialization

I was getting output like this:

```json
{"result": "{\n  \"total\": {\n    \"data\": \"cnt\\n58505\"..."}
```

Escaped JSON inside JSON. The tool returned `json.dumps(data)` (a string), and FastMCP wrapped that string in a TextContent, which the protocol serialized again. The fix: return a `dict` instead of a `str`. FastMCP serializes dicts directly into clean JSON. One line change:

```python
# Before (double-encoded)
return json.dumps(output)

# After (clean)
return output
```

Every FastMCP tool that does `return json.dumps(...)` has this problem. If you're building an MCP server, return native Python objects.

### The untested boundary

The MCP server file (`mcp_server.py`) was excluded from code coverage. It's a "thin wrapper" around the executor - just function signatures and a call to the core. Why test a 5-line function?

Because that 5-line function defines the Pydantic models that validate MCP input. The multi-query bug lived entirely in that untested boundary. Unit tests with clean Python dicts passed. Real MCP calls with serialized JSON failed.

After fixing this, I added integration tests that call `server.call_tool('execute', {json_args})` with realistic argument shapes. Five lines per tool. Catches serialization/validation mismatches before they reach production.

### SQL injection in schema queries

Code review caught this one. The `search_objects` tool takes a `pattern` parameter (for LIKE queries) and a `table` parameter - both from the agent, interpolated directly into SQL:

```python
f"SELECT column_name FROM information_schema.columns WHERE table_name = '{table}'"
```

An agent could pass `'; DROP TABLE users; --` as a table name. The read-only validation only applies to user queries through `execute`, not to internal schema queries. Fixed with input sanitization: `sanitize_identifier()` rejects anything with quotes, semicolons, or comment markers.

## Pre-configured connections

The feature I'm happiest with. In your project's `.mcp.json`:

```json
{
  "args": [
    "a2db-mcp",
    "--register", "aggre/prod/main", "postgresql://user:${DB_PASSWORD}@host/aggre"
  ],
  "env": {"DB_PASSWORD": "your-password"}
}
```

`--register` saves the connection at server startup. An engineer clones the repo, sets their database password, and the agent can query immediately. No login step. The `${DB_PASSWORD}` is stored as a literal reference and only expanded when the connection is actually opened. Secrets stay in environment variables, never in plaintext config files.

Connections persist across sessions in `~/.config/a2db/connections/`. Login once for a database, use it from any project. The project/environment/database triple (`aggre/prod/main`) makes multi-environment setups natural.

## What I learned about MCP development

Building a2db crystallized a few patterns I'd been developing:

**Return dicts, not strings.** FastMCP handles serialization. You handle structure.

**Accept Any for complex parameters.** Pydantic unions break across MCP clients. Validate manually.

**Test the MCP boundary.** Unit tests on clean Python objects don't catch serialization issues. Call `server.call_tool()` with realistic JSON.

**Sanitize internal queries.** Read-only enforcement protects user queries. Your own schema lookups might still be injectable.

**TSV for data, JSON for metadata.** The hybrid format is the sweet spot for token efficiency without losing structure.

I used more techniques than I can fit in this post. MCP tool design, error UX for agents, credential patterns, output optimization. That'll be a separate deep dive.

## Try it

```bash
pip install a2db
```

Five databases. All drivers bundled. [Apache 2.0](https://github.com/agentic-eng/a2db).

[GitHub](https://github.com/agentic-eng/a2db) | [PyPI](https://pypi.org/project/a2db/)
