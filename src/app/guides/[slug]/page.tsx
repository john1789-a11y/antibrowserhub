import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";
import GuideTOC from "./GuideTOC";
import GuideCTA from "./GuideCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractTOC(content: string): TocItem[] {
  const toc: TocItem[] = [];
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
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let inTable = false;
  let tableRows: string[] = [];
  let inList = false;
  let listItems: string[] = [];

  function flushList() {
    if (inList && listItems.length > 0) {
      html.push(`<ul>${listItems.join("")}</ul>`);
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (inTable && tableRows.length > 0) {
      const headerCells = tableRows[0].split("|").filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join("");
      const bodyRows = tableRows.slice(2).map(row => {
        const cells = row.split("|").filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join("");
        return `<tr>${cells}</tr>`;
      }).join("");
      html.push(`<div class="comparison-table-wrap"><table class="comparison-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`);
      tableRows = [];
      inTable = false;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        html.push(`<pre><code>${codeBuffer.join("\n").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`);
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) { codeBuffer.push(line); continue; }

    // Table detection
    if (line.includes("|") && line.trim().startsWith("|")) {
      flushList();
      if (!inTable) inTable = true;
      tableRows.push(line);
      continue;
    } else {
      flushTable();
    }

    // List items
    if (line.startsWith("- ")) {
      flushTable();
      inList = true;
      const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`(.*?)`/g, "<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      listItems.push(`<li>${content}</li>`);
      continue;
    } else if (/^\d+\.\s/.test(line)) {
      flushTable();
      inList = true;
      const content = line.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`(.*?)`/g, "<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
      listItems.push(`<li>${content}</li>`);
      continue;
    } else {
      flushList();
    }

    // Horizontal rule
    if (line.trim() === "---") {
      html.push("<hr />");
      continue;
    }

    // Headers — add id for anchor links
    if (line.startsWith("### ")) {
      const text = line.slice(4);
      const id = slugify(text);
      html.push(`<h3 id="${id}">${text}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3);
      const id = slugify(text);
      html.push(`<h2 id="${id}">${text}</h2>`);
      continue;
    }

    // Empty lines
    if (line.trim() === "") continue;

    // Paragraphs with inline formatting
    const formatted = line
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    html.push(`<p>${formatted}</p>`);
  }

  flushList();
  flushTable();

  return html.join("\n");
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const toc = extractTOC(guide.content);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link href="/guides" style={{ color: "var(--text-secondary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16, fontSize: "0.9rem" }}>
            ← Back to Guides
          </Link>
          <span className="section-label">{guide.category}</span>
          <h1>{guide.title}</h1>
          <p style={{ display: "flex", gap: 16, color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            <span>{guide.readTime}</span>
            <span>•</span>
            <span>{new Date(guide.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container guide-layout">
          <article
            className="guide-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.content) }}
          />
          <GuideTOC items={toc} />
        </div>
        <div className="container" style={{ maxWidth: 800 }}>
          <GuideCTA />
        </div>
      </section>
    </>
  );
}
