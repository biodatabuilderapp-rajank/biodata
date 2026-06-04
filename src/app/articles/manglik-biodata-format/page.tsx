import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
  description: "Complete guide to creating a marriage biodata when you are Manglik. How to state Manglik status, what to write, how to match, and how to address concerns honestly.",
  alternates: { canonical: "https://biodatabuilder.in/articles/manglik-biodata-format" },
  openGraph: {
    title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
    description: "Complete guide to creating a marriage biodata when you are Manglik — what to write, how to match, and common concerns addressed.",
    url: "https://biodatabuilder.in/articles/manglik-biodata-format",
    images: [{ url: "https://biodatabuilder.in/examples/Manglik-biodata-sample.png" }],
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
      acceptedAnswer: { "@type": "Answer", text: "Manglik (Full Mangal Dosha) means Mars occupies the core inauspicious houses (1, 4, 7, 8, 12). Anshik Manglik (Partial Dosha) usually means Mars is in a position where certain cancellation factors apply — often through specific Navamsa placements. Always consult your family priest or astrologer to determine which category you fall in." },
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

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Manglik Biodata Format: A Complete Guide for Manglik Boy & Girl
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          If you are Manglik, this guide explains exactly what to write in your biodata, how to communicate your status clearly, and how to navigate common concerns — with transparency and confidence.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Manglik-biodata-sample.png" alt="Marriage biodata with Kundali section showing Manglik status clearly" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">A biodata with the Kundali section showing Manglik status clearly — the right way to present this information</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">What Is Mangal Dosha?</h2>
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-white">Mangal Dosha</strong> (also called Kuja Dosha, Chevvai Dosham, or simply being &quot;Manglik&quot;) occurs in Vedic astrology when the planet Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of the birth chart. It is a purely astrological designation — not a moral judgement or character flaw.
          </p>
          <p>
            Statistically, approximately 40–50% of people are born Manglik. This is not rare. The tradition of matching Mangliks with other Mangliks arose precisely because it is so common.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">What to Write in Your Biodata</h2>
          <p>Always state your Manglik status clearly in the Kundali/Astrological section. Here are the three possible states:</p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-4">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">What to Write</th>
                  <th className="px-5 py-3">Match With</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Full Manglik", "Manglik", "Manglik or Anshik Manglik (with priest consultation)"],
                  ["Partial Manglik", "Anshik Manglik", "Non-Manglik or Anshik Manglik (priest to confirm)"],
                  ["No Dosha", "Non-Manglik", "Non-Manglik preferred; Anshik Manglik may be acceptable"],
                ].map(([status, write, match]) => (
                  <tr key={status} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{status}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">{write}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">{match}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">The Full Kundali Section in Your Biodata</h2>
          <p>The Kundali section of your biodata should always include more than just Manglik status. Here is the complete section with a sample:</p>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 space-y-2 text-sm font-mono text-zinc-700 dark:text-zinc-300">
            <p><strong>Date of Birth:</strong> 14 March 1996</p>
            <p><strong>Time of Birth:</strong> 11:32 AM</p>
            <p><strong>Place of Birth:</strong> Pune, Maharashtra</p>
            <p><strong>Rashi:</strong> Vrishchik (Scorpio)</p>
            <p><strong>Nakshatra:</strong> Anuradha, 3rd Pada</p>
            <p><strong>Gotra:</strong> Kashyap</p>
            <p><strong>Gana:</strong> Deva</p>
            <p><strong>Manglik Status:</strong> <span className="text-rose-600 dark:text-rose-400 font-bold">Manglik</span></p>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            For a complete list of all Kundali fields and what each means, see our <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Kundali details in biodata guide</Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">Why You Should Never Hide Manglik Status</h2>
          <p>Some people are tempted to leave Manglik status blank or write &quot;Non-Manglik&quot; to avoid rejection. This is a serious mistake:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Families almost always ask a priest to verify Kundali — the discrepancy will surface during chart comparison.</li>
            <li>Discovery of hidden Manglik status after engagement or marriage causes severe trust breakdown.</li>
            <li>Being Manglik is <em>not</em> rare — approximately 40–50% of the population has some form of Mangal Dosha. It is a normal astrological characteristic.</li>
            <li>Transparency upfront filters for exactly the families who are open to your match — saving everyone time and emotions.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">Manglik Dosha Cancellation Factors</h2>
          <p>In many cases, the effects of Mangal Dosha are considered reduced or cancelled by specific planetary configurations. These include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mars in its own sign (Aries or Scorpio)</li>
            <li>Mars in a sign owned by Jupiter (Sagittarius or Pisces)</li>
            <li>Mars in Capricorn (exaltation)</li>
            <li>Mars in the 2nd house in Gemini or Virgo</li>
            <li>Jupiter in the Lagna (ascendant)</li>
          </ul>
          <p>Always consult a qualified Jyotishi to determine whether cancellation factors apply in your specific chart before deciding how to categorise your status.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is Manglik Dosha and should I mention it in my biodata?", a: "Mangal Dosha (Manglik) is Mars in certain houses of the birth chart. Always mention it clearly — hiding it causes trust issues later. Families match Mangliks together, so transparency helps you find the right match faster." },
              { q: "What is the difference between Manglik and Anshik Manglik?", a: "Manglik (Full) means Mars is in core inauspicious houses. Anshik Manglik (Partial) means cancellation factors may reduce the Dosha. Consult an astrologer to determine which applies to you." },
              { q: "Can a Manglik marry a non-Manglik?", a: "Traditional guidance advises against it, though many modern families are open to it after consulting a priest who assesses cancellation factors. Always discuss with a qualified Jyotishi." },
              { q: "What should I write if I am Anshik Manglik?", a: "Write 'Anshik Manglik' clearly. You can optionally add: 'Astrologer consulted — match recommended for Anshik Manglik or Non-Manglik'. This demonstrates transparency." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 rounded-3xl border border-rose-100 dark:border-rose-900/50 text-center">
            <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">Create Your Biodata with Complete Kundali Section</h3>
            <p className="text-rose-700 dark:text-rose-300 mb-8">BiodataBuilder includes dedicated fields for Rashi, Nakshatra, Gotra, Gana, and Manglik status — presented cleanly and professionally. Free PDF download.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
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
