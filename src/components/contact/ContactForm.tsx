"use client";

import { useState, type FormEvent } from "react";
import { Glass } from "@/components/ui/Glass";

const topics = [
  "Customer Support",
  "Partnerships",
  "Wholesale",
  "Press",
  "Showroom Visits",
  "Other",
];

const fieldClass =
  "w-full rounded-2xl border border-white/65 bg-white/50 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-accent/50";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <Glass variant="strong" className="p-8 md:p-10 text-center space-y-3">
        <p className="font-display text-2xl text-charcoal">Message received</p>
        <p className="text-charcoal/55">
          Our concierge team will respond within one business day.
        </p>
      </Glass>
    );
  }

  return (
    <Glass variant="strong" className="p-6 md:p-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              required
              name="name"
              className={fieldClass}
              placeholder="Your name"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              className={fieldClass}
              placeholder="you@email.com"
            />
          </Field>
        </div>
        <Field label="Topic">
          <select name="topic" className={fieldClass} defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Message">
          <textarea
            required
            name="message"
            rows={5}
            className={`${fieldClass} resize-none`}
            placeholder="How can we help?"
          />
        </Field>
        <button
          type="submit"
          className="w-full rounded-full bg-charcoal py-3.5 text-[13px] text-frost tracking-[0.04em] hover:bg-midnight transition-colors"
        >
          Send message
        </button>
      </form>
    </Glass>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-[10px] tracking-[0.14em] uppercase text-charcoal/40">
        {label}
      </span>
      {children}
    </label>
  );
}
