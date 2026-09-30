export type ProductCategory =
  | "candles"
  | "diffusers"
  | "sprays"
  | "oils"
  | "accessories"
  | "gift-sets";

export type CollectionId =
  | "nordic"
  | "coastal"
  | "winter-retreat"
  | "everyday-ritual"
  | "seasonal";

export type RoomId =
  | "living-room"
  | "bedroom"
  | "bathroom"
  | "workspace"
  | "dining-room";

export type MoodId =
  | "calm"
  | "energizing"
  | "grounding"
  | "romantic"
  | "fresh";

export type SeasonId = "spring" | "summer" | "autumn" | "winter" | "all-year";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  collection: CollectionId;
  price: number;
  description: string;
  story: string;
  notes: { top: string[]; heart: string[]; base: string[] };
  mood: MoodId[];
  rooms: RoomId[];
  season: SeasonId;
  materials: string;
  dimensions: string;
  howToUse: string;
  image: string;
  gallery: string[];
  lifestyle: string[];
  bestSeller?: boolean;
  newArrival?: boolean;
  pairedWith?: string[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  candles: "Luxury Candles",
  diffusers: "Reed Diffusers",
  sprays: "Room Sprays",
  oils: "Essential Oils",
  accessories: "Home Accessories",
  "gift-sets": "Gift Sets",
};

export const collectionLabels: Record<CollectionId, string> = {
  nordic: "The Nordic Collection",
  coastal: "Coastal Collection",
  "winter-retreat": "Winter Retreat",
  "everyday-ritual": "Everyday Ritual",
  seasonal: "Limited Seasonal",
};

export const roomLabels: Record<RoomId, string> = {
  "living-room": "Living Room",
  bedroom: "Bedroom",
  bathroom: "Bathroom",
  workspace: "Workspace",
  "dining-room": "Dining Room",
};

export const moodLabels: Record<MoodId, string> = {
  calm: "Calm",
  energizing: "Energizing",
  grounding: "Grounding",
  romantic: "Romantic",
  fresh: "Fresh",
};

const img = {
  cedar:
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1200&q=80",
  moss: "https://images.unsplash.com/photo-1602607388792-6f3c8c2c3a0b?w=1200&q=80",
  linen:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80",
  amber:
    "https://images.unsplash.com/photo-1602941525421-8f8b81b3f1a8?w=1200&q=80",
  birch:
    "https://images.unsplash.com/photo-1600618528240-fb9fc964b836?w=1200&q=80",
  pine: "https://images.unsplash.com/photo-1572726729237-3f2e0d0a8e5c?w=1200&q=80",
  coastal:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=80",
  sandalwood:
    "https://images.unsplash.com/photo-1602928298909-45c4c0b0c0c0?w=1200&q=80",
  diffuser:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&q=80",
  spray:
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=80",
  oil: "https://images.unsplash.com/photo-1608571423522-e3f6b5e0e0e0?w=1200&q=80",
  stone:
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80",
  vase: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1200&q=80",
  tray: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200&q=80",
  bowl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200&q=80",
  linenBox:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
  marble:
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
  gift: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1200&q=80",
  lifestyle1:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
  lifestyle2:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80",
  lifestyle3:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=80",
  lifestyle4:
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1400&q=80",
  candleClose:
    "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1400&q=80",
  wood: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80",
  interior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  soft: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1400&q=80",
};

