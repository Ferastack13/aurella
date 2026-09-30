export type JournalCategory =
  | "lifestyle"
  | "design"
  | "wellness"
  | "home-fragrance"
  | "atmosphere"
  | "creative-living";

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: JournalCategory;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export const categoryLabels: Record<JournalCategory, string> = {
  lifestyle: "Lifestyle",
  design: "Design",
  wellness: "Wellness",
  "home-fragrance": "Home Fragrance",
  atmosphere: "Atmosphere",
  "creative-living": "Creative Living",
};

export const articles: JournalArticle[] = [
  {
    slug: "the-art-of-scent-layering",
    title: "The Art of Scent Layering",
    excerpt:
      "How to compose atmosphere the way a designer composes a room — with base notes, accents, and quiet transitions.",
    category: "home-fragrance",
    date: "2026-03-12",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1400&q=80",
    content: [
      "Scent layering is not about using more fragrance. It is about creating depth — a room that unfolds slowly, the way good design does.",
      "Begin with a continuous base: a reed diffuser or essential oil blend that sits quietly in the background. This is your atmosphere's foundation — woody, clean, or softly floral depending on the room.",
      "Add a candle for presence. Candles bring warmth and ritual; they are the accent lighting of scent. Choose something that complements, rather than competes with, your base.",
      "Finally, use a room spray for transitions — the moment before guests arrive, the hour before sleep, the reset after a long day. Spray is momentary. That is its gift.",
      "In a living room, try Scandinavian Oak as a base, Nordic Cedar as the candle, and Nordic Woods as the spray. In a bedroom, White Tea, White Linen, and Soft Lavender.",
      "The goal is not intensity. It is coherence — a home that smells like itself.",
    ],
  },
  {
    slug: "designing-with-natural-light",
    title: "Designing with Natural Light",
    excerpt:
      "Why future interiors begin with the window — and how light shapes everything else in a room.",
    category: "design",
    date: "2026-02-28",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    content: [
      "Light is not abundant everywhere. Treat daylight as a primary material — something to capture, amplify, and protect.",
      "Begin by observing. Where does morning light fall? Where does afternoon settle? Which corners remain in shadow? A room's atmosphere is largely decided by these patterns.",
      "Keep window treatments soft and minimal. Linen sheers diffuse without blocking. Heavy curtains, if used, should draw fully clear of the glass during the day.",
      "Reflect light with pale surfaces — warm neutrals that bounce daylight deeper into the room. Stone, soft plaster, and glass all participate.",
      "And finally: scent responds to light. Fresh, mineral fragrances feel right in bright rooms. Warm amber and woods belong to the hours when light softens and lamps take over.",
    ],
  },
  {
    slug: "a-philosophy-of-slow-mornings",
    title: "A Philosophy of Slow Mornings",
    excerpt:
      "Rituals that reclaim the first hour of the day — without productivity theatre.",
    category: "wellness",
    date: "2026-02-14",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
    content: [
      "A slow morning is not a luxury. It is a decision about how you enter the day.",
      "We suggest something simple: open a window, light a candle or diffuse a gentle oil, and do one thing with full attention — coffee, stretching, reading a page.",
      "The scent you choose matters. Morning Dew and Focus Blend support clarity. White Linen and Calm Blend support softness. Match the fragrance to the kind of day you want to have.",
      "Screens can wait. The first hour sets a tone that the rest of the day rarely overturns.",
    ],
  },
  {
    slug: "materials-we-live-with",
    title: "Materials We Live With",
    excerpt:
      "Travertine, linen, oak, and clay — why the objects in our homes should age alongside us.",
    category: "creative-living",
    date: "2026-01-30",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1400&q=80",
    content: [
      "AURELIA's objects are chosen for how they feel after years, not weeks. Travertine softens. Linen relaxes. Oak deepens. Clay holds the memory of the hand that shaped it.",
      "We work with makers who understand this. Our travertine holders come from a Portuguese atelier that has cut stone for three generations. Our ceramics are thrown on Bornholm.",
      "Material honesty matters: let wood look like wood, stone like stone. Finish is secondary to character.",
      "When you bring these objects home, they should not announce themselves. They should simply belong — and grow more themselves with time.",
    ],
  },
  {
    slug: "preparing-the-home-for-winter",
    title: "Preparing the Home for Winter",
    excerpt:
      "A seasonal shift in scent, light, and texture as the colder months arrive.",
    category: "atmosphere",
    date: "2025-11-18",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=80",
    content: [
      "Winter asks the home to become a refuge. The transition begins weeks before the first frost — in how we light rooms, what we place on tables, and which scents we invite in.",
      "Swap coastal and green fragrances for amber, birch, and soft spice. Midnight Amber and Vanilla Birch are designed for this shift.",
      "Add weight through textiles: wool throws, heavier linen, a deeper rug. Candlelight becomes primary lighting in the evening hours.",
      "And protect stillness. Winter is not a season for more — it is a season for enough.",
    ],
  },
  {
    slug: "styling-a-quiet-shelf",
    title: "Styling a Quiet Shelf",
    excerpt:
      "How to compose objects with restraint — negative space as a design tool.",
    category: "lifestyle",
    date: "2025-10-22",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1400&q=80",
    content: [
      "A well-styled shelf is mostly empty. Negative space gives objects room to breathe and the eye a place to rest.",
      "Choose three to five pieces with varied height and material — a ceramic vase, a stone tray, a marble form, a single book laid flat, a candle.",
      "Group in odd numbers. Leave gaps. Avoid symmetry that feels forced; prefer balance that feels found.",
      "Change seasonally, but sparingly. A shelf that constantly reshuffles never settles into atmosphere.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: JournalCategory) {
  return articles.filter((a) => a.category === category);
}
