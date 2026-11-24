# Session checkpoint: local deployment result — 2026-11-24

## Learner evidence

The learner supplied two results for `curl -i http://localhost:8080` from `fundamentals-of-devops/ch1/sample-ap`:

```text
HTTP/1.1 200 OK
Content-Type: text/plain
...
Hello, World!
```

The second request returned:

```text
curl: (7) Failed to connect to localhost port 8080 after 0 ms: Couldn't connect to server
```

These match the assigned run/request/stop/request experiment. The startup log and Ctrl+C action were not separately supplied; do not claim to have observed them. The app.js source exists and matches the book's behavior. Coach read it without editing or running the learner's example.

## Assessment

- Local book walkthrough passed: expected HTTP success and body, followed by connection failure.
- Connection failure happens before an HTTP response and is different from an HTTP error returned by a running application.
- Prior guided explanations distinguish the running program from the source file and identify the friend's lack of a local server.
- Chapter remains Reading; no formal mastery score or mastered chapter awarded.
- React/Spring Boot chapter transfer exercise remains pending after the full chapter.
- Cloud resources created: none.

## Next action

Deliver the guided reading of printed pages 3–4 inside this conversation: servers, hosting, and IaaS/PaaS responsibilities. Ask which model involves less server setup for the first public sample and why. Then continue with the book's examples, checking current cloud costs and cleanup before creation.

## Reading-format update

Learner: "I don't want to leave this session. send me whatever you want me to read." Supply all required teaching and reading here, in original words grounded in the PDF. Do not send the learner away to read sections or request pasted excerpts. Practical terminal attempts remain learner-performed. No new mastery evidence was supplied with this preference update.

## Follow-up: choosing a hosting model

After the in-chat pages 3–4 lesson, the learner chose IaaS for least server setup because it involves installing Node and running the app. This is a viable IaaS plan, but the comparison with PaaS responsibility remains incomplete. Next clarify who supplies the runtime and starts the process in the book's two examples, then ask which leaves fewer server setup tasks for the learner. The earlier generic hosting question has now been answered; do not repeat it without this concrete clarification. No mastery awarded or cloud resources created.

## Sources

- Learner's pasted curl results.
- Learner-created `fundamentals-of-devops/ch1/sample-ap/app.js`.
- Local PDF, Chapter 1 printed pages 2–4.
