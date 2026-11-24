# Session: setup and source verification — 2026-11-24

## Learner intent

Study the local PDF chapter by chapter using the book's examples first. Learner is a React/TypeScript developer on Ubuntu, comfortable building apps and new to operations. After each chapter, assign one React/Spring Boot transfer task, state an observable success condition, wait for the learner's attempt, and diagnose the actual result. Identify local work and flag cloud costs before resource creation. Save progress after sessions.

## Completed

- Learner supplied full table of contents: 11 chapters verified.
- Diagnosed sandbox startup failure: `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`.
- Reported environment: Codex CLI 0.172.0; Ubuntu 24.04.1 LTS; Bubblewrap 0.9.0.
- Approved read-only diagnostics found AppArmor denials of `setpcap` and `net_admin` for `/usr/bin/bwrap` under the generic `unprivileged_userns` profile; the distribution's extra Bubblewrap profile was absent.
- Learner reported completing the documented fix: install apparmor-profiles and apparmor-utils, copy bwrap-userns-restrict to /etc/apparmor.d, and load it using apparmor_parser.
- Verified subsequent normal sandbox commands succeed and `kernel.apparmor_restrict_unprivileged_userns` remains 1.
- Located and extracted text from the learner's PDF. Verified author Yevgeniy Brikman, first edition May 2025, first release 2025-05-20, 552 PDF pages, and opening sample on printed pages 2–3.
- Initialized persistent book study records. No earlier wiki records existed.

## Not yet demonstrated

- No answers to pre-reading predictions.
- No chapter reading report or learner-generated understanding.
- No book example attempted or project transfer task assigned/completed.
- No mastery assessment, mastered concepts, or review dates.
- No cloud resources created.

## Resume point

Chapter 1 Guided. Ask the pending predictions recorded in the chapter note, then work through Example 1-1 (the Node.js HTTP server, default port 8080) on the learner's machine. The PDF is accessible; do not request pasted chapter text again. Avoid doing the learner's exercise for them. Continue section by section, discussing cloud cost and cleanup before any Render/AWS resource creation.

## Open setup choices

- Timeline: unspecified; learner-paced.
- Study project's exact scope: not selected or created.
- Spring Boot/Java familiarity and installed prerequisites: not yet assessed.

## Sources

- Learner's instructions and terminal output in this conversation.
- Local PDF: copyright page, table of contents, preface code-repository section, Chapter 1 printed pages 1–3.
- Fix reference supplied during troubleshooting: https://learn.chatgpt.com/docs/sandboxing

## Follow-up: Chapter 1 opening predictions

Learner answered: (1) "The app doesn't work" after stopping the server; (2) "I don't know" for a friend's localhost URL. The first outcome is correct but its mechanism is not yet explained. The second is an acknowledged knowledge gap. The earlier lack of answers recorded above describes the setup checkpoint before this follow-up.

Next: a short guided warm-up on the running process versus app.js on disk, and localhost as this computer from the browser's perspective. No exercise run, full chapter ingestion, mastery assessment, or cloud activity has occurred. Chapter 1 remains Guided.
