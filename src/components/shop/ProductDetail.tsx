"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import {
  formatPrice,
  categoryLabels,
  collectionLabels,
  moodLabels,
  roomLabels,
  getRelatedProducts,
  getPairedProducts,
} from "@/data/products";
import { Glass } from "@/components/ui/Glass";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  const gallery = [product.image, ...product.gallery.filter((g) => g !== product.image)].slice(0, 4);
  const related = getRelatedProducts(product);
  const paired = getPairedProducts(product);

  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px] space-y-20">
        {/* Exhibit hero */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-7">
            <Glass variant="strong" className="overflow-hidden p-3 md:p-4 relative">
              <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" />
              <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-ice/30 via-pearl/20 to-lavender/30">
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover animate-float-slow"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
                {gallery.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl transition-all ${
                      activeImage === i
                        ? "ring-2 ring-accent"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            </Glass>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={100}>
            <div className="lg:sticky lg:top-32 space-y-6">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-2">
                  {categoryLabels[product.category]} ·{" "}
                  {collectionLabels[product.collection]}
                </p>
                <h1 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
                  {product.name}
                </h1>
                <p className="mt-3 font-display text-2xl text-charcoal/70">
                  {formatPrice(product.price)}
                </p>
              </div>

              <p className="text-charcoal/60 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.mood.map((m) => (
                  <Link
                    key={m}
                    href={`/shop?mood=${m}`}
                    className="rounded-full glass px-3 py-1.5 text-[10px] tracking-[0.1em] uppercase text-charcoal/60"
                  >
                    {moodLabels[m]}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  onClick={() => setAdded(true)}
                  className="flex-1 sm:flex-none"
                >
                  {added ? "Added to cart" : "Add to cart"}
                </Button>
                <Button href="/experiences" variant="glass">
                  Related experiences
                </Button>
              </div>

              <Glass className="p-5 space-y-3">
                <p className="text-[11px] tracking-[0.16em] uppercase text-charcoal/40">
                  Specimens
                </p>
                <p className="text-sm text-charcoal/65">{product.materials}</p>
                <p className="text-sm text-charcoal/65">{product.dimensions}</p>
              </Glass>
            </div>
          </FadeIn>
        </div>

        {/* Storytelling */}
        <FadeIn>
          <Glass variant="strong" className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-48 w-48 bg-accent/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">
                  Immersive storytelling
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
                  The narrative
                </h2>
                <p className="text-charcoal/60 leading-relaxed text-lg">
                  {product.story}
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">
                  How to use
                </p>
                <p className="text-charcoal/60 leading-relaxed">{product.howToUse}</p>
              </div>
            </div>
          </Glass>
        </FadeIn>

        {/* Fragrance notes */}
        {(product.notes.top.length > 0 ||
          product.notes.heart.length > 0 ||
          product.notes.base.length > 0) && (
          <FadeIn>
            <div className="grid gap-4 md:grid-cols-3">
              {(
                [
                  ["Top", product.notes.top, "from-ice/40"],
                  ["Heart", product.notes.heart, "from-lavender/40"],
                  ["Base", product.notes.base, "from-champagne/50"],
                ] as const
              ).map(([label, notes, grad]) => (
                <Glass
                  key={label}
                  className={`p-6 bg-gradient-to-br ${grad} to-transparent`}
                >
                  <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">
                    {label} notes
                  </p>
                  <p className="font-display text-xl text-charcoal">
                    {notes.join(" · ")}
                  </p>
                </Glass>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Mood + rooms */}
        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <Glass className="p-6 md:p-8">
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-4">
                Mood profile
              </p>
              <div className="flex flex-wrap gap-2">
                {product.mood.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-accent/25 px-4 py-2 text-sm text-charcoal/80"
                  >
                    {moodLabels[m]}
                  </span>
                ))}
              </div>
            </Glass>
            <Glass className="p-6 md:p-8">
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-4">
                Room recommendations
              </p>
              <div className="flex flex-wrap gap-2">
                {product.rooms.map((r) => (
                  <Link
                    key={r}
                    href={`/shop?room=${r}`}
                    className="rounded-full bg-pearl/80 px-4 py-2 text-sm text-charcoal/80 hover:bg-pearl"
                  >
                    {roomLabels[r]}
                  </Link>
                ))}
              </div>
            </Glass>
          </div>
        </FadeIn>

        {/* Lifestyle gallery */}
        {product.lifestyle.length > 0 && (
          <FadeIn>
            <div className="grid gap-4 md:grid-cols-2">
              {product.lifestyle.map((img, i) => (
                <Glass key={i} className="overflow-hidden p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                    <Image
                      src={img}
                      alt={`${product.name} lifestyle`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Glass>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Paired */}
        {paired.length > 0 && (
          <div>
            <FadeIn>
              <h2 className="font-display text-3xl text-charcoal mb-8">
                Frequently paired
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {paired.map((p, i) => (
                <FadeIn key={p.id} delay={i * 60}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Reviews placeholder */}
        <FadeIn>
          <Glass variant="strong" className="p-8 md:p-10">
            <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-4">
              Reviews
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-6">
              What collectors say
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="font-display text-lg text-charcoal/85">
                  “Feels like a private exhibition piece — the scent fills the room without ever shouting.”
                </p>
                <p className="text-xs text-charcoal/40">— Verified collector</p>
              </div>
              <div className="space-y-2">
                <p className="font-display text-lg text-charcoal/85">
                  “Worth every dollar. The vessel alone is beautiful; the fragrance is transformative.”
                </p>
                <p className="text-xs text-charcoal/40">— Verified collector</p>
              </div>
            </div>
          </Glass>
        </FadeIn>

        {/* Gift rec */}
        <FadeIn>
          <Glass className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-2">
                Gift recommendation
              </p>
              <h3 className="font-display text-2xl text-charcoal">
                Pair with a curated gift set
              </h3>
            </div>
            <Button href="/shop?category=gift-sets" variant="primary">
              Explore gift sets
            </Button>
          </Glass>
        </FadeIn>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <FadeIn>
              <h2 className="font-display text-3xl text-charcoal mb-8">
                Continue the exhibition
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {related.map((p, i) => (
                <FadeIn key={p.id} delay={i * 60}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
