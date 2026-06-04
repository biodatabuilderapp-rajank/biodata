import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lagna Biodata Format Gujarati | લગ્ન બાયોડેટા PDF Free",
  description: "Gujarati marriage biodata format with all fields in Gujarati and English. Jati, Gotra, Gana, Rashi details. Download your lagna biodata as PDF free.",
  alternates: { canonical: "https://biodatabuilder.in/articles/lagna-biodata-format-gujarati" },
  openGraph: {
    title: "Lagna Biodata Format Gujarati | લગ્ન બાયોડેટા PDF",
    description: "Complete Gujarati lagna biodata format with Jati, Gotra, Gana, Rashi — free PDF download.",
    url: "https://biodatabuilder.in/articles/lagna-biodata-format-gujarati",
    images: [{ url: "https://biodatabuilder.in/examples/Boy-biodata-example-Gujarati.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be in a Gujarati lagna biodata?",
      acceptedAnswer: { "@type": "Answer", text: "A Gujarati lagna biodata should include: personal details (name, DOB, height), Jati/community, Gotra, Gana, Rashi and Nakshatra, Manglik status, education and career with income, family background (native district, siblings, family type), About Me, expectations, and contact info." },
    },
    {
      "@type": "Question",
      name: "What is unique about a Gujarati biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Gujarati biodata emphasises Jnati (sub-community), business background, native district (Kutch/Kathiawad/Saurashtra/South Gujarat), and Gana — fields less common in biodatas from other states. Jain families also list their Gachh." },
    },
    {
      "@type": "Question",
      name: "How do I create a Gujarati lagna biodata online?",
      acceptedAnswer: { "@type": "Answer", text: "Use BiodataBuilder.in — fill in all fields including Jati, Gotra, Gana, Rashi and Nakshatra, choose a template, and download as a perfect PDF. Free, no registration needed." },
    },
    {
      "@type": "Question",
      name: "Is Kundali matching important in Gujarati marriages?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Gana compatibility and Rashi matching are commonly checked. Many families require a full Kundali chart after the initial biodata exchange." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Lagna Biodata Format Gujarati<br />
          <span className="text-indigo-600 dark:text-indigo-400 text-3xl">લગ્ન બાયોડેટા ફોર્મેટ – PDF Free</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          Complete Gujarati lagna biodata for boy and girl — all fields in Gujarati and English, with Jati, Gotra, Gana, community tips, and free PDF download.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Boy-biodata-example-Gujarati.png" alt="Gujarati lagna biodata example for boy" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Gujarati boy lagna biodata — created with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Gujarati Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            All Fields in a Gujarati Lagna Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ગુજરાતી લગ્ન બાયોડેટા – તમામ ક્ષેત્રો</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Field (Gujarati)</th>
                  <th className="px-5 py-3 font-semibold">Field (English)</th>
                  <th className="px-5 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["નામ", "Name", "Pooja Desai"],
                  ["જન્મ તારીખ", "Date of Birth", "15 June 1998"],
                  ["જન્મ સ્થળ", "Place of Birth", "Rajkot, Gujarat"],
                  ["ઊંચાઈ", "Height", "5 ft 4 in"],
                  ["જ્ઞાતિ", "Jati / Community", "Patel – Kadva"],
                  ["ગોત્ર", "Gotra", "Kashyap"],
                  ["ગણ", "Gana", "Deva"],
                  ["રાશિ", "Rashi", "Kanya (Virgo)"],
                  ["નક્ષત્ર", "Nakshatra", "Hasta, 3rd Pada"],
                  ["મંગળ", "Manglik Status", "Non-Manglik"],
                  ["શિક્ષણ", "Education", "B.Com, Saurashtra University"],
                  ["વ્યવસાય", "Occupation", "Accountant, Reliance, Ahmedabad"],
                  ["વાર્ષિક આવક", "Annual Income", "₹9 LPA"],
                  ["પિતા", "Father", "Hasmukhlal Desai – Business"],
                  ["માતા", "Mother", "Savitaben Desai – Homemaker"],
                  ["ભાઈ-બહેન", "Siblings", "1 Elder Brother (Married)"],
                  ["કૌટુંબિક પ્રકાર", "Family Type", "Joint Family – Rajkot"],
                  ["સંપર્ક", "Contact", "+91-98765-XXXXX (Father)"],
                ].map(([guj, eng, ex]) => (
                  <tr key={eng} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{guj}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Gujarati Girl Lagna Biodata Example</h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow">
            <Image src="/examples/Girl-biodata-example-Gujarati.png" alt="Gujarati girl lagna biodata example" width={1200} height={700} className="w-full h-auto" />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Gujarati girl lagna biodata — created with BiodataBuilder</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            Community-Specific Tips for Gujarati Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ગુજરાતી સમુદાય માટે ખાસ</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Jati / Jnati System", desc: "Always specify your Jnati clearly — Patel (Leva/Kadva), Brahmin, Jain, Bania, Koli, etc. Sub-community like Kutchi Patel or Charotar Patel also matters significantly in matchmaking." },
              { title: "Business Background", desc: "Gujarati matchmaking places high importance on family business background. Mention whether your family runs a business — many families evaluate this alongside income and education." },
              { title: "Gotra & Gana", desc: "Gotra prevents same-lineage marriages (Sagotra marriages are avoided). Gana (Deva/Manushya/Rakshasa) is used in compatibility matching. Do not leave either blank." },
              { title: "Native District", desc: "Always specify your native region — Kutch, Kathiawad, Saurashtra, or South Gujarat. Regional background is a common conversation point in Gujarati matchmaking." },
              { title: "Jain Community", desc: "Jain families additionally list: Shvetambar/Digambar, Gachh, and Tapagachh or Sthanakvasi tradition. Include all applicable markers for complete matching." },
              { title: "Income Transparency", desc: "Stating a specific income range is strongly recommended — especially for business families who want to evaluate financial compatibility before agreeing to meet." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            How to Create Your Gujarati Biodata Online
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ઓનલાઈન ગુજરાતી બાયોડેટા કેવી રીતે બનાવવો</span>
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Visit <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">BiodataBuilder.in/create</Link> — no registration needed.</li>
            <li>Fill in all fields from the table above — Jati, Gotra, Gana, Rashi, Nakshatra, Manglik status.</li>
            <li>Upload a clear profile photo.</li>
            <li>Choose a traditional or modern template.</li>
            <li>Click <strong>Download PDF</strong> — your Gujarati lagna biodata is ready to WhatsApp instantly.</li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should be in a Gujarati lagna biodata?", a: "Personal details, Jati, Gotra, Gana, Rashi and Nakshatra, Manglik status, education/career with income, family background (native district, siblings, family type), About Me, expectations, and contact info." },
              { q: "What is unique about a Gujarati biodata?", a: "Gujarati biodata emphasises Jnati, business background, native district, and Gana — fields that are less common in biodatas from other states." },
              { q: "How do I create a Gujarati lagna biodata online?", a: "Use BiodataBuilder.in — fill in all fields, choose a template, and download a perfect PDF. Free, no registration needed." },
              { q: "Is Kundali matching important in Gujarati marriages?", a: "Yes. Gana compatibility and Rashi matching are checked. Many families require a full Kundali chart after initial biodata exchange." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Gujarati Lagna Biodata — Free PDF</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4">ગુજરાતી લગ્ન બાયોડેટા – Free Download</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Create your complete Gujarati biodata with Jati, Gotra, Gana, Rashi and all fields — in minutes. Free, no sign-up.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Gujarati Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
