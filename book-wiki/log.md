# Book study operation log

## 2026-11-24: Initialize Fundamentals of DevOps and Software Delivery

**Input type**: learner goals, learner-pasted table of contents, and local PDF inspection.

**New pages**:
- index.md
- fundamentals-of-devops-and-software-delivery/meta.md
- fundamentals-of-devops-and-software-delivery/study-plan.md
- fundamentals-of-devops-and-software-delivery/mastery-map.md
- fundamentals-of-devops-and-software-delivery/chapters/01-how-to-deploy-your-app.md
- fundamentals-of-devops-and-software-delivery/sessions/2026-11-24-setup-and-source-verification.md

**Updated pages**: none; no prior wiki files were present.

**New cross-book references**: none.

**New questions**: Chapter 1 pre-reading predictions pending. No learner-generated chapter questions yet.

**Progress**: PDF located and readable; title, author, edition, table of contents, and opening local example verified. Chapter 1 Guided. No chapter ingested, tested, or mastered. No exercise attempted and no cloud resources created.

**Environment**: normal sandbox command access restored after the learner applied the Ubuntu Bubblewrap AppArmor profile fix. Read commands and PDF text extraction succeeded; kernel.apparmor_restrict_unprivileged_userns remains 1. Earlier failed save attempts did not persist any wiki files.

## 2026-11-24: Record Chapter 1 pre-reading answers

**Input type**: learner predictions, not exercise output.

**Answers**: stopping the server means "The app doesn't work"; destination of a friend's localhost URL: "I don't know."

**Updated pages**: index, study plan, Chapter 1 guide, and current session record.

**Next action**: guided process/source-file distinction and localhost perspective warm-up. Chapter 1 stays Guided. No concepts marked mastered; no review dates assigned.

## 2026-11-24: Record guided warm-up follow-up

**Input type**: learner explanations.

**Evidence**: correctly distinguishes the running program from its file. Describes localhost as the computer running the app and recognizes a friend would need to run a copy; browser-relative destination remains unclear.

**Updated pages**: study plan and Chapter 1 guide.

**Next action**: use a two-computer scenario and the browser-relative meaning of localhost. Chapter remains Guided; no exercise attempted or mastery awarded.

## 2026-11-24: Move to the first local book walkthrough

**Input type**: guided learner explanation and local prerequisite inspection.

**Evidence**: learner correctly predicts the friend's localhost connection fails because no app runs on the friend's computer. This followed a hint; no formal mastery or practical pass awarded.

**Prerequisites**: Node.js v24.21.0 and curl available. No application source exists yet in the workspace.

**Assigned**: create and run Example 1-1 locally, observe HTTP 200 and Hello, World! using curl, stop Node, and observe connection failure. Return all three outputs. No cloud resources needed or created.

**Updated pages**: index, study plan, mastery map wording, and Chapter 1 guide.

**Next action**: wait for the learner's attempt and diagnose returned output. Chapter 1 Reading; no chapter mastered; React/Spring Boot transfer task not yet assigned.

## 2026-11-24: Assess local deployment walkthrough

**Input type**: learner-supplied curl outputs and read-only source inspection.

**Result**: first request returned HTTP 200 and Hello, World!; subsequent request returned curl error 7, matching the assigned stop experiment. Local walkthrough passed. Startup log and Ctrl+C were not separately observed; no additional evidence needed to continue this walkthrough.

**New page**: fundamentals-of-devops-and-software-delivery/sessions/2026-11-24-local-deployment-result.md.

**Updated pages**: index, study plan, Chapter 1 guide, and mastery-map walkthrough count. No concepts or chapters marked mastered.

**Next action**: discuss servers and hosting on printed pages 3–4. No cloud resources created. Full chapter transfer task remains pending.

## 2026-11-24: Save preference for all reading inside the conversation

**Input type**: learner instruction: "I don't want to leave this session. send me whatever you want me to read."

**Change**: provide original guided explanations of the PDF's sections here; retain page references and actual book examples. Do not require the learner to open the PDF or paste excerpts. The book-study pre-reading flow now leads to supplied in-chat reading.

**Updated pages**: metadata/teaching agreement, study plan, Chapter 1 guide, index, and current session checkpoint.

**Next action**: deliver the pages 3–4 lesson here, then discuss a PaaS/IaaS choice for the book's sample. No additional mastery evidence or cloud resource creation.

## 2026-11-24: Record IaaS/PaaS choice and target clarification

**Learner answer**: chooses IaaS for least server setup because they can install Node and run the application.

**Assessment**: viable basic IaaS deployment steps; comparison omits PaaS doing runtime/deployment setup. Guide a concrete comparison of who performs each task. No formal score or mastery awarded.

