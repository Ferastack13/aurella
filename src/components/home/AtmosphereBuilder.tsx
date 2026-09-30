"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { rooms } from "@/data/collections";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";

const roomStories: Record<string, string> = {
  "living-room":
    "Layer woody bases with amber accents — atmosphere for gathering and quiet evenings.",
  bedroom:
    "Soft linen and lavender rituals that cue rest the moment you enter.",
  bathroom: "Mineral freshness and spa clarity — coastal air and white tea.",
  workspace:
    "Focus blends and green notes that sharpen without overwhelming.",
  "dining-room":
    "Warm spice and soft woods that invite conversation and lingering.",
};

export function AtmosphereBuilder() {
  const [active, setActive] = useState(rooms[0].id);
  const current = rooms.find((r) => r.id === active) ?? rooms[0];

  return (
    <section id="atmosphere" className="relative scroll-mt-28 px-4 py-20 md:px-8 md:py-28 overflow-hidden">
      <div className="orb orb-champagne -left-10 bottom-0 h-72 w-72 opacity-60" />
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Interactive concept"
            title="Atmosphere Builder"
            subtitle="Explore how AURELIA products transform every room into a sensory environment."
          />
        </FadeIn>

        <div className="mb-6 flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {rooms.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => setActive(room.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[12px] tracking-[0.08em] uppercase transition-all ${
                active === room.id
                  ? "bg-charcoal text-frost"
                  : "glass text-charcoal/70 hover:bg-white/60"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        <FadeIn key={current.id} delay={60}>
          <Glass variant="strong" className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[320px] lg:min-h-[440px]">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 space-y-5">
                <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/40">
                  Room experience
                </p>
                <h3 className="font-display text-3xl md:text-5xl text-charcoal">
                  {current.name}
                </h3>
                <p className="text-charcoal/60 leading-relaxed text-lg">
                  {roomStories[current.id] ?? current.description}
                </p>
                <Link
                  href={`/shop?room=${current.id}`}
                  className="inline-flex w-fit rounded-full bg-charcoal px-7 py-3.5 text-[13px] text-frost"
                >
                  Shop this atmosphere
                </Link>
              </div>
            </div>
          </Glass>
        </FadeIn>
      </div>
    </section>
  );
}
