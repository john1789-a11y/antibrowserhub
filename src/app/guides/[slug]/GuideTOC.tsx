"use client";

import { useEffect, useRef, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function GuideTOC({ items }: { items: TocItem[] }) {
  const tocRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<string>("");
  const linkEls = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const setActive = useCallback((id: string) => {
    if (id === activeRef.current) return;
    // Remove old active
    if (activeRef.current) {
      const old = linkEls.current.get(activeRef.current);
      if (old) old.classList.remove("active");
    }
    // Add new active
    activeRef.current = id;
    const link = linkEls.current.get(id);
    if (link) {
      link.classList.add("active");
      // Auto-scroll TOC to keep active item visible
      const container = tocRef.current;
      if (container) {
        const linkRect = link.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (linkRect.top < containerRect.top + 40) {
          container.scrollBy({ top: linkRect.top - containerRect.top - 40, behavior: "smooth" });
        } else if (linkRect.bottom > containerRect.bottom - 20) {
          container.scrollBy({ top: linkRect.bottom - containerRect.bottom + 20, behavior: "smooth" });
        }
      }
    }
  }, []);

  useEffect(() => {
    const headingEls = items
      .map((item) => ({ id: item.id, el: document.getElementById(item.id) }))
      .filter((h) => h.el !== null) as { id: string; el: HTMLElement }[];

    if (headingEls.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      // Find the last heading that's above the scroll position
      let currentId = headingEls[0].id;
      for (const h of headingEls) {
        if (h.el.offsetTop <= scrollY) {
          currentId = h.id;
        } else {
          break;
        }
      }
      setActive(currentId);
    };

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
    // Run once on mount
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", onScroll);
  }, [items, setActive]);

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
              ref={(el) => {
                if (el) linkEls.current.set(item.id, el);
              }}
              className={`guide-toc-link${item.level === 3 ? " guide-toc-sub" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.pushState(null, "", `#${item.id}`);
                  setActive(item.id);
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
