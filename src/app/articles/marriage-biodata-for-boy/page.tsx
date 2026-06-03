import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Boy | Complete Groom Biodata Format Guide",
  description: "Complete guide to creating a marriage biodata for a boy (groom). What sections to include, sample text, income tips, common mistakes, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-for-boy" },
  openGraph: {
    title: "Marriage Biodata for Boy | Complete Groom Biodata Format Guide",
    description: "Complete guide to creating a marriage biodata for a boy (groom). What sections to include, sample text, income tips, common mistakes, and free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-for-boy",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be included in a marriage biodata for a boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A groom's biodata should include: Personal details (name, DOB, height, blood group), Astrological details (Rashi, Nakshatra, Gotra, Manglik status), Education and career (with income clearly stated), Family background (parents and siblings), About Me (a personal statement), Expectations (partner preferences), and Contact information.",
      },
    },
    {
      "@type": "Question",
      name: "Should a boy mention income in his marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always. State a specific income range (e.g. '₹18 LPA') rather than vague phrases like 'good income' or 'as per industry standard'. Families need this to assess lifestyle compatibility. Vagueness creates suspicion and delays the process.",
      },
    },
    {
      "@type": "Question",
      name: "What photo should a boy use for his marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a professional head-and-shoulders photo with a clean background. Wear formal or smart-casual attire — something you would wear to a family function. Avoid group photos, sunglasses, or heavily filtered images. The photo should look like you today, not years ago.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a groom's marriage biodata be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exactly 1 page. A longer biodata signals disorganisation; a shorter one signals you haven't put in effort. BiodataBuilder templates are designed to fit all essential sections cleanly on a single page.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good 'About Me' for a boy's biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write 4–6 sentences covering: who you are (personality + values), what you do (career + lifestyle), and what you are looking for (partner expectations). Avoid clichés like 'I am a simple person'. Be specific — mention your city, something you are passionate about, and a genuine quality you bring to a relationship.",
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
          Marriage Biodata for Boy: The Complete Groom Format Guide
        </h1>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image
            src="/examples/Boy-biodata-example.png"
            alt="Marriage biodata example for boy — groom biodata format"
            width={1200}
            height={700}
            className="w-full h-auto"
            priority
          />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
            A complete groom biodata created with BiodataBuilder — all key sections, clean PDF format
          </p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata for a boy</strong> is the single most important document in the traditional Indian matchmaking process. Families on both sides judge the groom&apos;s profile carefully before agreeing to meet. A well-structured, honest, and polished biodata dramatically increases your response rate.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">All Sections in a Groom's Biodata</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">What to Include</th>
                  <th className="px-5 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Personal Details", "Name, DOB, time, place, height, blood group, complexion", "Complexion is optional but commonly expected"],
                  ["Astrological / Religious", "Religion, caste, gotra, Rashi, Nakshatra, Manglik status", "See kundali details guide for full breakdown"],
                  ["Education & Career", "Degree, college, job title, company, city, annual income", "Be specific — '₹18 LPA' not 'good salary'"],
                  ["Family Details", "Father and mother (name + occupation), sibling count, joint/nuclear", "Families evaluate family background heavily"],
                  ["About Me", "4–6 sentence personal statement", "Your personality, lifestyle, and what you seek"],
                  ["Expectations", "2–3 honest partner preferences", "Avoid huge lists of filters — keep it open"],
                  ["Contact", "WhatsApp number + email (parent's if preferred)", "Share parent contact for traditional approach"],
                ].map(([section, include, note]) => (
                  <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{include}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs italic">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Deep Dive: The Education & Career Section</h2>
          <p>This is the section families scrutinise most for the boy&apos;s biodata. Be detailed and specific:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Highest degree and the name of the institute — if prestigious, mention it prominently</li>
            <li>Current job title and exact company name</li>
            <li>Work location (city) — matters for families considering relocation</li>
            <li>Annual income or CTC range — be specific, not vague</li>
          </ul>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-700 dark:text-zinc-300">
            <p><strong>Example:</strong> Senior Software Engineer at Infosys, Pune | Income: ₹18 LPA</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample "About Me" — For a Boy</h2>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;I am a civil engineer working in Mumbai with a passion for long-distance cycling and Indian classical music. Raised in a mid-sized joint family in Nagpur, I balance a professional outlook with strong family values. I am looking for a life partner who is independent, warm, and values both personal growth and family togetherness.&quot;
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Notice what makes this good: it mentions the city (relevant for relocation decisions), one specific passion (cycling — not just &quot;music&quot;), a family value (joint family comfort), and a clear partner expectation. Read our full <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me guide</Link> for more examples.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Expectations Section — Keep It Kind</h2>
          <p>Be clear but kind. Avoid long restrictive lists. Two or three honest expectations are better than ten filters.</p>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;Looking for an educated, working girl — open to both employed and homemaker preferences. Should be comfortable in a joint family setup. Caste no bar.&quot;
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">5 Common Mistakes Boys Make in Biodata</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Hiding or understating income</strong> — Families will discover the truth anyway. Transparency builds trust.</li>
            <li><strong>Omitting Manglik status</strong> — Leave it blank and the family will assume the worst. Always state it clearly.</li>
            <li><strong>Using a casual or group selfie</strong> — A poorly chosen photo signals lack of seriousness. Use a proper portrait.</li>
            <li><strong>Leaving &quot;About Me&quot; blank</strong> — This is your only chance to show personality. Use it.</li>
            <li><strong>Very restrictive expectations</strong> — Listing five specific height/complexion/salary filters makes you seem rigid before anyone has even spoken to you.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should be included in a marriage biodata for a boy?", a: "Personal details, astrological details (Rashi, Nakshatra, Gotra, Manglik status), education and career (with specific income), family background, About Me paragraph, expectations, and contact information." },
              { q: "Should a boy mention income in his marriage biodata?", a: "Yes — always. State a specific range (e.g. '₹18 LPA') rather than 'good income'. Families need this for lifestyle compatibility assessment, and vagueness creates delays." },
              { q: "What photo should a boy use for his marriage biodata?", a: "A professional head-and-shoulders shot with a clean background. Wear formal or smart-casual attire. Avoid group photos, sunglasses, or heavily filtered selfies." },
              { q: "How long should a groom's marriage biodata be?", a: "Exactly 1 page. BiodataBuilder templates are designed to fit all essential sections cleanly on a single page." },
              { q: "What is a good 'About Me' for a boy's biodata?", a: "4–6 sentences covering: your personality and values, career + lifestyle, and what you are looking for in a partner. Be specific — mention your city, a genuine interest, and what you bring to a relationship." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Groom Biodata in Minutes</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Fill in the guided form, preview live on beautiful templates, and download PDF — free, no registration.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Groom Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
