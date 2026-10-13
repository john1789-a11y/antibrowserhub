import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import ts from "typescript";

// Public UUID fixture is only used in mocked runtimes; no SDK is fetched or request sent.
const fixtureId = "00000000-0000-4000-8000-000000000001";
function runtime({ id = fixtureId, host = "antibrowserhub.com", sdk, storageBlocked = false } = {}) {
  const cache = new Map();
  const storage = new Map();
  let now = 0;
  const window = { location: { hostname: host, pathname: "/pricing", search: "?utm_source=newsletter&utm_campaign=pricing-update&email=private@example.com#secret" }, umami: sdk };
  const element = class { constructor(anchor) { this.anchor = anchor; } closest() { return this.anchor; } };
  function load(file) {
    file = path.resolve(file);
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    cache.set(file, exports);
    const code = ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
    vm.runInNewContext(code, { exports, window, Element: element, URL, URLSearchParams, Date: { now: () => now }, Promise,
      process: { env: { NEXT_PUBLIC_UMAMI_WEBSITE_ID: id } },
      sessionStorage: { getItem(k) { if (storageBlocked) throw Error("denied"); return storage.get(k) || null; }, setItem(k, v) { if (storageBlocked) throw Error("denied"); storage.set(k, v); } },
      require(name) {
        if (name === "react/jsx-runtime") return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
        if (name === "next/script") return { default: "Script" };
        if (name === "@/components/I18nProvider" || name === "./I18nProvider") return { useI18n: () => ({ locale: "zh" }) };
        const base = name.startsWith("@/") ? path.resolve("src", name.slice(2)) : path.resolve(path.dirname(file), name);
        return load(base + (fs.existsSync(base + ".ts") ? ".ts" : ".tsx"));
      },
    }, { filename: file });
    return exports;
  }
  return { load, window, element, advance: ms => { now += ms; } };
}
const values = [];
const main = runtime({ sdk: { track: event => { values.push(JSON.parse(JSON.stringify(event))); } } });
const analytics = main.load("src/lib/analytics.ts");
analytics.trackAffiliateClick("morelogin", "deal", "zh");
assert.equal(values.length, 1);
assert.deepEqual(Object.keys(values[0]).sort(), ["data", "name", "url", "website"]);
assert.deepEqual(values[0], { website: fixtureId, url: "/pricing", name: "affiliate_click", data: { product: "morelogin", placement: "deal", locale: "zh", page: "/pricing", landing: "/pricing", source: "newsletter", campaign: "pricing-update" } });
main.window.location = { hostname: "antibrowserhub.com", pathname: "/guides/private-user-token", search: "?utm_source=secret-token" };
analytics.trackAffiliateClick("morelogin", "deal", "fr");
assert.equal(values.at(-1).url, "/unknown");
assert.equal(values.at(-1).data.landing, "/pricing");
assert.equal(values.at(-1).data.source, "newsletter");
assert.ok(!JSON.stringify(values).includes("private@example.com"));
analytics.trackAffiliateClick("invented-product", "deal", "zh");
analytics.trackAffiliateClick("morelogin", "invented-placement", "zh");
assert.equal(values.length, 2);
for (const id of ["", "example-id", undefined]) {
  // Explicit empty and invalid configuration must disable rendering and tracking.
  let calls = 0;
  const r = runtime({ id: id || "", sdk: { track() { calls++; } } });
  assert.equal(r.load("src/components/UmamiAnalytics.tsx").default(), null);
  r.load("src/lib/analytics.ts").trackAffiliateClick("morelogin", "deal", "en");
  assert.equal(calls, 0);
}
for (const host of ["localhost", "antibrowserhub-preview.vercel.app", "antibrowserhub.com.attacker.example"]) {
  let calls = 0;
  const r = runtime({ host, sdk: { track() { calls++; } } });
  r.load("src/lib/analytics.ts").trackAffiliateClick("morelogin", "deal", "en");
  assert.equal(calls, 0);
}
const queued = runtime();
const queuedAnalytics = queued.load("src/lib/analytics.ts");
for (let i = 0; i < 25; i++) queuedAnalytics.trackAffiliateClick("morelogin", "deal", "en");
const flushed = [];
queued.window.location.pathname = "/deals";
queued.window.umami = { track: event => flushed.push(event) };
const script = queued.load("src/components/UmamiAnalytics.tsx").default();
assert.equal(script.props["data-auto-track"], "false");
assert.equal(script.props["data-domains"], "antibrowserhub.com,www.antibrowserhub.com");
assert.equal(script.props["data-exclude-search"], "true");
assert.equal(script.props["data-exclude-hash"], "true");
assert.equal(script.props.src, "https://cloud.umami.is/script.js");
script.props.onReady();
script.props.onReady();
assert.equal(flushed.length, 20);
assert.equal(flushed[0].url, "/pricing"); // Queued events retain their original safe path.
queued.window.umami = undefined;
queuedAnalytics.trackAffiliateClick("morelogin", "deal", "en");
queued.advance(30_001);
queued.window.umami = { track: event => flushed.push(event) };
script.props.onReady();
assert.equal(flushed.length, 20);
queued.window.umami = undefined;
queuedAnalytics.trackAffiliateClick("morelogin", "deal", "en");
script.props.onError();
queued.window.umami = { track: event => flushed.push(event) };
script.props.onReady();
assert.equal(flushed.length, 20);
const failures = runtime({ storageBlocked: true, sdk: { track() { throw Error("SDK failure"); } } });
assert.doesNotThrow(() => failures.load("src/lib/analytics.ts").trackAffiliateClick("morelogin", "guide", "en"));
const rejections = [];
const onRejected = error => rejections.push(error);
process.on("unhandledRejection", onRejected);
failures.window.umami = { track: () => Promise.reject(Error("async SDK failure")) };
failures.load("src/lib/analytics.ts").trackAffiliateClick("morelogin", "guide", "en");
await new Promise(resolve => setImmediate(resolve));
process.removeListener("unhandledRejection", onRejected);
assert.equal(rejections.length, 0);
// The actual shared anchor keeps normal navigation, including modifiers/middle clicks.
const anchor = main.load("src/components/AffiliateLink.tsx").default({ product: "morelogin", placement: "deal", children: "merchant" });
assert.equal(anchor.props.target, "_blank");
assert.equal(anchor.props.rel, "sponsored noopener noreferrer");
const before = values.length;
anchor.props.onClick({ type: "click", button: 0, ctrlKey: true, preventDefault() { throw Error("navigation canceled"); } });
anchor.props.onAuxClick({ type: "auxclick", button: 0 });
anchor.props.onAuxClick({ type: "auxclick", button: 1, preventDefault() { throw Error("navigation canceled"); } });
anchor.props.onAuxClick({ type: "auxclick", button: 2 });
assert.equal(values.length, before + 2);
const guide = main.load("src/components/GuideCommercialContent.tsx").default({ html: "" });
const start = values.length;
guide.props.onClick({ type: "click", button: 0, target: new main.element({ dataset: { affiliateProduct: "morelogin" } }) });
guide.props.onClick({ type: "click", button: 0, target: new main.element(null) });
assert.equal(values.length, start + 1);
console.log("PASS: Umami opt-in/configuration, exact safe payload, domains, queue bound/expiry/single flush, SDK failures, modifiers/middle-click and guide tracking.");
