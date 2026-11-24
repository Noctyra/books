# Session checkpoint: PaaS without a payment card — 2026-11-24

## Learner report and constraint

Learner followed the Render instructions, but clicking Deploy requested a credit card. They will not provide payment information and requested a free replacement. This constraint persists for future book exercises, including AWS. Do not ask them to add a card, choose a paid subscription, or bypass verification.

## Deployment state

- Local Node.js example: passed previously.
- Render: blocked at payment request; no successful deployment reported. Whether a sample draft/service exists is unverified. Cancel payment flow and delete the disposable sample if present; deletion not yet confirmed.
- Railway: blocked by the workspace restriction reported below; no successful deployment confirmed.
- Chapter: Reading; no mastery change or review dates.

## Research findings

Official sources checked on 2026-11-24:

- Railway: https://docs.railway.com/pricing/free-plan and https://docs.railway.com/pricing/faqs explicitly state Free needs no credit card and includes $1 resource usage each month. When exhausted, services stop until the next cycle or upgrade. New accounts start with a $5/30-day Trial; both Trial and Free need no card. After Trial expiration, select Free and redeploy if necessary. Never choose paid Hobby for this exercise.
- Node detection: https://railpack.com/languages/node/ requires package.json for Node detection and uses scripts.start when present. Adapt the book's sample metadata if needed; app.js can preserve the original behavior.
- Northflank: https://northflank.com/pricing advertises no card, but https://northflank.com/docs/v1/application/billing/pricing-on-northflank says a payment method is required for all plans. Not selected because policy is inconsistent.
- Koyeb: https://www.koyeb.com/docs/faqs/pricing says a credit card is required. Not selected.

## Next action

Superseded by [[sessions/2026-11-24-railway-restriction-and-temporary-worker]]. Learner received: "We limited this workspace after detecting unusual activity. Upgrade to a paid plan to lift this restriction automatically. Upgrade plan". Respect the restriction and no-payment requirement; do not keep assigning Railway deployment steps. No cause for the provider decision established. Seek an ordinary supported no-card alternative without treating this as an application failure.

All reading stays in this conversation. No new cloud resources created by coach, and no cloud success or cleanup claimed without learner evidence.
