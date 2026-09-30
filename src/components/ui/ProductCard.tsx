import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { formatPrice, categoryLabels } from "@/data/products";
import { Glass } from "@/components/ui/Glass";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="product-float group block"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Glass className="overflow-hidden p-3 md:p-4 h-full">
        <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-ice/40 via-pearl/30 to-lavender/30">
          <div className="absolute inset-0 mesh-glow opacity-40" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-x-3 bottom-3 flex gap-2">
            {product.bestSeller && (
              <span className="glass-soft rounded-full px-3 py-1 text-[10px] tracking-[0.12em] uppercase text-charcoal/70">
                Icon
              </span>
            )}
            {product.newArrival && (
              <span className="glass-soft rounded-full px-3 py-1 text-[10px] tracking-[0.12em] uppercase text-charcoal/70">
                New
              </span>
            )}
          </div>
        </div>
        <div className="px-1 pb-1 space-y-1">
          <p className="text-[10px] tracking-[0.16em] uppercase text-charcoal/40">
            {categoryLabels[product.category]}
          </p>
          <h3 className="font-display text-lg text-charcoal group-hover:text-midnight transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-charcoal/55">{formatPrice(product.price)}</p>
        </div>
      </Glass>
    </Link>
  );
}
