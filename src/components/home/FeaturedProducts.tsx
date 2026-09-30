import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedProducts() {
  const products = getBestSellers().slice(0, 8);

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
            <SectionHeading
              eyebrow="Floating gallery"
              title="Featured Products"
              subtitle="Luxury showcases with layered depth — hover to feel the presence of each piece."
            />
            <Button href="/shop" variant="glass" className="shrink-0 self-start md:self-auto md:mb-2">
              View all
            </Button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 60}>
              <ProductCard product={product} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
