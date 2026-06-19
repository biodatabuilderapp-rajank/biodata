import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, BarChart3, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Statistics in India (2024 Trends)",
  description: "Fascinating data and statistics on arranged marriage and biodata trends in India. What do men and women look for? At what age are biodatas created?",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-statistics-india" },
  openGraph: {
    title: "Marriage Biodata Statistics in India (2024 Trends)",
    description: "Fascinating data and statistics on arranged marriage and biodata trends in India. What do men and women look for? At what age are biodatas created?",
    url: "https://biodatabuilder.in/articles/marriage-biodata-statistics-india",
    images: [{ url: "/examples/india-marriage-statistics-infographic-2024.webp", width: 1200, height: 630, alt: "India Marriage Biodata Statistics" }],
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
    }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Marriage Biodata Statistics India", item: "https://biodatabuilder.in/articles/marriage-biodata-statistics-india" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marriage Biodata Statistics in India (2026)",
  description: "Key statistics on how Indian families use marriage biodata. Data on arranged marriages, biodata sharing, and matrimonial trends in India.",
  image: "/examples/india-marriage-statistics-infographic-2024.webp",
  datePublished: "2026-06-15",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Marriage Biodata Statistics in India: Comprehensive 2024 Trends
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>Arranged Marriages Still Dominate:</strong> An estimated 85% of all marriages in India are arranged, making the biodata an indispensable document.</li>
              <li><strong>Peak Age:</strong> Women typically start making their biodatas at 26, while men start around 28—a two-year upward shift over the last decade.</li>
              <li><strong>Astrology & WhatsApp:</strong> 65% of Hindu families strictly require Kundali matching, and over 90% of biodatas are now shared as PDFs strictly via WhatsApp.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-indigo-50 dark:bg-indigo-900">
              <Image 
                src="/examples/india-marriage-statistics-infographic-2024.webp" 
                alt="Arranged Marriage and Biodata Trends in India 2024 Infographic" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              Key demographic data illustrating modern arranged marriage trends across India.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#introduction" className="hover:underline">1. The Evolution of Indian Matchmaking</a></li>
              <li><a href="#quick-stats" className="hover:underline">2. The Hard Numbers (2024 Overview)</a></li>
              <li><a href="#self-arranged" className="hover:underline">3. The Rise of "Self-Arranged" Marriages</a></li>
              <li><a href="#age-trends" className="hover:underline">4. Peak Age for Biodata Creation</a></li>
              <li><a href="#kundali-matching" className="hover:underline">5. The Unwavering Demand for Kundali</a></li>
              <li><a href="#format-trends" className="hover:underline">6. Why PDF Rules Over Word Docs</a></li>
              <li><a href="#income-complexion" className="hover:underline">7. Income and Complexion: Changing Filters</a></li>
              <li><a href="#checklist" className="hover:underline">8. What This Means For Your Biodata</a></li>
              <li><a href="#faq" className="hover:underline">9. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="introduction" className="scroll-mt-24">
            <p>
              The arranged marriage system in India is undergoing a massive digital transformation. While the core concept of bringing two families together remains culturally entrenched, the methods of connection, the criteria for selection, and the role of the <strong>marriage biodata</strong> are changing rapidly. 
            </p>
            <p className="mt-4">
              Decades ago, a biodata was a simple, handwritten sheet of paper handed over during a physical family meeting. Today, it is a highly-optimized digital asset, acting as a "first impression" that determines whether a family will even pick up the phone. It is vastly different from a <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">job resume</Link>—it carries the weight of caste, astrology, income expectations, and physical appearance.
            </p>
            <p className="mt-4">
              Based on demographic data, <a href="https://www.pewresearch.org/religion/2021/06/29/religion-in-india-tolerance-and-segregation/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">research on Indian religious and social demographics</a>, and trends across major matrimonial platforms, let us explore the statistical reality of how India gets married in 2024.
            </p>
          </section>

          {/* BLOCK: QUICK_STATS */}
          <section id="quick-stats" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. The Hard Numbers (2024 Overview)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6 text-center shadow-sm">
                <span className="block text-4xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">85%</span>
                <p className="font-medium text-indigo-900 dark:text-indigo-200">Arranged Marriages</p>
                <p className="text-sm mt-2 text-indigo-700/80 dark:text-indigo-300/80 leading-snug">Despite modernisation, arranged or "semi-arranged" remains the dominant force in Indian society.</p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-2xl p-6 text-center shadow-sm">
                <span className="block text-4xl sm:text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">65%+</span>
                <p className="font-medium text-purple-900 dark:text-purple-200">Require Kundali Matching</p>
                <p className="text-sm mt-2 text-purple-700/80 dark:text-purple-300/80 leading-snug">Among Hindu families, basic astrological compatibility remains a strict precursor to the first meeting.</p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-2xl p-6 text-center shadow-sm">
                <span className="block text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2">26 vs 28</span>
                <p className="font-medium text-emerald-900 dark:text-emerald-200">Average Bio-Creation Age</p>
                <p className="text-sm mt-2 text-emerald-700/80 dark:text-emerald-300/80 leading-snug">The average age at which women (26) and men (28) actively start exchanging biodatas.</p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-2xl p-6 text-center shadow-sm">
                <span className="block text-4xl sm:text-5xl font-black text-amber-600 dark:text-amber-400 mb-2">&gt;90%</span>
                <p className="font-medium text-amber-900 dark:text-amber-200">Shared via WhatsApp</p>
                <p className="text-sm mt-2 text-amber-700/80 dark:text-amber-300/80 leading-snug">WhatsApp has overwhelmingly replaced physical printouts and email as the primary distribution channel.</p>
              </div>
            </div>
          </section>

          {/* BLOCK: SECTION_1 */}
          <section id="self-arranged" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. The Rise of "Self-Arranged" Marriages</h2>
            <p>
              A massive trend over the last five years is the shift from strictly parent-arranged marriages to "self-arranged" (or semi-arranged) marriages. Today, nearly 50% of profiles on matrimonial platforms are managed by the individuals themselves rather than by parents or siblings. 
            </p>
            <p className="mt-4">
              This autonomy has fundamentally changed the tone of modern biodatas. Instead of a dry list of facts, modern candidates are moving towards <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">modern templates</Link> that highlight personality, hobbies, and lifestyle directly. When individuals drive the process, they prioritize compatibility in lifestyle over purely familial alliances. You can see this clearly in how <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">the "About Me" section</Link> has evolved from a single sentence to a full paragraph.
            </p>
          </section>

          {/* BLOCK: SECTION_2 */}
          <section id="age-trends" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Peak Age for Biodata Creation</h2>
            <figure className="my-8 float-right ml-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/India-marriage-biodata-statistics.webp" alt="Age demographics in arranged marriage" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">The demographic shift in marriage ages.</figcaption>
            </figure>
            <p>
              If you feel like you are creating a biodata later than your parents did, you are entirely correct. The statistics show a steady upward shift of approximately two years over the past decade. 
            </p>
            <p className="mt-4">
              Currently, the peak age for a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">girl's biodata</Link> creation sits at <strong>26 years old</strong>, up from 24 in the early 2010s. For a <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">boy's biodata</Link>, the peak age is <strong>28 years old</strong>. This delay is largely attributed to an increased focus on securing stable careers and higher education before settling down.
            </p>
            <p className="mt-4">
              Furthermore, the data surrounding <Link href="/articles/biodata-for-second-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">second marriages</Link> is also shifting, with a significant increase in profiles belonging to individuals in their mid-to-late 30s actively re-entering the matrimonial pool.
            </p>
          </section>
          {/* BLOCK: CTA_TOP */}
          <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Be Part of the 90% Using Premium PDFs</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Statistics show that beautifully formatted, mobile-friendly PDF biodatas receive significantly higher response rates. Create yours today.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: SECTION_3 */}
          <section id="kundali-matching" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. The Unwavering Demand for Kundali</h2>
            <p>
              Despite the rapid modernization of Indian youth, astrological compatibility remains a foundational pillar of matchmaking. Over <strong>65% of Hindu families</strong> insist on matching horoscopes before a physical meeting occurs.
            </p>
            <p className="mt-4">
              When using the <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">best marriage biodata format for a Hindu</Link>, it is almost mandatory to include birth details (Time of Birth, Place of Birth) and specific astrological markers like Gotra, Rashi, and Nakshatra. If a candidate is Manglik, statistics show that explicitly stating it upfront saves significant time, as non-Manglik families will automatically filter them out.
            </p>
            <p className="mt-4">
              However, an interesting sub-trend is emerging in tier-1 metro cities (Mumbai, Bengaluru, Delhi). While parents still demand Kundali matching, the younger demographic is increasingly viewing <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Kundali details in biodata</Link> as a secondary check rather than a primary disqualifier, prioritizing educational and lifestyle alignment first.
            </p>
          </section>

          {/* BLOCK: SECTION_4 */}
          <section id="format-trends" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Why PDF Rules Over Word Docs</h2>
            <figure className="my-8 float-left mr-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/WhatsApp-preview.webp" alt="WhatsApp PDF Preview of Biodata" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">PDFs look professional and render perfectly on mobile.</figcaption>
            </figure>
            <p>
              The medium of exchange has evolved. A decade ago, families exchanged printed copies during arranged meetings. Today, <strong>over 90% of all initial biodata exchanges happen via WhatsApp</strong>.
            </p>
            <p className="mt-4">
              Because of this, the <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata format for WhatsApp</Link> must be mobile-friendly. Data shows a massive shift away from Microsoft Word (`.docx`) files because their formatting notoriously breaks when opened on different smartphones. A clean, single-page PDF is the gold standard in 2024.
            </p>
            <p className="mt-4">
              Furthermore, visual aesthetics matter more than ever. A well-designed biodata signals effort, education, and social standing. Simple, unformatted text documents are increasingly associated with lower effort or lower socio-economic brackets.
            </p>
          </section>

          {/* BLOCK: SECTION_5 */}
          <section id="income-complexion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Income and Complexion: Changing Filters</h2>
            <p>
              The criteria for selection are shifting, though some traditional expectations remain firmly rooted in the data.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">The Income Expectation Gap</h3>
            <p>
              Socio-economic expectations remain heavily skewed. Statistics from major matrimonial sites show that women (and their parents) frequently filter for grooms earning at least <strong>30% to 50% more</strong> than the bride's current income. Clearly stating exact income is listed as the #1 factor that increases a male profile's response rate.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">The Decline of "Complexion"</h3>
            <p>
              Historically one of the most prominent filters, the explicit demand for a "fair" partner is slowly declining in urban centres. Consequently, the "Complexion" field is increasingly viewed as optional in modern biodatas, though it remains a common requirement in rural and tier-3 city matchmaking networks. If you are struggling with what to include, read our <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">comprehensive biodata tips</Link> to navigate these sensitive fields.
            </p>
          </section>
          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Tired of Using MS Word for Biodatas?</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our builder automatically formats your Biodata into a beautiful, respectful PDF. Choose from premium templates explicitly designed for modern Indians.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. What This Means For Your Biodata</h2>
            <figure className="my-8 float-right ml-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/Before-after.webp" alt="Biodata Before and After Comparison" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">A clean layout significantly boosts response rates.</figcaption>
            </figure>
            <p className="mb-6">
              Based on all these statistics, here is a practical checklist to ensure your biodata performs well in the 2024 matrimonial market:
            </p>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Is your document saved as a PDF (not a Word doc) for easy WhatsApp sharing?",
                  "Did you include an engaging 'About Me' paragraph (crucial for self-arranged matches)?",
                  "If Hindu, did you clearly list your Date, Time, and Place of birth for Kundali matching?",
                  "Is your income stated clearly? (Highly recommended for grooms).",
                  "Are your photos high-quality, recent, and professionally shot?",
                  "Did you list both your current location and your native place?",
                  "Did you use a modern, clean template rather than a dense text wall?",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Important:</strong> If you are looking for a <Link href="/articles/biodata-format-hindi" className="font-bold hover:underline">biodata format in Hindi</Link>, the same principles apply. A clean PDF design transcends language barriers. 
                </p>
              </div>
            </div>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What percentage of marriages in India are arranged?", a: "Recent surveys suggest approximately 85% of marriages in India are still arranged or semi-arranged, meaning the exchange of a biodata remains the cornerstone of matchmaking." },
                { q: "At what age do most Indians create a marriage biodata?", a: "The peak age is 25-28 years for women, and 27-30 years for men. This has shifted upward by about 2 years over the last decade as career focus takes priority." },
                { q: "Is Kundali matching still important in 2024?", a: "Yes, heavily. Data indicates over 65% of Hindu families require Kundali matching before a first meeting, though younger urban demographics treat it as secondary." },
                { q: "What is the most shared format for marriage biodata?", a: "PDF is overwhelmingly the standard. Word formats are strongly discouraged because their layout breaks when opened on different devices via WhatsApp." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCK: CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Conclusion</h2>
            <p>
              The statistics are clear: the arranged marriage system isn't disappearing; it is evolving. By understanding these trends—like the shift towards self-arranged matches and the absolute necessity of mobile-friendly PDF files—you can optimize your own profile for success. 
            </p>
            <p className="mt-4">
              Stop relying on a <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata format in Word</Link> that breaks on your phone. Upgrade to a modern, structured format and present your best self to prospective matches.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ensure Your Biodata Stands Out</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              With millions of biodatas exchanged every year, a clean, professional design is your best advantage. Create yours for free in under 5 minutes.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/modern-vs-traditional-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Modern vs Traditional Biodatas Explained</div>
              </Link>
              <Link href="/articles/simple-biodata-format-for-job-pdf" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Job Biodata vs Marriage Biodata</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