**Updated pages**: study plan, Chapter 1 guide, current session checkpoint, and log.

**Next action**: compare responsibilities in the book's two approaches and obtain the learner's revised explanation. No cloud resources created.

## 2026-11-24: Record revised hosting explanation and assign Render walkthrough

**Evidence**: learner identifies PaaS as reducing server setup and requiring code plus node app.js. Clarify monetary cost versus operating effort and ongoing application responsibilities. No formal mastery awarded.

**Source verification**: inspected PDF pages 5–7 and official Render Free/web-service documentation. Free web services remain available; allowances, conditional overage billing, and idle wake-up behavior checked. No paid price asserted.

**Assigned**: book's cloud PaaS example using author's public repository, explicit Free compute, and no paid add-ons. Cost caveat before creation; public HTTP response with local Node stopped is the success condition. Request logs and curl output, then delete and verify cleanup after diagnosis.

**New page**: sessions/2026-11-24-render-walkthrough.md. **Updated**: study plan, Chapter 1 guide, and global index.

**State**: chapter Reading; local walkthrough passed; no Render/AWS creation, cloud result, or cleanup yet reported. React/Spring Boot transfer task remains pending after the chapter.

## 2026-11-24: Replace card-gated Render with a documented no-card option

**Learner report**: Render requested a credit card after Deploy; learner declines all payment information and asks for a free host.

**Persistent constraint**: no credit card/payment method, no paid upgrades. Verify card requirements separately from free pricing; adapt later card-required cloud exercises locally as necessary.

**Research**: Railway official Free/Trial documentation explicitly supports no card. Free includes $1 monthly usage and stops services when exhausted; Trial is $5 once for 30 days. Northflank's official pages conflict on card requirements and Koyeb's FAQ requires a card, so they were not selected.

**New page**: sessions/2026-11-24-paas-without-payment-card.md. **Updated**: metadata, study plan, Chapter 1 guide, Render checkpoint, and index.

**Next action**: learner verifies Railway Trial/Free account access without a card; then deploy the same Node.js sample using a minimal package.json adaptation if needed. Render draft/resource state remains unverified; no successful cloud deployment or deletion reported. No mastery change.

## 2026-11-24: Record Railway account restriction and assign temporary Worker adaptation

**Learner report**: Railway limited the workspace for unusual activity and requested a paid upgrade. No provider-decision cause established; this is not an app failure or reason to require payment.

**Research**: verified Cloudflare's documented unauthenticated temporary Worker preview, 60-minute expiry, and Node HTTP compatibility bridge. Alwaysdata signup itself showed a card-validation requirement, so it was not recommended.

**Assigned**: separate Worker/config files preserving the book's greeting handler, npx wrangler deployment with --temporary, and public HTTP response check while local Node stays stopped. Explicitly explain serverless runtime difference and temporary lifetime; no claim or paid upgrade requested. Do not run the learner's exercise for them.

**New page**: sessions/2026-11-24-railway-restriction-and-temporary-worker.md. **Updated**: study plan, Chapter 1 guide, prior no-card checkpoint, and index.

**State**: original PaaS provisioning blocked; adapted cloud lab not attempted as far as reported. No cloud success, deletion/expiry, or mastery awarded. Continue teaching inside this conversation.

## 2026-11-24: Record Cloudflare greeting response

**Input type**: learner-supplied HTTP response; read-only inspection of local Worker/config.

**Evidence**: HTTP/2 200, content-type text/plain, server cloudflare, Hello, World!. Successful remote response reported; local-server independence, public URL, deployment logs, and expiry not separately observed.

**New page**: sessions/2026-11-24-cloudflare-response-result.md. **Updated**: study plan, Chapter 1 guide, and index.

**Next action**: learner predicts and verifies behavior of localhost and public URL after stopping local Node. Then continue Chapter 1 IaaS teaching in chat with no-card adaptation. Cleanup verification pending. No mastery change.

## 2026-11-24: Complete adapted remote-serving walkthrough

**Learner evidence**: after local Node stops, localhost no longer responds while Cloudflare remains up.

**Assessment**: Cloudflare remote-serving adaptation passed on learner report. Two book-related walkthroughs completed including the local Node example; no concept/chapter mastery awarded. Temporary-resource expiry unverified.

**Updated**: study plan, mastery-map walkthrough count, Chapter 1 guide, Cloudflare result session, and index.

**Next action**: in-chat IaaS workflow lesson from printed pages 7–14; firewall port 80 versus app port 8080 prediction, then prepare a local practical adaptation under the no-card constraint.

## 2026-11-24: Record port-mismatch misconception

**Learner answer**: expects access to the app with a non-200 response when browser targets port 80 and Node listens only on 8080.

