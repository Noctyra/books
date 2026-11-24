# Session checkpoint: PaaS responsibilities and Render — 2026-11-24

## Learner evidence

Learner revised their IaaS choice to PaaS after a responsibility comparison: "If we want to remove as much server and infra cost as possible, definitely it's gonna be the PaaS. I wouldn't have to do any extra Infra work, I just provide the code and how to run it (node app.js)".

Recognizes reduced server-setup responsibility. Clarify operating effort versus monetary price, and continued responsibility for application code, dependencies, configuration, and data as applicable. This is guided explanation, not a full chapter mastery test.

## Assigned next step

Book's Render PaaS example, printed pages 5–7. All reading and instructions supplied in chat. Learner performs the deployment using the author's public Git repository, ch1/sample-app, Node runtime, no-op build command true, start command node app.js, and Free compute.

Before creation, explicitly flag that this is cloud work, that Free still has bandwidth/build allowances and possible paid overages if a payment method is present, and that paid upgrades/scaling/databases/disks are outside this walkthrough. If Free is unavailable or payment is required, learner should report the actual choices rather than select a paid plan.

Observable success: public HTTPS endpoint returns HTTP 200 and Hello, World! while the learner's local Node process stays stopped. Request deployment log lines and curl output, diagnose together, then guide deletion and verify service removal and endpoint shutdown.

## Current state

- Local book example completed.
- Render deployment: learner completed setup but the Deploy action requested a credit card. They declined; no successful deployment reported. Presence of a draft/created sample service is unverified.
- Cleanup: cancel payment flow; delete the disposable sample service if it appears in the dashboard. No deletion evidence yet.
- AWS: not started.
- Chapter: Reading, not mastered; full understanding checks and React/Spring Boot transfer task remain ahead.
- Spaced reviews due: none yet.

## Sources checked

- Local PDF, Chapter 1 pages 5–7.
- https://render.com/docs/free (Free compute, quotas, overage behavior, idle spin-down).
- https://render.com/docs/web-services (public Git URL, runtime/build/start fields, public URL, PORT).
- https://github.com/brikis98/devops-book (author's repository and chapter structure verified; direct sample-file fetch unavailable through the web tool).
- Current check date: 2026-11-24. No paid service prices asserted.

## Superseding constraint and continuation

Learner will not provide a credit card. Do not resume instructions that require payment information. Continue from [[sessions/2026-11-24-paas-without-payment-card]]: Railway identified as an explicitly documented no-card alternative. Keep the book's Node.js example and deployment lesson, and label this provider change as an adaptation.
