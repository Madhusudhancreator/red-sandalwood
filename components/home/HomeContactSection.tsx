"use client";

import { useState } from "react";

export function HomeContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm font-medium outline-none transition-all placeholder:font-normal";

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "var(--color-deep-mocha)" }}>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">

        {/* ── Left: copy ── */}
        <div>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.28em] mb-4"
            style={{ color: "rgba(243,229,216,0.5)" }}>
            Join the Association
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5"
            style={{ color: "var(--color-almond-cream)" }}>
            Be Part<br />
            <span style={{ color: "#a8d4a8" }}>of Us.</span>
          </h2>

          <div className="flex gap-2 mb-6">
            <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "var(--color-hunter-green)" }} />
            <div className="w-4 h-1 rounded-full" style={{ backgroundColor: "var(--color-dark-wine)" }} />
          </div>

          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(243,229,216,0.75)" }}>
            Whether you're a farmer, landowner, or investor — SRSGA is here to
            guide you every step of the way. Reach out and our team will connect
            with you personally.
          </p>
        </div>

        {/* ── Right: form ── */}
        <div className="rounded-3xl p-8 sm:p-10 shadow-2xl"
          style={{ backgroundColor: "var(--color-almond-cream)" }}>

          <h3 className="text-xl font-extrabold mb-1" style={{ color: "var(--color-deep-mocha)" }}>
            Contact Us
          </h3>
          <p className="text-xs font-medium mb-6" style={{ color: "rgba(58,47,47,0.6)" }}>
            Fill in your details and we'll get back to you.
          </p>

          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "rgba(62,107,62,0.15)" }}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#3E6B3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="text-base font-extrabold" style={{ color: "var(--color-hunter-green)" }}>Message Sent!</p>
              <p className="text-sm mt-1" style={{ color: "rgba(58,47,47,0.65)" }}>We'll reach you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--color-deep-mocha)" }}>Name</label>
                <input
                  name="name" type="text" required value={form.name} onChange={handleChange}
                  placeholder="Your full name"
                  className={inputBase}
                  style={{ borderColor: "rgba(58,47,47,0.18)", backgroundColor: "white", color: "var(--color-deep-mocha)" }}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--color-deep-mocha)" }}>Email</label>
                <input
                  name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputBase}
                  style={{ borderColor: "rgba(58,47,47,0.18)", backgroundColor: "white", color: "var(--color-deep-mocha)" }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--color-deep-mocha)" }}>Phone Number</label>
                <input
                  name="phone" type="tel" required value={form.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className={inputBase}
                  style={{ borderColor: "rgba(58,47,47,0.18)", backgroundColor: "white", color: "var(--color-deep-mocha)" }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5"
                  style={{ color: "var(--color-deep-mocha)" }}>Message</label>
                <textarea
                  name="message" rows={4} value={form.message} onChange={handleChange}
                  placeholder="Tell us about your land or interest..."
                  className={inputBase + " resize-none"}
                  style={{ borderColor: "rgba(58,47,47,0.18)", backgroundColor: "white", color: "var(--color-deep-mocha)" }}
                />
              </div>

              {status === "error" && (
                <p className="text-xs font-semibold" style={{ color: "var(--color-dark-wine)" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl py-3.5 text-sm font-extrabold tracking-wide transition-opacity disabled:opacity-60"
                style={{ backgroundColor: "var(--color-hunter-green)", color: "var(--color-almond-cream)" }}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
