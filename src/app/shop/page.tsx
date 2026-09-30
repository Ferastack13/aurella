import { ShopClient } from "@/components/shop/ShopClient";
import { FadeIn } from "@/components/ui/FadeIn";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export const metadata = {
  title: "Shop",
  description:
    "Explore the AURELIA digital showroom — filter by mood, atmosphere, collection, and season.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const get = (key: string) => {
    const v = params[key];
    return Array.isArray(v) ? v[0] : v;
  };

  return (
    <div className="px-4 pb-20 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1280px]">
        <FadeIn>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[11px] tracking-[0.22em] uppercase text-charcoal/40">
              Discovery commerce
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.05]">
              The Showroom
            </h1>
            <p className="mt-4 text-lg text-charcoal/55 leading-relaxed">
              Browse like exploring a digital exhibition — by mood, room,
              collection, and season. Not a grid. A gallery.
            </p>
          </div>
        </FadeIn>

        <ShopClient
          initialCategory={get("category")}
          initialMood={get("mood")}
          initialRoom={get("room")}
          initialFilter={get("filter")}
          initialQuery={get("q")}
        />
      </div>
    </div>
  );
}
