import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivah Biodata Format Telugu | వివాహ బయోడేటా PDF Free",
  description: "Complete Telugu marriage biodata format with all fields in Telugu and English. Rasi, Nakshatra, Gotra, Cheyvvai Dosham — free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/vivah-biodata-format-telugu" },
  openGraph: {
    title: "Vivah Biodata Format Telugu | వివాహ బయోడేటా PDF",
    description: "Telugu marriage biodata with Rasi, Nakshatra, Gotra, Cheyvvai details — free PDF download.",
    url: "https://biodatabuilder.in/articles/vivah-biodata-format-telugu",
    images: [{ url: "https://biodatabuilder.in/examples/Boy-biodata-example-Telugu.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be in a Telugu marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "A Telugu vivah biodata should include: personal details (name, DOB, height), Rasi and Nakshatra, Lagnam, Gotram, Cheyvvai Dosham status, community (Jati and sub-caste), education/career (with income), family background (parents, siblings, native district), About Me, expectations, and contact info." },
    },
    {
      "@type": "Question",
      name: "What is Cheyvvai Dosham in a Telugu biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Cheyvvai Dosham (Telugu for Mangal Dosha) is Mars placed in houses 1, 2, 4, 7, 8, or 12 of the birth chart. It is taken seriously in Telugu matchmaking, especially for Kamma, Reddy, and Brahmin communities. Always state clearly: Cheyvvai Dosham Undi or Ledu." },
    },
    {
      "@type": "Question",
      name: "Is Gotram important in Telugu biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, very important. Gotram (patrilineal sage lineage) prevents same-lineage marriages. In Telugu communities, especially Brahmin (Niyogi/Vaidiki), Kamma, and Reddy families, marrying within the same Gotram is strictly avoided. Always include your Gotram." },
    },
    {
      "@type": "Question",
      name: "How do I create a Telugu vivah biodata online?",
      acceptedAnswer: { "@type": "Answer", text: "Visit BiodataBuilder.in/create, fill in all fields including Rasi, Nakshatra, Lagnam, Gotram, and Cheyvvai status, choose a template, and download as a perfect PDF. Free, no registration needed." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Vivah Biodata Format Telugu<br />
          <span className="text-indigo-600 dark:text-indigo-400 text-3xl">వివాహ బయోడేటా ఫార్మాట్ – PDF Free</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          Complete Telugu marriage biodata — all fields in Telugu and English, with Rasi, Nakshatra, Gotram, Cheyvvai Dosham, community-specific tips, and free PDF download.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Boy-biodata-example-Telugu.png" alt="Telugu vivah biodata example for boy" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Telugu boy vivah biodata — created with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Telugu Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            All Fields in a Telugu Vivah Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">వివాహ బయోడేటా – అన్ని వివరాలు</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Telugu Field</th>
                  <th className="px-5 py-3 font-semibold">English</th>
                  <th className="px-5 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["పేరు", "Name", "Venkata Suresh Reddy"],
                  ["పుట్టిన తేదీ", "Date of Birth", "10 March 1996"],
                  ["పుట్టిన సమయం", "Time of Birth", "09:20 AM"],
                  ["పుట్టిన స్థలం", "Place of Birth", "Vijayawada, AP"],
                  ["ఎత్తు", "Height", "5 ft 10 in"],
                  ["కులం / సముదాయం", "Caste / Community", "Reddy – Kapu"],
                  ["గోత్రం", "Gotram", "Vishwamitra"],
                  ["రాశి", "Rasi", "Mithuna (Gemini)"],
                  ["నక్షత్రం", "Nakshatra", "Mrigasira, 3rd Padam"],
                  ["లగ్నం", "Lagnam", "Vrishabha (Taurus)"],
                  ["చెవ్వాయి దోషం", "Cheyvvai Dosham", "Dosham Ledu (None)"],
                  ["చదువు", "Education", "B.Tech, NIT Warangal"],
                  ["ఉద్యోగం", "Occupation", "Software Engineer, HCL – Hyderabad"],
                  ["వార్షిక ఆదాయం", "Annual Income", "₹16 LPA"],
                  ["తండ్రి", "Father", "Rajasekhar Reddy – Agriculture"],
                  ["తల్లి", "Mother", "Padmavathi – Homemaker"],
                  ["తోబుట్టువులు", "Siblings", "1 Elder Sister (Married)"],
                  ["కుటుంబ రకం", "Family Type", "Joint Family – Guntur"],
                  ["సంప్రదించండి", "Contact", "+91-99XXX-XXXXX (Father)"],
                ].map(([tel, eng, ex]) => (
                  <tr key={eng} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{tel}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Telugu Girl Vivah Biodata Example</h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow">
            <Image src="/examples/Girl-biodata-example-Telugu.png" alt="Telugu girl vivah biodata example" width={1200} height={700} className="w-full h-auto" />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Telugu girl vivah biodata — created with BiodataBuilder</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            Community-Specific Tips for Telugu Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">తెలుగు సమాజానికి ప్రత్యేక సూచనలు</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Cheyvvai Dosham (Mars Dosha)", desc: "Always state your Cheyvvai status clearly — 'Dosham Undi' or 'Dosham Ledu'. Telugu families, especially in Kamma, Reddy, and Brahmin communities, take this seriously. Tradition recommends matching Dosham holders with each other." },
              { title: "Gotram (Gotra)", desc: "Gotram prevents marriages within the same patrilineal lineage. For all Telugu Hindu communities, Sagotra (same Gotram) marriages are strictly avoided. Always include your Gotram — ask your parents if unsure." },
              { title: "Telugu Brahmin (Niyogi vs Vaidiki)", desc: "Telugu Brahmin families further distinguish between Niyogi and Vaidiki sub-groups. Marriages typically happen within the same group. State clearly which one you belong to." },
              { title: "Kamma, Reddy, Velama Communities", desc: "These communities place strong emphasis on native district (Godavari, Krishna, Guntur, Kurnool belt etc.) and agricultural land holdings. Including your district of origin and family profession adds clarity." },
              { title: "Ashtottara Porutham", desc: "Telugu families often check the 8-point star matching system (Ashtottara). Your Rasi, Nakshatra, Padam, and Lagnam are all required for this — include them all in your biodata." },
              { title: "Income & Profession", desc: "For government job holders, stating 'Government Employee' is a strong positive in Telugu matchmaking. Always include your designation, department, and salary scale if in government service." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">How to Create Your Telugu Biodata Online</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Visit <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">BiodataBuilder.in/create</Link> — no account needed.</li>
            <li>Fill in Rasi, Nakshatra, Lagnam, Gotram, and Cheyvvai status.</li>
            <li>Include your community (Kamma/Reddy/Brahmin etc.) and native district.</li>
            <li>Upload a clear profile photo.</li>
            <li>Choose a traditional or modern template and click <strong>Download PDF</strong>.</li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should be in a Telugu marriage biodata?", a: "Personal details, Rasi and Nakshatra, Lagnam, Gotram, Cheyvvai Dosham status, community/caste, education and career with income, family background, About Me, expectations, and contact info." },
              { q: "What is Cheyvvai Dosham in a Telugu biodata?", a: "Cheyvvai Dosham is Mars placed in houses 1, 2, 4, 7, 8, or 12 of the birth chart. Always state: Dosham Undi or Dosham Ledu. Telugu tradition recommends matching Dosham holders together." },
              { q: "Is Gotram important in Telugu biodata?", a: "Yes — very. Gotram prevents same-lineage marriages. In Brahmin, Kamma, and Reddy communities, marrying within the same Gotram is strictly avoided. Always include it." },
              { q: "How do I create a Telugu vivah biodata online?", a: "Use BiodataBuilder.in — fill in all fields including Rasi, Nakshatra, Lagnam, Gotram, Cheyvvai status, choose a template, download as PDF. Free, no registration." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Telugu Vivah Biodata — Free PDF</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4">వివాహ బయోడేటా – ఉచిత PDF డౌన్‌లోడ్</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Create your complete Telugu biodata with Rasi, Nakshatra, Gotram, Cheyvvai and all fields — in minutes. Free, no sign-up.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Telugu Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
