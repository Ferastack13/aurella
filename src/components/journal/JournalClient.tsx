"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  articles,
  categoryLabels,
  type JournalCategory,
} from "@/data/journal";
import { Glass } from "@/components/ui/Glass";
import { FadeIn } from "@/components/ui/FadeIn";

export function JournalClient() {
  const [cat, setCat] = useState<JournalCategory | "all">("all");

  const filtered = useMemo(() => {
    if (cat === "all") return articles;
    return articles.filter((a) => a.category === cat);
  }, [cat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="space-y-10">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          type="button"
          onClick={() => setCat("all")}
          className={`shrink-0 rounded-full px-4 py-2 text-[11px] tracking-[0.08em] uppercase transition-all ${
            cat === "all"
              ? "bg-charcoal text-frost"
              : "glass text-charcoal/65 hover:bg-white/60"
          }`}
        >
          All
        </button>
        {(Object.entries(categoryLabels) as [JournalCategory, string][]).map(
          ([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setCat(id)}
              className={`shrink-0 rounded-full px-4 py-2 text-[11px] tracking-[0.08em] uppercase transition-all ${
                cat === id
                  ? "bg-charcoal text-frost"
                  : "glass text-charcoal/65 hover:bg-white/60"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      {featured && (
        <FadeIn>
          <Link href={`/journal/${featured.slug}`} className="group block">
            <Glass variant="strong" className="overflow-hidden product-float">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-[420px] reveal-image">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 space-y-4">
                  <p className="text-[11px] tracking-[0.16em] uppercase text-charcoal/40">
                    {categoryLabels[featured.category]} · {featured.readTime}
                  </p>
                  <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight group-hover:text-midnight transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-charcoal/55 leading-relaxed text-lg">
                    {featured.excerpt}
                  </p>
                  <span className="text-[12px] tracking-[0.12em] uppercase text-charcoal/60 pt-2">
                    Read article →
                  </span>
                </div>
              </div>
            </Glass>
          </Link>
        </FadeIn>
      )}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((article, i) => (
          <FadeIn key={article.slug} delay={i * 60}>
            <Link
              href={`/journal/${article.slug}`}
              className="group block h-full"
            >
              <Glass className="product-float overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] m-3 overflow-hidden rounded-[1.25rem] reveal-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-5 pb-6 pt-1 space-y-2 flex-1">
                  <p className="text-[10px] tracking-[0.14em] uppercase text-charcoal/40">
                    {categoryLabels[article.category]} · {article.readTime}
                  </p>
                  <h3 className="font-display text-xl text-charcoal group-hover:text-midnight transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal/55 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Glass>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
