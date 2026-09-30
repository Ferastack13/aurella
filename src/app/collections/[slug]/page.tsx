import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection, formatPrice } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Glass } from "@/components/ui/Glass";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const items = getProductsByCollection(collection.id);

  return (
    <div>
      {/* Immersive hero */}
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-charcoal/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-40 md:px-8 md:pb-20">
            <Glass variant="strong" className="max-w-xl p-8 md:p-10">
              <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal/45 mb-3">
                Collection world
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-4">
                {collection.name}
              </h1>
              <p className="text-charcoal/60 leading-relaxed">
                {collection.tagline}
              </p>
            </Glass>
          </div>
        </div>
      </section>

      <div className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1280px] space-y-16">
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-3">
                  The story
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
                  An immersive chapter
                </h2>
                <p className="text-charcoal/60 leading-relaxed text-lg mb-4">
                  {collection.story}
                </p>
                <p className="text-charcoal/55 leading-relaxed">
                  {collection.description}
                </p>
              </div>
              <Glass className="overflow-hidden p-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={collection.lifestyle}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Glass>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="font-display text-3xl text-charcoal">
                  Pieces in this world
                </h2>
                <p className="text-sm text-charcoal/45">
                  From {formatPrice(Math.min(...items.map((i) => i.price)))}
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {items.map((p, i) => (
                <FadeIn key={p.id} delay={i * 50}>
                  <ProductCard product={p} />
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn>
            <Glass className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <p className="font-display text-xl text-charcoal">
                Continue exploring other worlds
              </p>
              <div className="flex flex-wrap gap-2">
                {collections
                  .filter((c) => c.id !== collection.id)
                  .slice(0, 3)
                  .map((c) => (
                    <Link
                      key={c.id}
                      href={`/collections/${c.slug}`}
                      className="rounded-full glass px-4 py-2 text-sm text-charcoal/70 hover:bg-white/70"
                    >
                      {c.name}
                    </Link>
                  ))}
                <Button href="/shop" variant="primary">
                  Full showroom
                </Button>
              </div>
            </Glass>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
