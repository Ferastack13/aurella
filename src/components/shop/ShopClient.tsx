"use client";

import { useMemo, useState } from "react";
import {
  products,
  categoryLabels,
  collectionLabels,
  roomLabels,
  moodLabels,
  formatPrice,
  type ProductCategory,
  type CollectionId,
  type RoomId,
  type MoodId,
  type SeasonId,
} from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { Glass } from "@/components/ui/Glass";
import { FadeIn } from "@/components/ui/FadeIn";

type ShopClientProps = {
  initialCategory?: string;
  initialMood?: string;
  initialRoom?: string;
  initialFilter?: string;
  initialQuery?: string;
};

const seasons: { id: SeasonId | "all"; label: string }[] = [
  { id: "all", label: "All seasons" },
  { id: "spring", label: "Spring" },
  { id: "summer", label: "Summer" },
  { id: "autumn", label: "Autumn" },
  { id: "winter", label: "Winter" },
  { id: "all-year", label: "All year" },
];

export function ShopClient({
  initialCategory,
  initialMood,
  initialRoom,
  initialFilter,
  initialQuery,
}: ShopClientProps) {
  const [category, setCategory] = useState<ProductCategory | "all">(
    (initialCategory as ProductCategory) || "all"
  );
  const [mood, setMood] = useState<MoodId | "all">(
    (initialMood as MoodId) || "all"
  );
  const [room, setRoom] = useState<RoomId | "all">(
    (initialRoom as RoomId) || "all"
  );
  const [collection, setCollection] = useState<CollectionId | "all">("all");
  const [season, setSeason] = useState<SeasonId | "all">("all");
  const [filter, setFilter] = useState(initialFilter || "all");
  const [query] = useState(initialQuery || "");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (mood !== "all" && !p.mood.includes(mood)) return false;
      if (room !== "all" && !p.rooms.includes(room)) return false;
      if (collection !== "all" && p.collection !== collection) return false;
      if (season !== "all" && p.season !== season && p.season !== "all-year")
        return false;
      if (filter === "best-sellers" && !p.bestSeller) return false;
      if (filter === "new-arrivals" && !p.newArrival) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.description.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [category, mood, room, collection, season, filter, query]);

  const chip = (active: boolean) =>
    `shrink-0 rounded-full px-4 py-2 text-[11px] tracking-[0.08em] uppercase transition-all ${
      active
        ? "bg-charcoal text-frost"
        : "glass text-charcoal/65 hover:bg-white/60"
    }`;

  return (
    <div className="space-y-10">
      {/* Visual collection explorer */}
      <FadeIn>
        <Glass variant="strong" className="p-5 md:p-7 overflow-hidden relative">
          <div className="absolute inset-0 mesh-glow opacity-40 pointer-events-none" />
          <div className="relative space-y-5">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-charcoal/40 mb-2">
                Digital showroom
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-charcoal">
                Visual collection explorer
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] tracking-[0.16em] uppercase text-charcoal/40">
                Category
              </p>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                <button
                  type="button"
                  className={chip(category === "all")}
                  onClick={() => setCategory("all")}
                >
                  All
                </button>
                {(
                  Object.entries(categoryLabels) as [ProductCategory, string][]
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className={chip(category === id)}
                    onClick={() => setCategory(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <FilterGroup label="Mood">
                <select
                  value={mood}
                  onChange={(e) =>
                    setMood(e.target.value as MoodId | "all")
                  }
                  className="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm outline-none"
                >
                  <option value="all">All moods</option>
                  {(Object.entries(moodLabels) as [MoodId, string][]).map(
                    ([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </FilterGroup>

              <FilterGroup label="Atmosphere / Room">
                <select
                  value={room}
                  onChange={(e) =>
                    setRoom(e.target.value as RoomId | "all")
                  }
                  className="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm outline-none"
                >
                  <option value="all">All rooms</option>
                  {(Object.entries(roomLabels) as [RoomId, string][]).map(
                    ([id, label]) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    )
                  )}
                </select>
              </FilterGroup>

              <FilterGroup label="Collection">
                <select
                  value={collection}
                  onChange={(e) =>
                    setCollection(e.target.value as CollectionId | "all")
                  }
                  className="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm outline-none"
                >
                  <option value="all">All collections</option>
                  {(
                    Object.entries(collectionLabels) as [CollectionId, string][]
                  ).map(([id, label]) => (
                    <option key={id} value={id}>
                      {label}
                    </option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup label="Season">
                <select
                  value={season}
                  onChange={(e) =>
                    setSeason(e.target.value as SeasonId | "all")
                  }
                  className="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-3 text-sm outline-none"
                >
                  {seasons.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </FilterGroup>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All pieces" },
                { id: "best-sellers", label: "Best sellers" },
                { id: "new-arrivals", label: "New arrivals" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={chip(filter === f.id)}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Glass>
      </FadeIn>

      <div className="flex items-center justify-between">
        <p className="text-sm text-charcoal/50">
          {filtered.length} pieces in the gallery
          {query ? ` · “${query}”` : ""}
        </p>
        <p className="text-xs text-charcoal/35 tracking-[0.1em] uppercase hidden sm:block">
          From {formatPrice(42)}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product, i) => (
          <FadeIn key={product.id} delay={(i % 8) * 40}>
            <ProductCard product={product} index={i} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <Glass className="p-12 text-center">
          <p className="font-display text-2xl text-charcoal/70 mb-2">
            No pieces in this atmosphere
          </p>
          <p className="text-sm text-charcoal/45">
            Try adjusting mood, room, or collection filters.
          </p>
        </Glass>
      )}
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] tracking-[0.16em] uppercase text-charcoal/40">
        {label}
      </p>
      {children}
    </div>
  );
}