**Assessment**: recognizes a destination issue but conflates HTTP error responses with failure to reach an HTTP server. Understanding check remains unresolved; no formal score or mastery assigned.

**Updated**: study plan and Chapter 1 guide; reconciled the guide's earlier Cloudflare state with the subsequent passed independence check.

**Next action**: provide default HTTP port hint and ask whether the Node process can receive the request and generate any HTTP status. Await learner reasoning before advancing.

## 2026-11-24: Record revised connection-failure prediction

**Evidence**: learner now predicts connection failure, with an explanation referring to handling responses back to the user.

**Assessment**: outcome correct; clarify that the request cannot reach the app's listening port and that the existing handler already returns a status when reached. Fresh application and explanation remain pending; no mastery change.

**Updated**: study plan and Chapter 1 guide.

## 2026-11-24: Resume with fresh port application

**Request**: learner asks to continue.

**Action**: restore study state and confirm no due mastered-concept reviews. Prepare fresh port-3000 URL comparison before the startup-script lesson. Recheck PDF pages 13–15 and inspect local tool availability without running the learner's exercise.

**Updated**: study plan and Chapter 1 guide. No new mastery or practical result. Docker CLI available; VM tooling not found in PATH; Docker engine usability unverified.

## 2026-11-24: Assess fresh port application and advance to startup script

**Learner evidence**: correctly distinguishes default port 80 from explicit port 3000 and identifies the second as reaching the app. Clarify the word deploys to requests; URL access does not deploy code.

**Assessment**: fresh application passed; no formal mastery assigned.

**Next action**: in-chat lesson from printed pages 13–15 on first-boot preparation and nohup/background execution. Ask for prediction about process crash recovery, then prepare a local adaptation.

**Prerequisite limitation**: coach Docker socket inspection denied by sandbox; learner-terminal engine access remains unknown.

**Updated**: study plan, Chapter 1 guide, and index.

## 2026-11-24: Assign local background-process adaptation

**Learner evidence**: correctly predicts no automatic restart after Node exits; still refers to session termination. Clarify the distinction with a same-terminal experiment.

**Assigned**: start existing app on port 8091 under nohup, save its PID, verify greeting, terminate only that PID, wait, and verify connection failure while terminal remains usable. Learner performs the exercise. No app/source changes or cloud creation by coach.

**New page**: sessions/2026-11-24-background-process-exercise.md. **Updated**: study plan, Chapter 1 guide, and index.

**State**: exercise pending, no new mastery. Sandbox prevented port-availability inspection, so startup success is a required checkpoint before continuing.

## 2026-11-24: Pass local background-process adaptation

**Input**: learner terminal transcript and explanation, duplicated around an interrupted turn; assessed once.

**Evidence**: PID 200585, HTTP 200/Hello, World!, targeted termination, curl error 7 afterward, and usable shell prompt. Learner confirms shell survives Node exit.

**Assessment**: practical adaptation passed. Refine overgeneralization that terminal has nothing to do with Node; launching/signals still relate them. No formal concept or chapter mastery assigned.

**Updated**: background-process session, study plan, Chapter 1 guide, mastery-map walkthrough count (3), and index.

**Next action**: IaaS wrap-up, then on-prem/cloud elasticity prediction for pages 17–19. No actual VM provisioning/supervisor setup claimed; Cloudflare expiry unverified.

## 2026-11-24: Record elasticity explanation and advance deployment comparison

**Learner evidence**: cloud capacity increases for sale traffic and returns to baseline afterward. Correct guided elasticity explanation; no formal mastery score.

**Teaching checkpoint**: pages 18–19, on-prem/cloud tradeoffs. Clarify that excess resources must be released rather than assuming lower traffic releases them. Next ask about steady load on existing staffed infrastructure; page 20 hybrid/vendor lock-in remains next before PaaS/IaaS comparison.

**New page**: sessions/2026-11-24-deployment-comparisons.md. **Updated**: study plan, Chapter 1 guide, and index. No cloud creation, new practical pass, or mastery change.

## 2026-11-24: Save end-of-day checkpoint and prepare Git backup

**Learner request**: end study for today; add, commit, and push all workspace changes except the book to git@github.com:Noctyra/books.git.

**Stopping point**: pages 18–19 lesson delivered; steady-demand/existing-infrastructure application unanswered. Resume there, then page 20 hybrid/vendor lock-in and pages 21–23 PaaS/IaaS. No new mastery or practical result.

**Backup preparation**: add .gitignore for book binaries, credentials, tool state, dependencies, logs, and Git bundles. Sandbox .git is read-only and github.com DNS resolution fails, so prepare a temporary normal checkout and portable local Git bundle. Push remains pending; local preparation is not evidence of remote publication.

**Updated**: index, study plan, deployment-comparison session, and new end-of-day session.
