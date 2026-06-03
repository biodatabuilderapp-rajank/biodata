import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kundali Details in Biodata | What Horoscope Info to Include",
  description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
  alternates: { canonical: "https://biodatabuilder.in/articles/kundali-details-in-biodata" },
  openGraph: {
    title: "Kundali Details in Biodata | What Horoscope Info to Include",
    description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
    url: "https://biodatabuilder.in/articles/kundali-details-in-biodata",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kundali details should be in a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata should include: Date, Time, and Place of Birth (for Kundali casting); Rashi (moon sign); Nakshatra (birth star) and Pada; Gotra (patrilineal lineage); Manglik Status (Manglik, Anshik Manglik, or Non-Manglik); and optionally Gana and Lagna.",
      },
    },
    {
      "@type": "Question",
      name: "Is it necessary to include Kundali details in a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Hindu families, yes — Kundali matching is central to the matchmaking process. Including accurate birth time and place speeds up the process significantly. Many families will not proceed to a meeting without confirming Kundali compatibility first.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Rashi and Nakshatra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rashi is the moon sign — the zodiac sign in which the Moon was placed at birth. There are 12 Rashis. Nakshatra is the birth star — one of 27 lunar mansions. Your Nakshatra determines your Gana and Pada, which are used in Ashtakoota matching.",
      },
    },
    {
      "@type": "Question",
      name: "What should I write if I don't know my birth time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write 'Birth time unknown' in the time field. Do not guess or leave it blank. Many priests can work with approximate times, but being honest about uncertainty is better than providing an incorrect birth time.",
      },
    },
    {
      "@type": "Question",
      name: "What does Manglik status mean in a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manglik (or Mangal Dosha) refers to the placement of Mars in certain houses of the birth chart. State clearly: Manglik (Full), Anshik Manglik (Partial), or Non-Manglik. Being Manglik is not a problem — traditional guidance recommends matching Mangliks with other Mangliks.",
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
          Kundali Details in Marriage Biodata: What to Include
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            For millions of Hindu families across India, <strong className="font-semibold text-zinc-900 dark:text-white">Kundali matching</strong> (also called Jyotish or Vedic astrology compatibility) plays a central role in deciding whether to proceed with a matrimonial alliance. Including the right horoscope details in your <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> can significantly speed up the matchmaking process.
          </p>

          {/* QUICK REFERENCE TABLE */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Quick Reference: Kundali Fields for Your Biodata</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Field</th>
                  <th className="px-5 py-3 font-semibold">Required?</th>
                  <th className="px-5 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Date of Birth", "✅ Essential", "14 March 1996"],
                  ["Time of Birth", "✅ Essential", "11:32 AM (or 'Unknown')"],
                  ["Place of Birth", "✅ Essential", "Pune, Maharashtra"],
                  ["Rashi (Moon Sign)", "✅ Essential", "Karka (Cancer)"],
                  ["Nakshatra (Birth Star)", "✅ Essential", "Pushya, 2nd Pada"],
                  ["Gotra", "✅ Essential", "Kashyap"],
                  ["Manglik Status", "✅ Essential", "Non-Manglik / Manglik"],
                  ["Gana", "⭐ Helpful", "Deva / Manushya / Rakshasa"],
                  ["Lagna (Ascendant)", "⭐ Optional", "Simha (Leo)"],
                  ["Nadi", "⭐ Optional", "Adi / Madhya / Antya"],
                ].map(([field, req, ex]) => (
                  <tr key={field} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{field}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{req}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Essential Kundali Information to Include</h2>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Date, Time & Place of Birth</h3>
          <p>This is the most critical piece. Without an accurate birth time, a Kundali cannot be properly cast. If you are unsure of the exact birth time, write &quot;Birth time unknown&quot; rather than guessing.</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300">
            <p><strong>Example:</strong> Date of Birth: 14 March 1996 | Time: 11:32 AM | Place: Pune, Maharashtra</p>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Rashi (Moon Sign)</h3>
          <p>
            Rashi is the zodiac sign in which the Moon was placed at your time of birth. There are 12 rashis (Mesh, Vrishabha, Mithuna, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makara, Kumbha, Meena). Many families check Rashi compatibility charts before proceeding.
          </p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Nakshatra (Birth Star) and Pada</h3>
          <p>
            There are 27 Nakshatras. Your Nakshatra (and its Pada — quarter) determine your Gana (Deva, Manushya, or Rakshasa), which is one of the key parameters in Ashtakoota matching. Some families strictly match Nakshatras before moving ahead.
          </p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Gotra</h3>
          <p>
            Gotra represents your patrilineal lineage — an ancient clan designation traced back to a Vedic sage. In most Hindu traditions, marriages within the same Gotra (Sagotra) are strictly avoided. Always mention your Gotra clearly.
          </p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">5. Manglik Status</h3>
          <p>
            Mangal Dosha occurs when Mars is placed in certain houses of the Kundali. Being Manglik is not a curse — it is a planetary position. Clearly state:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Manglik</strong> — Full Mangal Dosha present</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Anshik Manglik</strong> — Partial Mangal Dosha</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Non-Manglik</strong> — No Mangal Dosha</li>
          </ul>
          <p>For much more on this, read our dedicated <Link href="/articles/manglik-biodata-format" className="text-indigo-600 dark:text-indigo-400 hover:underline">Manglik biodata guide</Link>.</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">6. Gana</h3>
          <p>Gana (Deva, Manushya, or Rakshasa) is derived from your Nakshatra. It is one of the 8 kootas matched in Ashtakoota matching. Deva-Deva is ideal; Rakshasa-Deva is traditionally considered incompatible by many priests.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample Kundali Section</h2>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 space-y-2 text-sm font-mono text-zinc-700 dark:text-zinc-300">
            <p><strong>Date of Birth:</strong> 22 July 1997</p>
            <p><strong>Time of Birth:</strong> 08:15 AM</p>
            <p><strong>Place of Birth:</strong> Jaipur, Rajasthan</p>
            <p><strong>Rashi:</strong> Karka (Cancer)</p>
            <p><strong>Nakshatra:</strong> Pushya, 2nd Pada</p>
            <p><strong>Gotra:</strong> Kashyap</p>
            <p><strong>Manglik Status:</strong> Non-Manglik</p>
            <p><strong>Gana:</strong> Deva</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What kundali details should be in a marriage biodata?", a: "Include: Date/Time/Place of Birth, Rashi (moon sign), Nakshatra and Pada, Gotra, Manglik Status. Optionally add Gana, Lagna, and Nadi for more complete matching information." },
              { q: "Is it necessary to include Kundali details?", a: "For Hindu families, yes. Kundali matching is central to the matchmaking process. Many families will not proceed without confirming compatibility first." },
              { q: "What is the difference between Rashi and Nakshatra?", a: "Rashi is the moon sign (one of 12). Nakshatra is the birth star (one of 27 lunar mansions). Your Nakshatra determines your Gana, used in Ashtakoota matching." },
              { q: "What should I write if I don't know my birth time?", a: "Write 'Birth time unknown'. Do not guess — an incorrect birth time produces an inaccurate Kundali. Many priests can still work with approximate times if you note them as approximate." },
              { q: "What does Manglik status mean in a biodata?", a: "Manglik (Mangal Dosha) is Mars placed in certain birth chart houses. State clearly: Manglik (Full), Anshik Manglik (Partial), or Non-Manglik. Traditional guidance recommends matching Mangliks with other Mangliks." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Add All These Details to Your Biodata</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our form has dedicated fields for Rashi, Nakshatra, Gotra, Manglik status and more. Download as PDF in seconds, free.</p>
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
