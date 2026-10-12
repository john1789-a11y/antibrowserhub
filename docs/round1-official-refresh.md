# First official-information refresh — 2026-10-12

## Scope and evidence

The six reviewed vendors are MoreLogin, AdsPower, GoLogin, Multilogin, Dolphin Anty and Octo Browser. `src/data/vendorUpdates.ts` is the pricing source of truth, with six-language summaries, billing qualifiers and source URLs. Browser objects reference that data. Existing editorial scores are retained; this round did not repeat fingerprint or performance tests. Nonconflicting historical review sections remain historical editorial content; the site has not completed a full six-language review-body migration.

Official evidence:

| Vendor | Pricing | Feature or release evidence |
| --- | --- | --- |
| MoreLogin | https://www.morelogin.com/pricing | https://guide.morelogin.com/api-reference/appendix/changelog ; https://support.morelogin.com/en/articles/16035167-cloud-phone-usage |
| AdsPower | https://www.adspower.com/pricing | https://www.adspower.com/release |
| GoLogin | https://gologin.com/pricing/ | https://gologin.com/release-notes/ |
| Multilogin | https://multilogin.com/pricing/ | https://multilogin.com/release-notes/ |
| Dolphin Anty | https://dolphin-anty.com/tarifs/ | https://docs.dolphin-anty.com/en/personal-cabinet/plans-in-dolphin-anty |
| Octo Browser | https://octobrowser.net/pricing/ | https://docs.octobrowser.net/en/changelog/octium-changelog/ |

AdsPower USD prices were checked with zero additional members; “monthly” is a 30-day billing period. Annual equivalent prices must not be represented as month-to-month prices. Octo expansion ceilings are not base profile quotas. Dolphin's five-profile free-plan change is not a new 2026 announcement. Multilogin's free five profiles are cloud-only and exclude API; included proxy/mobile allowances are one-time. GoLogin API/SDK/MCP starts at 100 profiles, cloud launch/cookie import/export at 50. A free trial is not a permanent free plan.

## SEO

Every page owns its canonical, Open Graph URL/title/description and Twitter title/description through `pageMetadata`. The root no longer assigns its home canonical to all descendants. The helper removes duplicate trailing brand suffixes. Fabricated aggregate-rating counts were removed from best-for JSON-LD. Review and comparison modified dates derive from the content verification record; guide and sitemap dates change for touched content only.

This round does not introduce language URLs or hreflang. English remains the server-rendered language. Correct canonicals are implemented and tested locally; Google indexing, chosen canonical and search rankings require deployment and Search Console observation.

## Referral tracking and attribution

Existing referral addresses are retained in `src/data/affiliateDestinations.ts`; no account IDs, destination parameters or merchant sub-ID formats were invented. Shared `AffiliateLink` covers review sidebar, comparison CTAs, best-for, deals and proxy CTAs. Guide root marketing/referral links use the same destinations and event fields; official pricing, support and documentation citations retain their source destinations. Browser cards currently link internally to reviews and are not counted as merchant clicks.

`affiliate_click` sends only product, placement, locale, a known site pathname, first landing pathname, approved source category and approved campaign category. Source allowlist: google, bing, newsletter, youtube, telegram, reddit, direct. Campaign allowlist: launch, pricing-update, browser-comparison, newsletter. Unknown source becomes `other`; absent source becomes `unattributed`, which does not imply direct traffic. The added custom event properties do not contain full URLs, query strings, referrers or emails. Vercel also collects standard page URL and referrer metadata according to its privacy documentation. First landing/category labels use sessionStorage for the current browser-tab session; restricted storage and analytics errors do not block navigation. This is session-level on-site attribution, not a cross-device user or merchant purchase attribution system.

Primary/keyboard clicks and middle-button activation are handled without canceling navigation. Right-button and duplicate primary/aux event types are excluded. Referral anchors have `sponsored noopener noreferrer`.

[Vercel custom events](https://vercel.com/docs/analytics/custom-events) require an eligible Pro/Enterprise Web Analytics plan. Confirm the account/project plan before claiming events are collected. Local code checks do not verify production event delivery or commissions.

## Account verification still required

1. Check Vercel project Web Analytics plan and enable custom-event access where needed; after deployment, verify `affiliate_click` fields and one-event-per-activation behavior in the dashboard.
2. In each vendor's affiliate dashboard, verify ownership and current validity of the retained referral links, cookie windows, attribution rules and payout conditions. Compare test referrals with dashboard records using the vendor-supported method.
3. Add merchant sub-ID/campaign parameters only after the vendor documents support them; none have been appended in this round.
4. Connect Search Console and compare index/canonical inspection and search performance after deployment. No Search Console credentials, merchant credentials or secrets are required in source control.

## Local validation

Run with Node >=20.9: `node scripts/check-round1.mjs`, `npx tsc --noEmit`, `npm run lint`, and `npm run build`. The focused checks execute metadata for all generated routes and verify exact route allowlists, common destinations, six-language vendor records, billing-data consistency, safe attribution/session behavior and click-button filtering. Browser interaction and actual Vercel/merchant dashboards remain separate acceptance steps.
