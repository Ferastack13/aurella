"use client";

import { useState, type FormEvent } from "react";
import { Glass } from "@/components/ui/Glass";
import { FadeIn } from "@/components/ui/FadeIn";

export function Newsletter() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="orb orb-lavender left-1/4 top-10 h-48 w-48 opacity-50" />
      <div className="orb orb-ice right-1/4 bottom-10 h-56 w-56 opacity-50" />

      <FadeIn>
        <Glass
          variant="strong"
          className="relative mx-auto max-w-[900px] overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 mesh-glow opacity-50" />
          <div className="relative z-10 space-y-6">
            <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
              Stay inside the experience
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight">
              Join the AURELIA circle
            </h2>
            <p className="mx-auto max-w-md text-charcoal/55 leading-relaxed">
              Early access to seasonal campaigns, scent discoveries, and
              immersive launches — delivered with quiet elegance.
            </p>

            {done ? (
              <p className="font-display text-xl text-charcoal/80 pt-4">
                Welcome. Your invitation is confirmed.
              </p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 rounded-full border border-white/70 bg-white/55 px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button
                  type="submit"
                  className="rounded-full bg-charcoal px-7 py-3.5 text-[13px] text-frost tracking-[0.04em] hover:bg-midnight transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Glass>
      </FadeIn>
    </section>
  );
}
