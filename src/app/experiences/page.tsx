import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glass } from "@/components/ui/Glass";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Experiences",
  description:
    "Sensory living with AURELIA — atmosphere rituals, home wellness, mindful interiors, and lifestyle experiences.",
};

const experiences = [
  {
    id: "atmosphere",
    title: "Creating Atmosphere",
    description:
      "Learn how light, scent, and material compose rooms that feel alive — not decorated.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    href: "/journal/the-art-of-scent-layering",
  },
  {
    id: "rituals",
    title: "Scent Rituals",
    description:
      "Morning clarity, evening unwind, and transitional mists — fragrance as daily choreography.",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1200&q=80",
    href: "/shop?category=oils",
  },
  {
    id: "wellness",
    title: "Home Wellness",
    description:
      "Essential oil blends and soft atmospheres designed for nervous-system reset.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    href: "/shop?mood=calm",
  },
  {
    id: "mindful",
    title: "Mindful Living",
    description:
      "Slow mornings, intentional objects, and spaces that invite presence over productivity theatre.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    href: "/journal/a-philosophy-of-slow-mornings",
  },
  {
    id: "moods",
    title: "Interior Moods",
    description:
      "Map Calm, Focus, Warmth, Retreat, Luxury, and Nature across your home.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80",
    href: "/shop?filter=mood",
  },
  {
    id: "lifestyle",
    title: "Lifestyle Experiences",
    description:
      "From dinner atmospheres to winter retreats — curated sensory programs for real life.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80",
    href: "/collections/winter-retreat",
  },
];

const rituals = [
  {
    step: "01",
    title: "Set the base",
    text: "A diffuser or oil blend that holds the room quietly all day.",
  },
  {
    step: "02",
    title: "Add presence",
    text: "A candle for ritual hours — warmth, light, and attention.",
  },
  {
    step: "03",
    title: "Reset with mist",
    text: "A room spray for transitions: arrivals, evenings, fresh starts.",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px] space-y-20">
        <FadeIn>
          <div className="relative overflow-hidden">
            <Glass
              variant="strong"
              className="relative p-8 md:p-14 overflow-hidden"
            >
              <div className="absolute inset-0 mesh-glow opacity-60" />
              <div className="orb orb-accent -right-10 top-0 h-56 w-56" />
              <div className="relative z-10 max-w-2xl space-y-5">
                <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
                  Sensory living
                </p>
                <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
                  Experiences
                </h1>
                <p className="text-lg text-charcoal/55 leading-relaxed">
                  AURELIA is more than products — it is a practice of shaping
                  how spaces feel. Explore rituals, wellness, and immersive
                  interior moods.
                </p>
                <Button href="/shop">Begin with the showroom</Button>
              </div>
            </Glass>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 70}>
              <Link href={exp.href} className="group block h-full">
                <Glass className="product-float overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[5/4] m-3 overflow-hidden rounded-[1.25rem] reveal-image">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-5 pb-6 pt-1 space-y-2 flex-1">
                    <h2 className="font-display text-2xl text-charcoal group-hover:text-midnight transition-colors">
                      {exp.title}
                    </h2>
                    <p className="text-sm text-charcoal/55 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </Glass>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/40 mb-3 text-center">
              Foundational ritual
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal text-center mb-10">
              Three layers of atmosphere
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {rituals.map((r) => (
                <Glass key={r.step} variant="strong" className="p-7 space-y-3">
                  <p className="font-display text-4xl text-accent/80">{r.step}</p>
                  <h3 className="font-display text-xl text-charcoal">{r.title}</h3>
                  <p className="text-sm text-charcoal/55 leading-relaxed">
                    {r.text}
                  </p>
                </Glass>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <Glass
            variant="strong"
            className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
                Build your atmosphere
              </h2>
              <p className="text-charcoal/55">
                Use the Atmosphere Builder on the homepage, or start by room.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/#atmosphere" variant="glass">
                Atmosphere Builder
              </Button>
              <Button href="/shop?room=living-room">Shop by room</Button>
            </div>
          </Glass>
        </FadeIn>
      </div>
    </div>
  );
}
