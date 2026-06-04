import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thirumanam Biodata Format Tamil | திருமண பயோடேட்டா PDF Free",
  description: "Complete Tamil thirumanam biodata format with all fields in Tamil and English. Jathagam, Rasi, Nakshatra, community fields, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/thirumanam-biodata-format-tamil" },
  openGraph: {
    title: "Thirumanam Biodata Format Tamil | திருமண பயோடேட்டா",
    description: "Tamil marriage biodata with Jathagam details, Rasi, Natchathiram, community fields — free PDF.",
    url: "https://biodatabuilder.in/articles/thirumanam-biodata-format-tamil",
    images: [{ url: "https://biodatabuilder.in/examples/Boy-biodata-example-Tamil.png" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a thirumanam biodata in Tamil?",
      acceptedAnswer: { "@type": "Answer", text: "A thirumanam biodata (திருமண பயோடேட்டா) is the Tamil marriage profile document exchanged between families during arranged matchmaking. It includes personal details, Jathagam (horoscope) information — Rasi, Natchathiram, Lagnam — community (Jati, Gothram), education, career, and family background." },
    },
    {
      "@type": "Question",
      name: "What is Jathaga porutham in a Tamil biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Jathaga porutham (jathagam matching) is the Tamil Vedic astrology compatibility check. The 10-porutham system evaluates Rasi, Natchathiram, Gana, Rajju, Dina, Yoni, Rasi adhipati, Vasya, Mahendra, and Stree Deergha. Many Tamil families require a minimum of 7/10 poruthams for a match to proceed." },
    },
    {
      "@type": "Question",
      name: "Is Chevvai Dosham (Mars Dosha) important in Tamil biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — Chevvai Dosham (Tamil for Mangal Dosha) is taken very seriously in Tamil matchmaking. Always state clearly whether you are Chevvai (Kuja) Dosham positive or negative. Tamil tradition recommends matching those with Chevvai Dosham with others who also have it." },
    },
    {
      "@type": "Question",
      name: "How do I create a Tamil thirumanam biodata online?",
      acceptedAnswer: { "@type": "Answer", text: "Visit BiodataBuilder.in/create, fill in your details including all Jathagam fields (Rasi, Natchathiram, Lagnam, Chevvai status), choose a template, and download as a PDF. Free, no sign-up required." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Thirumanam Biodata Format Tamil<br />
          <span className="text-indigo-600 dark:text-indigo-400 text-3xl">திருமண பயோடேட்டா ஃபார்மேட் – PDF Free</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          Complete Tamil marriage biodata — all fields in Tamil and English, with Jathagam details (Rasi, Natchathiram, Lagnam), community fields, and a free PDF download.
        </p>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image src="/examples/Boy-biodata-example-Tamil.png" alt="Tamil thirumanam biodata example for boy" width={1200} height={700} className="w-full h-auto" priority />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Tamil boy thirumanam biodata — created with BiodataBuilder</p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <div className="flex justify-start">
            <Link href="/create" className="inline-flex items-center gap-2 px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-xl transition-all shadow-md">
              Create Tamil Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            All Fields in a Tamil Thirumanam Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">திருமண பயோடேட்டா – அனைத்து தகவல்கள்</span>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Tamil Field</th>
                  <th className="px-5 py-3 font-semibold">English</th>
                  <th className="px-5 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["பெயர்", "Name", "Karthik Rajendran"],
                  ["பிறந்த தேதி", "Date of Birth", "22 August 1997"],
                  ["பிறந்த நேரம்", "Time of Birth", "06:45 AM"],
                  ["பிறந்த இடம்", "Place of Birth", "Madurai, Tamil Nadu"],
                  ["உயரம்", "Height", "5 ft 8 in"],
                  ["சாதி / குலம்", "Jati / Community", "Mudaliar – Saiva Vellalar"],
                  ["கோத்திரம்", "Gothram", "Atri"],
                  ["ராசி", "Rasi (Moon Sign)", "Rishabam (Taurus)"],
                  ["நட்சத்திரம்", "Natchathiram (Star)", "Rohini, 2nd Padham"],
                  ["லக்கினம்", "Lagnam (Ascendant)", "Mithunam (Gemini)"],
                  ["செவ்வாய் தோஷம்", "Chevvai Dosham", "Dosham Illai (No Dosham)"],
                  ["கல்வி", "Education", "B.E. Civil, Anna University"],
                  ["தொழில்", "Occupation", "Civil Engineer, L&T – Chennai"],
                  ["வருமானம்", "Annual Income", "₹12 LPA"],
                  ["தந்தை", "Father", "Rajendran – Government Service"],
                  ["தாய்", "Mother", "Mallika – Homemaker"],
                  ["சகோதரர்/சகோதரிகள்", "Siblings", "1 Sister (Married)"],
                  ["குடும்ப வகை", "Family Type", "Nuclear – Chennai"],
                  ["தொடர்பு", "Contact", "+91-94XXX-XXXXX (Father)"],
                ].map(([tamil, eng, ex]) => (
                  <tr key={eng} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{tamil}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Tamil Girl Thirumanam Biodata Example</h2>
          <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow">
            <Image src="/examples/Girl-biodata-example-Tamil.png" alt="Tamil girl thirumanam biodata example" width={1200} height={700} className="w-full h-auto" />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">Tamil girl thirumanam biodata — created with BiodataBuilder</p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            Jathaga Porutham — The Tamil 10-Point Match
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ஜாதக பொருத்தம்</span>
          </h2>
          <p>Tamil astrology uses a 10-porutham system for Kundali matching. Most families require a minimum of 7/10. Your biodata should include all the details needed for this calculation:</p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Porutham</th>
                  <th className="px-5 py-3">What It Checks</th>
                  <th className="px-5 py-3">Based On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Dina Porutham", "Health and prosperity", "Natchathiram"],
                  ["Gana Porutham", "Temperament compatibility", "Natchathiram Gana"],
                  ["Mahendra Porutham", "Children and longevity", "Natchathiram"],
                  ["Stree Deergha", "Long married life", "Natchathiram distance"],
                  ["Yoni Porutham", "Physical and emotional harmony", "Natchathiram animal sign"],
                  ["Rasi Porutham", "General compatibility", "Rasi"],
                  ["Rasi Adhipati", "Planetary lord compatibility", "Rasi lord planets"],
                  ["Vasya Porutham", "Mutual attraction", "Rasi"],
                  ["Rajju Porutham", "Husband's longevity", "Natchathiram group"],
                  ["Vedhai Porutham", "Freedom from affliction", "Natchathiram pair"],
                ].map(([porutham, checks, basedOn]) => (
                  <tr key={porutham} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{porutham}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{checks}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">{basedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            Community Tips — Tamil Biodata
            <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">சமுதாய-குறிப்பிட்ட தகவல்கள்</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Chevvai Dosham", desc: "Tamil families take Chevvai (Mars) Dosham very seriously. Always state clearly: 'Dosham Illai' (No Dosham) or 'Chevvai Dosham Undu' (Has Dosham). Tradition recommends matching Dosham holders with each other." },
              { title: "Rajju Porutham", desc: "Rajju is considered the most critical porutham for the groom's longevity. Some families will not proceed even with 9/10 if Rajju fails. Your Natchathiram determines your Rajju group — include this clearly." },
              { title: "Community (Jati)", desc: "Tamil biodata should state: main community (Brahmin, Mudaliar, Nadar, Pillai, Kamma, Gounder, etc.) and sub-community. Brahmin families also specify: Iyer vs Iyengar, and Vadama/Brihacharanam sub-division." },
              { title: "Gothram", desc: "Gothram (patrilineal sage lineage) prevents Sagotra marriages. For Tamil Brahmin families especially, Gothram is mandatory. Always include it — even if you need to ask your parents for it." },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{c.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">
            How to Create Your Tamil Biodata Online
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Visit <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">BiodataBuilder.in/create</Link> — no account needed.</li>
            <li>Fill in all Jathagam details: Rasi, Natchathiram, Lagnam, Gothram, Chevvai status.</li>
            <li>Upload a clear profile photo.</li>
            <li>Choose a traditional or modern template.</li>
            <li>Click <strong>Download PDF</strong> — share directly on WhatsApp in seconds.</li>
          </ol>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-14 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a thirumanam biodata in Tamil?", a: "A thirumanam biodata is the Tamil marriage profile exchanged between families. It includes personal details, Jathagam info (Rasi, Natchathiram, Lagnam), community, education, career, and family background." },
              { q: "What is Jathaga porutham?", a: "The 10-porutham Tamil horoscope matching system. Most Tamil families require a minimum of 7/10 poruthams. Your biodata should include Rasi, Natchathiram, and Lagnam to allow full Jathagam comparison." },
              { q: "Is Chevvai Dosham important in Tamil biodata?", a: "Yes — very. Always state clearly: Dosham Illai or Chevvai Dosham Undu. Tamil tradition strongly recommends matching Dosham holders with each other." },
              { q: "How do I create a Tamil thirumanam biodata online?", a: "Use BiodataBuilder.in — fill in all Jathagam fields, choose a template, and download as PDF. Free, no registration needed." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Tamil Thirumanam Biodata — Free PDF</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4">திருமண பயோடேட்டா – இலவச PDF பதிவிறக்கம்</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Create your complete Tamil biodata with Rasi, Natchathiram, Lagnam, Gothram and all fields — free, no sign-up needed.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Tamil Biodata Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
