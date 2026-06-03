import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern vs Traditional Biodata Format | Which One Should You Use?",
  description: "Should you use a modern or traditional biodata format? Compare layouts, content styles, and learn which works best for your family and matchmaking context.",
  alternates: { canonical: "https://biodatabuilder.in/articles/modern-vs-traditional-biodata" },
  openGraph: {
    title: "Modern vs Traditional Biodata Format | Which One Should You Use?",
    description: "Should you use a modern or traditional biodata format? Compare layouts, content styles, and learn which works best for your family and matchmaking context.",
    url: "https://biodatabuilder.in/articles/modern-vs-traditional-biodata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a traditional biodata format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A traditional biodata format features warm, ornate design elements — floral borders, gold-toned headers, religious symbols (OM, Ganesha, Cross, Bismillah), and structured sections in a formal, hierarchical order. It includes a full astrological section and extended family details. Best suited for families in smaller towns or traditional Hindu/Jain/Muslim communities.",
      },
    },
    {
      "@type": "Question",
      name: "What is a modern biodata format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modern biodata has a clean, minimal design — comparable to a premium LinkedIn profile. It uses neutral colours, contemporary typography, and foregrounds the individual's achievements and personality. Astrological details may be abbreviated or optional. Best suited for urban professionals, NRI matches, and metro contexts.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a modern or traditional biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose based on your audience, not your personal preference. For tier-2/3 city families and religious communities, traditional designs show cultural respect. For urban professionals and NRI contexts, a modern clean design creates a stronger impression. A hybrid approach — modern layout with all traditional information included — works best in most cases.",
      },
    },
    {
      "@type": "Question",
      name: "Can I include astrological details in a modern biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and you should if your community expects them. A modern design does not mean you skip important cultural information — it means you present that information in a cleaner, more readable format.",
      },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Modern vs Traditional Biodata Format: Which Is Right for You?
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            The <strong className="font-semibold text-zinc-900 dark:text-white">design and structure of your marriage biodata</strong> say as much about you as the content. A jarring mismatch between your template and your audience can create the wrong impression before a single word is read. Here is a complete breakdown of the differences and how to choose.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What Is a Traditional Biodata Format?</h2>
          <p>
            A traditional biodata typically features warm, ornate design elements — floral borders, gold-toned headers, religious symbols (OM, Ganesha, Cross, Bismillah), and structured sections in a formal, hierarchical order. It is designed to appeal to families who value heritage, ritual, and community.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">Traditional Format: What It Usually Contains</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Auspicious heading (e.g., &quot;Shubh Vivah&quot;, &quot;With God&apos;s Grace&quot;)</li>
            <li>Full astrological section (Rashi, Nakshatra, Gotra, Manglik)</li>
            <li>Extended family details (grandparents, maternal family, native village)</li>
            <li>Expectations written formally and modestly</li>
            <li>Formal language throughout (no casual phrases)</li>
          </ul>
          <p><strong className="font-semibold text-zinc-900 dark:text-white">Best for:</strong> Families from smaller towns, religious communities, traditional Hindu/Jain/Muslim households, first-generation matchmaking through elders.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What Is a Modern Biodata Format?</h2>
          <p>
            A modern biodata has a clean, minimal design — comparable to a premium LinkedIn profile or a résumé. It uses neutral or muted brand colours, contemporary typography, and a layout that foregrounds the individual&apos;s achievements and personality.
          </p>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">Modern Format: What It Usually Contains</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clean headline (name + headline tagline, e.g., &quot;Software Engineer | Pune&quot;)</li>
            <li>Concise personal summary / about me paragraph</li>
            <li>Shorter family section — parents and siblings only</li>
            <li>Astrological details optional or abbreviated</li>
            <li>Conversational expectations phrasing</li>
          </ul>
          <p><strong className="font-semibold text-zinc-900 dark:text-white">Best for:</strong> Urban professionals, NRI matches, families comfortable with self-arranged marriages, tech/commerce backgrounds, metropolitan contexts.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Feature</th>
                  <th className="px-5 py-3">Traditional</th>
                  <th className="px-5 py-3">Modern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Design", "Floral, ornate, warm colours", "Clean, minimal, neutral tones"],
                  ["Astrological section", "Detailed — essential", "Optional / abbreviated"],
                  ["Family section", "Extended (incl. grandparents)", "Core family only"],
                  ["Language", "Formal, respectful", "Conversational, direct"],
                  ["Photo style", "Formal attire, traditional look", "Smart casual, modern setting"],
                  ["WhatsApp appeal", "High in tier 2/3 cities", "High in metros / NRI"],
                  ["Best audience", "Elders, religious families, small towns", "Urban professionals, NRIs, metro cities"],
                ].map(([f, t, m]) => (
                  <tr key={f} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{f}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{t}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">The Hybrid Approach (Most Effective)</h2>
          <p>
            The most successful biodata strategy in today&apos;s market is a <strong className="font-semibold text-zinc-900 dark:text-white">hybrid</strong>: modern, clean design with all the traditional information preserved. This signals that you are educated and polished, while respecting the cultural information families need. BiodataBuilder&apos;s templates are designed to achieve exactly this balance.
          </p>
          <p>
            For example — a minimal white layout with a muted indigo header still includes a complete Kundali section, Gotra, and family details. The information is the same; the packaging is more contemporary. For more on what to include, see our <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Kundali details guide</Link> and <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">complete marriage biodata guide</Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a traditional biodata format?", a: "A traditional biodata uses warm, ornate design elements — floral borders, religious symbols, formal hierarchy, and a complete astrological section. Best suited for religious communities and tier-2/3 city families." },
              { q: "What is a modern biodata format?", a: "A modern biodata has a clean, minimal design similar to a premium resume. It highlights individual achievements and may abbreviate or skip astrological details. Best for urban professionals and NRI contexts." },
              { q: "Should I use a modern or traditional biodata?", a: "Choose based on your audience. A hybrid approach — modern layout with all traditional information still included — works best in most contexts. It appears polished while meeting cultural expectations." },
              { q: "Can I include astrological details in a modern biodata?", a: "Yes, and you should if your community expects them. A modern design does not mean you skip cultural information — it means you present that information in a cleaner, more readable format." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Browse Traditional & Modern Templates</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Preview every template live before committing. Find the one that fits your context perfectly — free.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Templates Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