export const products: Product[] = [
  {
    id: "1",
    slug: "nordic-cedar",
    name: "Nordic Cedar",
    category: "candles",
    collection: "nordic",
    price: 68,
    description:
      "A grounding blend of cedarwood, dry pine needles, and soft musk — crafted for quiet evenings and contemplative spaces.",
    story:
      "Inspired by the silent forests of southern Sweden, Nordic Cedar captures the scent of weathered timber warmed by late afternoon light. Each vessel is poured by hand in small batches using a clean-burning soy-coconut wax blend.",
    notes: {
      top: ["Pine needle", "Bergamot"],
      heart: ["Cedarwood", "Cypress"],
      base: ["Soft musk", "Vetiver"],
    },
    mood: ["grounding", "calm"],
    rooms: ["living-room", "workspace"],
    season: "autumn",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse:
      "Trim the wick to 5mm before each burn. Allow the wax pool to reach the edges on first use. Burn for 2–3 hours at a time.",
    image: img.cedar,
    gallery: [img.cedar, img.candleClose, img.wood],
    lifestyle: [img.lifestyle1, img.lifestyle2],
    bestSeller: true,
    pairedWith: ["scandinavian-oak", "travertine-candle-holders"],
  },
  {
    id: "2",
    slug: "forest-moss",
    name: "Forest Moss",
    category: "candles",
    collection: "nordic",
    price: 68,
    description:
      "Earthy moss, damp soil, and green leaves — the quiet depth of a Nordic woodland floor after rainfall.",
    story:
      "Forest Moss was born from walks through Norwegian spruce forests after spring rain. It is a scent of stillness: cool, green, and deeply restorative.",
    notes: {
      top: ["Green leaf", "Dew"],
      heart: ["Oakmoss", "Fern"],
      base: ["Patchouli", "Earth"],
    },
    mood: ["grounding", "calm"],
    rooms: ["living-room", "bedroom"],
    season: "spring",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse:
      "Trim the wick to 5mm before each burn. Allow the wax pool to reach the edges on first use.",
    image: img.moss,
    gallery: [img.moss, img.candleClose, img.interior],
    lifestyle: [img.lifestyle3, img.lifestyle4],
    bestSeller: true,
    pairedWith: ["morning-dew", "stone-trays"],
  },
  {
    id: "3",
    slug: "white-linen",
    name: "White Linen",
    category: "candles",
    collection: "everyday-ritual",
    price: 62,
    description:
      "Crisp cotton, soft iris, and a whisper of clean soap — the scent of freshly made beds and open windows.",
    story:
      "White Linen celebrates the quiet luxury of everyday rituals. Inspired by sun-dried sheets on a Danish summer morning.",
    notes: {
      top: ["Aldehyde", "Lemon peel"],
      heart: ["Iris", "Cotton flower"],
      base: ["White musk", "Soft woods"],
    },
    mood: ["fresh", "calm"],
    rooms: ["bedroom", "bathroom"],
    season: "all-year",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse:
      "Burn in well-ventilated spaces. Ideal for bedrooms and linen closets.",
    image: img.linen,
    gallery: [img.linen, img.soft, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.soft],
    bestSeller: true,
    newArrival: true,
    pairedWith: ["fresh-cotton", "linen-storage-boxes"],
  },
  {
    id: "4",
    slug: "midnight-amber",
    name: "Midnight Amber",
    category: "candles",
    collection: "winter-retreat",
    price: 72,
    description:
      "Warm amber resin, dark vanilla, and smoky woods — a candle for late nights and deep conversation.",
    story:
      "Midnight Amber is our most intimate scent. Designed for winter evenings when the fire is low and the room holds only candlelight.",
    notes: {
      top: ["Cardamom", "Orange zest"],
      heart: ["Amber", "Labdanum"],
      base: ["Vanilla", "Smoked wood"],
    },
    mood: ["romantic", "grounding"],
    rooms: ["living-room", "bedroom", "dining-room"],
    season: "winter",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse: "Best enjoyed in the evening. Pair with soft lighting.",
    image: img.amber,
    gallery: [img.amber, img.candleClose, img.lifestyle2],
    lifestyle: [img.lifestyle2, img.lifestyle4],
    bestSeller: true,
    pairedWith: ["amber-nights", "marble-display-objects"],
  },
  {
    id: "5",
    slug: "vanilla-birch",
    name: "Vanilla Birch",
    category: "candles",
    collection: "winter-retreat",
    price: 68,
    description:
      "Creamy vanilla wrapped in pale birch and soft spice — comforting without sweetness.",
    story:
      "Vanilla Birch reimagines comfort. The vanilla is restrained; the birch is cool and clean. Together they create a scent that feels like home.",
    notes: {
      top: ["Birch bark", "Pink pepper"],
      heart: ["Vanilla orchid", "Tonka"],
      base: ["Creamy woods", "Benzoin"],
    },
    mood: ["calm", "romantic"],
    rooms: ["bedroom", "living-room"],
    season: "winter",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse: "Ideal for winding down. Burn 2–3 hours before sleep.",
    image: img.birch,
    gallery: [img.birch, img.wood, img.soft],
    lifestyle: [img.lifestyle3, img.soft],
    pairedWith: ["sleep-blend", "ceramic-vases"],
  },
  {
    id: "6",
    slug: "winter-pine",
    name: "Winter Pine",
    category: "candles",
    collection: "seasonal",
    price: 74,
    description:
      "Fresh-cut pine, frosted air, and a hint of resin — our limited winter release.",
    story:
      "Available only through the colder months, Winter Pine is poured in a limited run each year. It smells of Christmas markets and snow-laden branches.",
    notes: {
      top: ["Pine needle", "Eucalyptus"],
      heart: ["Fir balsam", "Juniper"],
      base: ["Resin", "Cedar"],
    },
    mood: ["fresh", "grounding"],
    rooms: ["living-room", "dining-room"],
    season: "winter",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse: "Light during gatherings. The scent fills large rooms beautifully.",
    image: img.pine,
    gallery: [img.pine, img.wood, img.interior],
    lifestyle: [img.lifestyle2, img.interior],
    newArrival: true,
    pairedWith: ["nordic-woods", "decorative-bowls"],
  },
  {
    id: "7",
    slug: "coastal-breeze",
    name: "Coastal Breeze",
    category: "candles",
    collection: "coastal",
    price: 68,
    description:
      "Sea salt, pale woods, and wind-dried herbs — the Nordic coastline in candle form.",
    story:
      "Crafted after a week on the Danish west coast, Coastal Breeze carries the mineral freshness of open water and weathered driftwood.",
    notes: {
      top: ["Sea salt", "Lemon"],
      heart: ["Driftwood", "Sage"],
      base: ["White amber", "Light musk"],
    },
    mood: ["fresh", "energizing"],
    rooms: ["bathroom", "living-room", "workspace"],
    season: "summer",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse: "Perfect for daytime burning near open windows.",
    image: img.coastal,
    gallery: [img.coastal, img.soft, img.lifestyle4],
    lifestyle: [img.lifestyle4, img.soft],
    bestSeller: true,
    pairedWith: ["ocean-mist", "coastal-air"],
  },
  {
    id: "8",
    slug: "sandalwood-smoke",
    name: "Sandalwood Smoke",
    category: "candles",
    collection: "nordic",
    price: 72,
    description:
      "Creamy sandalwood with a veil of incense smoke — meditative and deeply warm.",
    story:
      "Sandalwood Smoke bridges East and North. The sandalwood is creamy and soft; the smoke is barely there — like embers at the edge of a fire.",
    notes: {
      top: ["Incense", "Black pepper"],
      heart: ["Sandalwood", "Guaiac"],
      base: ["Smoke", "Myrrh"],
    },
    mood: ["grounding", "romantic"],
    rooms: ["living-room", "bedroom", "workspace"],
    season: "all-year",
    materials: "Soy-coconut wax, cotton wick, frosted glass vessel",
    dimensions: "Ø 8.5 cm × H 10 cm · 220g · ~50 hours",
    howToUse: "Best in intimate spaces. Complements low lighting.",
    image: img.sandalwood,
    gallery: [img.sandalwood, img.candleClose, img.wood],
    lifestyle: [img.lifestyle2, img.lifestyle3],
    pairedWith: ["restore-blend", "travertine-candle-holders"],
  },
  {
    id: "9",
    slug: "scandinavian-oak",
    name: "Scandinavian Oak",
    category: "diffusers",
    collection: "nordic",
    price: 78,
    description:
      "Warm oak, dry hay, and soft leather — a continuous presence for living spaces.",
    story:
      "Our reed diffuser collection is designed for spaces that need atmosphere without flame. Scandinavian Oak is the signature — woody, dry, and quietly luxurious.",
    notes: {
      top: ["Hay", "Bergamot"],
      heart: ["Oak", "Cashmere wood"],
      base: ["Leather", "Amber"],
    },
    mood: ["grounding", "calm"],
    rooms: ["living-room", "dining-room", "workspace"],
    season: "all-year",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse:
      "Flip reeds weekly. Place away from direct sunlight and drafts for even diffusion.",
    image: img.diffuser,
    gallery: [img.diffuser, img.wood, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.interior],
    bestSeller: true,
    pairedWith: ["nordic-cedar", "stone-trays"],
  },
  {
    id: "10",
    slug: "ocean-mist",
    name: "Ocean Mist",
    category: "diffusers",
    collection: "coastal",
    price: 78,
    description:
      "Mineral sea air, cucumber, and pale florals — light enough for bathrooms and hallways.",
    story:
      "Ocean Mist was developed for spaces that need freshness without citrus sharpness. It feels like standing on a pier at dawn.",
    notes: {
      top: ["Sea mist", "Cucumber"],
      heart: ["Water lily", "Marine notes"],
      base: ["Driftwood", "Light musk"],
    },
    mood: ["fresh", "calm"],
    rooms: ["bathroom", "living-room"],
    season: "summer",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse: "Ideal for bathrooms and entryways. Flip reeds every 7–10 days.",
    image: img.diffuser,
    gallery: [img.diffuser, img.soft, img.lifestyle4],
    lifestyle: [img.lifestyle4, img.soft],
    newArrival: true,
    pairedWith: ["coastal-breeze", "coastal-air"],
  },
  {
    id: "11",
    slug: "white-tea",
    name: "White Tea",
    category: "diffusers",
    collection: "everyday-ritual",
    price: 74,
    description:
      "Steamed white tea, soft florals, and a clean finish — understated and endlessly wearable.",
    story:
      "White Tea is the scent of a quiet morning ritual. Subtle enough to live with all day, refined enough to notice.",
    notes: {
      top: ["White tea", "Bergamont"],
      heart: ["Jasmine tea", "Peony"],
      base: ["Clean musk", "Soft wood"],
    },
    mood: ["calm", "fresh"],
    rooms: ["bedroom", "bathroom", "workspace"],
    season: "all-year",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse: "Place on a dresser or bathroom shelf. Flip reeds gently.",
    image: img.diffuser,
    gallery: [img.diffuser, img.soft, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.soft],
    pairedWith: ["white-linen", "calm-blend"],
  },
  {
    id: "12",
    slug: "lavender-fields",
    name: "Lavender Fields",
    category: "diffusers",
    collection: "everyday-ritual",
    price: 74,
    description:
      "True lavender with herbal greens — calming without the powdery sweetness of traditional blends.",
    story:
      "We source lavender absolute from Provence but compose it in a Nordic register: green, herbal, and quietly modern.",
    notes: {
      top: ["Lavender", "Mint"],
      heart: ["Lavender absolute", "Rosemary"],
      base: ["Cedar", "Soft musk"],
    },
    mood: ["calm"],
    rooms: ["bedroom", "bathroom"],
    season: "all-year",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse: "Excellent for bedrooms. Use fewer reeds for a softer throw.",
    image: img.diffuser,
    gallery: [img.diffuser, img.soft, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.soft],
    pairedWith: ["soft-lavender", "sleep-blend"],
  },
  {
    id: "13",
    slug: "morning-dew",
    name: "Morning Dew",
    category: "diffusers",
    collection: "nordic",
    price: 76,
    description:
      "Wet grass, green stems, and cool air — the first hour after sunrise.",
    story:
      "Morning Dew is our greenest diffuser. It opens spaces that feel heavy and brings a sense of outdoor air indoors.",
    notes: {
      top: ["Dew", "Green stem"],
      heart: ["Galbanum", "Violet leaf"],
      base: ["Moss", "Light woods"],
    },
    mood: ["fresh", "energizing"],
    rooms: ["living-room", "workspace"],
    season: "spring",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse: "Place near natural light. Flip reeds twice weekly for stronger throw.",
    image: img.diffuser,
    gallery: [img.diffuser, img.interior, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.interior],
    pairedWith: ["forest-moss", "focus-blend"],
  },
  {
    id: "14",
    slug: "citrus-bloom",
    name: "Citrus Bloom",
    category: "diffusers",
    collection: "seasonal",
    price: 76,
    description:
      "Bright citrus blossom with soft neroli — our limited spring edition.",
    story:
      "Released each spring in a limited run, Citrus Bloom celebrates the first warm days and open windows.",
    notes: {
      top: ["Bergamot", "Orange blossom"],
      heart: ["Neroli", "Petitgrain"],
      base: ["White musk", "Soft woods"],
    },
    mood: ["energizing", "fresh"],
    rooms: ["living-room", "workspace", "dining-room"],
    season: "spring",
    materials: "Alcohol-free base, natural reeds, frosted glass bottle",
    dimensions: "100ml · lasts 3–4 months",
    howToUse: "Brightens entryways and open-plan living spaces.",
    image: img.diffuser,
    gallery: [img.diffuser, img.soft, img.lifestyle4],
    lifestyle: [img.lifestyle4, img.soft],
    newArrival: true,
    pairedWith: ["focus-blend", "ceramic-vases"],
  },
  {
    id: "15",
    slug: "fresh-cotton",
    name: "Fresh Cotton",
    category: "sprays",
    collection: "everyday-ritual",
    price: 42,
    description:
      "A light mist of clean cotton and soft musk — for linens, curtains, and quick refreshes.",
    story:
      "Our room sprays are designed for momentary atmosphere. Fresh Cotton is the everyday essential — never heavy, always composed.",
    notes: {
      top: ["Aldehyde", "Light citrus"],
      heart: ["Cotton", "Iris"],
      base: ["White musk"],
    },
    mood: ["fresh", "calm"],
    rooms: ["bedroom", "bathroom", "living-room"],
    season: "all-year",
    materials: "Fine mist spray, recyclable glass bottle",
    dimensions: "100ml",
    howToUse: "Spray into the air or lightly onto fabrics from 30cm. Avoid silk and leather.",
    image: img.spray,
    gallery: [img.spray, img.soft, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.soft],
    bestSeller: true,
    pairedWith: ["white-linen", "linen-storage-boxes"],
  },
  {
    id: "16",
    slug: "nordic-woods",
    name: "Nordic Woods",
    category: "sprays",
    collection: "nordic",
    price: 44,
    description:
      "Pine, cedar, and cool air — a forest walk in a single mist.",
    story:
      "Nordic Woods was formulated for those who miss the forest. One spray transforms a room into something quieter and greener.",
    notes: {
      top: ["Pine", "Juniper"],
      heart: ["Cedar", "Cypress"],
      base: ["Moss", "Soft musk"],
    },
    mood: ["grounding", "fresh"],
    rooms: ["living-room", "workspace"],
    season: "autumn",
    materials: "Fine mist spray, recyclable glass bottle",
    dimensions: "100ml",
    howToUse: "Spray into open air. Layer with Nordic Cedar candle for depth.",
    image: img.spray,
    gallery: [img.spray, img.wood, img.interior],
    lifestyle: [img.interior, img.wood],
    pairedWith: ["nordic-cedar", "winter-pine"],
  },
  {
    id: "17",
    slug: "soft-lavender",
    name: "Soft Lavender",
    category: "sprays",
    collection: "everyday-ritual",
    price: 42,
    description:
      "Gentle lavender mist for pillows and evening rituals.",
    story:
      "Softer than our diffuser, Soft Lavender is designed specifically for bedtime — spray onto pillows twenty minutes before sleep.",
    notes: {
      top: ["Lavender"],
      heart: ["Chamomile", "Lavender"],
      base: ["Soft musk"],
    },
    mood: ["calm"],
    rooms: ["bedroom"],
    season: "all-year",
    materials: "Fine mist spray, recyclable glass bottle",
    dimensions: "100ml",
    howToUse: "Spray onto pillowcases and bed linens before sleep.",
    image: img.spray,
    gallery: [img.spray, img.soft, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.soft],
    pairedWith: ["lavender-fields", "sleep-blend"],
  },
  {
    id: "18",
    slug: "amber-nights",
    name: "Amber Nights",
    category: "sprays",
    collection: "winter-retreat",
    price: 46,
    description:
      "Warm amber and soft spice — evening atmosphere in a mist.",
    story:
      "Amber Nights is for dinner parties and slow evenings. Warm, inviting, and never overwhelming.",
    notes: {
      top: ["Spice", "Orange"],
      heart: ["Amber", "Labdanum"],
      base: ["Vanilla", "Woods"],
    },
    mood: ["romantic", "grounding"],
    rooms: ["living-room", "dining-room", "bedroom"],
    season: "winter",
    materials: "Fine mist spray, recyclable glass bottle",
    dimensions: "100ml",
    howToUse: "Mist into the air before guests arrive. Layer with Midnight Amber.",
    image: img.spray,
    gallery: [img.spray, img.candleClose, img.lifestyle2],
    lifestyle: [img.lifestyle2, img.lifestyle4],
    pairedWith: ["midnight-amber", "vanilla-birch"],
  },
  {
    id: "19",
    slug: "coastal-air",
    name: "Coastal Air",
    category: "sprays",
    collection: "coastal",
    price: 44,
    description:
      "Salt air and light florals — an instant coastal refresh.",
    story:
      "Coastal Air is the lightest of our sprays. Use freely throughout the day to reset a room.",
    notes: {
      top: ["Sea salt", "Lemon"],
      heart: ["Marine floral"],
      base: ["Driftwood"],
    },
    mood: ["fresh", "energizing"],
    rooms: ["bathroom", "living-room", "workspace"],
    season: "summer",
    materials: "Fine mist spray, recyclable glass bottle",
    dimensions: "100ml",
    howToUse: "Spray freely into open air. Ideal after cooking or in bathrooms.",
    image: img.spray,
    gallery: [img.spray, img.soft, img.lifestyle4],
    lifestyle: [img.lifestyle4, img.soft],
    pairedWith: ["coastal-breeze", "ocean-mist"],
  },
  {
    id: "20",
    slug: "calm-blend",
    name: "Calm Blend",
    category: "oils",
    collection: "everyday-ritual",
    price: 48,
    description:
      "Lavender, bergamot, and frankincense — formulated for stillness.",
    story:
      "Our essential oil blends are diluted for safe diffusion and crafted with therapeutic-grade oils. Calm Blend is the foundation of an evening ritual.",
    notes: {
      top: ["Bergamot"],
      heart: ["Lavender", "Frankincense"],
      base: ["Cedarwood"],
    },
    mood: ["calm"],
    rooms: ["bedroom", "bathroom", "living-room"],
    season: "all-year",
    materials: "Therapeutic-grade essential oils in amber glass",
    dimensions: "15ml",
    howToUse: "Add 4–6 drops to a diffuser. Do not apply undiluted to skin.",
    image: img.oil,
    gallery: [img.oil, img.soft, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.soft],
    bestSeller: true,
    pairedWith: ["lavender-fields", "soft-lavender"],
  },
  {
    id: "21",
    slug: "focus-blend",
    name: "Focus Blend",
    category: "oils",
    collection: "everyday-ritual",
    price: 48,
    description:
      "Rosemary, peppermint, and lemon — clarity for the working day.",
    story:
      "Designed for desks and studios. Focus Blend sharpens without overstimulating.",
    notes: {
      top: ["Lemon", "Peppermint"],
      heart: ["Rosemary", "Basil"],
      base: ["Cedar"],
    },
    mood: ["energizing", "fresh"],
    rooms: ["workspace"],
    season: "all-year",
    materials: "Therapeutic-grade essential oils in amber glass",
    dimensions: "15ml",
    howToUse: "Diffuse during focused work sessions. 3–5 drops is sufficient.",
    image: img.oil,
    gallery: [img.oil, img.wood, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.interior],
    pairedWith: ["morning-dew", "scandinavian-oak"],
  },
  {
    id: "22",
    slug: "sleep-blend",
    name: "Sleep Blend",
    category: "oils",
    collection: "everyday-ritual",
    price: 48,
    description:
      "Roman chamomile, lavender, and vetiver — for the last hour of the day.",
    story:
      "Sleep Blend is intentionally soft. Diffuse thirty minutes before bed as part of a wind-down ritual.",
    notes: {
      top: ["Chamomile"],
      heart: ["Lavender", "Marjoram"],
      base: ["Vetiver"],
    },
    mood: ["calm"],
    rooms: ["bedroom"],
    season: "all-year",
    materials: "Therapeutic-grade essential oils in amber glass",
    dimensions: "15ml",
    howToUse: "Diffuse 30 minutes before sleep. Pair with Soft Lavender spray.",
    image: img.oil,
    gallery: [img.oil, img.soft, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.soft],
    pairedWith: ["soft-lavender", "vanilla-birch"],
  },
  {
    id: "23",
    slug: "restore-blend",
    name: "Restore Blend",
    category: "oils",
    collection: "nordic",
    price: 52,
    description:
      "Sandalwood, frankincense, and sweet orange — grounding recovery.",
    story:
      "Restore Blend is for weekends and quiet mornings. Warm, woody, and gently uplifting.",
    notes: {
      top: ["Sweet orange"],
      heart: ["Frankincense", "Sandalwood"],
      base: ["Myrrh"],
    },
    mood: ["grounding", "calm"],
    rooms: ["living-room", "bathroom", "bedroom"],
    season: "all-year",
    materials: "Therapeutic-grade essential oils in amber glass",
    dimensions: "15ml",
    howToUse: "Diffuse during baths or quiet mornings. 4–6 drops.",
    image: img.oil,
    gallery: [img.oil, img.wood, img.lifestyle2],
    lifestyle: [img.lifestyle2, img.wood],
    pairedWith: ["sandalwood-smoke", "midnight-amber"],
  },
  {
    id: "24",
    slug: "travertine-candle-holders",
    name: "Travertine Candle Holders",
    category: "accessories",
    collection: "nordic",
    price: 120,
    description:
      "Hand-finished travertine holders in a set of two — sculptural and timeless.",
    story:
      "Carved from natural travertine and finished by hand in Portugal. Each piece carries unique mineral variation. Designed to hold our standard candles or taper lights.",
    notes: { top: [], heart: [], base: [] },
    mood: ["grounding"],
    rooms: ["living-room", "dining-room", "bedroom"],
    season: "all-year",
    materials: "Natural travertine stone",
    dimensions: "Set of 2 · H 6 cm & H 10 cm · Ø 9 cm",
    howToUse: "Wipe with a soft dry cloth. Avoid acidic cleaners.",
    image: img.stone,
    gallery: [img.stone, img.marble, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.interior],
    bestSeller: true,
    pairedWith: ["nordic-cedar", "midnight-amber"],
  },
  {
    id: "25",
    slug: "stone-trays",
    name: "Stone Trays",
    category: "accessories",
    collection: "nordic",
    price: 95,
    description:
      "A shallow stone tray for keys, jewelry, or a single candle — quiet utility.",
    story:
      "Cut from Belgian bluestone and honed to a soft matte. The tray is designed as a landing place for the objects that matter.",
    notes: { top: [], heart: [], base: [] },
    mood: ["grounding"],
    rooms: ["living-room", "bedroom", "bathroom", "workspace"],
    season: "all-year",
    materials: "Honed Belgian bluestone",
    dimensions: "28 × 18 × 2.5 cm",
    howToUse: "Clean with a damp cloth. Seal annually if used in wet areas.",
    image: img.tray,
    gallery: [img.tray, img.stone, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.interior],
    pairedWith: ["scandinavian-oak", "decorative-bowls"],
  },
  {
    id: "26",
    slug: "ceramic-vases",
    name: "Ceramic Vases",
    category: "accessories",
    collection: "everyday-ritual",
    price: 85,
    description:
      "Unglazed stoneware vessels in three sizes — for branches, dried stems, or empty stillness.",
    story:
      "Thrown by a small studio in Bornholm. The clay is left unglazed so the material itself becomes the finish.",
    notes: { top: [], heart: [], base: [] },
    mood: ["calm"],
    rooms: ["living-room", "dining-room", "bedroom"],
    season: "all-year",
    materials: "Unglazed stoneware clay",
    dimensions: "Set of 3 · H 12 / 18 / 24 cm",
    howToUse: "Not waterproof for long-term water. Best with dried botanicals.",
    image: img.vase,
    gallery: [img.vase, img.stone, img.lifestyle3],
    lifestyle: [img.lifestyle3, img.interior],
    newArrival: true,
    pairedWith: ["decorative-bowls", "forest-moss"],
  },
  {
    id: "27",
    slug: "decorative-bowls",
    name: "Decorative Bowls",
    category: "accessories",
    collection: "nordic",
    price: 110,
    description:
      "A wide ceramic bowl with an irregular rim — for fruit, objects, or nothing at all.",
    story:
      "Each bowl is uniquely finished. The irregular rim is intentional — a reminder that handmade objects carry life.",
    notes: { top: [], heart: [], base: [] },
    mood: ["grounding"],
    rooms: ["dining-room", "living-room"],
    season: "all-year",
    materials: "Hand-finished stoneware",
    dimensions: "Ø 32 cm × H 8 cm",
    howToUse: "Food-safe glaze. Hand wash recommended.",
    image: img.bowl,
    gallery: [img.bowl, img.vase, img.lifestyle2],
    lifestyle: [img.lifestyle2, img.interior],
    pairedWith: ["stone-trays", "ceramic-vases"],
  },
  {
    id: "28",
    slug: "linen-storage-boxes",
    name: "Linen Storage Boxes",
    category: "accessories",
    collection: "everyday-ritual",
    price: 88,
    description:
      "Natural linen-covered boxes for quiet organization — set of two.",
    story:
      "Storage should feel considered. These boxes are covered in Belgian linen and lined with unbleached cotton.",
    notes: { top: [], heart: [], base: [] },
    mood: ["calm"],
    rooms: ["bedroom", "bathroom", "workspace"],
    season: "all-year",
    materials: "Belgian linen, cardboard structure, cotton lining",
    dimensions: "Set of 2 · 30×20×12 cm & 24×16×10 cm",
    howToUse: "Spot clean linen. Keep away from prolonged moisture.",
    image: img.linenBox,
    gallery: [img.linenBox, img.soft, img.lifestyle1],
    lifestyle: [img.lifestyle1, img.soft],
    pairedWith: ["white-linen", "fresh-cotton"],
  },
  {
    id: "29",
    slug: "marble-display-objects",
    name: "Marble Display Objects",
    category: "accessories",
    collection: "seasonal",
    price: 145,
    description:
      "Sculptural marble forms for shelves and tables — weight, silence, beauty.",
    story:
      "Cut from Carrara marble offcuts and finished by hand. These objects exist purely as presence — no function beyond form.",
    notes: { top: [], heart: [], base: [] },
    mood: ["grounding", "romantic"],
    rooms: ["living-room", "dining-room", "workspace"],
    season: "all-year",
    materials: "Carrara marble",
    dimensions: "Set of 3 · various forms · 8–15 cm",
    howToUse: "Dust with a soft cloth. Avoid acidic cleaners.",
    image: img.marble,
    gallery: [img.marble, img.stone, img.lifestyle2],
    lifestyle: [img.lifestyle2, img.interior],
    newArrival: true,
    pairedWith: ["midnight-amber", "travertine-candle-holders"],
  },
  {
    id: "30",
    slug: "relaxation-collection",
    name: "The Relaxation Collection",
    category: "gift-sets",
    collection: "everyday-ritual",
    price: 168,
    description:
      "White Linen candle, Soft Lavender spray, Calm Blend oil, and a linen pouch.",
    story:
      "Curated for those who need permission to slow down. Everything in this set is designed for evening rituals and restful spaces.",
    notes: {
      top: ["Cotton", "Lavender"],
      heart: ["Iris", "Chamomile"],
      base: ["White musk", "Cedar"],
    },
    mood: ["calm"],
    rooms: ["bedroom"],
    season: "all-year",
    materials: "Candle, room spray, essential oil, linen pouch",
    dimensions: "Gift box · 32 × 24 × 10 cm",
    howToUse: "Open slowly. Begin with the candle and spray as a paired ritual.",
    image: img.gift,
    gallery: [img.gift, img.linen, img.soft],
    lifestyle: [img.lifestyle3, img.soft],
    bestSeller: true,
    pairedWith: ["linen-storage-boxes"],
  },
  {
    id: "31",
    slug: "nordic-home-collection",
    name: "The Nordic Home Collection",
    category: "gift-sets",
    collection: "nordic",
    price: 198,
    description:
      "Nordic Cedar candle, Scandinavian Oak diffuser, and a stone tray.",
    story:
      "The essence of AURELIA in one box. For new homes, housewarmings, or anyone building a more intentional space.",
    notes: {
      top: ["Pine", "Hay"],
      heart: ["Cedar", "Oak"],
      base: ["Musk", "Leather"],
    },
    mood: ["grounding"],
    rooms: ["living-room"],
    season: "all-year",
    materials: "Candle, diffuser, stone tray, gift packaging",
    dimensions: "Gift box · 36 × 28 × 12 cm",
    howToUse: "Place the tray as a home for the candle and diffuser together.",
    image: img.gift,
    gallery: [img.gift, img.cedar, img.tray],
    lifestyle: [img.lifestyle1, img.interior],
    bestSeller: true,
    pairedWith: ["forest-moss", "stone-trays"],
  },
  {
    id: "32",
    slug: "signature-fragrance-collection",
    name: "The Signature Fragrance Collection",
    category: "gift-sets",
    collection: "nordic",
    price: 210,
    description:
      "Four of our most loved candles in a curated discovery set.",
    story:
      "Nordic Cedar, Forest Moss, White Linen, and Midnight Amber — the four pillars of the AURELIA fragrance world.",
    notes: {
      top: ["Varied"],
      heart: ["Varied"],
      base: ["Varied"],
    },
    mood: ["calm", "grounding", "fresh", "romantic"],
    rooms: ["living-room", "bedroom"],
    season: "all-year",
    materials: "4 × 220g candles in signature packaging",
    dimensions: "Gift box · 40 × 30 × 12 cm",
    howToUse: "Explore one scent at a time. Note which rooms respond best.",
    image: img.gift,
    gallery: [img.gift, img.cedar, img.amber],
    lifestyle: [img.lifestyle2, img.lifestyle1],
    pairedWith: ["travertine-candle-holders"],
  },
  {
    id: "33",
    slug: "winter-retreat-collection",
    name: "The Winter Retreat Collection",
    category: "gift-sets",
    collection: "winter-retreat",
    price: 185,
    description:
      "Midnight Amber, Vanilla Birch, Amber Nights spray, and a wool throw sample.",
    story:
      "Our winter gift — warm, intimate, and made for the darkest months. Limited seasonal packaging.",
    notes: {
      top: ["Cardamom", "Birch"],
      heart: ["Amber", "Vanilla"],
      base: ["Smoke", "Woods"],
    },
    mood: ["romantic", "calm"],
    rooms: ["living-room", "bedroom"],
    season: "winter",
    materials: "2 candles, room spray, wool sample, seasonal packaging",
    dimensions: "Gift box · 34 × 26 × 12 cm",
    howToUse: "Light both candles on long winter evenings. Mist Amber Nights freely.",
    image: img.gift,
    gallery: [img.gift, img.amber, img.birch],
    lifestyle: [img.lifestyle2, img.lifestyle4],
    newArrival: true,
    pairedWith: ["marble-display-objects"],
  },
  {
    id: "34",
    slug: "new-home-gift-box",
    name: "New Home Gift Box",
    category: "gift-sets",
    collection: "everyday-ritual",
    price: 225,
    description:
      "A complete welcome: Coastal Breeze candle, Ocean Mist diffuser, Fresh Cotton spray, and ceramic vase.",
    story:
      "The gift we wish every new home received. Atmosphere, freshness, and a single beautiful object to begin with.",
    notes: {
      top: ["Sea salt", "Cotton"],
      heart: ["Driftwood", "Iris"],
      base: ["Musk", "Woods"],
    },
    mood: ["fresh", "calm"],
    rooms: ["living-room", "bedroom"],
    season: "all-year",
    materials: "Candle, diffuser, spray, ceramic vase, gift packaging",
    dimensions: "Gift box · 38 × 30 × 14 cm",
    howToUse: "Unpack together. Place the vase first — then build atmosphere around it.",
    image: img.gift,
    gallery: [img.gift, img.coastal, img.vase],
    lifestyle: [img.lifestyle4, img.interior],
    bestSeller: true,
    pairedWith: ["ceramic-vases", "stone-trays"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getProductsByCollection(collection: CollectionId) {
  return products.filter((p) => p.collection === collection);
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller);
}

export function getNewArrivals() {
  return products.filter((p) => p.newArrival);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.collection === product.collection || p.category === product.category)
    )
    .slice(0, limit);
}

export function getPairedProducts(product: Product) {
  if (!product.pairedWith) return [];
  return product.pairedWith
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as Product[];
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);
}
