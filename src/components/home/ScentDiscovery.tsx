"use client";

import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";

const families = [
  {
    id: "woody",
    name: "Woody",
    notes: "Cedar · Oak · Sandalwood · Pine",
    products: ["nordic-cedar", "scandinavian-oak", "sandalwood-smoke"],
    hue: "from-[#d4c4a8]/50 to-champagne/40",
  },
  {
    id: "green",
    name: "Green",
    notes: "Moss · Dew · Fern · Galbanum",
    products: ["forest-moss", "morning-dew"],
    hue: "from-[#c8d9c4]/50 to-ice/40",
  },
  {
    id: "fresh",
    name: "Fresh",
    notes: "Linen · Sea salt · Cotton · Citrus",
    products: ["white-linen", "coastal-breeze", "fresh-cotton"],
    hue: "from-ice/60 to-frost/50",
  },
  {
    id: "oriental",
    name: "Oriental",
    notes: "Amber · Vanilla · Spice · Smoke",
    products: ["midnight-amber", "vanilla-birch", "amber-nights"],
    hue: "from-champagne/70 to-lavender/30",
  },
  {
    id: "floral",
    name: "Floral",
    notes: "Lavender · Neroli · White tea · Peony",
    products: ["lavender-fields", "white-tea", "citrus-bloom"],
    hue: "from-lavender/50 to-frost/40",
  },
  {
    id: "aromatic",
    name: "Aromatic",
    notes: "Rosemary · Mint · Chamomile · Frankincense",
    products: ["focus-blend", "calm-blend", "sleep-blend"],
    hue: "from-accent/40 to-ice/40",
  },
];

export function ScentDiscovery() {
  type FamilyId = (typeof families)[number]["id"];
  const [active, setActive] = useState<FamilyId>(families[0].id);
  const current = families.find((f) => f.id === active) ?? families[0];

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Fragrance atlas"
            title="Scent Discovery Experience"
            subtitle="Explore fragrance families visually — find the notes that reshape your space."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5" delay={80}>
            <div className="grid grid-cols-2 gap-3">
              {families.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  className={`rounded-[1.5rem] p-5 text-left transition-all duration-400 ${
                    active === f.id
                      ? "glass-strong ring-2 ring-accent/50 scale-[1.02]"
                      : "glass-soft hover:bg-white/50"
                  }`}
                >
                  <p className="font-display text-lg text-charcoal">{f.name}</p>
                  <p className="mt-1 text-xs text-charcoal/45 line-clamp-2">
                    {f.notes}
                  </p>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={140} key={current.id}>
            <Glass
              variant="strong"
              className={`relative min-h-[320px] overflow-hidden bg-gradient-to-br ${current.hue} p-8 md:p-10`}
            >
              <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-white/40 blur-2xl animate-pulse-glow" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-3">
                    Fragrance family
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                    {current.name}
                  </h3>
                  <p className="text-charcoal/60 max-w-md leading-relaxed">
                    Signature notes: {current.notes}. Tap into compositions
                    crafted for immersive living environments.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.products.map((slug) => (
                    <Link
                      key={slug}
                      href={`/shop/${slug}`}
                      className="rounded-full bg-white/60 px-4 py-2 text-xs tracking-[0.06em] text-charcoal/80 hover:bg-white transition-colors capitalize"
                    >
                      {slug.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </Glass>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
