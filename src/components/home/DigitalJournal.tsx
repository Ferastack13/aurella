import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/journal";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Glass } from "@/components/ui/Glass";
import { Button } from "@/components/ui/Button";
import { categoryLabels } from "@/data/journal";

export function DigitalJournal() {
  const featured = articles.slice(0, 3);

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
            <SectionHeading
              eyebrow="Digital journal"
              title="Future-focused editorial"
              subtitle="Large immersive articles on atmosphere, wellness, and creative living."
            />
            <Button href="/journal" variant="glass" className="shrink-0 self-start md:mb-2">
              Read Journal
            </Button>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 80}>
              <Link href={`/journal/${article.slug}`} className="group block h-full">
                <Glass className="product-float overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] m-3 overflow-hidden rounded-[1.25rem] reveal-image">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-5 pb-6 pt-1 space-y-3 flex-1">
                    <p className="text-[10px] tracking-[0.16em] uppercase text-charcoal/40">
                      {categoryLabels[article.category]} · {article.readTime}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-midnight transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-charcoal/55 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
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
