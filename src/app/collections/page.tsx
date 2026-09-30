import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { FadeIn } from "@/components/ui/FadeIn";
import { Glass } from "@/components/ui/Glass";
import { IconArrow } from "@/components/ui/Icons";

export const metadata = {
  title: "Collections",
  description:
    "Enter immersive AURELIA collection worlds — Nordic, Coastal, Winter Retreat, Everyday Ritual, and Seasonal Editions.",
};

export default function CollectionsPage() {
  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
              Immersive worlds
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
              Collections
            </h1>
            <p className="mt-4 text-lg text-charcoal/55 leading-relaxed">
              Each collection is its own atmosphere — a curated world of scent,
              material, and mood.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {collections.map((c, i) => (
            <FadeIn key={c.id} delay={i * 80}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <Glass variant="strong" className="overflow-hidden product-float">
                  <div className="grid lg:grid-cols-5">
                    <div className="relative min-h-[260px] lg:col-span-3 lg:min-h-[380px] reveal-image">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/5" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-10 lg:col-span-2">
                      <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">
                        World {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-3 group-hover:text-midnight transition-colors">
                        {c.name}
                      </h2>
                      <p className="text-charcoal/55 leading-relaxed mb-6">
                        {c.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-charcoal/70">
                        Enter world <IconArrow size={14} />
                      </span>
                    </div>
                  </div>
                </Glass>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
