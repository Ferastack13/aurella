import type { CollectionId } from "./products";

export interface Collection {
  id: CollectionId;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story: string;
  image: string;
  lifestyle: string;
}

export const collections: Collection[] = [
  {
    id: "nordic",
    slug: "nordic",
    name: "The Nordic Collection",
    tagline: "Inspired by Scandinavian forests and natural landscapes.",
    description:
      "Earthy woods, cool moss, and the quiet depth of northern landscapes — scents that ground a home in nature.",
    story:
      "The Nordic Collection is the heart of AURELIA. Each fragrance draws from the forests, stones, and soft light of Scandinavia — not as nostalgia, but as a living atmosphere you can bring indoors.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80",
    lifestyle:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
  },
  {
    id: "coastal",
    slug: "coastal",
    name: "Coastal Collection",
    tagline: "Inspired by sea air and Nordic coastlines.",
    description:
      "Mineral freshness, driftwood, and open-air clarity — for homes that want light, space, and breath.",
    story:
      "From the Danish west coast to the Swedish archipelago, our Coastal Collection captures the feeling of wind, salt, and quiet horizons.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    lifestyle:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1400&q=80",
  },
  {
    id: "winter-retreat",
    slug: "winter-retreat",
    name: "Winter Retreat Collection",
    tagline: "Warm and comforting scents for colder seasons.",
    description:
      "Amber, vanilla birch, and soft spice — intimacy for the darkest months of the year.",
    story:
      "Winter asks us to turn inward. This collection is designed for long evenings, low light, and the particular warmth of a well-kept home in cold weather.",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600&q=80",
    lifestyle:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80",
  },
  {
    id: "everyday-ritual",
    slug: "everyday-ritual",
    name: "Everyday Ritual Collection",
    tagline: "Products designed for daily routines.",
    description:
      "Clean linen, soft lavender, and quiet essentials — the scents and objects that shape ordinary days into something intentional.",
    story:
      "Ritual is not ceremony. It is the repeated act of care — making a bed, lighting a candle, opening a window. This collection exists for those moments.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80",
    lifestyle:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1400&q=80",
  },
  {
    id: "seasonal",
    slug: "seasonal",
    name: "Limited Seasonal Editions",
    tagline: "Exclusive seasonal releases.",
    description:
      "Small-batch fragrances and objects released with the turning of the year — available while they last.",
    story:
      "Seasonality is central to how we live in the North. Our limited editions honour that rhythm with scents that belong to a particular time — and then pass.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    lifestyle:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80",
  },
];

export function getCollectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export const rooms = [
  {
    id: "living-room",
    name: "Living Room",
    description: "Atmosphere for gathering and quiet evenings.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    description: "Soft scents for rest and recovery.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80",
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Fresh, clean, and spa-like clarity.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
  },
  {
    id: "workspace",
    name: "Workspace",
    description: "Focus and calm for creative work.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    id: "dining-room",
    name: "Dining Room",
    description: "Warmth for shared meals and conversation.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
  },
] as const;
