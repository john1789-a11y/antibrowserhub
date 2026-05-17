"use client";

interface ReviewTOCProps {
  sections: { id: string; label: string }[];
}

export default function ReviewTOC({ sections }: ReviewTOCProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update URL hash without triggering navigation
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="sidebar-card" style={{ marginTop: 20 }}>
      <h3>Table of Contents</h3>
      <nav className="sidebar-toc">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => handleClick(e, s.id)}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
