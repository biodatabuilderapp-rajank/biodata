import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modern vs Traditional Biodata Format | Which One Should You Use?",
  description: "Should you use a modern or traditional biodata format? Compare layouts, content styles, and learn which works best for your family and matchmaking context.",
  alternates: { canonical: "https://biodatabuilder.in/articles/modern-vs-traditional-biodata" },
  openGraph: {
    type: "article",
    title: "Modern vs Traditional Biodata Format | Which One Should You Use?",
    description: "Should you use a modern or traditional biodata format? Compare layouts, content styles, and learn which works best for your family and matchmaking context.",
    url: "https://biodatabuilder.in/articles/modern-vs-traditional-biodata",
    images: [{ url: "/examples/modern_vs_traditional_infographic.webp", width: 1200, height: 630, alt: "Modern vs Traditional Biodata Infographic" }],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Modern vs Traditional Biodata", item: "https://biodatabuilder.in/articles/modern-vs-traditional-biodata" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Modern vs Traditional Biodata Format — Which Is Better?",
  description: "Compare modern and traditional marriage biodata formats. Which style is right for your family? Examples, pros and cons included.",
  image: "/examples/modern_vs_traditional_infographic.webp",
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
          Modern vs Traditional Biodata Format: Which Is Right for You?
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 my-8">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-emerald-800 dark:text-emerald-300">
              <li><strong>Match the Medium to the Audience:</strong> Use a traditional format for conservative, elder-driven matchmaking. Use a modern format for urban, self-arranged, or NRI contexts.</li>
              <li><strong>The Visual Impact:</strong> Traditional formats rely on ornate borders, rich colors, and religious motifs. Modern formats rely on white space, clean typography, and a resume-like structure.</li>
              <li><strong>The Hybrid Approach Wins:</strong> A modern, clean layout that still includes all the traditional astrological and family fields is currently the most successful format in India.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-950/20">
              <Image 
                src="/examples/modern_vs_traditional_infographic.webp" 
                alt="Modern vs Traditional Biodata Format comparison showing a clean minimal layout alongside an ornate traditional layout" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              Left: A modern, minimalist biodata focusing on career and personality. Right: A traditional, ornate biodata prioritizing astrology and family heritage.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-sky-600 dark:text-sky-400 font-medium">
              <li><a href="#intro" className="hover:underline">1. The Psychology of Biodata Design</a></li>
              <li><a href="#traditional-biodata" className="hover:underline">2. The Traditional Biodata (When to Use It)</a></li>
              <li><a href="#modern-biodata" className="hover:underline">3. The Modern Biodata (When to Use It)</a></li>
              <li><a href="#side-by-side" className="hover:underline">4. Side-by-Side Field Comparison</a></li>
              <li><a href="#hybrid-approach" className="hover:underline">5. The Hybrid Approach: Best of Both Worlds</a></li>
              <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">1. The Psychology of Biodata Design</h2>
            <p>
              When a family receives a <Link href="/articles/biodata-for-marriage" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">biodata for marriage</Link> on WhatsApp, they make their first impression before they even read the name. The design, colors, and layout immediately signal your cultural background, your family&apos;s values, and your approach to the marriage process.
            </p>
            <p className="mt-4">
              According to recent <Link href="/articles/marriage-biodata-statistics-india" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">biodata statistics</Link>, profiles that mismatch their target audience (e.g., sending a highly informal, modern profile to a deeply conservative family) have a 60% higher rejection rate at the initial screening phase. A traditional layout signals respect for elders and heritage. A modern layout signals education, urban sophistication, and independence. Choosing the right one is critical.
            </p>
          </section>

          {/* BLOCK: TRADITIONAL_DEEP_DIVE */}
          <section id="traditional-biodata" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. The Traditional Biodata Format</h2>
            <p>
              A traditional biodata is deeply rooted in community norms. It is often structured like a formal family document rather than an individual resume. The primary audience for a traditional biodata is usually the parents or grandparents, not the prospective bride or groom.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6">
                <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-4 text-lg">Visual Signifiers</h3>
                <ul className="space-y-3 text-sm text-amber-800 dark:text-amber-200">
                  <li><strong>Auspicious Headers:</strong> &quot;Shree Ganeshay Namah&quot;, &quot;786&quot;, or a Cross icon at the absolute top.</li>
                  <li><strong>Color Palette:</strong> Deep reds, maroons, saffron, and gold.</li>
                  <li><strong>Borders:</strong> Floral, mandala, or temple-architecture inspired borders.</li>
                  <li><strong>Photography:</strong> Formal studio portraits; women often in sarees or traditional wear, men in formal shirts or ethnic wear.</li>
                </ul>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-lg">Content Priorities</h3>
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Astrology First:</strong> <Link href="/articles/kundali-details-in-biodata" className="text-amber-600 dark:text-amber-400 hover:underline">Kundali details</Link> (Rashi, Nakshatra, Gotra, Time of Birth) are placed prominently near the top.</li>
                  <li><strong>Extended Family:</strong> Includes names and occupations of grandfathers, maternal uncles (Mama), and native village (Mool).</li>
                  <li><strong>Modest Language:</strong> Uses highly formal language; avoids &quot;I&quot; statements in favor of third-person or purely factual listings.</li>
                </ul>
              </div>
            </div>

            <figure className="my-10">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/whatsapp-biodata-infographic.png" alt="A traditional biodata being shared on WhatsApp" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                Traditional biodatas are frequently shared via WhatsApp between parents and matchmakers.
              </figcaption>
            </figure>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl mt-6 shadow-sm">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">When should you use this?</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                You should use a traditional format if you are applying within conservative <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-sky-600 dark:text-sky-400 hover:underline">Hindu</Link>, Jain, or <Link href="/articles/thirumanam-biodata-format-tamil" className="text-sky-600 dark:text-sky-400 hover:underline">Tamil</Link> communities, if the primary point of contact is the parents, or if your family hails from a Tier-2 or Tier-3 city where this format is expected as a baseline of respect.
              </p>
            </div>
          </section>
          {/* BLOCK: MODERN_DEEP_DIVE */}
          <section id="modern-biodata" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. The Modern Biodata Format</h2>
            <p>
              A modern biodata strips away the visual clutter. It draws inspiration from premium <Link href="/articles/simple-biodata-format-for-job-pdf" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">job resumes</Link> and minimalist web design. The primary audience for a modern biodata is often the prospective bride or groom themselves, rather than just the parents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/50 rounded-2xl p-6">
                <h3 className="font-bold text-sky-900 dark:text-sky-400 mb-4 text-lg">Visual Signifiers</h3>
                <ul className="space-y-3 text-sm text-sky-800 dark:text-sky-200">
                  <li><strong>Clean Headlines:</strong> Replaces religious icons with a bold, clean headline featuring the candidate&apos;s name.</li>
                  <li><strong>Color Palette:</strong> Neutral tones—whites, grays, navy blues, and muted pastels.</li>
                  <li><strong>Borders:</strong> Geometric, minimalist borders, or no borders at all (relying on white space).</li>
                  <li><strong>Photography:</strong> Smart casual or professional lifestyle photos; often taken in a cafe or modern outdoor setting rather than a stiff studio.</li>
                </ul>
              </div>
              
              <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-lg">Content Priorities</h3>
                <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li><strong>Personality First:</strong> Heavily features an <Link href="/articles/how-to-write-biodata-about-me" className="text-sky-600 dark:text-sky-400 hover:underline">&quot;About Me&quot;</Link> paragraph that details hobbies, lifestyle, and direct partner expectations.</li>
                  <li><strong>Career Focus:</strong> Highlights educational pedigree and professional trajectory prominently.</li>
                  <li><strong>Core Family Only:</strong> Mentions immediate parents and siblings, skipping the extended ancestral village details.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl mt-6 shadow-sm">
              <h4 className="font-bold text-zinc-900 dark:text-white mb-2">When should you use this?</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A modern format is highly recommended for urban professionals working in metros (Bangalore, Mumbai, NCR), NRI (Non-Resident Indian) matches, or couples engaging in self-arranged marriages. It is also the preferred format if you are creating a <Link href="/articles/biodata-for-second-marriage" className="text-sky-600 dark:text-sky-400 hover:underline">second marriage biodata</Link>, where maturity and directness are valued over traditional ritualism.
              </p>
            </div>
          </section>

          {/* BLOCK: SIDE_BY_SIDE */}
          <section id="side-by-side" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Side-by-Side Field Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                  <tr>
                    <th className="px-5 py-4">Feature</th>
                    <th className="px-5 py-4 text-amber-800 dark:text-amber-400">Traditional Biodata</th>
                    <th className="px-5 py-4 text-sky-800 dark:text-sky-400">Modern Biodata</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Overall Design Focus", "Floral, ornate, warm colors (Red/Gold)", "Clean, minimal, neutral tones (Navy/Grey)"],
                    ["Religious Elements", "Prominent (OM, Swastik, Cross at top)", "Subtle or absent"],
                    ["Astrological Section", "Highly Detailed & Prominent", "Brief, Optional, or pushed to the bottom"],
                    ["Manglik / Dosha Status", "Always explicitly stated", "Only stated if requested by the other party"],
                    ["Family Section", "Extended (Grandparents, Native Village)", "Core Family Only (Parents, Siblings)"],
                    ["About Me / Hobbies", "Rarely included", "Highly prominent; written in first-person"],
                    ["Language Tone", "Formal, respectful, third-person", "Conversational, direct, first-person"],
                    ["Photo Style", "Formal attire, traditional studio backdrop", "Smart casual, modern/lifestyle setting"],
                    ["Sharing Method", "Printed copies or formal email", "Usually shared directly via <a href='/articles/biodata-format-for-whatsapp' class='text-sky-600 hover:underline'>WhatsApp PDF</a>"],
                  ].map(([f, t, m]) => (
                    <tr key={f} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200" dangerouslySetInnerHTML={{ __html: f }} />
                      <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400" dangerouslySetInnerHTML={{ __html: t }} />
                      <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400" dangerouslySetInnerHTML={{ __html: m }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* BLOCK: HYBRID_APPROACH */}
          <section id="hybrid-approach" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. The Hybrid Approach: Best of Both Worlds</h2>
            <p>
              The most successful biodata strategy in today&apos;s Indian matchmaking market is a <strong className="font-semibold text-zinc-900 dark:text-white">hybrid format</strong>. A hybrid biodata utilizes a sleek, modern visual design but actively retains all the critical traditional information that families need to make decisions.
            </p>
            <p className="mt-4">
              <strong>Why does the hybrid format work?</strong> Because it appeals to both generations. It shows the parents that you respect their need for cultural filters (like checking <Link href="/articles/manglik-biodata-format" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">Manglik status</Link> or Gothram), while simultaneously showing the prospective partner that you have modern aesthetic sensibilities and a distinct personality.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">The Secret: Typography and Whitespace</h3>
            <p className="mb-6">
              The primary visual distinction in a hybrid format lies in the use of modern typography and whitespace. Instead of using ancient, difficult-to-read fonts like Times New Roman in a dense block of text, a hybrid approach utilizes crisp sans-serif fonts (like Inter or Roboto) to ensure maximum readability on mobile devices. Furthermore, by increasing line height and adding generous padding between sections, the document feels premium and sophisticated rather than cramped and chaotic. This small change in design philosophy signals a high-status profile without needing to delete any of the traditional family background information that elders expect.
            </p>

            <figure className="my-10">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/Before-after.webp" alt="Before and after transforming a Word document into a modern hybrid biodata PDF" fill className="object-contain" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                A classic example of moving from a cramped, traditional Word document to a clean, hybrid PDF design.
              </figcaption>
            </figure>
            
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20 border border-sky-100 dark:border-sky-900/50 rounded-2xl p-6 mt-6">
              <h3 className="font-bold text-sky-900 dark:text-sky-200 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> How to Build a Hybrid Biodata
              </h3>
              <ul className="space-y-2 text-sky-800 dark:text-sky-300 text-sm">
                <li>Choose a clean, minimalist template with lots of white space.</li>
                <li>Ensure there is still a dedicated block for Kundali/Astrology details.</li>
                <li>Include a well-written &quot;About Me&quot; paragraph.</li>
                <li>Export it as a high-quality PDF, avoiding messy <Link href="/articles/biodata-format-word-download" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">Word document downloads</Link> that lose their formatting on mobile phones.</li>
              </ul>
              <p className="mt-4 text-sm text-sky-700 dark:text-sky-400 italic">
                (Note: Almost all templates available on BiodataBuilder follow this optimized hybrid structure by default).
              </p>
            </div>
            
            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              For more actionable advice on drafting the actual content, check out our <Link href="/articles/biodata-tips" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">15 expert biodata tips</Link>.
            </p>
          </section>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is a traditional biodata format?", a: "A traditional biodata uses warm, ornate design elements — floral borders, religious symbols, formal hierarchy, and a complete astrological section. Best suited for religious communities and tier-2/3 city families." },
                { q: "What is a modern biodata format?", a: "A modern biodata has a clean, minimal design similar to a premium resume. It highlights individual achievements and may abbreviate or skip astrological details. Best for urban professionals and NRI contexts." },
                { q: "Should I use a modern or traditional biodata?", a: "Choose based on your audience. A hybrid approach — modern layout with all traditional information still included — works best in most contexts. It appears polished while meeting cultural expectations." },
                { q: "Can I include astrological details in a modern biodata?", a: "Yes, and you should if your community expects them. A modern design does not mean you skip cultural information — it means you present that information in a cleaner, more readable format." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
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
              The debate between a modern and traditional biodata format is not about which design is "better"—it is entirely about matching your presentation to your audience. Traditional families expect to see respect for heritage and astrology upfront, while modern professionals appreciate a clean, direct approach that focuses on personality and career.
            </p>
            <p className="mt-4">
              By adopting a <strong>hybrid approach</strong>, you can create a beautiful, modern document that still respects cultural expectations. Take the time to understand who will be reading your biodata, and choose a layout that speaks their language.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20 rounded-3xl border border-sky-100 dark:border-sky-900/50 text-center">
            <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-3">Browse Traditional &amp; Modern Templates</h3>
            <p className="text-sky-700 dark:text-sky-300 mb-8 max-w-2xl mx-auto">
              Preview every template live before committing. Whether you want a clean modern layout or an ornate traditional one, find the one that fits your context perfectly — free.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Templates Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition">15 Expert Tips to Write a Winning Biodata</div>
              </Link>
              <Link href="/articles/simple-biodata-format-for-job-pdf" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Career Profiles</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition">Job vs Marriage Biodata: Key Differences</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
