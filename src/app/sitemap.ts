import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { articles } from "@/data/journal";

export default function sitemap() {
  const base = "https://aurelia.com";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/shop`, lastModified: new Date() },
    { url: `${base}/collections`, lastModified: new Date() },
    { url: `${base}/experiences`, lastModified: new Date() },
    { url: `${base}/journal`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...products.map((p) => ({
      url: `${base}/shop/${p.slug}`,
      lastModified: new Date(),
    })),
    ...collections.map((c) => ({
      url: `${base}/collections/${c.slug}`,
      lastModified: new Date(),
    })),
    ...articles.map((a) => ({
      url: `${base}/journal/${a.slug}`,
      lastModified: new Date(),
    })),
  ];
}
