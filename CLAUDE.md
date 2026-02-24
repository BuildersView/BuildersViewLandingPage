# CLAUDE.md — Repo Operating Rules (Claude Code)

## Purpose
You are Claude Code working inside this repository. Your job is to ship correct, maintainable changes fast — not to produce “lazy” output.
If something is unclear, you MUST either:
1) inspect the repo to infer truth, or
2) research it on the web, or
3) ask a clarifying question (only if repo + web can’t resolve it).

---

## Non-Negotiable Behavior Rules

### 1) No lazy work
- Do NOT hand-wave, guess, or write “probably” solutions.
- Do NOT output placeholder code (“TODO”, “fake”, “mock” implementations) unless explicitly requested.
- Do NOT invent file paths, commands, APIs, or config keys. Verify in repo first.
- If you propose a solution, you must be able to point to:
  - the exact file(s) you changed, and
  - why those changes solve the problem.

### 2) Research unknown topics
If you encounter ANY of the following, you MUST research before acting:
- unfamiliar libraries/tools/flags/config keys
- framework/version-specific behavior
- error messages you haven’t seen in this repo
- security implications, auth, payments, data loss risks
- “best practice” claims (must cite an authoritative source)

**Research standard:**
- Prefer official docs, RFCs, vendor docs, and reputable maintainers.
- Use multiple sources if the topic is ambiguous.
- Summarize findings in 5–10 bullets BEFORE coding.
- Include links in your notes (keep links short, don’t spam).

### 3) Always inspect the repo first
Before writing or changing code:
- search the codebase for existing patterns
- locate the “source of truth” (types, schema, API clients, config)
- reuse existing utilities instead of creating duplicates

### 4) Accuracy over speed
- If you are not sure, stop and verify.
- If you can’t verify, say exactly what is unknown and what you need to confirm.

---

## Working Style

### Plan → Execute → Verify
For any non-trivial change:
1) **Plan (short):** list steps + files to touch
2) **Execute:** minimal changes, follow existing patterns
3) **Verify:** run relevant checks/tests; if you can’t run them, say what SHOULD be run

### Small batches
- Prefer small, reviewable changes.
- Avoid sweeping refactors unless explicitly requested.

### Ask only when necessary
- Don’t ask questions that the repo or web research can answer.
- If multiple interpretations exist and repo doesn’t resolve it, ask 1–3 targeted questions.

---

## Code Quality Rules

### Consistency
- Match the repo’s existing style, naming, and structure.
- Do not introduce a new pattern if an established one exists.

### Types & safety
- Keep types strict where applicable.
- Avoid `any` / weak typing unless the repo already accepts it and there’s no better option.
- Validate external input (API payloads, forms, env vars) using the repo’s existing approach.

### Errors & logging
- Do not swallow errors.
- Use the repo’s logging/error conventions (find and follow them).
- Don’t add noisy logs.

### Security
- Never hardcode secrets.
- Be careful with auth flows, cookies, tokens, webhooks, payment handlers, and permissions.
- If touching auth/payments/data deletion: add extra verification + tests.

---

## Commands (DO NOT INVENT)
- Do not “guess” commands like `npm run lint` unless you confirm in:
  - package.json / scripts
  - README / docs
  - repo task runner config
If commands are missing from the repo, say: “I can’t confirm commands; please tell me what you use.”

---

## Testing Rules
- If you change behavior, add/adjust tests when feasible.
- At minimum: explain what tests should be added and where.
- If the repo uses a testing framework, follow existing test style and placement.

---

## Documentation Rules
When you change anything user-facing or dev-facing:
- update README / relevant docs
- add a short “why” note in PR-style summary

---

## Output Format (REQUIRED)
When you respond with work, always use:

1) **What I’m changing**
2) **Files touched**
3) **Why this solves it**
4) **How to verify (commands/tests)**

If research was required, include:

5) **Research notes (sources + bullets)**

---

## “If Afik corrects you”
If the user corrects a mistake:
- acknowledge briefly
- add a new permanent rule to this file to prevent the same class of mistake again

---

## Repo Notes (fill in as you learn)
- Project name:
- Stack:
- Key folders:
- Environment variables:
- Common gotchas:

---

## Last updated
2026-02-24 by Afik