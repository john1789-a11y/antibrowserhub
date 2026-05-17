"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function GuideTOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const tocRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Auto-scroll TOC to keep active item visible
  const scrollActiveIntoView = useCallback((id: string) => {
    const link = linkRefs.current.get(id);
    const container = tocRef.current;
    if (link && container) {
      const linkTop = link.offsetTop - container.offsetTop;
      const linkBottom = linkTop + link.offsetHeight;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      if (linkTop < scrollTop + 40) {
        container.scrollTo({ top: Math.max(0, linkTop - 40), behavior: "smooth" });
      } else if (linkBottom > scrollTop + containerHeight - 20) {
        container.scrollTo({ top: linkBottom - containerHeight + 20, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const headingIds = items.map((item) => item.id);
    const headings = headingIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    // Use scroll event for more reliable tracking
    const handleScroll = () => {
      const scrollY = window.scrollY + 120; // offset for header

      let currentId = headings[0]?.id || "";
      for (const heading of headings) {
        if (heading.offsetTop <= scrollY) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
        scrollActiveIntoView(currentId);
      }
    };

    // Throttle scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, [items, activeId, scrollActiveIntoView]);

  if (items.length === 0) return null;

  return (
    <aside className="guide-toc">
      <div className="guide-toc-inner" ref={tocRef}>
        <div className="guide-toc-title">On this page</div>
        <nav>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              ref={(el) => { if (el) linkRefs.current.set(item.id, el); }}
              className={`guide-toc-link${item.level === 3 ? " guide-toc-sub" : ""}${activeId === item.id ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.pushState(null, "", `#${item.id}`);
                  setActiveId(item.id);
                  scrollActiveIntoView(item.id);
                }
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
