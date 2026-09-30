import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  articles,
  getArticleBySlug,
  categoryLabels,
} from "@/data/journal";
import { Glass } from "@/components/ui/Glass";
import { FadeIn } from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Journal" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="pb-20 pt-28 md:pt-36">
      <div className="relative min-h-[50svh] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-charcoal/25" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-3xl px-4 pb-12 md:px-8">
            <Glass variant="strong" className="p-8 md:p-10">
              <p className="text-[11px] tracking-[0.16em] uppercase text-charcoal/45 mb-3">
                {categoryLabels[article.category]} · {article.readTime} ·{" "}
                {article.date}
              </p>
              <h1 className="font-display text-3xl md:text-5xl text-charcoal leading-tight">
                {article.title}
              </h1>
            </Glass>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 md:px-8 space-y-6">
        <FadeIn>
          <p className="font-display text-xl md:text-2xl text-charcoal/70 leading-relaxed">
            {article.excerpt}
          </p>
        </FadeIn>
        {article.content.map((para, i) => (
          <FadeIn key={i} delay={i * 40}>
            <p className="text-base md:text-lg text-charcoal/65 leading-[1.85] font-body">
              {para}
            </p>
          </FadeIn>
        ))}
      </div>

      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <FadeIn>
          <h2 className="font-display text-2xl text-charcoal mb-6">
            Continue reading
          </h2>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((a) => (
            <Link key={a.slug} href={`/journal/${a.slug}`}>
              <Glass className="product-float p-4 h-full">
                <div className="relative aspect-[16/10] mb-3 overflow-hidden rounded-2xl">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <p className="font-display text-lg text-charcoal">{a.title}</p>
              </Glass>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
