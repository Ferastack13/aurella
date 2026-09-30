import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";
import { IconArrow } from "@/components/ui/Icons";

export function CollectionShowcase() {
  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <SectionHeading
            eyebrow="Worlds to enter"
            title="Interactive Collection Showcase"
            subtitle="Products appear inside atmospheric scenes — each collection is its own immersive environment."
          />
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <FadeIn key={c.id} delay={i * 80}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <Glass className="product-float overflow-hidden p-3 h-full">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <p className="mb-1 text-[10px] tracking-[0.18em] uppercase text-frost/70">
                        Collection
                      </p>
                      <h3 className="font-display text-2xl text-frost mb-2">
                        {c.name}
                      </h3>
                      <p className="text-sm text-frost/75 line-clamp-2 mb-4">
                        {c.tagline}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-frost/90">
                        Enter <IconArrow size={14} />
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
