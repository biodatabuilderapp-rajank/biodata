import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Marriage Biodata Format for Hindu | Complete Guide",
  description: "Complete guide to the best marriage biodata format for Hindu families. Covers biodata structure, design, regional variations, and free PDF template download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/best-marriage-biodata-format-for-hindu" },
  openGraph: {
    title: "Best Marriage Biodata Format for Hindu | Complete Guide",
    description: "Complete guide to the best marriage biodata format for Hindu families — structure, design, regional variations, and free PDF template.",
    url: "https://biodatabuilder.in/articles/best-marriage-biodata-format-for-hindu",
    images: [{ url: "https://biodatabuilder.in/examples/Hindu-biodata-example.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What astrological details should a Hindu marriage biodata include?",
      acceptedAnswer: { "@type": "Answer", text: "A Hindu biodata must include: Date, Time, and Place of Birth (for Kundali), Rashi (moon sign), Nakshatra and Pada, Gotra (patrilineal lineage), Manglik Status (Manglik/Anshik/Non-Manglik), and optionally Gana, Lagna, and Nadi." },
    },
    {
      "@type": "Question",
      name: "What makes a Hindu biodata different from other biodatas?",
      acceptedAnswer: { "@type": "Answer", text: "A Hindu biodata places far greater emphasis on astrological and community identity: Gotra matching, Manglik status, Rashi compatibility, and Gana are all checked before families agree to meet. Design-wise, it often includes auspicious symbols (OM, Ganesha, Swastika, floral borders) and an auspicious opening like 'Shubh Vivah' or 'Jai Mata Di'." },
    },
    {
      "@type": "Question",
      name: "What template design is best for a Hindu marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Traditional Hindu biodatas use warm, ornate designs with floral borders, saffron/gold headers, and space for a deity icon at the top. Modern Hindu families increasingly prefer clean layouts that still include all astrological fields. BiodataBuilder offers both styles." },
    },
    {
      "@type": "Question",
      name: "Are there regional differences in Hindu biodata formats?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. North Indian Hindu biodata often includes a longer family section (including maternal family). South Indian Hindu biodata emphasises Nakshatra Pada and Lagnam. Marathi biodatas use specific Marathi community fields. Each region has different expectations — the base structure remains the same." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-03-24">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Best Marriage Biodata Format for Hindu Families
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          A complete guide to the best Hindu marriage biodata — astrological fields, regional variations, traditional vs modern design, and what families look for before saying yes.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Hindu-biodata-example.png" alt="Traditional Hindu marriage biodata with Ganesha icon and floral border" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">A traditional Hindu marriage biodata with Ganesha icon, auspicious heading, and complete astrological section</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Hindu Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">What Makes a Hindu Biodata Unique?</h2>
          <p>
            A Hindu marriage biodata differs from other biodatas primarily in two areas: <strong className="font-semibold text-zinc-900 dark:text-white">astrological depth</strong> and <strong className="font-semibold text-zinc-900 dark:text-white">community identity markers</strong>. Hindu families — across all regions — check Kundali compatibility before agreeing to meet, making the astrological section the most critical part of the document.
          </p>
          <p>
            Design-wise, traditional Hindu biodatas include auspicious openings (&quot;Shubh Vivah&quot;, &quot;Jai Sri Krishna&quot;, &quot;Jai Mata Di&quot;) and deity icons (Ganesha, OM symbol, Swastika, Lotus) at the top of the page. This is culturally expected in many communities and signals respectful intent.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Complete Hindu Biodata Field Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">Fields</th>
                  <th className="px-5 py-3 font-semibold">Hindu-Specific Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Auspicious Opening", "Deity icon + heading", "OM / Ganesha / Swastika — expected in traditional biodatas"],
                  ["Personal Details", "Name, DOB, height, blood group", "Include complexion only if your community expects it"],
                  ["Astrological / Religious", "Rashi, Nakshatra, Gotra, Gana, Manglik", "The most critical section — never leave blank"],
                  ["Birth Details", "Date, Time, Place of Birth", "Required for Kundali casting — time especially important"],
                  ["Caste / Community", "Religion, Caste, Sub-caste, Native State", "Sub-caste often as important as caste in matchmaking"],
                  ["Education & Career", "Degree, College, Designation, Income", "State income as a range — ₹X to ₹Y LPA"],
                  ["Family", "Father, Mother (name + occupation), Siblings", "Include maternal side for UP/Bihar communities"],
                  ["About Me & Hobbies", "Personal statement + interests", "Add a genuine line about family values"],
                  ["Diet", "Veg / Non-Veg / Jain Veg / Eggetarian", "Important filter for many Hindu families"],
                  ["Expectations", "Partner preferences", "Keep to 2–3 honest preferences"],
                  ["Contact", "WhatsApp + email", "Parent or candidate contact — state which"],
                ].map(([section, fields, note]) => (
                  <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{fields}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs italic">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Astrological Details — The Hindu Biodata Core</h2>
          <p>
            For a Hindu family, the <strong className="font-semibold text-zinc-900 dark:text-white">astrological section</strong> is often checked before anything else. Many families will stop reading entirely if Gotra is blank or Manglik status is missing. Here is what each field means:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Gotra", desc: "Patrilineal sage lineage. Prevents same-Gotra (Sagotra) marriages, which are strictly avoided in most Hindu communities. Ask your parents if unsure." },
              { title: "Rashi (Moon Sign)", desc: "One of 12 lunar zodiac signs. Used in Ashtakoota matching. Common first check before agreeing to share Kundali charts." },
              { title: "Nakshatra", desc: "One of 27 birth stars. Determines Gana, which is a key parameter in the compatibility matching system." },
              { title: "Manglik Status", desc: "Mars placement in the birth chart. State clearly: Manglik, Anshik Manglik, or Non-Manglik. Families match Mangliks with Mangliks. See our dedicated Manglik guide for details." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            For a complete Kundali field guide, read our <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Kundali details guide</Link>. For guidance specifically on Manglik status, see our <Link href="/articles/manglik-biodata-format" className="text-indigo-600 dark:text-indigo-400 hover:underline">Manglik biodata guide</Link>.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Regional Variations in Hindu Biodata</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Region</th>
                  <th className="px-5 py-3">Key Differences</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["North India (UP, Bihar, Rajasthan)", "Extended family section common (includes maternal uncle, grandparents). Land / property mention. Biraderi/Kul identity."],
                  ["Maharashtra", "Detailed Marathi community fields (Jati, Patkul, native Taluka). See our Marathi biodata guide."],
                  ["South India (Tamil/Telugu/Kannada)", "Nakshatra Pada and Lagnam are mandatory. Cheyvvai/Chevvai Dosham check. Community sub-divisions very specific."],
                  ["Punjab / Haryana", "Sub-caste (Jat, Arora, Khatri, etc.) is key. Income stated prominently. Often includes NRI details."],
                  ["Gujarat", "Jnati system. Gana matching. Business background prominently noted. See our Gujarati biodata guide."],
                ].map(([region, diff]) => (
                  <tr key={region} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{region}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What astrological details should a Hindu marriage biodata include?", a: "Rashi, Nakshatra and Pada, Gotra, Manglik Status, and Date/Time/Place of Birth. Optionally add Gana, Lagna, and Nadi for more complete matching." },
              { q: "What makes a Hindu biodata different from other biodatas?", a: "Greater emphasis on astrological fields (Gotra, Manglik, Rashi) and community identity. Design often includes deity icons and auspicious headings." },
              { q: "What template is best for a Hindu marriage biodata?", a: "Traditional: warm/ornate with deity icons for conservative families. Modern: clean layout with all astrological fields preserved, better for urban/NRI contexts. BiodataBuilder offers both." },
              { q: "Are there regional differences in Hindu biodata formats?", a: "Yes. North Indian biodatas often include extended family details; South Indian biodatas emphasise Nakshatra Pada and Lagnam; Gujarati ones emphasise Jnati and Gana. The core fields remain the same." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-3xl border border-amber-100 dark:border-amber-900/50 text-center">
            <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">Create Your Hindu Marriage Biodata — Free</h3>
            <p className="text-amber-700 dark:text-amber-300 mb-8">Traditional or modern design — with all astrological fields, deity icon, and community details. Perfect PDF in minutes. No sign-up.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Hindu Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
