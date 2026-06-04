import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage Biodata Format | Free PDF Template",
  description: "Complete guide to creating a Christian marriage biodata. What sections to include, Kerala vs Goa community differences, sample format, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-christian" },
  openGraph: {
    title: "Christian Marriage Biodata Format | Free PDF Template",
    description: "Complete Christian marriage biodata format — denomination, church, family, and contact details. Free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-format-for-christian",
    images: [{ url: "https://biodatabuilder.in/examples/Christian-biodata-example.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a Christian marriage biodata include?",
      acceptedAnswer: { "@type": "Answer", text: "A Christian marriage biodata should include: personal details (name, DOB, height, blood group), religious details (denomination, church name, baptism status), education and career, family background (parents' names and occupations, siblings), About Me, partner expectations, and contact information." },
    },
    {
      "@type": "Question",
      name: "Do Christian families use horoscope matching in a biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Most Protestant and Catholic families do not use Kundali/horoscope matching. However, some Indian Christian communities (particularly in Kerala and Tamil Nadu) still include birth details and consult astrologers. Include or exclude the astrological section based on your family's tradition." },
    },
    {
      "@type": "Question",
      name: "Should I mention my denomination in a Christian biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — always. Indian Christian denominations (Catholic, CSI, CNI, Jacobite, Pentecostal, Mar Thoma, etc.) can be quite distinct in tradition and expectation. Families often prefer matches within the same denomination or at least within compatible ones." },
    },
    {
      "@type": "Question",
      name: "What heading should I use for a Christian marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Common headings include: 'By God's Grace', 'To God Be the Glory', 'In Jesus Name', or simply 'Marriage Biodata'. A small cross icon at the top of the page is a common and well-received design element." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Christian Marriage Biodata Format: Complete Guide
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          A complete guide to creating a Christian marriage biodata — what sections to include, denomination and church details, community-specific differences, and design tips for a professional PDF.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Christian-biodata-example.png" alt="Christian marriage biodata example with cross icon and By God's Grace heading" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">A Christian marriage biodata with cross icon and &quot;By God&apos;s Grace&quot; heading — created with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Christian Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Complete Christian Biodata Field Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">Fields to Include</th>
                  <th className="px-5 py-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Heading", "Cross icon + 'By God's Grace' or 'To God Be the Glory'", "Clean cross icon is standard — available in BiodataBuilder"],
                  ["Personal Details", "Name, DOB, height, blood group, complexion", "Complexion field is common but optional"],
                  ["Religious Details", "Denomination, Church name, Baptism status", "Always include — families check denomination compatibility"],
                  ["Education & Career", "Degree, College, Designation, Company, Income", "State income — it helps families assess lifestyle match"],
                  ["Family Background", "Father & mother (name + occupation), siblings", "Include siblings' denomination if different"],
                  ["About Me", "Personal statement covering values, faith, personality", "Mention your faith expression naturally — if it matters to you"],
                  ["Expectations", "Partner preferences — 2–3 lines", "Denomination preference is a valid and common expectation"],
                  ["Contact", "WhatsApp + email (parent or candidate)", "State who the family should contact first"],
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

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Indian Christian Denominations — Why It Matters</h2>
          <p>
            Indian Christian communities are highly diverse in tradition and expectation. The denomination you belong to significantly affects who you are likely to match with:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Denomination</th>
                  <th className="px-5 py-3">Common In</th>
                  <th className="px-5 py-3">Typical Biodata Specifics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Roman Catholic", "Goa, Mangalore, Mumbai, Tamil Nadu", "Parish name often included; Sacrament history (Baptism, Confirmation, First Communion)"],
                  ["CSI (Church of South India)", "Tamil Nadu, Kerala, Andhra", "Church name and congregation. More liberal on cross-denomination matches."],
                  ["Jacobite / Syrian Orthodox", "Kerala", "Family church and diocese can matter; high community endogamy."],
                  ["Mar Thoma", "Kerala", "Church and parish name. Progressive traditions — often open to inter-denomination."],
                  ["Pentecostal / Assemblies of God", "Pan-India (urban)", "Often prefer same-denomination. Church fellowship name may be specified."],
                  ["Lutheran", "Jharkhand, AP/Telangana, North India", "Synod name may be specified. Often community-endogamous."],
                ].map(([denom, common, bio]) => (
                  <tr key={denom} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{denom}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{common}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">{bio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Do Christian Biodatas Include Horoscope?</h2>
          <p>
            This varies significantly by community:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Most Protestant families (CSI, Mar Thoma, Pentecostal):</strong> Do not use horoscope matching. Biodata will not include astrological section.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Kerala Catholic, Tamil Catholic:</strong> Some families include birth date and time for informal star matching, though priests rarely perform formal Kundali checks.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Communities in Karnataka/AP:</strong> Some blended-tradition families (especially those from recently-converted Hindu backgrounds) may still include Rashi/Nakshatra. Follow your family&apos;s specific tradition.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Sample About Me — For a Christian Biodata</h2>
          <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-2xl p-5 italic text-sky-900 dark:text-sky-100">
            &quot;I am a practicing Catholic working as a nurse in Pune. Faith is central to my life — I am an active member of my parish choir. I come from a close-knit family in Mangalore and am looking for a God-fearing partner who values family, humility, and mutual respect. Open to Catholics and CSI families.&quot;
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should a Christian marriage biodata include?", a: "Personal details, religious details (denomination, church name, baptism status), education and career, family background, About Me, expectations, and contact information." },
              { q: "Do Christian families use horoscope matching?", a: "Most Protestant families do not. Some Catholic and Tamil/Kerala communities include birth details for informal star matching. Follow your family's specific tradition." },
              { q: "Should I mention my denomination in a Christian biodata?", a: "Yes — always. Indian Christian denominations are distinct in tradition and expectation. Families often prefer matches within the same or compatible denomination." },
              { q: "What heading should I use for a Christian marriage biodata?", a: "'By God's Grace', 'To God Be the Glory', 'In Jesus Name', or simply 'Marriage Biodata' with a small cross icon at the top. All are commonly used and well-received." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 rounded-3xl border border-sky-100 dark:border-sky-900/50 text-center">
            <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-3">Create Your Christian Marriage Biodata — Free</h3>
            <p className="text-sky-700 dark:text-sky-300 mb-8">Add a cross icon, fill in denomination and church details — beautiful PDF in minutes. No sign-up required.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Christian Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
