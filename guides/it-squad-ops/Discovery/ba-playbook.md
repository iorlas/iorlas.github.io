# BA Playbook

This is BA playbook. As a BA, your job is to **extract intent**, **pinpoint uncertainties**, and **translate business needs into testable behavior**.

This playbook applies across squads and industries. It focuses on *principles* and *mindset*, not tools or templates.

- Collaborate with stakeholders to uncover why something is needed
- Break down goals into concrete behavior
- Ensure delivery teams build the right thing, not just what was asked

## Before the Start

Ask yourself:
- Do I understand *what triggered* this initiative?
- Can I explain *what success looks like* from the business side? Goals?
- Am I automating the process which already manually works, or it is a fresh process strait to the automation?
- Do I know which people are most impacted by this process today?


If not — don’t move forward. You’re guessing, and guessing kills squads.

## Workflow

- Project Kickoff
- Identify the Goals
- Identify Stakeholders & Map Roles
- Draft Lean Personas (optional, but helpful)
- Understand Current Process / Context
- Conduct Discovery Interviews
- Clarify WHY feature or idea matters
- Define User Scenarios and Workflows
- Write Acceptance Criteria
- Review with 3 Amigos
- Ensure It’s Testable & Buildable
- Mark Ticket as READY

## 🔍 Step-by-Step Guide

### Why
Ask:
- “What problem are we solving?”
- “What would happen if we don’t fix this?”
- “Who is hurt today by this being broken?”

If you don’t know the *why*, don’t move on.

### Identify Stakeholders and Map Roles
- Who will use this?
- Who pays for this?
- Who has approval?
- Who supports it?

**Map roles** to see gaps, blockers, or conflicts.

### Draft Lean Personas
Focus on:
- Role
- Goal
- Frustration

### Discovery Interviews
Talk to real users or SMEs.
Ask:
- “Walk me through your day”
- “What’s the worst thing about this process?”
- “What do you do when it fails?”

### Document Existing Workflow
Use:
- Flow diagrams
- Bullet points



### Define User Scenarios
Use this format (INVEST):
> As a [role], I want to [action], so that [value].

Also define:
- Preconditions
- Alternate flows
- Failure handling


### Acceptance Criteria
Write testable, clear criteria:
```gherkin
GIVEN I’m on the invoice page  
WHEN I click “Download PDF”  
THEN I should get the correct invoice file
```

### 3 Amigos Review (BA + QA + TL/SA)
You’re not done until:
- Everyone understands the scenario
- It can be tested
- It can be built without assumptions

### Mark Ticket as Ready
Check:
- Why is clear
- Roles and personas mapped
- Scenario defined
- Acceptance criteria testable
- Squad reviewed


## PO Responsibility Splitting

If there’s **no formal Product Owner**, the BA works **directly with stakeholders** and coordinates with the Tech Lead.

Responsibilities split like this:

- BA
  Discover intent, define behavior, support design/testing
- TL
  Feasibility, delivery timeline, tech strategy
- Stakeholders
  Validate direction, business priorities, constraints

## Post-Delivery Reflection

Mature BAs **check if their work actually worked**.

- Ask users: “Did this solve your problem?”
- Review bugs or rework: Were edge cases missed?