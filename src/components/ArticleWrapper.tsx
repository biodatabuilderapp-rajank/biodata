"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RelatedArticle {
  title: string;
  slug: string;
}

interface ArticleWrapperProps {
  children: React.ReactNode;
  /** ISO date string, e.g. "2024-04-12" */
  publishedDate?: string;
  /** Related articles to show at the bottom */
  related?: RelatedArticle[];
  /** Article title — used for breadcrumb schema. Falls back to URL slug if omitted. */
  title?: string;
}

const AUTHOR = {
  name: "BiodataBuilder Editorial Team",
  bio: "Our editorial team consists of experienced writers and cultural researchers who specialise in Indian matrimonial traditions, regional formats, and modern matchmaking practices.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ArticleWrapper({
  children,
  publishedDate,
  related = [],
  title,
}: ArticleWrapperProps) {
  const pathname = usePathname();
  // pathname = /articles/biodata-for-marriage → slug = biodata-for-marriage
  const slug = pathname?.split("/").pop() ?? "";
  const articleTitle = title ?? slugToTitle(slug);
  const canonical = `https://biodatabuilder.in${pathname}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
      { "@type": "ListItem", position: 3, name: articleTitle, item: canonical },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto">
      {/* Breadcrumb JSON-LD — injected on every article automatically */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Back link */}
      <Link
        href="/articles"
        className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline mb-8 inline-flex items-center gap-1"
      >
        ← Back to all guides
      </Link>

      {/* Author + date bar */}
      <div className="flex items-start gap-4 mt-6 mb-10 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
        {/* Avatar initial */}
        <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-base">
          B
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">{AUTHOR.name}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
            {AUTHOR.bio}
          </p>
          {publishedDate && (
            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
              Published {formatDate(publishedDate)}
            </p>
          )}
        </div>
      </div>

      {/* Article body */}
      {children}

      {/* Related articles */}
      {related.length > 0 && (
        <div className="mt-16 border-t border-zinc-100 dark:border-zinc-800 pt-10">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">
            Related Articles
          </p>
          <div className="grid gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-all group"
              >
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {r.title}
                </span>
                <span className="text-indigo-500 text-sm shrink-0 ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
