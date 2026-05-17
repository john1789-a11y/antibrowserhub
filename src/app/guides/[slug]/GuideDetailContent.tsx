"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";
import { getPageTexts } from "@/i18n/pages";
import { getTranslatedGuideContent } from "@/data/guides/index";
import GuideTOC from "./GuideTOC";
import GuideCTA from "./GuideCTA";

interface GuideData {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\u0400-\u04ff\u00c0-\u024f]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractTOC(content: string) {
  const toc: { id: string; text: string; level: number }[] = [];
  const lines = content.split("\n");
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.startsWith("```")) { inCodeBlock = !inCodeBlock; continue; }
    if (inCodeBlock) continue;
    if (line.startsWith("## ")) {
      const text = line.slice(3);
      toc.push({ id: slugify(text), text, level: 2 });
    }
  }
  return toc;
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const html: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];
  let codeLang = "";
  let inTable = false;
  let tableRows: string[][] = [];
  let tableAligns: string[] = [];

  function flushTable() {
    if (!inTable || tableRows.length === 0) return;
    let t = '<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr>';
    const headers = tableRows[0];
    headers.forEach((h) => { t += `<th>${h.trim()}</th>`; });
    t += "</tr></thead><tbody>";
    for (let r = 1; r < tableRows.length; r++) {
      t += "<tr>";
      tableRows[r].forEach((cell, ci) => {
        const align = tableAligns[ci] || "left";
        const v = cell.trim();
        const cls = v === "✓" ? ' class="check"' : v === "✗" ? ' class="cross"' : v.startsWith("✓") ? ' class="check"' : v.startsWith("✗") ? ' class="cross"' : "";
        t += `<td style="text-align:${align}"${cls}>${v}</td>`;
      });
      t += "</tr>";
    }
    t += "</tbody></table></div>";
    html.push(t);
    inTable = false;
    tableRows = [];
    tableAligns = [];
  }

  for (const raw of lines) {
    const line = raw;
    if (line.startsWith("```")) {
      if (inCode) { html.push(`<pre><code class="language-${codeLang}">${codeLines.join("\n")}</code></pre>`); codeLines = []; inCode = false; }
      else { flushTable(); codeLang = line.slice(3).trim(); inCode = true; }
      continue;
    }
    if (inCode) { codeLines.push(line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")); continue; }
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line.split("|").slice(1, -1);
      if (cells.every((c) => /^[\s:-]+$/.test(c))) { tableAligns = cells.map((c) => { const t = c.trim(); if (t.startsWith(":") && t.endsWith(":")) return "center"; if (t.endsWith(":")) return "right"; return "left"; }); continue; }
      if (!inTable) { flushTable(); inTable = true; }
      tableRows.push(cells);
      continue;
    }
    flushTable();
    if (!line.trim()) { html.push(""); continue; }
    const fmt = (s: string) =>
      s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
        .replace(/`([^`]+)`/g, "<code>$1</code>");
    if (line.startsWith("## ")) { const t = line.slice(3); html.push(`<h2 id="${slugify(t)}">${fmt(t)}</h2>`); }
    else if (line.startsWith("### ")) { const t = line.slice(4); html.push(`<h3 id="${slugify(t)}">${fmt(t)}</h3>`); }
    else if (line.startsWith("- ")) html.push(`<ul><li>${fmt(line.slice(2))}</li></ul>`);
    else if (/^\d+\.\s/.test(line)) html.push(`<ol><li>${fmt(line.replace(/^\d+\.\s/, ""))}</li></ol>`);
    else if (line === "---") html.push("<hr />");
    else html.push(`<p>${fmt(line)}</p>`);
  }
  if (inCode) html.push(`<pre><code>${codeLines.join("\n")}</code></pre>`);
  flushTable();
  return html.join("\n").replace(/<\/ul>\n<ul>/g, "\n").replace(/<\/ol>\n<ol>/g, "\n");
}

const backText: Record<string, string> = { en: "← Back to Guides", zh: "← 返回教程列表", ru: "← Назад к руководствам", ja: "← ガイド一覧に戻る", fr: "← Retour aux guides", de: "← Zurück zu Anleitungen" };

export default function GuideDetailContent({ guide }: { guide: GuideData }) {
  const { locale } = useI18n();
  const p = getPageTexts(locale);
  const gc = p.guideCards[guide.slug];

  const content = getTranslatedGuideContent(guide.slug, locale, guide.content);
  const title = gc?.title || guide.title;
  const category = gc?.category || guide.category;
  const toc = extractTOC(content);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/guides" style={{ color: "var(--text-secondary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16, fontSize: "0.9rem" }}>
            {backText[locale] || backText.en}
          </Link>
          <span className="section-label">{category}</span>
          <h1>{title}</h1>
          <p style={{ display: "flex", gap: 16, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            <span>{guide.readTime}</span>
            <span>•</span>
            <span>{new Date(guide.publishDate).toLocaleDateString(locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : locale === "ru" ? "ru-RU" : locale === "fr" ? "fr-FR" : locale === "de" ? "de-DE" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container guide-layout">
          <article className="guide-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
          <GuideTOC items={toc} />
        </div>
        <div className="container" style={{ maxWidth: 800 }}>
          <GuideCTA />
        </div>
      </section>
    </>
  );
}
