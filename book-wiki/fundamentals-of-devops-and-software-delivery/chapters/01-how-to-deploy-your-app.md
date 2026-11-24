# Chapter 1: How to Deploy Your App

- **Status**: Reading; local book walkthrough passed; chapter not ingested or mastered.
- **Source inspected by coach**: printed pages 1–7 and table of contents.
- **Learner attempt evidence**: HTTP 200 with expected body, followed by curl connection failure in the assigned stop experiment; see result below.

## Reading focus

How do we get an app running, first locally and then on a hosted server?

## Verified opening example

Source: printed pages 2–3, Example 1-1, `ch1/sample-app/app.js`.

- The book's first sample is a minimal Node.js server using the built-in `http` module.
- It returns HTTP 200, content type `text/plain`, and `Hello, World!` followed by a newline.
- It selects its port from the `PORT` environment variable, defaulting to 8080.
- The book starts it with `node app.js`; the expected startup message is `Listening on port 8080` when no alternate PORT is set.
- Opening `http://localhost:8080` should display `Hello, World!` while the process runs.
- This is a local book walkthrough, distinct from the React/Spring Boot transfer task after the chapter.
- The book specifies a minimum Node.js version of 21. Inspect installed tooling and verify current supported versions before recommending an installation; do not install an old release simply to match the publication.

## Pre-reading predictions

1. When you start a local server in a terminal, what must remain running for the browser to keep receiving responses?
2. If a friend opens your `localhost:8080` URL on their computer, which computer will their browser contact?

Earlier generic React-build and localhost questions were offered during setup but remain unanswered. Treat these questions as diagnostic prompts, not scored mastery checks.

### Learner's opening answers — 2026-11-24

- Stopping `node app.js` and refreshing: "The app doesn't work." Correct predicted outcome; why it happens has not yet been explained by the learner.
- A friend's browser opening `localhost:8080`: "I don't know." Learner identified an uncertainty; no incorrect belief inferred.
- Follow-up: ask what stops when Ctrl+C is pressed even though app.js remains on disk. Offer the minimal hint that localhost means this computer, and ask the learner to apply it from the friend's browser.
- Evidence type: predictions only, not an attempted exercise. No mastery score or review date assigned.

### Guided follow-up answers — 2026-11-24

- What Ctrl+C stops: "The program running that file." Correct distinction between the file and its running program; no practical result reported yet.
- Meaning of localhost: "it means the computer running the app. it's mine if I have developed it and they have to run it to see the results".
- Interpretation: the learner recognizes that a friend could run their own copy. Their framing still associates localhost with the app host/developer instead of explicitly with the computer making the request; clarify this rather than assuming understanding.
- Next hint: localhost means the computer this browser is on. Ask what happens when only the learner runs the sample and the friend, with no local server, opens localhost:8080.
- No formal mastery score, completed example, or review date assigned.

### Localhost scenario response — 2026-11-24

- Learner: "their browser fails to connect. because the app is not running in their computer. they have to run the node process to see the changes".
- Correctly connects the failure to the absence of a local server after a browser-relative hint. This is guided explanation evidence, not an independent mastery test or a practical result.
- Clarify that running a copy locally is necessary for that localhost URL, while a reachable deployed server can be used without the friend running their own backend.

## Assigned book walkthrough: local Node.js server

- **Source**: Example 1-1, printed pages 2–3.
- **Runs**: on the learner's Ubuntu computer; no cloud resources or accounts required.
- **Available prerequisites verified**: Node.js v24.21.0; curl at /usr/bin/curl. No package installation needed for this built-in http sample.
- **Planned folder**: /home/mohamad/books/ai-reading/fundamentals-of-devops/ch1/sample-app.
- **Learner action**: create app.js from the book, run node app.js, request http://localhost:8080 using curl -i in a second terminal, stop the Node process with Ctrl+C, and repeat the request.
- **Observable success**: startup reports Listening on port 8080; the running server responds HTTP 200 with Hello, World!; after stopping the server, curl cannot connect.
- **Evidence requested**: startup output, curl output while running, and curl output after stopping. If a step errors, return its command and error for diagnosis.
- **State**: passed based on learner's returned HTTP and post-stop connection results. Coach inspected app.js but did not create, change, or run it for the learner.
- **Distinct from transfer task**: the React/Spring Boot task remains due after the full chapter.

### Observed result — 2026-11-24

