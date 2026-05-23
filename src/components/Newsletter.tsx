"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: Integrate with email service (Mailchimp, Buttondown, etc.)
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-box">
          <div className="newsletter-content">
            <span className="newsletter-icon">📬</span>
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-desc">
              Get the latest antidetect browser reviews, deals, and guides delivered to your inbox.
              No spam — unsubscribe anytime.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-wrap">
              <input
                type="email"
                className="newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe →
              </button>
            </div>
            {status === "success" && (
              <p className="newsletter-msg success">✓ Thanks for subscribing!</p>
            )}
            {status === "error" && (
              <p className="newsletter-msg error">Please enter a valid email.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
