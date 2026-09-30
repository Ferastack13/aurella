import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glass } from "@/components/ui/Glass";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description:
    "The AURELIA story — innovation, design thinking, craftsmanship, sustainability, and the future of sensory living.",
};

const pillars = [
  {
    title: "Brand philosophy",
    text: "Atmosphere is a form of care. We design fragrance and objects that transform how spaces feel — not just how they look.",
  },
  {
    title: "Innovation",
    text: "From clean-burning wax systems to immersive digital experiences, we treat technology as a quiet partner to craft.",
  },
  {
    title: "Design thinking",
    text: "Every product begins with a room, a mood, and a ritual. Form follows the feeling we want to create.",
  },
  {
    title: "Sustainability",
    text: "Responsible sourcing, recyclable vessels, and small-batch production — luxury that respects the future.",
  },
  {
    title: "Craftsmanship",
    text: "Hand-poured candles, stone cut by ateliers, ceramics thrown by makers who sign their work with material honesty.",
  },
  {
    title: "Future vision",
    text: "We are building the next generation of lifestyle commerce — immersive, sensory, and unforgettable.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px] space-y-20">
        <FadeIn>
          <Glass
            variant="strong"
            className="relative overflow-hidden p-8 md:p-16"
          >
            <div className="absolute inset-0 mesh-glow opacity-50" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
                  Our story
                </p>
                <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
                  Immersive living, crafted
                </h1>
                <p className="text-lg text-charcoal/55 leading-relaxed">
                  AURELIA is a globally minded lifestyle house redefining how
                  premium fragrance brands exist online — blending sensory
                  design with next-generation digital craftsmanship.
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                  alt="AURELIA atelier atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Glass>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/40">
              Brand promise
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight">
              Transforming everyday spaces into immersive sensory experiences.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <Glass className="h-full p-7 space-y-3 product-float">
                <p className="font-display text-accent/70 text-sm tracking-[0.1em] uppercase">
                  0{i + 1}
                </p>
                <h3 className="font-display text-xl text-charcoal">{p.title}</h3>
                <p className="text-sm text-charcoal/55 leading-relaxed">
                  {p.text}
                </p>
              </Glass>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <Glass variant="strong" className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 space-y-4">
                <h2 className="font-display text-3xl text-charcoal">
                  Modern. Aspirational. Forward-thinking.
                </h2>
                <p className="text-charcoal/55 leading-relaxed">
                  We believe the future of luxury is experiential — not louder,
                  but deeper. AURELIA exists for people who want their homes to
                  feel like private galleries of calm, focus, and beauty.
                </p>
                <Button href="/experiences" className="w-fit">
                  Explore experiences
                </Button>
              </div>
            </div>
          </Glass>
        </FadeIn>
      </div>
    </div>
  );
}