- Learner's actual folder: `fundamentals-of-devops/ch1/sample-ap`; the shorter folder name is harmless for this example.
- `curl -i http://localhost:8080` returned `HTTP/1.1 200 OK`, `Content-Type: text/plain`, and `Hello, World!`.
- The subsequent identical curl request returned error 7: failed to connect to localhost port 8080. This matches the assigned experiment of stopping Node before repeating the request; the learner did not separately paste the Ctrl+C action or startup log.
- Diagnosis: the first result proves that a connection and an HTTP exchange succeeded with the expected response. The second indicates a connection failure before an HTTP response; it is not an HTTP 500 from the application's handler.
- Source inspection found the expected built-in http server, default port 8080, and greeting. No fix required based on supplied output.
- Local walkthrough success condition met. Full chapter understanding checks and the React/Spring Boot application task are still pending.

## In-chat reading: servers and hosting, pages 3–4

- The book motivates using operated servers for production through security, availability, performance, and collaboration.
- On-premises hosting involves acquiring and operating hardware; cloud hosting involves renting resources from a provider. Renting resources does not by itself guarantee that an application is available.
- Coach initially asked the learner to read pages 3–4 and identify two personal-computer hosting risks. Learner requested that all reading be supplied in this conversation instead. Respect this format going forward.
- Provide an original explanation of availability, security, performance, and collaboration; explain owned hardware versus rented cloud resources.
- Introduce IaaS as rented low-level resources the team configures and PaaS as a platform handling more runtime/deployment work. Use the book's forthcoming AWS VM and Render service examples to ground the distinction, without creating resources yet.
- Pending follow-up after the in-chat lesson: which model would require less server setup for publishing the sample app, and why? No learner explanation of this distinction received yet.
- Reading requires no resource creation. Current pricing and cleanup must be checked before executing the later Render or AWS examples.

## IaaS versus PaaS reasoning — 2026-11-24

- Prompt: choose the model requiring least server setup for publishing the sample app and explain why.
- Learner: "I would use IaaS because we're just gonna need to install node and then run the command to run our application".
- Assessment: describes viable basic application setup on IaaS, but has not accounted for the platform doing runtime/deployment work in the PaaS example. Acknowledge feasibility, then compare the tasks the learner must perform, rather than calling IaaS unusable.
- Next: contrast preparing a virtual machine and its Node runtime with supplying code and a start command to the book's PaaS. Ask which removes runtime setup from the learner's responsibilities.
- Guided section question only; no formal mastery score, review date, or chapter pass assigned. No cloud resources created.

### Revised hosting explanation

- Learner: "If we want to remove as much server and infra cost as possible, definitely it's gonna be the PaaS. I wouldn't have to do any extra Infra work, I just provide the code and how to run it (node app.js)".
- Evidence: after comparison, recognizes PaaS handles more server setup and needs application code plus a start command. Clarify that less server work is different from a guaranteed lower bill; application code, dependencies, and configuration still require care.
- Proceed to the actual book's Render example instead of repeating the same choice question. No formal mastery test passed yet.

## Assigned book walkthrough: Render PaaS, pages 5–7

