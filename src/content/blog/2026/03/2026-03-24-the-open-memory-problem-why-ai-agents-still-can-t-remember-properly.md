---
title: "The Open Memory Problem: Why AI Agents Still Can't Remember Properly"
date: 2026-03-24
description: "Eight agent memory systems compared. Everyone solves storage. Nobody solves intelligence."
draft: true
tags:
  - iorlas_research
  - iorlas_agents
---

After weeks of evaluating agent memory systems — testing them hands-on, reading the papers, and building with them — I can confidently say: the infrastructure for agent memory is maturing fast. The intelligence layer is nowhere close.

Here's what the landscape looks like in March 2026, and why I think everyone is solving the wrong problem.

## The Big Three

### mem0 (48K GitHub stars)

The most widely adopted memory layer. Hybrid architecture: vector store + optional knowledge graph. Automatic fact extraction from conversations. 26% better accuracy than OpenAI's built-in memory, 91% lower latency, 90%+ token savings.

Their OpenMemory MCP server adds a local-first, privacy-preserving variant — your memories stay on your machine.

**The catch:** No per-memory quality signals. You can't tell if a specific memory is helping or hurting. And the extraction pipeline has a fundamental architectural issue I'll get to below.

### Zep / Graphiti (23K stars)

Best temporal handling in the space. Built on a bi-temporal knowledge graph — it tracks both *when something happened* and *when the system learned about it*. Three subgraphs: episodic (raw events), semantic (entities and relations), and community (domain summaries).

94.8% on the DMR benchmark. If your agent needs to reason about time — "what did the user prefer last month vs now?" — this is the right pick.

### Letta, formerly MemGPT

The most elegant design metaphor. The agent IS its own memory manager, using an OS-inspired hierarchy: core memory (RAM — always in context), archival memory (disk — retrieved on demand), and recall memory (searchable conversation history).

The agent reads and writes its own memory via function calls. Beautiful concept, but every agent is a memory island — no cross-agent sharing, no governance, no way to transfer learned knowledge between deployments.

## The Challengers

### OpenViking (ByteDance, 15K stars)

I'm currently evaluating this one. The interesting idea: a filesystem paradigm for context. Everything — memories, resources, skills — gets mapped to virtual directories under the `viking://` protocol, each with a unique URI.

The killer feature is tiered loading: L0 (50 tokens, abstract summary, <100ms), L1 (500 tokens, overview, <200ms), L2 (5000+ tokens, full content, on demand). Average load is 550 tokens vs 10,000 for traditional vector search. That's a 95% cost reduction.

Self-evolving: at session end, the system asynchronously analyzes results and updates memory. Built to work with OpenClaw-style agents.

### A-MEM (Zettelkasten-inspired)

Seven-field note structure with ripple updates — change one memory, connected ones cascade automatically. The most academically elegant design. Inspired by Luhmann's Zettelkasten method. Fewer stars (876), less battle-tested, but the ripple update mechanism is genuinely novel.

### Cognee (13K stars, Apache-2.0)

Best pipeline architecture. Extract-Cognify-Load with a self-improving "memify" step. 14 retrieval modes, Neo4j graph backend, ontology resolver. 70+ companies running it in production. The most enterprise-ready option after mem0.

### Honcho (Plastic Labs)

Entity-centric approach. Models users, agents, NPCs, and groups as "peers" that the system continuously learns about. SOTA on LongMem, LoCoMo, and BEAM benchmarks — the last one handles 10M+ token conversations. $5.4M raised. Interesting if your use case is modeling relationships between entities, not just storing facts.

### LangMem (LangChain)

LangChain's answer to agent memory. Flat key-value + vector search. Two modes: "hot path" (agent decides what to store in real-time) and background processing (automatic async extraction). Includes prompt refinement — procedural memory through updated instructions. The downside: LangGraph lock-in for the full feature set.

## The Unsolved Problems

After evaluating all eight, the gaps are consistent:

**Governance.** Who controls what the agent remembers? What if it "learns" something wrong and reinforces it? No system has access control, review processes, or amendment procedures for memories. You either trust the agent completely or don't use memory at all.

**Quality decay.** How do you retire stale knowledge? Only CortexGraph (29 stars, proof-of-concept) even attempts Ebbinghaus forgetting curves. Everything else accumulates memories forever. In six months of active use, your memory store is mostly noise.

**Cross-agent trust.** How do you transfer knowledge between agents without shipping garbage along with it? Mem0 shares by user_id. Letta shares memory blocks. But neither has quality signals — you're sharing raw memories with no fitness score, no provenance, no way to know if they're helpful.

**Runtime fitness.** Is this specific memory actually helping the agent perform better? No system measures per-memory impact. You know the system works (aggregate benchmarks) but not which memories contribute and which are dead weight.

## The Double-LLM Problem

Here's the one nobody is talking about.

Systems like mem0 and OpenMemory run their own internal LLM to "extract facts" from conversations. The pipeline: raw conversation → LLM extracts candidate facts → another LLM pass compares against existing store → decides to add, merge, or update.

This makes sense for passive chatbot memory — dump raw conversations in, let the system figure it out.

But when a capable client LLM (Claude, GPT-4) is already the intelligent layer — already reasoning about what to remember and making explicit `remember("user prefers 4K sci-fi")` calls — passing that pre-extracted fact to another LLM for "extraction" is pure waste. You're paying for two LLM passes on something that was already processed.

The right architecture for explicit-tool-call memory: dumb storage + smart retrieval (embeddings for semantic search) + no internal LLM. The client LLM IS the extraction engine. Don't duplicate it.

This distinction — passive ingestion vs. explicit-call memory — isn't named or discussed in the literature. But it determines whether you need mem0's full pipeline or just a vector store with an API.

One nuance: the Double-LLM architecture *does* make sense for small language models that aren't smart enough to extract facts themselves. OpenMemory's approach could be a bridge — let an SLM handle conversation flow while a separate LLM handles memory intelligence. But for frontier models? It's overhead.

## What I'm Building

I'm approaching this differently in my own system. Content for another post — but the key idea is separating the "what to remember" intelligence (which belongs in the client LLM) from the "how to store, age, and share" infrastructure (which belongs in the memory layer). The client decides. The memory layer executes.

More soon.
