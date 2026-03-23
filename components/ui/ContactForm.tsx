"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-forest-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. Our team will get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sandalwood-600 font-semibold hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sandalwood-50 border border-sandalwood-100 rounded-3xl p-8 shadow-sm flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-forest-800">Full Name *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-forest-800">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-forest-800">Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-forest-800">Subject</label>
        <input
          name="subject"
          type="text"
          placeholder="How can we help you?"
          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-forest-800">Message *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Write your message here..."
          className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-sandalwood-400 focus:ring-1 focus:ring-sandalwood-400 transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-forest-800 hover:bg-forest-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors text-base"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