- **Location**: cloud, not the Ubuntu machine.
- **Source**: author's public repository https://github.com/brikis98/devops-book; remote root directory ch1/sample-app (distinct from the learner's local sample-ap directory).
- **Settings**: web service, Node runtime, start command node app.js, Free compute. Build command true is an explicit no-op equivalent to the book's comment-only no-build command, not a React production build.
- **Expected platform integration**: sample reads PORT supplied by the platform. Public requests use Render's generated HTTPS URL, not the learner's localhost URL.
- **Success**: deployment logs indicate successful startup, and public HTTPS endpoint returns HTTP 200 and Hello, World! while the local Node process is stopped.
- **Evidence requested**: final deployment log lines and curl -i output from the actual public URL. No credentials requested.
- **Cleanup**: after result diagnosis, delete this disposable service through its settings (book's Delete Web Service action), verify it no longer appears among active services, and verify the URL no longer serves the app. Deletion not yet reported.
- **Current state**: learner attempted all setup steps; clicking Deploy requested a credit card. Learner refused to provide it. No successful deployment reported; draft/service presence and cleanup not yet verified. Continue with the no-card adaptation below.

### Current service and billing checks — 2026-11-24

- Official Free documentation confirms Free web services; choose Free compute explicitly and avoid paid workspace upgrades, scaling, disks, or databases for this walkthrough. If a charge or required payment appears, stop and report the details rather than switching to a paid option.
- Bandwidth and pipeline minutes count against workspace allowances; overages may be billed when a payment method is present. Without a payment method, the documented limits result in service suspension or new builds being disabled instead. Inspect account usage; do not guarantee zero cost solely from a Free label.
- Free services sleep after 15 minutes without inbound traffic; waking can take about a minute. Account for this when diagnosing the first request after inactivity.
- The public-repository workflow is supported; its lack of Git-provider credentials means it does not support automatic deployments from later repository changes.
- Source pages checked: https://render.com/docs/free and https://render.com/docs/web-services. Pricing page's dynamic plan details were not available in the text response; no paid price quoted.

## No-card PaaS adaptation: Railway

- **Reason**: Render requested a credit card during deployment. Learner's firm constraint is no payment information.
- **Preserve**: use the book's same Node.js HTTP server and demonstrate a remote public HTTPS response while local Node is stopped. This is a provider adaptation of pages 5–7, not the original Render example.
- **Current official policy checked 2026-11-24**: Railway Free has no subscription fee or required credit card, includes $1 resource usage monthly, and stops services when that allowance is used. New accounts have a $5/30-day Trial, also without a card; select Free and redeploy after trial expiration if needed rather than upgrade.
- **Outcome**: Railway limited the learner's workspace for "unusual activity" and offered a paid upgrade. This is an account gate, not an app diagnostic. Do not ask for payment or attempt to bypass it. No Railway deployment completed.
- **Technical preparation**: Railway's Railpack detects Node using package.json and can start from its scripts.start entry. If the book's app directory has no package.json, add minimal metadata and a start script while preserving app.js behavior. Actual deployment setup remains ahead; no Railway account access or resource creation confirmed.
- **Other candidates**: Koyeb's pricing FAQ requires a credit card; Northflank's pricing page says no card but its billing documentation says every plan requires a payment method. Neither is a confidently verified substitute under this constraint.
- **Sources**: https://docs.railway.com/pricing/free-plan ; https://docs.railway.com/pricing/faqs ; https://railpack.com/languages/node/ ; https://northflank.com/pricing ; https://northflank.com/docs/v1/application/billing/pricing-on-northflank ; https://www.koyeb.com/docs/faqs/pricing .
- **No mastery change**: unsuccessful account provisioning is not a failure of the learner's conceptual understanding.

## Temporary remote-serving adaptation: Cloudflare Worker

- **Why**: Render requested a card and Railway restricted this learner's workspace. Preserve learning progress without requiring payment information or another signup for the temporary exercise.
- **Verified documented feature**: Wrangler >=4.102.0 supports deploy --temporary in unauthenticated sessions. It creates a temporary preview account and URL, valid for 60 minutes, with a claim URL. Unclaimed accounts/resources are deleted afterward. Cloudflare still performs ordinary rate/abuse checks; no acceptance guarantee or bypass suggested.
- **Runtime distinction**: this is a serverless Worker using a Node HTTP compatibility adapter, not the book's persistent Node.js-process PaaS hosting. The HTTP request handler and Hello, World! response are preserved; imports and Cloudflare adapter are additions. The original PaaS provisioning remains blocked; only the adapted remote-serving exercise can be assessed upon results.
- **Source/config supplied to learner**: separate fundamentals-of-devops/ch1/cloudflare-sample folder; worker.js imports createServer from node:http and httpServerHandler from cloudflare:node, uses the book's HTTP 200/text/plain handler, listens on routing key 8080, and exports httpServerHandler({port:8080}). Wrangler config names sample-app-study, points main to worker.js, and sets compatibility_date 2026-08-04, the documented default Node compatibility boundary. Leave the original local app.js untouched.
- **Important port distinction**: in this Workers API, 8080 is an internal routing key rather than an actual network listener. The public URL uses Cloudflare-managed HTTPS.
- **Learner command**: npx --yes wrangler@latest deploy --temporary. This downloads/runs the CLI and performs the learner's cloud deployment. Do not run it for the learner or log them out of an existing account; report credential/eligibility errors if any occur.
- **Success**: the printed public workers.dev URL returns HTTP 200 and Hello, World! while local Node stays stopped. Learner supplies the public URL and curl output; the claim URL is an ownership credential and should not be pasted into shared output.
- **Lifetime/cleanup**: no permanent claim or paid upgrade requested. Unclaimed preview should expire after 60 minutes; verify it stops serving the app rather than marking cleanup complete from intention alone.
- **State**: learner supplied Cloudflare HTTP/2 200 and Hello, World!, then confirmed localhost stopped responding while Cloudflare remained available. Adapted remote-serving walkthrough passed on learner report. Public URL and deployment logs not supplied; expiry remains unverified. Local worker.js and wrangler.toml inspected and consistent with the assigned handler/config. No formal mastery awarded.
- **Sources checked 2026-11-24**: https://developers.cloudflare.com/workers/platform/claim-deployments/ ; https://developers.cloudflare.com/changelog/post/2026-06-19-temporary-accounts-for-agents/ ; https://developers.cloudflare.com/workers/runtime-apis/nodejs/http/ .

## Instructor accuracy note

Separate the meaning of a localhost URL from the addresses on which a process listens. Example 1-1 omits a host argument to `server.listen`; do not repeat the page 3 localhost discussion as a guarantee that the server binds only to loopback. Verify binding behavior before discussing network exposure or adapting the example.

## Later sections

Servers, hosting, and introductory IaaS/PaaS responsibilities have been explained in chat. Render/AWS walkthroughs, detailed deployment comparisons, and DevOps evolution/adoption remain ahead. Full chapter ingestion and mastery testing have not occurred.

## Application task

Not assigned. After the chapter, give one small React/Spring Boot deployment task with a visible success condition and requested diagnostic evidence. Let the learner perform it before assessing results.

## My understanding

(Learner fills in after reading and discussion.)

## My takeaway

(Learner fills in after completing the chapter.)

## Remote-serving result and IaaS transition — 2026-11-24

- Learner reports local app stopped responding while Cloudflare remained up. This follows the supplied HTTP 200/Hello, World! response. Adapted remote-serving walkthrough passed; full chapter mastery remains unassessed.
- Explain the mechanism: stopping the learner's local Node process does not stop Cloudflare's deployed Worker handler.
- Next guided reading, printed pages 7–14: IaaS provides a VM; select an OS image and machine resources, install Node, place the app, start the process, and configure network access. The book uses EC2 and a first-boot user-data script. Its app uses port 80, matching the firewall rule, while the initial local app used 8080.
- Understanding prompt: if the VM firewall allows only port 80 and the app listens only on 8080, can http://SERVER_IP reach it? Ask for the reason. Assume no proxy/port forwarding.
- No AWS resources or cloud commands assigned. Future local VM adaptation must be identified as such and checked against available prerequisites. Do not execute the Amazon Linux startup script on the learner's Ubuntu machine. Temporary preview expiry is still unverified.

## Port mismatch prediction: remediation pending — 2026-11-24

- Learner: "I think you can have access to the app, but the response won't be 200, because we're not accessing the right url".
- Partial insight: destination matters. Gap: assumes the app can generate an HTTP error status even when the request does not reach its listening port.
- Guided hint: plain http defaults to port 80; an HTTP status requires an HTTP server to receive the request and reply. In the stated scenario, no process listens on 80 and Node listens only on 8080, without a proxy or port forwarding. Ask whether Node can receive that request and send any status.
- Keep connection failure distinct from an HTTP error response. Do not assert a particular timeout or refusal outcome without knowing firewall/host behavior. No score or mastery awarded; wait for explanation and a fresh application before resolving the misconception.

## Port mismatch follow-up — 2026-11-24

- Learner now predicts connection failure: "because we have to handle the responses going back to the user too, if we want to see that response code".
- Outcome prediction is correct; causal explanation still needs precision. The request never reaches Node's listening port. The existing handler already sends a status when reached; missing response-handling code is not the issue in this scenario.
- Give this clarification, then retain a fresh application/explanation as pending. Do not mark the misconception resolved or award mastery from the corrected outcome alone.

## Resume: fresh port application assigned — 2026-11-24

- Learner requested continuation. No new conceptual explanation or practical evidence supplied by this request; previous misconception is not yet marked resolved.
- Fresh scenario: server reachable, Node greeting app running and accepting network connections on port 3000, firewall permits inbound 3000, no listener on 80, no proxy/forwarding. Ask which of http://SERVER_IP and http://SERVER_IP:3000 reaches the app and why the other produces no app-generated HTTP status. Wait for learner reasoning before advancing to the startup-script lesson.
- Rechecked local PDF printed pages 13–15: user data installs Node, writes the greeting app, and starts it using nohup/background execution. The book explicitly notes absent crash/reboot supervision. Teaching this section remains next, not completed.
- Read-only prerequisite check: docker CLI, Node, curl, and systemd-run found. qemu-system-x86_64, qemu-img, multipass, virsh, virt-install, and VBoxManage not found on PATH; /dev/kvm not present in this check. Docker engine accessibility not checked. Do not present Docker as a VM or claim a VM lab is ready. No installation, cloud provisioning, app execution, or exercise completed by coach.

## Fresh port application result and startup-script lesson — 2026-11-24

- Learner correctly says the first URL requests port 80, with no deployed service there; the second reaches port 3000 and receives the greeting response. Fresh port application passed. Clarify wording: the second URL requests an existing service; it does not deploy it. No formal mastery score or chapter mastery assigned.
- Current guided reading: printed pages 13–15, Example 1-2. Explain first-boot user data, installation of Node, creation of app.js, and nohup node app.js &. The book app defaults to 80 to match its firewall rule. The ampersand backgrounds the process; nohup makes it ignore hangup signals. Ask whether this setup restarts the process after a crash and why. Process-supervision explanation is pending the learner's answer.
- Book's Amazon Linux installer/root workflow is not assigned for execution on Ubuntu. A local bootstrap/process exercise will need to be explicitly identified as a limited adaptation, not an actual EC2 or VM deployment.
- Docker engine inspection in the coach sandbox failed with socket permission denied/operation not permitted. This establishes only that this sandbox cannot inspect the daemon; it does not establish whether Docker works in the learner's normal terminal. No privilege changes, installation, or app execution attempted.

## Crash recovery prediction and local adaptation assigned — 2026-11-24

- Learner correctly predicts no automatic restart and the need to start Node again. Their explanation refers to the session terminating; clarify that the Node process can exit while the terminal session remains open.
- Explain a process supervisor as a separate manager which can watch the application and restart it according to configured policy. nohup only changes hangup handling; background execution does not provide a restart manager.
- Assigned local exercise: in existing ch1/sample-ap, start the greeting app with PORT=8091 nohup node app.js, redirect output to a task log, and save $! as study_node_pid in the same interactive shell. First curl must return HTTP 200/Hello, World!. Then signal only that newly launched PID, wait for its exit, and curl again. Observe connection failure while the same terminal remains usable. Intentional termination demonstrates process exit, not an actual crash.
- Source inspected: app reads process.env.PORT with fallback 8080. No source edits needed. Port availability inspection through ss was denied by sandbox netlink restrictions, so do not claim 8091 was verified free. If initial curl fails or log shows EADDRINUSE, stop and diagnose; do not advance to termination as if startup succeeded.
- This covers only the background-start/process-lifecycle part of Example 1-2 locally; no VM, first-boot provisioning, Node installation, cloud firewall, or IaaS deployment completed. Coach has not executed the learner's task. No practical pass or mastery awarded yet.

## Local background-process result — 2026-11-24

- Full learner transcript confirms PID 200585 launched; localhost:8091 returned 200/Hello, World!; targeted termination and wait completed; subsequent curl returned error 7; shell remained usable.
- Adapted exercise passed. This is one exercise despite duplicate submission around an interrupted turn. Three book-related walkthroughs/adaptations completed; no actual EC2/VM deployment or formal chapter mastery claimed.
- Learner now distinguishes process exit from shell usability but overgeneralizes that terminal has nothing to do with Node. Clarify that they are separate processes with launch and possible signal relationships.
- Wrap up printed pages 15–17: the book's simple startup lacks supervision; automatic crash recovery and boot startup require configured management. A single EC2 HTTP deployment does not itself supply HTTPS/domain management, load balancing, or redundant app instances. Later chapters address these concerns.
- Next pre-reading scenario for pages 17–19: baseline two servers, temporary need for twenty during a short monthly spike. Ask which model (owning hardware on prem versus provisioning rented cloud VMs) lets you acquire temporary capacity, and what to do with extra capacity after the spike. Do not require an AWS account or create resources.

## Elasticity prediction result and deployment comparison — 2026-11-24

- Learner chooses cloud for temporary sale traffic, explains adding processing capacity and returning to baseline resources afterward. Correct guided explanation of elasticity; no formal mastery score assigned.
- Clarify actual resource scaling: traffic returning to normal does not itself remove provisioned VMs. Resource removal may be manual or implemented through configured autoscaling. The example adds/removes instances (horizontal scaling), rather than necessarily enlarging one machine.
- Current in-chat reading, printed pages 18–19: cloud advantages include elasticity, faster provisioning, provider-operated physical infrastructure, and managed services. On-prem may fit existing effective infrastructure, steady predictable demand, high data-transfer workloads, or organizational requirements. Avoid claiming cloud is always cheaper or that provider physical maintenance removes application operating duties.
- Follow-up application: company already owns suitable servers, has staff operating them, and sees steady demand. Ask whether migration to cloud is automatic and what workload/cost/operating factors to compare. Historical provider prices and market shares in the book are not asserted as current.
- Next reading remains page 20 (hybrid and vendor-lock-in argument), then pages 21–23 (PaaS versus IaaS); these have been inspected but not yet fully taught.
