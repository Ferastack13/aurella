"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";

const moods = [
  {
    id: "calm",
    name: "Calm",
    description: "Soft lavender fields, linen air, restorative stillness.",
    filter: "calm",
    gradient: "from-lavender/50 via-frost/40 to-ice/40",
  },
  {
    id: "focus",
    name: "Focus",
    description: "Crisp citrus, rosemary clarity, studio-ready atmosphere.",
    filter: "energizing",
    gradient: "from-ice/60 via-accent/30 to-frost/40",
  },
  {
    id: "warmth",
    name: "Warmth",
    description: "Amber glow, vanilla birch, intimate evening light.",
    filter: "romantic",
    gradient: "from-champagne/70 via-frost/30 to-lavender/30",
  },
  {
    id: "retreat",
    name: "Retreat",
    description: "Cedar silence, sandalwood smoke, deep restoration.",
    filter: "grounding",
    gradient: "from-pearl/80 via-champagne/40 to-frost/50",
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Marble presence, signature blends, elevated ritual.",
    filter: "romantic",
    gradient: "from-accent/40 via-lavender/40 to-champagne/40",
  },
  {
    id: "nature",
    name: "Nature",
    description: "Forest moss, coastal air, living green horizons.",
    filter: "fresh",
    gradient: "from-ice/50 via-pearl/40 to-lavender/20",
  },
];

export function ExploreByMood() {
  type MoodId = (typeof moods)[number]["id"];
  const [active, setActive] = useState<MoodId>(moods[0].id);
  const current = moods.find((m) => m.id === active) ?? moods[0];

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="orb orb-accent right-10 top-20 h-56 w-56 opacity-50" />
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Sensory navigation"
            title="Explore by Mood"
            subtitle="Each mood opens a unique fragrance experience tailored to how you want to feel."
            align="center"
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
            {moods.map((mood) => (
              <button
                key={mood.id}
                type="button"
                onClick={() => setActive(mood.id)}
                className={`rounded-full px-5 py-2.5 text-[12px] tracking-[0.1em] uppercase transition-all duration-400 ${
                  active === mood.id
                    ? "bg-charcoal text-frost shadow-[0_12px_28px_rgba(34,34,34,0.2)]"
                    : "glass text-charcoal/70 hover:bg-white/70"
                }`}
              >
                {mood.name}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160} key={current.id}>
          <Glass
            variant="strong"
            className={`relative overflow-hidden p-8 md:p-14 bg-gradient-to-br ${current.gradient}`}
          >
            <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/45">
                  Mood experience
                </p>
                <h3 className="font-display text-4xl md:text-6xl text-charcoal">
                  {current.name}
                </h3>
                <p className="text-lg text-charcoal/60 max-w-md leading-relaxed">
                  {current.description}
                </p>
                <Link
                  href={`/shop?mood=${current.filter}`}
                  className="inline-flex rounded-full bg-charcoal px-7 py-3.5 text-[13px] text-frost tracking-[0.04em] transition-transform hover:scale-[1.02]"
                >
                  Discover {current.name} scents
                </Link>
              </div>
              <div className="relative h-56 md:h-72">
                <div className="absolute inset-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl animate-float" />
                <div className="absolute inset-16 rounded-[1.5rem] bg-white/50 backdrop-blur-2xl border border-white/70 shadow-lg animate-float-delayed" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-2xl animate-pulse-glow" />
              </div>
            </div>
          </Glass>
        </FadeIn>
      </div>
    </section>
  );
}
