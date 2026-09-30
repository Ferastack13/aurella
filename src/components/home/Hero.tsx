import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Glass } from "@/components/ui/Glass";
import { getBestSellers } from "@/data/products";

export function Hero() {
  const featured = getBestSellers().slice(0, 3);

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pt-36">
      <div className="orb orb-ice -left-24 top-20 h-72 w-72 animate-pulse-glow" />
      <div className="orb orb-lavender right-0 top-40 h-80 w-80 animate-pulse-glow" />
      <div className="orb orb-champagne bottom-10 left-1/3 h-64 w-64 animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 space-y-8 animate-fade-up">
          <Glass variant="soft" className="inline-flex px-4 py-2">
            <span className="text-[11px] tracking-[0.2em] uppercase text-charcoal/55">
              Immersive sensory living
            </span>
          </Glass>

          <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-charcoal">
            AURELIA
          </h1>

          <p className="font-display text-2xl md:text-3xl text-charcoal/80 max-w-md leading-snug">
            Designed to Transform Atmosphere.
          </p>

          <p className="max-w-md text-base md:text-lg text-charcoal/55 leading-relaxed font-body">
            Discover scent, design, and emotion through immersive living — a
            digital gallery for the future of home fragrance.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/collections">Explore Collection</Button>
            <Button href="/experiences" variant="glass">
              Enter Experiences
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6 h-[420px] md:h-[560px]">
          {/* Floating product stack */}
          <div className="absolute left-[8%] top-[8%] z-10 w-[42%] animate-float">
            <Glass className="overflow-hidden p-2.5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={featured[0]?.image ?? ""}
                  alt={featured[0]?.name ?? "Featured"}
                  fill
                  priority
                  className="object-cover"
                  sizes="280px"
                />
              </div>
              <div className="px-2 py-3">
                <p className="font-display text-sm">{featured[0]?.name}</p>
              </div>
            </Glass>
          </div>

          <div className="absolute right-[4%] top-[18%] z-20 w-[46%] animate-float-delayed">
            <Glass variant="strong" className="overflow-hidden p-2.5">
              <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
                <Image
                  src={featured[1]?.image ?? ""}
                  alt={featured[1]?.name ?? "Featured"}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="px-2 py-3">
                <p className="font-display text-sm">{featured[1]?.name}</p>
              </div>
            </Glass>
          </div>

          <div className="absolute bottom-[4%] left-[28%] z-30 w-[40%] animate-float-slow">
            <Glass className="overflow-hidden p-2.5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={featured[2]?.image ?? ""}
                  alt={featured[2]?.name ?? "Featured"}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
              <div className="px-2 py-3">
                <p className="font-display text-sm">{featured[2]?.name}</p>
              </div>
            </Glass>
          </div>

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
