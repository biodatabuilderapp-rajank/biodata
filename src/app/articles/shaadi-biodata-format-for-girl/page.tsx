import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaadi Biodata for Girl | Complete Marriage Biodata Guide for Women",
  description: "Create the perfect marriage biodata for a girl. Sections to include, sample About Me text, expectations wording, template tips, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/shaadi-biodata-format-for-girl" },
  openGraph: {
    title: "Shaadi Biodata for Girl | Complete Marriage Biodata Guide",
    description: "Create the perfect marriage biodata for a girl. Sections to include, sample About Me text, expectations wording, template tips, and free PDF download.",
    url: "https://biodatabuilder.in/articles/shaadi-biodata-format-for-girl",
    images: [{ url: "https://biodatabuilder.in/examples/Girl-biodata-example.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be included in a marriage biodata for a girl?",
      acceptedAnswer: { "@type": "Answer", text: "A girl's marriage biodata should include: Personal details (name, DOB, height, blood group), Astrological details (Rashi, Nakshatra, Gotra, Manglik status), Education and career, Family background, About Me paragraph, Expectations, and contact information." },
    },
    {
      "@type": "Question",
      name: "Should a girl mention her income in a marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, if you are working. Mentioning your designation and income range shows independence and helps match lifestyle expectations. A salary range is fine — you don't need to state exact figures." },
    },
    {
      "@type": "Question",
      name: "What is a good About Me for a girl's biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Write 4–6 sentences covering your personality and values, education or career, family background, and what you genuinely seek in a partner. Be specific — mention a real passion and avoid clichés like 'I am a simple girl.'" },
    },
    {
      "@type": "Question",
      name: "Should a girl include her photo in a marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — a professional, clear portrait significantly increases profile engagement. Use a well-lit solo shot in appropriate attire. Avoid heavy filters or group photos." },
    },
    {
      "@type": "Question",
      name: "Can a homemaker girl create a good marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Write 'Homemaker' in the career section and use the About Me section to express your personality, interests, and values. Many families specifically seek homemaker brides." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Shaadi Biodata for Girl: Complete Marriage Biodata Guide
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          A girl&apos;s marriage biodata is her first impression on a prospective family. This guide covers every section — with sample text, template tips, and the common mistakes to avoid.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Girl-biodata-example.png" alt="Marriage biodata example for girl — shaadi biodata format for women" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">A complete girl&apos;s biodata made with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Your Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">All Sections in a Girl&apos;s Marriage Biodata</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">What to Include</th>
                  <th className="px-5 py-3 font-semibold">Key Tip</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Personal Details", "Name, DOB, time/place of birth, height, blood group", "Complexion is optional — include only if comfortable"],
                  ["Astrological / Religious", "Religion, caste, gotra, Rashi, Nakshatra, Manglik status", "Never leave Manglik status blank — state it clearly"],
                  ["Education & Career", "Degree, college, designation or 'Homemaker', salary range", "State income if working — it increases response rates"],
                  ["Family Details", "Father & mother (name + occupation), siblings, family type", "Include native place if applicable"],
                  ["About Me", "4–6 sentence personal statement", "Highest-impact section — use our samples below"],
                  ["Expectations", "2–4 honest partner preferences", "Avoid long filter lists — keep it open and kind"],
                  ["Contact", "WhatsApp + email (bride or parent's)", "State who to contact directly"],
                ].map(([section, include, tip]) => (
                  <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{include}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs italic">{tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">The "About Me" Section — Your Biggest Opportunity</h2>
          <p>Most girls leave this section blank or write one generic line. This is the <strong className="font-semibold text-zinc-900 dark:text-white">single highest-impact section</strong> in a girl&apos;s biodata. It is the only part where your personality comes through — and families who feel a connection here are far more likely to respond.</p>

          <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow">
            <Image src="/examples/Girl-biodata-about-me-examples.png" alt="Sample About Me section for girl's marriage biodata — two filled examples" width={1200} height={600} className="w-full h-auto" />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Two sample About Me sections — working professional and homemaker</p>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">Sample — Working Girl</h3>
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-2xl p-5 italic text-rose-900 dark:text-rose-100">
            &quot;I am a software engineer at Wipro, currently based in Bengaluru. I grew up in a close-knit Gujarati family and strongly believe in balancing professional ambition with family values. In my free time, I love reading, travelling to hill stations, and experimenting in the kitchen. I am looking for a life partner who is kind, communicative, and happy in either a nuclear or joint family setup.&quot;
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">Sample — Homemaker</h3>
          <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-2xl p-5 italic text-rose-900 dark:text-rose-100">
            &quot;I am a post-graduate from Pune University who has chosen to focus on family by personal choice. I enjoy classical dance, cooking, and community volunteering. I come from a traditional but open-minded Brahmin family and am looking for a partner who respects both independence and family values — someone stable, respectful, and family-oriented.&quot;
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">See more samples in our full <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me writing guide</Link>.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">The Expectations Section</h2>
          <p>State expectations honestly but without making it feel like a checklist. Two to four preferences are ideal.</p>

          <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow">
            <Image src="/examples/Girl-biodata-expectations.png" alt="Sample expectations section in a girl's marriage biodata" width={1200} height={500} className="w-full h-auto" />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Sample expectations section — direct but open</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 uppercase tracking-wide">✅ Good</p>
              <p className="text-sm italic text-zinc-700 dark:text-zinc-300">&quot;Looking for an educated, employed groom — preferably in IT or business — based in a metro city. Should be open to a nuclear family setup. Caste no bar.&quot;</p>
            </div>
            <div className="p-5 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
              <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-2 uppercase tracking-wide">❌ Too Restrictive</p>
              <p className="text-sm italic text-zinc-700 dark:text-zinc-300">&quot;Should be 5&apos;9&quot;+, earning 25+ LPA, IIT/IIM preferred, North India only, joint family not acceptable.&quot;</p>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">5 Mistakes Girls Make in Their Biodata</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Leaving About Me blank</strong> — Guaranteed low engagement. Use our sample above as a starting point.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Using a group selfie or heavily filtered photo</strong> — A clear solo portrait in nice attire is always better.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Skipping Manglik status</strong> — Many families will not proceed without knowing. State it clearly.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Not including income if employed</strong> — Stating your CTC shows confidence and helps realistic matching.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Sharing as Word instead of PDF</strong> — Word formatting breaks on other devices. Always download and share as PDF.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should be included in a marriage biodata for a girl?", a: "Personal details, astrological details (Rashi, Nakshatra, Gotra, Manglik status), education/career, family background, About Me, expectations, and contact information." },
              { q: "Should a girl mention her income in a marriage biodata?", a: "Yes, if working. Stating your designation and income range shows confidence and helps lifestyle compatibility matching." },
              { q: "What is a good About Me for a girl's biodata?", a: "4–6 sentences covering personality, values, career, and what you want in a partner. Be specific and avoid clichés." },
              { q: "Should a girl include her photo in a marriage biodata?", a: "Yes — a professional portrait significantly increases engagement. Use a well-lit solo shot in appropriate attire." },
              { q: "Can a homemaker girl create a good marriage biodata?", a: "Absolutely. State 'Homemaker' in the career section and express your personality through the About Me section." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-3xl border border-pink-100 dark:border-pink-900/50 text-center">
            <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">Create Your Biodata in Minutes — Free</h3>
            <p className="text-rose-700 dark:text-rose-300 mb-8">Pick a template, fill in your details, upload your photo, and download a perfect PDF. No sign-up. No watermark.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-rose-600 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Girl&apos;s Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
