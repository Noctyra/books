# Local background-process exercise — 2026-11-24

## Learner evidence

Learner says nohup will not bring Node back and they need to run the command again; refers to the session being terminated. Record correct restart prediction with a remaining process/session distinction. Repeated delivery of the same answer after an interrupted turn is one piece of evidence.

## Assigned adaptation

Book: Chapter 1 printed pages 13–15, background startup in Example 1-2. Use existing fundamentals-of-devops/ch1/sample-ap/app.js, whose PORT environment variable support was inspected. No VM or cloud provisioning. Learner performs the commands; coach does not run them.

1. Start Node with PORT=8091 and nohup/background execution, redirecting output to /tmp/book-study-node-8091.log; save the spawned PID using $! in study_node_pid.
2. Curl http://localhost:8091 and require HTTP 200/Hello, World!. If it fails, stop and return the log for diagnosis.
3. In the same terminal, terminate only study_node_pid and wait for that process to exit. An intentional stop models process termination; do not call it an observed crash.
4. Curl the same URL with a short timeout and observe connection failure. Confirm the terminal is still usable. This demonstrates that process exit does not imply terminal/session exit, and nohup has no restart policy.

## Evidence requested

Both curl outputs and whether the terminal remained usable. Do not mark passed from instructions alone.

## Cleanup and limitations

The explicit termination stops the app created for the exercise. The task log may be removed after diagnosis; no cloud resources created. Port availability was not established by coach because sandbox netlink access was denied. No supervisor setup, OS image, first-boot automation, firewall rule, or actual IaaS deployment is claimed.

## Result: passed on learner evidence

Learner returned a complete terminal transcript:

- Background job launched with process ID 200585.
- First request to localhost:8091 returned HTTP/1.1 200 OK and Hello, World! at Tue, 24 Nov 2026 15:24:22 GMT.
- kill targeted the saved PID and wait completed; shell reported Terminated.
- Subsequent request returned curl error 7, failed connection, with no HTTP status.
- The shell prompt remained usable. Learner explicitly confirmed this and said the terminal has nothing to do with the Node process.

The practical adaptation passed. The last statement needs a qualification: shell and Node are separate processes, but the shell launched Node and terminal hangup/foreground signals can affect processes. This test demonstrates Node can exit while the shell continues; it does not demonstrate complete independence in all circumstances. Intentional process termination was observed, not an unhandled application crash or reboot.

The same transcript was delivered twice around an interrupted turn; count it as one completed exercise. The created Node process was stopped on learner evidence. Log removal is optional; no cloud resource was created by this local exercise.

## Next

Recap supervision and remaining IaaS limitations from printed pages 15–17. Begin pages 17–19 comparison with a variable-capacity scenario. Chapter remains Reading; no formal mastery assigned. Actual VM provisioning, supervisor configuration, and Cloudflare expiry verification remain uncompleted.
