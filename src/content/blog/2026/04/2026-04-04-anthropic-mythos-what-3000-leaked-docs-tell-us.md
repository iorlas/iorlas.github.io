---
title: "Anthropic Mythos: What 3,000 Leaked Documents Actually Tell Us"
date: 2026-04-07
description: "Two separate Anthropic leaks in five days. A new model tier above Opus. An always-on agent that dreams at night. What Mythos, KAIROS, and 512K lines of source code reveal about the next generation of AI."
image: /blog/mythos-kairos-hero.png
draft: false
tags:
  - nb_research
  - nb_anthropic
  - nb_agents
---

Two weeks ago, a CMS misconfiguration at Anthropic left ~3,000 unpublished internal documents on a public server. Security researchers [Alexandre Pauwels](https://www.linkedin.com/in/ajpauwels/) (Cambridge) and Roy Paz (LayerX Security) found them. Fortune broke the story. Anthropic confirmed within hours.

Five days later, Claude Code's source code leaked separately via npm. 512,000 lines of TypeScript. Two incidents, one company, five days.

I spent the last two weeks going through all of it.

## The model

Inside the CMS: a draft blog post about **Claude Mythos**. Anthropic's own words: "by far the most powerful AI model we've ever developed."

Not an Opus upgrade. A **new tier entirely**, internally called **Capybara**. ~10 trillion parameters. Trained on Nvidia GB300 chips. Anthropic confirmed it represents "a step change" in coding, academic reasoning, and cybersecurity.

[Andrew Curran's](https://x.com/AndrewCurran_) analysis on X: three weeks before the leak, rumors circulated that one lab completed its largest ever training run. The model performed **roughly twice as well as scaling laws predicted**. If true, that's not iteration. That's an architectural breakthrough.

## The infrastructure behind it

The Claude Code source tells a bigger story. Anthropic isn't building a chatbot upgrade. They're building an **operating environment for agents**.

- **KAIROS** - always-on background agent. Monitors your repo, subscribes to GitHub webhooks. At night runs autoDream that **consolidates your memory while you sleep**. 150+ references in the codebase.
- **ULTRAPLAN** - sends complex planning to a remote Claude for up to 30 minutes of deep thinking.
- **Coordinator Mode** - parallel agents with strategic coordination. Already activatable via `CLAUDE_CODE_COORDINATOR_MODE=1`.
- **Bridge** - control your local CLI from your phone.

The source also references **Opus 4.7**, **Sonnet 4.8**, and "Capybara/Mythos v8."

Some of these you can already try:

```bash
# Coordinator Mode - parallel workers
CLAUDE_CODE_COORDINATOR_MODE=1 claude

# Fork Sub-agent - adversarial verification
FORK_SUBAGENT=1 claude
```

And BUDDY (the Tamagotchi inside your CLI, 18 species, rarity tiers) is already live. Just open Claude Code.

## What's happening around it

OpenAI finished pre-training their next model (codenamed **SPUD**). Killed Sora entirely to redirect compute. DeepSeek v4 expected next month. Gemma 4 dropped this week, community already adopting it as a daily driver.

Everyone's cooking at the same time. Not any single model matters here. **The convergence does.**

## The cybersecurity shockwave

CrowdStrike dropped 7%. Palo Alto Networks fell 6%. Nasdaq lost over 2%.

Anthropic's draft states Mythos is "currently **far ahead of any other AI model** in cyber capabilities." In February, their Red Team published that Opus 4.6 independently found 500+ high-severity vulnerabilities in production open-source software. Mythos sits above that.

A researcher at a San Francisco conference demonstrated it finding **zero-days in Ghost** (50,000-star GitHub repo) that no human had found. CNN called it "a watershed moment."

Anthropic's response was unprecedented: **security researchers get early access before general release**. No AI lab has structured a release this way before.

[Peter Wildeford](https://x.com/peterwildeford/status/2037527103713714288), quoted in [Zvi Mowshowitz's](https://thezvi.substack.com/p/ai-162-visions-of-mythos) analysis, noted the irony: "This entire leak happened because of a CMS misconfiguration, exactly the **basic security hygiene failure** that these cyber-capable models were supposedly going to help defenders prevent."

That's not a bug in their process. That's how security actually works. Breaking systems is always easier than securing them. Most holes come from wrong bridging between software pieces, unintuitive gaps in integrations. AI development is now faster than the infrastructure around it. The race between people using AI to fix things and people using AI to break things has already started.

## The technical details of the leak

For those curious how 3,000 internal documents ended up public: Anthropic uses [Sanity.io](https://sanity.io) as their headless CMS (project ID `4zrzovbb`). By default, Sanity allows unauthenticated API access to read all published content. The draft blog post about Mythos was queryable through Sanity's API endpoints via a GROQ query fetching document with ID `featureMythos`.

One toggle switch. 3,000 documents.

The Claude Code source leak was a separate incident entirely: a `.map` file left in the npm package (v2.1.88) due to a missing `.npmignore` entry.

And here's the part that still makes me laugh: the source code contained **Undercover Mode** (`src/utils/undercover.ts`, 89 lines). It auto-activates for Anthropic employees on public repos and strips AI attribution from commits. The system prompt injected: "NEVER include internal model codenames (animal names like Capybara, Tengu), unreleased model version numbers (e.g., opus-4-7, sonnet-4-8)."

The mode designed to prevent leaking internal info **leaked 22 private repository names**, including `anthropics/casino`, `anthropics/trellis`, `anthropics/forge-web`.

## What the community thinks

The split is roughly 50/50 between "genuine leak" and "marketing for the IPO."

Top Reddit comment: "Lol, fantastic marketing." HN: "This pattern of AI companies describing their own products as so spectacularly effective that they're dangerous is a remarkable piece of propaganda engineering."

The leak landed right before an invite-only CEO retreat at an 18th-century English manor where Dario Amodei would showcase unreleased capabilities.

[George Hotz's](https://geohot.github.io/blog/jekyll/update/2026/03/30/two-worlds.html) contrarian take: "**Capability and value are not the same thing.** AI can keep getting better super fast, but the value of anything it produces by itself is low."

[Nate B Jones](https://www.linkedin.com/in/natebjones/) laid out a practical readiness framework. Four areas to audit before Mythos-class models arrive:

- **Prompt scaffolding** - how much is there because the model needs it vs because you needed the model to need it?
- **Retrieval architecture** - stop over-specifying RAG. Let the model decide what to pull into context.
- **Hardcoded domain knowledge** - count your rules. Many can be inferred from examples alone.
- **Eval gates** - move toward one comprehensive eval at the end instead of intermediate checkpoints.

Per Nate: "**The art of prompting is increasingly about what you leave out.**"

## My take

I've been building with Claude Code daily. Skills, hooks, MCP, memory, multi-agent orchestration. I built a **KAIROS-like system** based on process mining four months ago. An **OpenClaw-like orchestration** six months before OpenClaw existed. So I have some context for what's coming.

**60% of announcements in this industry are noise. 40% are real.** Most people can't tell which is which anymore. Every six months something actually changes the game, and it gets dismissed because last month's "revolution" was just an iteration.

**The bottleneck isn't the model.** It's that most people still treat AI as a chat box. They haven't restructured how they brainstorm, decompose tasks, or reflect on their own work. If you can't do that with current tools, **Mythos won't help**.

**Don't wait for it.** What you have right now is already beyond what most people around you understand. **The gap between "uses AI" and "works with AI" is getting wider every month.** Pick which side you're on.
