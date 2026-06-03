import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Statistics in India (2024 Trends)",
  description: "Fascinating data and statistics on arranged marriage and biodata trends in India. What do men and women look for? At what age are biodatas created?",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-statistics-india" },
  openGraph: {
    title: "Marriage Biodata Statistics in India (2024 Trends)",
    description: "Fascinating data and statistics on arranged marriage and biodata trends in India. What do men and women look for? At what age are biodatas created?",
    url: "https://biodatabuilder.in/articles/marriage-biodata-statistics-india",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What percentage of marriages in India are arranged?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recent demographic surveys suggest that approximately 85% of marriages in India are still arranged (or 'semi-arranged' through matrimonial platforms), meaning a biodata remains the most common document exchanged in Indian matchmaking.",
      },
    },
    {
      "@type": "Question",
      name: "At what age do most Indians create a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The peak age for creating a marriage biodata is 25-28 years for women, and 27-30 years for men. However, there has been a steady upward shift of about 2 years over the last decade as career focus takes priority.",
      },
    },
    {
      "@type": "Question",
      name: "Is Kundali matching still important in 2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, heavily. Data from matrimonial platforms indicates that over 65% of Hindu families require Kundali/horoscope matching before proceeding to a first meeting, though younger demographics in metro cities are increasingly treating it as secondary.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most shared format for marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF is overwhelmingly the standard, preferred by over 90% of users. Word documents (.docx) are strongly discouraged as formatting collapses when shared via WhatsApp, which is the primary channel of communication.",
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
          Marriage Biodata Statistics in India: Trends for 2024
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            The arranged marriage system in India is undergoing a massive digital transformation. While the core concept of matchmaking remains strong, the methods of connection, the criteria for selection, and the role of the <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> are changing rapidly. Based on demographic data and matrimonial platform trends, here is a statistical look at how India gets married today.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Key Statistics & Trends</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6 text-center">
              <span className="block text-4xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">85%</span>
              <p className="font-medium text-indigo-900 dark:text-indigo-200">Of Indian Marriages Are Arranged</p>
              <p className="text-sm mt-2 text-indigo-700/80 dark:text-indigo-300/80 leading-snug">Despite modernisation, arranged or "semi-arranged" (parent-approved self-arranged) remains dominant.</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-2xl p-6 text-center">
              <span className="block text-4xl sm:text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">65%+</span>
              <p className="font-medium text-purple-900 dark:text-purple-200">Require Kundali Matching</p>
              <p className="text-sm mt-2 text-purple-700/80 dark:text-purple-300/80 leading-snug">Among Hindu families, basic astrological compatibility remains a strict precursor to the first meeting.</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl p-6 text-center">
              <span className="block text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">26 vs 28</span>
              <p className="font-medium text-emerald-900 dark:text-emerald-200">Average Bio-Creation Age</p>
              <p className="text-sm mt-2 text-emerald-700/80 dark:text-emerald-300/80 leading-snug">The average age at which women (26) and men (28) actively start exchanging biodatas.</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-2xl p-6 text-center">
              <span className="block text-4xl sm:text-5xl font-black text-amber-600 dark:text-amber-400 mb-2">&gt;90%</span>
              <p className="font-medium text-amber-900 dark:text-amber-200">Shared Exclusively via WhatsApp</p>
              <p className="text-sm mt-2 text-amber-700/80 dark:text-amber-300/80 leading-snug">WhatsApp has overwhelmingly replaced physical printouts and email as the primary distribution channel.</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. The Shift to "Self-Arranged" Marriages</h2>
          <p>
            A massive trend is the shift from strictly parent-arranged marriages to self-arranged (or semi-arranged) marriages. Today, nearly 50% of profiles on matrimonial platforms are managed by the individuals themselves rather than by parents or siblings. This has changed the tone of modern biodatas—moving from formal, dry lists to more expressive <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">modern templates</Link> that highlight personality and lifestyle directly.
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. The Income Expectation Gap</h2>
          <p>
            Socio-economic expectations remain heavily skewed. Statistics from major matrimonial sites show that women (and their parents) frequently filter for grooms earning at least 30-50% more than the bride's current income. Conversely, when grooming a <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">marriage biodata for a boy</Link>, clearly stating exact income is listed as the #1 factor that increases profile response rates.
          </p>

          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. The Decline of "Complexion" as a Filter</h2>
          <p>
            While historically one of the most prominent filters, the explicit demand for a "fair" partner is slowly declining in urban centres. Consequently, the "Complexion" field is increasingly viewed as optional in modern biodatas, though it remains a strict requirement in rural and tier-3 city matchmaking networks.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What percentage of marriages in India are arranged?", a: "Recent surveys suggest approximately 85% of marriages in India are still arranged or semi-arranged, meaning the exchange of a biodata remains the cornerstone of matchmaking." },
              { q: "At what age do most Indians create a marriage biodata?", a: "The peak age is 25-28 years for women, and 27-30 years for men. This has shifted upward by about 2 years over the last decade as career focus takes priority." },
              { q: "Is Kundali matching still important in 2024?", a: "Yes, heavily. Data indicates over 65% of Hindu families require Kundali matching before a first meeting, though younger urban demographics treat it as secondary." },
              { q: "What is the most shared format for marriage biodata?", a: "PDF is overwhelmingly the standard. Word formats are strongly discouraged because their layout breaks when opened on different devices via WhatsApp." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ensure Your Biodata Stands Out</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">With millions of biodatas exchanged every year, a clean, professional design is your best advantage. Create yours for free.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
