"use client";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function GuideCTA() {
  const { t } = useI18n();
  return (
    <div style={{ marginTop: 48, padding: "32px", background: "var(--bg-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-primary)", textAlign: "center" }}>
      <h3 style={{ marginBottom: 8 }}>{t.guides.readyTitle}</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: 16 }}>{t.guides.readySubtitle}</p>
      <Link href="/compare" className="card-cta" style={{ display: "inline-block", padding: "12px 28px" }}>
        {t.guides.compareAll}
      </Link>
    </div>
  );
}
