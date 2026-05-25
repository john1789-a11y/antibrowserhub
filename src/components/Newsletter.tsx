"use client";
import { useState } from "react";
import { useI18n } from "./I18nProvider";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-content">
            <span className="newsletter-icon">📬</span>
            <h3 className="newsletter-title">{t.newsletter.title}</h3>
            <p className="newsletter-desc">{t.newsletter.description}</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
              <input
                type="email"
                className="newsletter-input"
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                required
              />
              <button type="submit" className="newsletter-btn">
                {t.newsletter.subscribe}
              </button>
            </div>
            {status === "success" && (
              <p className="newsletter-msg success">{t.newsletter.success}</p>
            )}
            {status === "error" && (
              <p className="newsletter-msg error">{t.newsletter.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
