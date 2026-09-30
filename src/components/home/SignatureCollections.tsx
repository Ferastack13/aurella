import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";

export function SignatureCollections() {
  const featured = collections.slice(0, 3);

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Campaign worlds"
            title="Signature Collections"
            subtitle="Large immersive visuals and premium storytelling — each campaign is an exhibition."
            align="center"
          />
        </FadeIn>

        <div className="space-y-6">
          {featured.map((c, i) => (
            <FadeIn key={c.id} delay={i * 100}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <Glass
                  variant="strong"
                  className={`overflow-hidden ${
                    i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`grid lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[280px] md:min-h-[380px] reveal-image">
                      <Image
                        src={c.lifestyle}
                        alt={c.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-4">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/40">
                        Signature series
                      </p>
                      <h3 className="font-display text-3xl md:text-5xl text-charcoal group-hover:text-midnight transition-colors">
                        {c.name}
                      </h3>
                      <p className="text-charcoal/55 leading-relaxed max-w-md">
                        {c.description}
                      </p>
                      <span className="inline-flex text-[12px] tracking-[0.14em] uppercase text-charcoal/70 pt-2">
                        Enter the world →
                      </span>
                    </div>
                  </div>
                </Glass>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
