import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muslim Marriage Biodata Format | Rishta Biodata Guide",
  description: "Complete guide to creating a Muslim marriage biodata (Rishta biodata). Covers Sect, Biraderi, Mehr, Wali details and sample format. Free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim" },
  openGraph: {
    title: "Muslim Marriage Biodata Format | Rishta Biodata Guide",
    description: "Muslim Rishta biodata format — Sect, Biraderi, Mehr, Wali details — free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim",
    images: [{ url: "https://biodatabuilder.in/examples/Muslim-biodata-example.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a Muslim marriage biodata include?",
      acceptedAnswer: { "@type": "Answer", text: "A Muslim Rishta biodata should include: an Islamic opening (Bismillah), personal details (name, DOB, height), religious details (Sect — Sunni/Shia; Madhab; practicing level), education and career, family background (parents, siblings, Biraderi/clan), About Me, expectations (including Mehr expectation if relevant), and Wali/contact details." },
    },
    {
      "@type": "Question",
      name: "What is Biraderi in a Muslim biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Biraderi refers to clan/caste identity in South Asian Muslim communities — e.g. Syed, Sheikh, Pathan/Pukhtun, Ansari, Rajput (Muslim), Memon, Bohra, etc. Many Muslim families, particularly in Pakistan-origin or UP/Bihar communities, still match within the same Biraderi." },
    },
    {
      "@type": "Question",
      name: "Should I mention Sect (Sunni/Shia) in a Muslim biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — always. While many modern families are open to inter-sect marriages, specifying your Sect (Sunni, Shia, Ahmadiyya, Ismaili, Bohra, etc.) upfront avoids mismatched expectations. State it as a neutral fact, not as a filter." },
    },
    {
      "@type": "Question",
      name: "What should the Wali contact section say?",
      acceptedAnswer: { "@type": "Answer", text: "The Wali (guardian) contact section should include the father's (or brother's/uncle's) name, relationship, and WhatsApp number. Example: 'Contact: Mohammad Ibrahim (Father) — +91-XXXXX-XXXXX'. This signals family involvement and is reassuring to prospective families." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Muslim Marriage Biodata Format: Rishta Biodata Complete Guide
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          A complete guide to creating a Muslim Rishta biodata — what sections to include, Sect and Biraderi details, Wali contact, Mehr guidance, and a free PDF download.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Muslim-biodata-example.png" alt="Muslim marriage biodata with Bismillah header — Rishta biodata example" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Muslim Rishta biodata with Bismillah opening — created with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Muslim Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Complete Muslim Rishta Biodata Field Guide</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">Fields to Include</th>
                  <th className="px-5 py-3 font-semibold">Guidance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Islamic Opening", "Bismillah / Assalamu Alaikum", "Standard on all Muslim biodatas — signals faith identity"],
                  ["Personal Details", "Name, DOB, height, blood group", "Islamic name + common name if applicable"],
                  ["Religious Details", "Sect (Sunni/Shia), Madhab, Practicing level", "Always include — avoids mismatched expectations"],
                  ["Biraderi / Clan", "Community/Clan name (Syed, Sheikh, Pathan, Memon, etc.)", "Include if community matchmaking is expected"],
                  ["Education & Career", "Degree, institution, job title, income", "State income clearly — important for Nikah preparation"],
                  ["Family Background", "Father & mother (name + occupation), siblings", "Include family city and ethnic background if NRI"],
                  ["About Me", "Values, personality, faith expression, lifestyle", "Can mention prayer practice, purdah preference if relevant"],
                  ["Mehr Expectation", "Proposed Mehr amount (optional)", "Include if family has a clear preference — not mandatory"],
                  ["Expectations", "Partner preferences — 2–3 sentences", "Sect, practicing level, and family values common filters"],
                  ["Wali Contact", "Father/guardian name and WhatsApp number", "Essential — signals proper family involvement"],
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

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">The Wali Contact Section</h2>
          <p>
            In Islamic marriage tradition, the <strong className="font-semibold text-zinc-900 dark:text-white">Wali</strong> (guardian — typically the father, elder brother, or paternal uncle) plays a formal role in the Nikah process. Including a Wali contact in the biodata signals respectful family involvement:
          </p>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 font-mono text-sm text-emerald-900 dark:text-emerald-100">
            <p><strong>Contact (Wali):</strong> Mohammad Ibrahim — Father</p>
            <p><strong>WhatsApp:</strong> +91-98XXX-XXXXX</p>
            <p><strong>Email:</strong> ibrahim.family@email.com</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Sect & Practicing Level — How to State It</h2>
          <p>Be clear and factual — this is not a statement of superiority, just a matchmaking filter that saves everyone time:</p>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 italic text-emerald-900 dark:text-emerald-100 space-y-2">
            <p><strong>Religion:</strong> Islam</p>
            <p><strong>Sect:</strong> Sunni (Hanafi)</p>
            <p><strong>Practicing Level:</strong> Practicing — Regular prayers, observes Ramadan fasts</p>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Note: Practicing level is increasingly included in modern Muslim biodatas, especially in diaspora communities, as lifestyle compatibility has become a key matchmaking consideration.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Sample About Me — Muslim Biodata</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 italic text-emerald-900 dark:text-emerald-100">
            &quot;Assalamu Alaikum. I am a software engineer based in Hyderabad, born and raised in a practising Sunni family. I pray five times daily and am looking for a like-minded partner who values both deen and a balanced modern lifestyle. My family is warm, grounded, and ready to welcome a daughter-in-law. Looking for someone educated, family-oriented, and practising.&quot;
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should a Muslim marriage biodata include?", a: "Bismillah opening, personal details, religious details (Sect, Madhab, practicing level), Biraderi/clan, education and career, family background, About Me, expectations, Mehr (optional), and Wali contact details." },
              { q: "What is Biraderi in a Muslim biodata?", a: "Biraderi is clan/caste identity — Syed, Sheikh, Pathan, Ansari, Memon, Bohra, etc. Many South Asian Muslim families still match within the same Biraderi. Include it if your community expects it." },
              { q: "Should I mention Sect (Sunni/Shia) in a Muslim biodata?", a: "Yes — always. Specifying your Sect upfront avoids mismatched expectations. State it neutrally as a fact, not as a filter judgment." },
              { q: "What should the Wali contact section say?", a: "Include: guardian's name, relationship (Father/Brother/Uncle), and WhatsApp number. Example: 'Contact: Mohammad Ibrahim (Father) — +91-XXXXX'. Signals proper family involvement." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 text-center">
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">Create Your Muslim Rishta Biodata — Free</h3>
            <p className="text-emerald-700 dark:text-emerald-300 mb-8">Add Bismillah, Sect, Biraderi, Wali contact and all details — beautiful PDF in minutes. No sign-up required.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Muslim Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
