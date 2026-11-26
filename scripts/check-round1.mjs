/* Executable checks of metadata/data/attribution, independent of a browser or analytics account. */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";
import { createRequire } from "node:module";
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();
const storage = new Map();
let storageBlocked = false;
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, { exports, URL, URLSearchParams, console,
    sessionStorage: { getItem: k => { if (storageBlocked) throw Error("blocked"); return storage.get(k) || null; }, setItem: (k, v) => { if (storageBlocked) throw Error("blocked"); storage.set(k, v); } },
    require(name) {
      if (name.startsWith("next") || name.startsWith("react")) return { notFound() { throw Error("not found"); } };
      const base = name.startsWith("@/") ? path.resolve("src", name.slice(2)) : name.startsWith(".") ? path.resolve(path.dirname(file), name) : null;
      if (!base) return nodeRequire(name);
      if (fs.existsSync(base + ".ts")) return load(base + ".ts");
      // Metadata checks do not render child components.
      if (fs.existsSync(base + ".tsx")) return { default() {} };
      throw Error(`Unresolved dependency ${name} in ${file}`);
    },
  }, { filename: file });
  return exports;
}
function files(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? files(path.join(dir, d.name)) : [path.join(dir, d.name)]); }
(async () => {
  const browsers = load("src/data/browsers.ts").browsers;
  const comparisons = load("src/data/comparisons.ts").getAllComparisonSlugs();
  const guides = load("src/data/guides.ts").getAllGuideSlugs();
  const cases = load("src/data/useCases.ts").getAllUseCaseSlugs();
  const groups = { reviews: browsers.map(b => b.slug), compare: comparisons, guides, "best-for": cases };
  const expectedRoutes = Object.entries(groups).flatMap(([group, slugs]) => slugs.map(slug => `/${group}/${slug}`));
  assert.deepEqual([...load("src/data/routeManifest.ts").contentRoutes].sort(), expectedRoutes.sort());
  let routesChecked = 0;
  for (const file of files("src/app").filter(f => f.endsWith("/page.tsx"))) {
    const route = "/" + path.relative("src/app", path.dirname(file)).replaceAll(path.sep, "/");
    const page = load(file);
    const slugs = route.includes("[slug]") ? groups[route.split("/")[1]] : [undefined];
    for (const slug of slugs) {
      const metadata = slug ? await page.generateMetadata({ params: Promise.resolve({ slug }) }) : page.metadata;
      const expected = route.replace("[slug]", slug);
      assert.equal(metadata.alternates.canonical, expected, file);
      assert.equal(metadata.openGraph.url, expected, file);
      assert.ok(metadata.openGraph.title && metadata.twitter.title, file);
      routesChecked++;
    }
  }
  const seo = load("src/lib/seo.ts");
  assert.equal(seo.pageMetadata("/pricing", { title: "Pricing | AntiBrowserHub" }).title, "Pricing");
  assert.equal(seo.pageMetadata("/", { title: { absolute: "Home title" } }).openGraph.title, "Home title");
  const attribution = load("src/lib/attribution.ts");
  assert.equal(attribution.safePage("/guides/private-user-token"), "/unknown");
  assert.equal(attribution.safePage("/reviews/morelogin?email=a@example.com"), "/unknown");
  const sanitized = attribution.attribution("/pricing", "?utm_source=google&utm_campaign=pricing-update&email=a@example.com&token=secret");
  assert.equal(JSON.stringify(sanitized), JSON.stringify({ landing: "/pricing", source: "google", campaign: "pricing-update" }));
  assert.equal(attribution.attribution("/", "?utm_source=a@example.com&utm_campaign=secret-token").source, "other");
  assert.equal(attribution.attribution("/", "").source, "unattributed");
  attribution.readAttribution("/pricing", "?utm_source=google");
  assert.equal(attribution.readAttribution("/deals", "?utm_source=reddit").landing, "/pricing");
  storage.set(attribution.ATTRIBUTION_KEY, "not json");
  assert.equal(attribution.readAttribution("/reviews", "").landing, "/reviews");
  storageBlocked = true;
  assert.equal(attribution.readAttribution("/compare", "").landing, "/compare");
  assert.equal(attribution.isAffiliateActivation("click", 0), true);
  assert.equal(attribution.isAffiliateActivation("auxclick", 1), true);
  assert.equal(attribution.isAffiliateActivation("auxclick", 2), false);
  assert.equal(attribution.isAffiliateActivation("click", 1), false);
  const affiliate = load("src/lib/affiliate.ts");
  for (const browser of browsers) assert.equal(affiliate.getAffiliateDestination(browser.slug), browser.affiliateUrl);
  assert.equal(affiliate.affiliateProductForUrl("https://gologin.com/pricing/"), undefined);
  assert.equal(affiliate.affiliateProductForUrl("https://gologin.com/"), "gologin");
  assert.equal(affiliate.affiliateProductForUrl("https://support.gologin.com/"), undefined);
  const vendors = load("src/data/vendorUpdates.ts").vendorUpdates;
  assert.deepEqual(Object.keys(vendors).sort(), Array.from(browsers, browser => browser.slug).sort());
  for (const [slug, vendor] of Object.entries(vendors)) {
    for (const locale of ["en", "zh", "ru", "ja", "fr", "de"]) assert.ok(vendor.summary[locale] && vendor.billing[locale]);
    const browser = browsers.find(b => b.slug === slug);
    assert.equal(browser.pricing.plans, vendor.plans);
    assert.equal(browser.pricing.startingPrice, vendor.startingPrice);
    assert.equal(browser.pricing.freeProfiles, vendor.freeProfiles);
  }
  for (const locale of ["en", "zh", "ru", "ja", "fr", "de"]) {
    assert.match(vendors.morelogin.summary[locale], /Chromium.*v2\.73\.0/);
    assert.match(vendors.adspower.summary[locale], /120.*300.*600/);
  }
  assert.equal(vendors.lalicat.plans.find(plan => plan.name === "Team").price, "$209/mo");
  assert.deepEqual(Array.from(vendors["marketer-browser"].plans, plan => plan.price), ["$0", "$29/mo", "$49/mo", "$69/mo"]);
  assert.equal(vendors.undetectable.freeProfiles, 5);
  assert.equal(vendors.undetectable.plans.at(-1).price, "$199/mo");
  assert.equal(vendors.hidemyacc.freeProfiles, 0);
  assert.deepEqual(Array.from(vendors.hidemyacc.plans, plan => plan.profiles), ["5", "30", "100", "300", "1000"]);
  for (const summary of Object.values(vendors.undetectable.summary)) assert.match(summary, /50/);
  for (const summary of Object.values(vendors.hidemyacc.summary)) assert.match(summary, /30/);
  assert.equal(vendors["dolphin-anty"].freeProfiles, 3);
  assert.equal(vendors["dolphin-anty"].plans.find(plan => plan.name === "Free").profiles, "3");
  assert.equal(vendors["dolphin-anty"].startingPrice, "$10/mo");
  const dolphin = browsers.find(browser => browser.slug === "dolphin-anty");
  assert.equal(dolphin.description, vendors["dolphin-anty"].summary.en);
  assert.ok(dolphin.faqs.some(faq => faq.answer === vendors["dolphin-anty"].summary.en + " " + vendors["dolphin-anty"].billing.en));
  assert.equal(vendors.incogniton.freeProfiles, 3);
  assert.deepEqual(Array.from(vendors.incogniton.plans.slice(0, 3), plan => [plan.price, plan.profiles]), [["$0", "10 → 3"], ["$19.99/mo", "10"], ["$29.99/mo", "50"]]);
  for (const summary of Object.values(vendors.incogniton.summary)) assert.match(summary, /Entrepreneur/);
  assert.equal(vendors.multilogin.freeProfiles, 5);
  assert.equal(vendors.multilogin.plans.find(plan => plan.name === "Business 300")?.price, "$89/mo");
  assert.match(vendors.gologin.summary.en, /25 creations per calendar month/);
  assert.match(vendors.gologin.summary.en, /300 API requests per minute/);
  assert.equal(vendors.kameleo.startingPrice, "€59/mo");
  assert.equal(vendors.kameleo.freeProfiles, 100);
  assert.equal(vendors.kameleo.plans.find(plan => plan.name === "Business").price, "€299/mo");
  assert.ok(vendors.vmlogin.plans.find(plan => plan.name === "Team").features.includes("Basic REST API"));
  assert.ok(vendors.vmlogin.plans.find(plan => plan.name === "Scale").features.includes("Advanced REST API"));
  const freeGuide = load("src/data/guides.ts").getGuideBySlug("best-free-antidetect-browser").content;
  assert.ok(!freeGuide.includes("unlocks every single feature"));
  assert.ok(!freeGuide.includes("3 profiles + web interface"));
  assert.ok(!freeGuide.includes("Dolphin Anty (10)"));
  assert.doesNotMatch(freeGuide, /You get 10 browser profiles|- 10 browser profiles/);
  const translated = load("src/data/guides/index.ts");
  for (const locale of ["en", "zh", "ru", "ja", "fr", "de"]) {
    const text = translated.getTranslatedGuideContent("best-free-antidetect-browser", locale, freeGuide);
    const goRow = text.split("\n").find(line => line.startsWith("| **GoLogin**"));
    if (goRow) assert.ok(goRow.includes("25"), locale);
    assert.ok(!/\| \*\*Dolphin Anty\*\* \| (?:5|10) \|/.test(text), locale);
  }
  assert.ok(!load("src/data/guides.ts").getGuideBySlug("cheapest-antidetect-browser").content.includes("June 2026"));
  console.log(`PASS: ${routesChecked} route metadata records, exact route allowlist, ${Object.keys(vendors).length} vendors, referral destinations, attribution privacy/session/failure handling, mouse activation.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
