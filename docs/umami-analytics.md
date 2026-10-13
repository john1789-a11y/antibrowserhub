# Umami Cloud Hobby setup — 2026-10-13

## Status and scope

The real public website ID was provided separately, and the main agent configured it in the Vercel Production environment. No account ID is hardcoded in source. Event collection still requires a new production build and deployed verification. With no valid `NEXT_PUBLIC_UMAMI_WEBSITE_ID`, the script is not loaded and clicks are neither queued nor sent. The website ID is a public tracking identifier, not an account password or API secret.

We use Umami only for `affiliate_click`. Existing Vercel basic traffic analytics and Speed Insights remain. This removes the Vercel Pro custom-event requirement. We do not turn on Umami automatic pageviews, click autocapture, performance tracking, identify/user IDs or session replay. Vercel pageviews and Umami clicks are separate data sets without an automatic visitor-level funnel or shared identity.

## Free plan and quota

As checked on 2026-10-13, [Umami Cloud Hobby](https://umami.is/pricing) includes 100,000 events/month, one website and six months of retention. Register for Hobby, not a paid-plan trial. No paid plan is selected by this integration.

[Cloud usage](https://docs.umami.is/docs/cloud/faq) counts the custom event and each stored event property. Each click has seven properties, so budget approximately **eight quota events per click**, not one. At that rate, 100,000 units support roughly 12,500 clicks/month if no other Umami events or properties are recorded. Check the account Usage page; the quota, account state and actual recorded usage are authoritative. Do not enable additional trackers or properties without recalculating this budget.

## Setup

1. Create a Hobby account and add the production website `antibrowserhub.com`. In its tracking settings, copy the real website ID from `data-website-id`.
2. Set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in the production build environment. For local configuration, `.env.local` is ignored by Git. Leave the value unset until a real ID exists; never substitute a made-up example UUID.
3. Rebuild after setting or changing the ID: Next.js embeds `NEXT_PUBLIC_*` values at build time. Deployment is a separate action, not performed by these instructions or by merely editing code.
4. The script is the official `https://cloud.umami.is/script.js`, with `data-domains="antibrowserhub.com,www.antibrowserhub.com"`. The helper also refuses to send on localhost or preview hosts. Both production hostnames share the one site. Local tests use mocked runtime objects and do not send production requests.

## Payload and privacy

We use the official [`umami.track(object)` API](https://docs.umami.is/docs/tracker-functions), which sends only the supplied payload, rather than string/callback APIs that merge default metadata:

- Top-level: real website ID, a known safe page pathname in `url`, `name: "affiliate_click"`, and `data`.
- Seven data properties: `product`, `placement`, `locale`, `page`, `landing`, `source`, `campaign`.
- Source/campaign categories come only from allowlisted `utm_source` and `utm_campaign` values. Missing UTM source is `unattributed`; natural search sources are not automatically inferred from referrers. Arbitrary values are discarded. Unknown paths become `/unknown`; no raw query, fragment, title, email, user ID or referrer is added.

The [tracker configuration](https://docs.umami.is/docs/tracker-configuration) has `data-auto-track="false"` to disable tracker initialization and its automatic collection. `data-exclude-search` and `data-exclude-hash` are also set, but explicit safe payload construction is the primary guard. No automatic pageviews means SPA navigation itself sends no Umami event and cannot duplicate Umami pageviews. There is no automatic `beforeSend` path to sanitize; all event calls pass through the shared helper.

[Umami does not use tracking cookies](https://docs.umami.is/docs/faq). The existing first-landing attribution uses sessionStorage for the browser-tab session. The loader delay queue is memory-only, at most 20 clicks, retained at most 30 seconds; loading failure clears it. `onReady` flushes eligible queued events exactly once. A full queue drops the oldest entry. SDK throws and rejected promises are caught; sends are not retried because a failed response may already have been recorded. If a visitor leaves before the SDK loads, the queued click can be lost. Navigation is never canceled to wait for analytics.

Explicit payload fields do not remove normal network metadata such as IP or User-Agent seen by the analytics service. Vercel retains its separate standard traffic metadata under its own policy; these Umami guards do not change Vercel's SDK. The six-language privacy policy reflects this setup and accurately describes localStorage for theme/language preferences.

## Acceptance after configuration and deployment

1. With the ID absent, confirm no request to `cloud.umami.is/script.js` and no Umami event is sent. With an ID on preview/local hosts, the helper must send nothing.
2. On production, inspect a regular recommendation click and a middle-button click. Each should create one `affiliate_click`; right-clicking and internal review links should not. Ctrl/Command-click continues normal navigation. Inspect Network payload keys, confirming no query, fragment, page title or referrer is present.
3. In Umami, open the website’s **Events** page, select/filter `affiliate_click`, then open **Properties** to verify all seven fields and their breakdowns. See [official event instructions](https://docs.umami.is/docs/track-events).
4. Open `?utm_source=newsletter&utm_campaign=pricing-update`, navigate internally, then click a merchant link: `landing` should stay the first landing path and approved labels should persist for the tab session. Unsupported labels must not appear verbatim.
5. Check quota usage and retention in the Hobby account. Separately verify referral registrations/purchases in merchant dashboards. Click collection does not prove merchant attribution or paid commission.

## Local verification

Use Node 24: `node scripts/check-analytics.mjs`, `node scripts/check-round1.mjs`, `npx tsc --noEmit`, `npm run lint`, `npm run build`. Analytics tests mock the SDK and assert absent/invalid ID behavior, production-domain guards, exact minimal payloads, queue bound/expiry/single flush, synchronous/rejected-promise failures and click handling. They do not prove that the real account receives events; that requires a real ID and deployed production validation.
