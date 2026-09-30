import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";

const stories = [
  {
    name: "Elena V.",
    place: "Copenhagen loft",
    quote:
      "Lighting Nordic Cedar at dusk completely changed how our living room feels — like stepping into a quieter dimension.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    before: "Flat · functional",
    after: "Layered · atmospheric",
  },
  {
    name: "Marcus & Lia",
    place: "Lisbon apartment",
    quote:
      "The Atmosphere Builder idea became real — Ocean Mist in the bathroom, Focus Blend at the desk. Every room has a signature now.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    before: "Scattered scents",
    after: "Coherent rituals",
  },
  {
    name: "Aya K.",
    place: "Tokyo studio",
    quote:
      "White Linen and the ceramic vases turned my small space into something that feels curated and calm — a private gallery.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    before: "Compact clutter",
    after: "Intentional stillness",
  },
];

export function CustomerExperiences() {
  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Lived atmosphere"
            title="Customer Experiences"
            subtitle="Stories of transformation — before-and-after lifestyles shaped by scent and design."
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <FadeIn key={s.name} delay={i * 90}>
              <Glass className="product-float overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[5/4] m-3 overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={s.image}
                    alt={s.place}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-5 pb-6 pt-2 flex-1 flex flex-col">
                  <div className="mb-4 flex gap-2 text-[10px] tracking-[0.1em] uppercase">
                    <span className="rounded-full bg-pearl/80 px-3 py-1 text-charcoal/50">
                      {s.before}
                    </span>
                    <span className="rounded-full bg-accent/30 px-3 py-1 text-charcoal/70">
                      → {s.after}
                    </span>
                  </div>
                  <p className="font-display text-lg leading-snug text-charcoal/85 mb-4 flex-1">
                    “{s.quote}”
                  </p>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{s.name}</p>
                    <p className="text-xs text-charcoal/45">{s.place}</p>
                  </div>
                </div>
              </Glass>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
