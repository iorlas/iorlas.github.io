# Team

This guide defines the ideal squad setup to ensure clarity, fast delivery, and effective collaboration with clients. Every squad consists of discovery and implementation functions, supported by cross-functional rituals.

## Squad Overview: Roles and Allocation

| Role                  | FTE         | Responsibilities                                      | Reports To      | Ideal Personality (MBTI)     |
|-----------------------|-------------|-------------------------------------------------------|------------------|-------------------------|
| Product Owner (PO)    | 0.5–1.0     | Stakeholder mgmt, roadmap, priorities                 | PMO / Stakeholders     | ENTJ / ENFJ            |
| Business Analyst (BA) | 1.0         | Workflows, story clarity, backlog mgmt                | PO (functional)  | ISFJ / ENFJ            |
| Tech Lead (TL)        | 1.0         | Delivery driver, coordination, squad velocity         | Stakeholders                | ESTJ / ENTJ            |
| Solution Architect    | 1.0         | Architecture, integration flows, mentoring            | Tech Lead        | INTJ / INFJ            |
| API Engineers         | 1–3         | API services, DB schemas, tests                       | Tech Lead        | ISTJ / INTP / ENFP            |
| UI Engineers          | 1–3         | UI components, OpenAPI client integration, UX polish  | Tech Lead        | ISTJ / INTP / ENFP             |
| Designer              | 0.5         | Flow diagrams, edge cases, usability feedback         | PO / BA          | INFP / ISFP            |
| DevOps           | 0.5 | Release pipelines, deployment safety, test gates      | Tech Lead        | ISTP / ESTJ            |
| QA           | 0.5 - 2   | Manual QA with conversion to QA-Automation. Regression, Smoke, Exploratory testing      | Tech Lead        | ISTP / ESTJ            |

## Discovery

Every squad has a core "discovery" team which prepares the workload for the rest of the team. Inspired by "3 Amigos", which is essentially a dialog from 3 Points of Views. Expected output: Clear stories with acceptance criteria and flow diagrams.


- Business PoVs
  - **PO:** Owns backlog and priorities  
  - **BA:** Breaks down workflows into actionable stories  
- Implementation PoVs
  - **Designer:** Provides edge cases and experience validation
  - **TL:** Technical feasibility, pre-spike
  - **SA (mandatory):** Validates architecture early
- Quality PoVs
  - **QA:** Provides edge cases and experience validation


## Rituals & Ownership

| Ritual              | Driver           | Backup / Replacement            | Goal                                |
|---------------------|------------------|--------------------------------|-------------------------------------|
| Daily Standup       | Tech Lead        | The next most organized person. No one on the call for the first 10 minutes? Write the report in the chat and move on     | Blocker resolution, next steps      |
| Planning            | PO               | BA + TL                        | Clear sprint goal, split tasks      |
| Grooming (3 Amigos) | SA               | TL (if SA not available)       | Stories clarified and acceptance set|
| Demo                | PO               | TL + Devs                      | Stakeholder feedback on live product|
| Retrospective       | TL               | The next most organized person    | Actionable insights for improvement |
