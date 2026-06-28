"use client";
import { useEffect, useState, useCallback } from "react";

interface ReviewTOCProps {
  sections: { id: string; label: string }[];
  title?: string;
}

export default function ReviewTOC({ sections, title }: ReviewTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Scroll-spy: track which section is currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    const timerId = setTimeout(() => {
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timerId);
      observer.disconnect();
    };
  }, [sections]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(id);
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    []
  );

  return (
    <div className="sidebar-card" style={{ marginTop: 20 }}>
      <h3>{title || "Table of Contents"}</h3>
      <nav className="sidebar-toc">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? "toc-active" : ""}
            onClick={(e) => handleClick(e, s.id)}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
