import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
  description: "Complete guide to creating a marriage biodata when you are Manglik. How to state Manglik status, what to write, how to match, and how to address concerns honestly.",
  alternates: { canonical: "https://biodatabuilder.in/articles/manglik-biodata-format" },
  openGraph: {
    type: "article",
    title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
    description: "Complete guide to creating a marriage biodata when you are Manglik — what to write, how to match, and common concerns addressed.",
    url: "https://biodatabuilder.in/articles/manglik-biodata-format",
    images: [{ url: "/examples/manglik-biodata-infographic.webp", width: 1200, height: 630, alt: "Mangal Dosha in Matchmaking" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Manglik Dosha and should I mention it in my biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Mangal Dosha (Manglik) occurs when Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of the birth chart. Yes — always mention it clearly in your biodata. Hiding or omitting it causes trust issues later. Families match Mangliks with other Mangliks, so stating it upfront helps you find the right match faster." },
    },
    {
      "@type": "Question",
      name: "What is the difference between Manglik and Anshik Manglik?",
      acceptedAnswer: { "@type": "Answer", text: "Manglik (Full Mangal Dosha) means Mars occupies the core inauspicious houses. Anshik Manglik (Partial Dosha) usually means Mars is in a position where certain cancellation factors apply — often through specific Navamsa placements. Always consult your family priest or astrologer to determine which category you fall in." },
    },
    {
      "@type": "Question",
      name: "Can a Manglik marry a non-Manglik?",
      acceptedAnswer: { "@type": "Answer", text: "Traditional guidance strongly advises against it, though many modern families are open to it after consulting a priest who can assess cancellation factors. Certain Rashi placements and planetary aspects can cancel or reduce the Dosha. Always discuss with a qualified Jyotishi before proceeding." },
    },
    {
      "@type": "Question",
      name: "What should I write in my biodata if I am Anshik Manglik?",
      acceptedAnswer: { "@type": "Answer", text: "Write 'Anshik Manglik' (Partial Mangal Dosha) clearly. Some families also add a brief note like 'Astrologer consulted — match recommended for Anshik Manglik or Non-Manglik'. This shows transparency and proactive communication." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Manglik Biodata Format", item: "https://biodatabuilder.in/articles/manglik-biodata-format" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Manglik Biodata Format — How to Mention Manglik Status",
  description: "How to correctly mention Manglik status in a marriage biodata. Sample formats and tips for Manglik and non-Manglik profiles.",
  image: "/examples/manglik-biodata-infographic.webp",
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
        <h1 className="text-3xl sm:text-5xl font-bold text-rose-900 dark:text-rose-100 mb-6 leading-tight">
          Manglik Biodata Format: A Complete Guide for Manglik Boy & Girl
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-rose-50 dark:bg-rose-950/30 p-6 rounded-2xl border border-rose-100 dark:border-rose-900/50 my-8">
            <h2 className="text-xl font-bold text-rose-900 dark:text-rose-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-rose-800 dark:text-rose-300">
              <li><strong>Transparency First:</strong> Always state your Manglik status clearly in your biodata. Hiding it wastes time and causes severe trust issues when the family priest eventually discovers it.</li>
              <li><strong>The Three Labels:</strong> You must declare yourself as one of three categories: Manglik (Full), Anshik Manglik (Partial), or Non-Manglik.</li>
              <li><strong>It Is Extremely Common:</strong> Almost 40-50% of the population has some form of Mangal Dosha. It is an astrological characteristic, not a curse. Match Mangliks with Mangliks to neutralize the energy.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-rose-50 dark:bg-rose-950/20">
              <Image 
                src="/examples/manglik-biodata-infographic.webp" 
                alt="Mangal Dosha in Matchmaking: Manglik, Anshik Manglik, and Non-Manglik" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              The three primary classifications of Mangal Dosha you must choose from for your biodata.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-rose-600 dark:text-rose-400 font-medium">
              <li><a href="#what-is-manglik" className="hover:underline">1. What Is Mangal Dosha?</a></li>
              <li><a href="#the-three-states" className="hover:underline">2. The 3 Manglik States to Write in Your Biodata</a></li>
              <li><a href="#table-matchmaking" className="hover:underline">3. Quick Reference: Who Matches With Whom?</a></li>
              <li><a href="#complete-kundali" className="hover:underline">4. Formatting the Full Kundali Section</a></li>
              <li><a href="#why-never-hide" className="hover:underline">5. Why You Should Never Hide Your Status</a></li>
              <li><a href="#cancellation-factors" className="hover:underline">6. Astrological Cancellation Factors</a></li>
              <li><a href="#modern-approach" className="hover:underline">7. How Modern Families Approach It</a></li>
              <li><a href="#checklist" className="hover:underline">8. Pre-Send Checklist</a></li>
              <li><a href="#faq" className="hover:underline">9. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="what-is-manglik" className="scroll-mt-24">
            <p>
              When writing a <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">traditional Hindu marriage biodata</Link>, no single astrological detail causes more anxiety and confusion than Mangal Dosha. 
            </p>
            <p className="mt-4">
              <strong className="font-semibold text-zinc-900 dark:text-white">Mangal Dosha</strong> (also known as Kuja Dosha, Chevvai Dosham, or simply being "Manglik") occurs in Vedic astrology when the planet Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of a person's birth chart. Astrologically, Mars represents fiery energy, assertion, independence, and passion. When it sits in houses related to marriage and domestic harmony, it is believed to create friction unless balanced by a partner with similar energy.
            </p>
            <p className="mt-4">
              It is vital to understand that being Manglik is <strong className="font-semibold text-zinc-900 dark:text-white">not a character flaw</strong>. According to <Link href="/articles/marriage-biodata-statistics-india" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">biodata statistics in India</Link>, nearly 40-50% of the population has some form of Mangal Dosha. It is incredibly common, which is why the system of matching Mangliks with other Mangliks was developed. Whether you are building a <Link href="/articles/marriage-biodata-for-boy" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">biodata for a boy</Link> or a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">biodata for a girl</Link>, the rule remains the same: state it clearly and confidently.
            </p>
          </section>

          {/* BLOCK: THE_3_STATES */}
          <section id="the-three-states" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. The 3 Manglik States to Write in Your Biodata</h2>
            <p>
              You cannot simply leave the Manglik field blank. If you do, families will assume you are hiding something, or they will ask you immediately over <Link href="/articles/biodata-format-for-whatsapp" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">WhatsApp</Link>. Consult your family astrologer and choose one of these three exact phrases for your <Link href="/articles/kundali-details-in-biodata" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">Kundali section</Link>:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-rose-900 dark:text-rose-200 text-lg mb-2">1. "Manglik"</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  Write this if Mars is strongly placed in the defining houses without any cancellation factors. You are a "Full Manglik" and should primarily seek matches with other Full Mangliks.
                </p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-2">2. "Anshik Manglik"</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  Write this if you have a "Partial" or "Low" Mangal Dosha. This usually means Mars is in a Dosha house, but its impact is weakened by its sign (like being in debilitation) or by aspects from beneficial planets like Jupiter.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">3. "Non-Manglik"</h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  Write this if Mars does not occupy any of the Dosha houses. You should primarily seek matches with other Non-Mangliks or Anshik Mangliks (after priest consultation).
                </p>
              </div>
            </div>
          </section>
          {/* BLOCK: TABLE */}
          <section id="table-matchmaking" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Quick Reference: Who Matches With Whom?</h2>
            <p className="mb-6">
              When reviewing a <Link href="/articles/biodata-for-marriage" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">biodata for marriage</Link>, families follow traditional compatibility guidelines. Here is the standard baseline before consulting an astrologer:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Your Status</th>
                    <th className="px-5 py-3 font-semibold">Ideal Match</th>
                    <th className="px-5 py-3 font-semibold">Requires Priest Consultation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-rose-700 dark:text-rose-400">Full Manglik</td>
                    <td className="px-5 py-4 text-emerald-600 dark:text-emerald-400 font-medium">Full Manglik</td>
                    <td className="px-5 py-4 text-amber-600 dark:text-amber-500">Anshik Manglik</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-amber-600 dark:text-amber-500">Anshik Manglik</td>
                    <td className="px-5 py-4 text-emerald-600 dark:text-emerald-400 font-medium">Anshik Manglik</td>
                    <td className="px-5 py-4 text-amber-600 dark:text-amber-500">Full Manglik or Non-Manglik</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-700 dark:text-zinc-300">Non-Manglik</td>
                    <td className="px-5 py-4 text-emerald-600 dark:text-emerald-400 font-medium">Non-Manglik</td>
                    <td className="px-5 py-4 text-amber-600 dark:text-amber-500">Anshik Manglik</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 italic">
              Note: A Full Manglik is almost never recommended to marry a strictly Non-Manglik individual without significant astrological remedies (Pujas) being performed prior to the wedding.
            </p>

            <figure className="my-8">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/manglik_biodata_infographic_v2.webp" alt="A visual guide showing which Manglik states match safely with each other" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                A quick-reference guide to Manglik matchmaking compatibility.
              </figcaption>
            </figure>
          </section>

          {/* BLOCK: COMPLETE_KUNDALI */}
          <section id="complete-kundali" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Formatting the Full Kundali Section</h2>
            <p>
              Your Manglik status should not sit alone. It belongs inside a well-structured Kundali block. For a <Link href="/articles/modern-vs-traditional-biodata" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">modern yet traditional biodata</Link>, use a tabular or grid format rather than a paragraph. Here is exactly what it should look like:
            </p>
            <div className="mt-8 bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 md:p-8 font-mono text-sm sm:text-base text-zinc-800 dark:text-zinc-200 shadow-sm border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-lg font-sans font-bold text-rose-700 dark:text-rose-400 border-b border-zinc-300 dark:border-zinc-600 pb-3 mb-4 uppercase tracking-wider">Astrological Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Date of Birth</span><span className="font-semibold">14 March 1996</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Time of Birth</span><span className="font-semibold">11:32 AM</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Place of Birth</span><span className="font-semibold">Pune, Maharashtra</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Rashi (Moon Sign)</span><span className="font-semibold">Vrishchik (Scorpio)</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Nakshatra</span><span className="font-semibold">Anuradha (3rd Pada)</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Gotra</span><span className="font-semibold">Kashyap</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Manglik Status</span><span className="font-bold text-rose-600 dark:text-rose-400">Manglik</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Gana</span><span className="font-semibold">Deva</span></div>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-lg">
              <Image src="/examples/Manglik-biodata-sample.webp" alt="A professional marriage biodata highlighting the Manglik status field" width={1200} height={500} className="w-full h-auto" />
              <p className="text-center text-xs text-zinc-500 py-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
                BiodataBuilder automatically structures your Kundali section so you don't have to fight with MS Word formatting.
              </p>
            </div>
          </section>

          {/* BLOCK: WHY_NEVER_HIDE */}
          <section id="why-never-hide" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Why You Should Never Hide Your Status</h2>
            <p>
              Some candidates, especially those crafting a <Link href="/articles/biodata-for-second-marriage" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">second marriage biodata</Link> where they already feel scrutinized, are tempted to leave the field blank or falsely write "Non-Manglik" to avoid immediate rejection. This is a catastrophic mistake.
            </p>
            <ul className="list-disc pl-6 space-y-4 mt-6 text-zinc-700 dark:text-zinc-300">
              <li><strong>The Priest Will Find Out:</strong> Traditional families will always take your birth date, time, and place to their family astrologer to generate a Kundali. The astrologer will immediately see the Mars placement.</li>
              <li><strong>Trust is Broken:</strong> If the family discovers you hid your Manglik status, they will assume you are hiding other things (like health issues or past relationships). The alliance will be cancelled immediately based on dishonesty, not astrology.</li>
              <li><strong>You Waste Your Own Time:</strong> If a family is strictly looking for a Non-Manglik, hiding your status means you will go through weeks of phone calls and meetings only to be rejected at the Kundali matching stage.</li>
            </ul>
          </section>

          {/* BLOCK: CANCELLATION */}
          <section id="cancellation-factors" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Astrological Cancellation Factors (Dosha Parihara)</h2>
            <p>
              Vedic astrology is highly nuanced. Even if Mars is in a "Dosha" house (1, 2, 4, 7, 8, 12), its negative effects can be completely neutralized by other planetary placements—a phenomenon known as <em>Dosha Parihara</em>.
            </p>
            <p className="mt-4">Common cancellation factors include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
              <li>Mars is in its own sign (Aries or Scorpio).</li>
              <li>Mars is exalted (in Capricorn).</li>
              <li>Mars is in a sign owned by a friendly Jupiter (Sagittarius or Pisces).</li>
              <li>A strong, benefic Jupiter aspects Mars or the 7th house (house of marriage).</li>
            </ul>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-5 mt-6 flex gap-3 items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Important:</strong> You cannot decide your own cancellation factors using an online calculator. You must consult a qualified, experienced Jyotishi. If they confirm a cancellation, you should list your status as <strong>Anshik Manglik</strong>.
              </p>
            </div>
          </section>
          {/* BLOCK: MODERN_APPROACH */}
          <section id="modern-approach" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. How Modern Families Approach It</h2>
            <p>
              In contemporary matchmaking, especially among working professionals, the rigid rules of Mangal Dosha are often softened. When writing the <Link href="/articles/how-to-write-biodata-about-me" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">"About Me" section</Link>, many modern couples prioritize shared values, career alignment, and emotional intelligence over purely astrological matching.
            </p>
            <p className="mt-4">
              However, even progressive families will often run a basic Kundali check simply to satisfy elder family members. If you are a Manglik navigating a modern arranged marriage setup:
            </p>
            <ul className="list-disc pl-6 space-y-4 mt-6 text-zinc-700 dark:text-zinc-300">
              <li><strong>Be Upfront:</strong> Don't make it a "reveal" on the third date. It's in the biodata; let the families decide if it matters to them.</li>
              <li><strong>Focus on Compatibility:</strong> If a family rejects you purely on astrological grounds, view it as a cultural mismatch filter doing its job. You want a family whose belief systems align with yours.</li>
              <li><strong>Astrological Remedies:</strong> Many progressive families will happily proceed with a Full Manglik/Non-Manglik match provided a simple pre-wedding Puja (like a Kumbh Vivah) is performed to satisfy tradition.</li>
            </ul>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Format Your Astrological Details Perfectly</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our automated builder ensures your Kundali section looks professional and includes all the necessary fields, including Manglik status.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. Pre-Send Checklist for Mangliks</h2>
            <p className="mb-6">
              Before you hit send on WhatsApp or email, follow these <Link href="/articles/biodata-tips" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">biodata tips</Link> to ensure your Kundali section is bulletproof:
            </p>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block">Confirmed with Priest</strong>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">You did not use a free online calculator. You verified your status (Full vs Anshik) with a family astrologer.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block">Birth Time is Exact</strong>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">If you are unsure of your exact birth time, you wrote "Time Unknown" rather than guessing, as guessing changes the Kundali entirely.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block">Clean Formatting</strong>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">The status is listed in a clear grid alongside Rashi, Nakshatra, and Gotra, not buried in a paragraph.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is Manglik Dosha and should I mention it in my biodata?", a: "Mangal Dosha (Manglik) occurs when Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of the birth chart. Yes — always mention it clearly in your biodata. Hiding or omitting it causes trust issues later. Families match Mangliks with other Mangliks, so stating it upfront helps you find the right match faster." },
                { q: "What is the difference between Manglik and Anshik Manglik?", a: "Manglik (Full Mangal Dosha) means Mars occupies the core inauspicious houses without cancellation. Anshik Manglik (Partial Dosha) usually means Mars is in a position where certain astrological cancellation factors apply (Dosha Parihara). Always consult your family priest to determine your exact category." },
                { q: "Can a Manglik marry a non-Manglik?", a: "Traditional guidance strongly advises against it, though many modern families are open to it after consulting a priest who can assess cancellation factors, or by performing specific pre-wedding Pujas (like Kumbh Vivah). Always discuss with a qualified Jyotishi before proceeding." },
                { q: "What should I write in my biodata if I am Anshik Manglik?", a: "Write 'Anshik Manglik' clearly in the Kundali grid. Some families also add a brief, polite note underneath like: 'Astrologer consulted — match recommended for Anshik Manglik or Non-Manglik'. This shows transparency and sets clear expectations." },
                { q: "Do I need to mention Manglik status if we are not Hindus?", a: "Generally, no. Mangal Dosha is a specific concept within Vedic (Hindu) astrology. If you are creating a biodata for a different religious background, this field is usually omitted entirely." },
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
              Being Manglik is incredibly common and nothing to be anxious about when crafting your marriage biodata. The golden rule is <strong>absolute transparency</strong>. 
            </p>
            <p className="mt-4">
              By consulting a qualified priest to determine your exact status (Full, Anshik, or Non-Manglik) and stating it clearly alongside your other Kundali details, you show respect for the process. You also protect your own time by ensuring you only match with families who are astrologically aligned with your profile.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-3xl border border-rose-100 dark:border-rose-900/50 text-center">
            <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">Build a Biodata with a Perfect Kundali Section</h3>
            <p className="text-rose-700 dark:text-rose-300 mb-8 max-w-2xl mx-auto">
              Our builder includes dedicated fields for Rashi, Nakshatra, Gotra, Gana, and Manglik status — presented cleanly and professionally.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-format-word-download" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Downloads</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 transition">Download Free Word (.docx) Biodata Formats</div>
              </Link>
              <Link href="/articles/kundali-details-in-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 transition">Master Guide: All Kundali Details Explained</div>
              </Link>
              <Link href="/articles/biodata-format-hindi" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Language</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 transition">Biodata Format in Hindi — हिंदी विवाह बायोडाटा गाइड</div>
              </Link>
              <Link href="/articles/marriage-biodata-statistics-india" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Research</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 transition">Indian Marriage Biodata Statistics (2024)</div>
              </Link>
              <Link href="/articles/simple-biodata-format-for-job-pdf" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-rose-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Career</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-rose-600 transition">Job vs Marriage Biodata — Key Differences</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
