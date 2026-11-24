# Session checkpoint: Railway restriction and temporary Worker — 2026-11-24

## Learner report

Railway message: "We limited this workspace after detecting unusual activity. Upgrade to a paid plan to lift this restriction automatically. Upgrade plan".

Treat this as an account-level gate, not a code error or evidence of wrongdoing. No cause beyond the displayed wording is known. Learner will not provide a card or pay; do not recommend a paid upgrade, duplicate accounts, identity misrepresentation, or other restriction bypass.

## Research and selected next path

- Cloudflare officially documents a temporary preview workflow: Wrangler >=4.102.0 deploy --temporary, no existing account or authentication, public Worker URL, 60-minute lifetime, deletion when unclaimed. It retains normal abuse-prevention checks, so deployment acceptance has not been established for this learner.
- Use the book's HTTP request handler through the documented node:http plus cloudflare:node/httpServerHandler bridge. This requires a separate worker.js and Wrangler config and is explicitly a serverless adaptation, not unchanged persistent-process PaaS hosting.
- The Worker listens on routing key 8080 internally; this is not a real public listening port. Public requests arrive through Cloudflare's generated HTTPS URL.
- Learner creates the separate files and runs npx --yes wrangler@latest deploy --temporary. No card, paid subscription, custom domain, or persistent claim needed for the short lab. Do not execute their exercise for them.
- Success remains public HTTP 200 and Hello, World! with the local Node process stopped. Request public URL and curl output. Avoid sharing claim URLs, which confer ownership.
- Let unclaimed temporary resources expire after 60 minutes and verify the URL stops serving the app. Cleanup is pending evidence.

## Other options inspected, not selected

- Alwaysdata's Free registration page at https://www.alwaysdata.com/en/register/?p=2012 explicitly required card validation in this read, despite documentation describing limited no-card accounts. Do not send the learner through it.
- Deno Deploy documentation describes card verification limits and a 2027 sunset; not selected.
- GitHub Codespaces offers included personal-account compute without a payment method, but it is a development environment rather than a production PaaS. Not assigned in this turn.

## Sources

- https://developers.cloudflare.com/workers/platform/claim-deployments/
- https://developers.cloudflare.com/changelog/post/2026-06-19-temporary-accounts-for-agents/
- https://developers.cloudflare.com/workers/runtime-apis/nodejs/http/
- Checked 2026-11-24; no platform success or eligibility assumed from published pricing.

## Progress

Chapter 1 Reading; local Node example passed; original Render PaaS and Railway replacement blocked; temporary Worker instructions assigned, no attempt reported yet. No React/Spring Boot transfer task completed and no chapter mastery awarded. All reading remains in this conversation.
