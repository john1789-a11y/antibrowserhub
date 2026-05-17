import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuideSlugs } from "@/data/guides";

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

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML for guide content
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

    // Headers
    if (line.startsWith("### ")) {
      html.push(`<h3>${line.slice(4)}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      html.push(`<h2>${line.slice(3)}</h2>`);
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
        <div className="container" style={{ maxWidth: 800 }}>
          <article
            className="guide-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.content) }}
          />
          <div style={{ marginTop: 48, padding: "32px", background: "var(--bg-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-primary)", textAlign: "center" }}>
            <h3 style={{ marginBottom: 8 }}>Ready to choose your antidetect browser?</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>Compare features, pricing, and performance side by side.</p>
            <Link href="/compare" className="card-cta" style={{ display: "inline-block", padding: "12px 28px" }}>
              Compare All Browsers →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
