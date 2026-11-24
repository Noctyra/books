# Fundamentals of DevOps and Software Delivery study plan

## Info

- **Author**: Yevgeniy Brikman
- **Total chapters**: 11
- **Goal**: Learn to deploy and operate apps, using the book's examples first and transferring each chapter's idea to a small React and Spring Boot project.
- **Timeline**: learner-led; not specified.
- **Started**: 2026-11-24
- **Last session**: 2026-11-24

## Chapter plan

Core questions below are coaching prompts based on the verified table of contents, not claims of completed chapter ingestion.

| # | Chapter | Printed start | Core question | Status | Mastery | Date |
|---|---|---|---|---|---|---|
| 1 | How to Deploy Your App | 1 | How does code become a running app, and who operates its server? | Reading | Not assessed | 2026-11-24 |
| 2 | How to Manage Your Infrastructure as Code | 37 | How can infrastructure changes become repeatable and reviewable? | Not Started | — | — |
| 3 | How to Manage Your Apps by Using Orchestration Tools | 81 | How do tools keep apps running and roll out updates? | Not Started | — | — |
| 4 | How to Version, Build, and Test Your Code | 139 | How do we reproduce and verify a software change? | Not Started | — | — |
| 5 | How to Set Up Continuous Integration and Continuous Delivery | 175 | How does a change move through automated checks toward deployment? | Not Started | — | — |
| 6 | How to Work with Multiple Teams and Environments | 227 | How do deployments and code boundaries support multiple teams and environments? | Not Started | — | — |
| 7 | How to Set Up Networking | 273 | How do users and services find and reach each other? | Not Started | — | — |
| 8 | How to Secure Communication and Storage | 333 | How do we protect secrets, stored data, and communications? | Not Started | — | — |
| 9 | How to Store Data | 381 | Which storage choices fit the data, and how do we recover it? | Not Started | — | — |
| 10 | How to Monitor Your Systems | 449 | What evidence tells us whether the system works and why it failed? | Not Started | — | — |
| 11 | The Future of DevOps and Software Delivery | 493 | How should we evaluate emerging software delivery approaches? | Not Started | — | — |

### Status legend

- Not Started
- Guided: pre-reading questions offered, ready to read.
- Reading
- Ingested: learner's chapter material compiled, understanding checks pending.
- Mastered: understanding checks and practical application passed.
- Needs Review: gaps found during testing or review.

## Current position

- **Current chapter**: Chapter 1, How to Deploy Your App.
- **Current section**: Chapter 1 printed pages 18–19, on-premises versus cloud. Learner correctly explains expanding cloud capacity during a sale and returning to baseline afterward. Three practical walkthroughs/adaptations completed; no actual EC2/VM provisioning or formal chapter mastery. Cloudflare expiry remains unverified.
- **Next action**: resume next session with the unanswered application: a company already owns suitable servers, has an experienced operations team, and has steady demand; should it automatically migrate to cloud, and which two factors should it compare? Pages 18–19 comparison has been taught; do not repeat it from the start. Then cover page 20 hybrid deployment and vendor-lock-in sidebar before pages 21–23 PaaS/IaaS comparison. Learner ended study for 2026-11-24. Keep reading in chat; no resources to create and no formal mastery awarded.
- **Pre-reading answers received**: learner correctly identified the running program as what Ctrl+C stops. After a browser-relative localhost hint, correctly predicts that a friend's browser fails because no app runs on the friend's computer. Explanation observed; not yet validated through practice or a new unaided scenario.
- **Clarification to preserve**: running a local copy is necessary to use that copy via localhost; it is not required to access a deployed server using its reachable address.
- **Reading format**: all required reading delivered here in original words, grounded in the PDF. Pages 3–4 explained; pages 5–7 remote-serving adaptation passed; pages 7–14 IaaS workflow and port alignment discussed; pages 13–15 startup-script/process lesson and local adaptation completed; pages 15–17 IaaS wrap-up discussed; pages 18–19 on-prem/cloud comparison current. Do not send the learner away to read.
- **Hosting-model explanation**: learner now identifies PaaS as reducing server setup because they provide code and the start command. They used "cost" and "any extra Infra work"; distinguish reduced operating effort from monetary price and retain application/dependency/configuration responsibilities. No formal mastery awarded.
- **Source available**: local PDF readable; learner no longer needs to paste excerpts.
- **Book example state**: local walkthrough passed on learner-supplied curl evidence: HTTP 200 and Hello, World! followed by curl error 7 (no connection), matching the stop step. Startup log not supplied; a successful HTTP response provides sufficient evidence to continue. Actual source folder: fundamentals-of-devops/ch1/sample-ap. Source inspected and consistent with Example 1-1; no changes made by coach.
- **Transfer exercise state**: not assigned; one React/Spring Boot task will follow the chapter.
- **Review due**: none; no mastery evidence yet.

## Local and cloud boundaries

- First example: Node.js HTTP server run on the learner's Ubuntu computer, default port 8080. It needs no cloud resources.
- Later Chapter 1 examples: Render PaaS (printed page 5) and AWS IaaS (page 7). Flag potential charges and verify current setup and cleanup before creating hosted resources.
- Later chapters contain EC2, EKS, load balancers, AWS accounts, Route 53 domains, Secrets Manager, storage/CDN, and CloudWatch examples. Assess costs when reaching each example; do not create these in advance.
- Local exercise alternatives must be identified as adaptations, while preserving the book's original example and its operational lesson.
- **Strict constraint**: no credit-card or payment information and no paid upgrades for study exercises. Verify no-card eligibility separately from pricing. Adapt later AWS examples locally if they cannot meet this constraint.
- **Render status**: learner followed setup and clicked Deploy, which requested a card. They declined. No successful deployment reported; presence of a draft/created service is unverified. Cancel the payment flow and delete only the disposable sample service if one appears in the dashboard.
- **Railway status**: learner received "We limited this workspace after detecting unusual activity. Upgrade to a paid plan to lift this restriction automatically. Upgrade plan". No cause beyond the provider's wording is established. Do not ask for payment, change app code to fix this, or attempt to bypass the restriction. No successful deployment or cleanup reported.
- **Cloudflare status**: learner supplied HTTP 200/Hello, World! and then confirmed localhost stopped responding while Cloudflare remained available after local Node stopped. Adapted remote-serving walkthrough passed on learner report. No deployment logs or public URL supplied; no claim or upgrade requested; expiry verification pending. Preserve the distinction from persistent-process PaaS hosting.

## Session record

- [[sessions/2026-11-24-setup-and-source-verification]]
- [[sessions/2026-11-24-local-deployment-result]]
- [[sessions/2026-11-24-render-walkthrough]]
- [[sessions/2026-11-24-paas-without-payment-card]]
- [[sessions/2026-11-24-railway-restriction-and-temporary-worker]]
- [[sessions/2026-11-24-cloudflare-response-result]]
- [[sessions/2026-11-24-background-process-exercise]]
- [[sessions/2026-11-24-deployment-comparisons]]
- [[sessions/2026-11-24-end-of-day]]
