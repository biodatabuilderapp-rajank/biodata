import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivah Biodata Format Telugu | వివాహ బయోడేటా PDF Free",
  description: "Complete Telugu marriage biodata format with all fields in Telugu and English. Rasi, Nakshatra, Gotra, Cheyvvai Dosham — free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/vivah-biodata-format-telugu" },
  openGraph: {
    title: "Vivah Biodata Format Telugu | వివాహ బయోడేటా PDF",
    description: "Telugu marriage biodata with Rasi, Nakshatra, Gotra, Cheyvvai details — free PDF download.",
    url: "https://biodatabuilder.in/articles/vivah-biodata-format-telugu",
    images: [{ url: "https://biodatabuilder.in/examples/telugu_biodata_infographic.png", width: 1200, height: 630, alt: "Telugu Vivah Biodata Format Infographic" }],
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

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/50 my-8">
            <h2 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-amber-800 dark:text-amber-300">
              <li><strong>Bilingual format preferred:</strong> Modern Telugu families prefer biodatas written in English, but understanding the exact Telugu terminology (Gotram, Cheyvvai Dosham) is essential.</li>
              <li><strong>Astrology is mandatory:</strong> Rasi, Nakshatra, and Lagnam are non-negotiable for Ashtottara Porutham (horoscope matching).</li>
              <li><strong>State your Dosham:</strong> You must explicitly state "Cheyvvai Dosham Ledu" (No Dosha) or "Cheyvvai Dosham Undi" (Has Dosha). Never leave this blank.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-950/20">
              <Image 
                src="/examples/telugu_biodata_infographic.png" 
                alt="Telugu Vivah Biodata Format infographic showing English and Telugu field translations" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              A structured Telugu Vivah Biodata highlighting the essential bilingual fields required for matchmaking.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#intro" className="hover:underline">1. Introduction: The Modern Telugu Biodata</a></li>
              <li><a href="#field-mapping" className="hover:underline">2. Telugu to English Field Translations</a></li>
              <li><a href="#examples" className="hover:underline">3. Visual Examples (Boy &amp; Girl)</a></li>
              <li><a href="#community-tips" className="hover:underline">4. Community-Specific Matchmaking Tips</a></li>
              <li><a href="#how-to-create" className="hover:underline">5. How to Create Your Telugu Biodata Online</a></li>
              <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">1. Introduction: The Modern Telugu Biodata</h2>
            <p>
              In Andhra Pradesh, Telangana, and the global Telugu diaspora, the <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">marriage biodata</Link> (వివాహ బయోడేటా) is more than just a resume. It is a formal document that bridges modern professional achievements with deep-rooted cultural and astrological traditions.
            </p>
            <p className="mt-4">
              While <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">modern formats</Link> written in English are now the standard among tech professionals in Hyderabad, Vizag, and abroad, the core data points required by parents and priests remain highly traditional. If your biodata is missing crucial elements like <em>Gotram</em> or <em>Nakshatram</em>, the matchmaking process will stall immediately, as these are required for the initial <em>Ashtottara</em> (horoscope matching) phase.
            </p>
          </section>

          {/* BLOCK: FIELD_MAPPING */}
          <section id="field-mapping" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              2. Telugu to English Field Translations
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">వివాహ బయోడేటా – అన్ని వివరాలు</span>
            </h2>
            <p className="mb-6">
              Even if you write your biodata entirely in English, you must understand the exact Telugu terminology so you can supply the correct information. Here is the definitive translation and mapping of every field required.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Telugu Term</th>
                    <th className="px-5 py-3 font-semibold">English Translation</th>
                    <th className="px-5 py-3 font-semibold">What to Write (Example)</th>
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
                    ["గోత్రం", "Gotram (Lineage)", "Vishwamitra"],
                    ["రాశి", "Rasi (Moon Sign)", "Mithuna (Gemini)"],
                    ["నక్షత్రం", "Nakshatra (Birth Star)", "Mrigasira, 3rd Padam"],
                    ["లగ్నం", "Lagnam (Ascendant)", "Vrishabha (Taurus)"],
                    ["చెవ్వాయి దోషం", "Cheyvvai Dosham (Mars Dosha)", "Dosham Ledu (None)"],
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
                      <td className="px-5 py-3 font-bold text-zinc-800 dark:text-zinc-200">{tel}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* BLOCK: VISUAL_EXAMPLES */}
          <section id="examples" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Visual Examples (Boy &amp; Girl)</h2>
            <p>
              When sending your profile via <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">WhatsApp</Link>, a highly structured PDF is much more effective than a plain text message. Here are examples of how the final document should look for a Telugu boy and a Telugu girl.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900">
                <Image src="/examples/Boy-biodata-example-Telugu.png" alt="Telugu vivah biodata example for boy" width={600} height={800} className="w-full h-auto" />
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Boy Biodata Format</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Notice the prominent display of Income and Professional details, balanced with a clear astrological block detailing Gotram and Nakshatram.</p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900">
                <Image src="/examples/Girl-biodata-example-Telugu.png" alt="Telugu vivah biodata example for girl" width={600} height={800} className="w-full h-auto" />
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Girl Biodata Format</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Features a softer layout. Family background (parents&apos; occupations) and Gotram are highlighted alongside educational qualifications.</p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK: COMMUNITY_TIPS */}
          <section id="community-tips" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              4. Community-Specific Matchmaking Tips
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">తెలుగు సమాజానికి ప్రత్యేక సూచనలు</span>
            </h2>
            <p className="mb-6">
              Telugu matchmaking is highly nuanced. While <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">general Hindu biodatas</Link> focus on basic Kundali details, Telugu families have specific expectations depending on your community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  title: "Gotram (Gotra)", 
                  desc: "Gotram indicates your patrilineal sage lineage. Under traditional rules, Sagotra marriages (marrying within the same Gotram) are strictly avoided across all Telugu communities (Brahmin, Kamma, Reddy, Kapu, etc.). Always explicitly state your Gotram." 
                },
                { 
                  title: "Cheyvvai Dosham (Mangal Dosha)", 
                  desc: "Cheyvvai Dosham is the Telugu term for Manglik status. You must state clearly: 'Dosham Undi' (Has Dosha) or 'Dosham Ledu' (No Dosha). Never leave this blank. Tradition strongly recommends matching Dosham holders with each other to neutralize the effect.",
                  link: { url: "/articles/manglik-biodata-format", text: "Read the Manglik Rules" }
                },
                { 
                  title: "Telugu Brahmin (Niyogi vs Vaidiki)", 
                  desc: "If you belong to the Brahmin community, simply writing 'Telugu Brahmin' is not enough. You must distinguish your sub-sect, such as Niyogi or Vaidiki, and further branches (e.g., Vaidiki Velanadu). Marriages typically happen strictly within the same group." 
                },
                { 
                  title: "Kamma, Reddy & Velama Nuances", 
                  desc: "These communities place a strong emphasis on the native district (e.g., Godavari, Krishna, Guntur, Kurnool). Including your 'Mool' or 'Native Place' alongside family agricultural land holdings adds immense clarity for the receiving family." 
                },
                { 
                  title: "Ashtottara Porutham Checks", 
                  desc: "Telugu families often check the 8-point star matching system (Ashtottara) or the 10-point system. Your Rasi, Nakshatram, Padam (Quarter), and Lagnam are all mandatory for this calculation.",
                  link: { url: "/articles/kundali-details-in-biodata", text: "How to format Kundali data" }
                },
                { 
                  title: "Government Service", 
                  desc: "For government job holders, explicitly stating 'Government Employee' is a massive positive in Telugu matchmaking. Always include your exact designation, department, and salary scale." 
                },
              ].map((c) => (
                <div key={c.title} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm transition hover:shadow-md">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">{c.desc}</p>
                  {c.link && (
                    <Link href={c.link.url} className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">
                      {c.link.text} <MoveRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              If your family has deep roots across the border in Tamil Nadu, you may also want to review the <Link href="/articles/thirumanam-biodata-format-tamil" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Tamil Thirumanam Format</Link> to ensure you satisfy expectations from relatives there.
            </p>
          </section>
          {/* BLOCK: HOW_TO_CREATE */}
          <section id="how-to-create" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. How to Create Your Telugu Biodata Online</h2>
            <div className="bg-indigo-50 dark:bg-indigo-950/20 p-6 md:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/50">
              <ol className="list-decimal pl-6 space-y-4 text-indigo-900 dark:text-indigo-200">
                <li className="pl-2">
                  <strong className="text-indigo-950 dark:text-indigo-100">Visit BiodataBuilder:</strong> Go to <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold">BiodataBuilder.in/create</Link> (no sign-up required).
                </li>
                <li className="pl-2">
                  <strong className="text-indigo-950 dark:text-indigo-100">Select the Astro Fields:</strong> Toggle the astrology section to include <em>Rasi</em>, <em>Nakshatram</em>, <em>Lagnam</em>, <em>Gotram</em>, and <em>Cheyvvai status</em>. Ensure you use the correct spelling.
                </li>
                <li className="pl-2">
                  <strong className="text-indigo-950 dark:text-indigo-100">Add an &apos;About Me&apos;:</strong> Write a brief introduction. <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">Read our guide</Link> for writing a compelling About Me section that appeals to both parents and prospective partners.
                </li>
                <li className="pl-2">
                  <strong className="text-indigo-950 dark:text-indigo-100">Choose a Template:</strong> Select a template that respects the traditional layout while maintaining a clean, modern aesthetic. Avoid downloading messy <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline">Word formats</Link> that ruin your formatting.
                </li>
                <li className="pl-2">
                  <strong className="text-indigo-950 dark:text-indigo-100">Export to PDF:</strong> Click download to generate a perfectly formatted PDF ready to be shared directly with brokers, relatives, or on matrimonial WhatsApp groups.
                </li>
              </ol>
            </div>
            
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Why You Should Always Export as PDF</h3>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Once you have created your profile, the format in which you share it is just as important as the content itself. Never send a raw Microsoft Word document (.docx) to a prospective match or a matchmaker. Word documents often experience formatting issues when opened on different devices, meaning your carefully crafted tables and inserted photos might appear completely broken on someone else&apos;s phone. This gives a highly unprofessional first impression.
            </p>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Instead, you must export your profile as a locked PDF. A PDF acts like a digital photograph of your document; it ensures that your fonts, colors, spacing, and images remain perfectly intact exactly as you designed them, regardless of whether the recipient opens it on an Android phone, an iPhone, or a laptop. Furthermore, a PDF cannot be easily accidentally edited or altered, providing an extra layer of privacy and security for your personal information.
            </p>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              For more tips on the etiquette of forwarding your profile through messaging apps, please refer to our dedicated guide on the <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">WhatsApp biodata format</Link>.
            </p>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What should be in a Telugu marriage biodata?", 
                  a: "A standard Telugu vivah biodata should include: personal details (name, DOB, height), Rasi and Nakshatra, Lagnam, Gotram, Cheyvvai Dosham status, community (Jati and sub-caste), education/career (with income), family background (parents, siblings, native district), About Me, expectations, and contact info." 
                },
                { 
                  q: "What is Cheyvvai Dosham in a Telugu biodata?", 
                  a: "Cheyvvai Dosham (Telugu for Mangal Dosha) is the placement of Mars in houses 1, 2, 4, 7, 8, or 12 of your birth chart. It is taken very seriously in Telugu matchmaking. Always state clearly: 'Cheyvvai Dosham Undi' or 'Ledu'." 
                },
                { 
                  q: "Is Gotram important in Telugu biodata?", 
                  a: "Yes, it is crucial. Gotram (patrilineal sage lineage) prevents same-lineage marriages. In Telugu communities, marrying within the same Gotram is strictly avoided. Do not leave this field blank." 
                },
                { 
                  q: "How do I create a Telugu vivah biodata online?", 
                  a: "You can visit BiodataBuilder.in, fill in all your specific astrological fields including Rasi, Nakshatra, Lagnam, Gotram, and Cheyvvai status, choose a template, and download it instantly as a high-quality PDF. It's completely free with no registration needed." 
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition hover:shadow-md">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCK: CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Conclusion</h2>
            <p>
              Creating a successful Telugu Vivah Biodata is about striking the right balance. You need to present your modern achievements—your career, income, and lifestyle—while strictly adhering to the traditional data requirements like Gotram, Rasi, and Cheyvvai Dosham that parents need for Astrakoota matching.
            </p>
            <p className="mt-4">
              By including all the fields detailed in this guide and using a clean, professional template, you ensure that your profile will be respected by elders and appreciated by your prospective partner.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Create Your Telugu Vivah Biodata</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4">వివాహ బయోడేటా – ఉచిత PDF డౌన్‌లోడ్</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Generate a perfectly formatted Telugu biodata with all required astrological and community fields in under 5 minutes. Free, secure, and no sign-up required.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Building Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">15 Expert Tips to Write a Winning Biodata</div>
              </Link>
              <Link href="/articles/simple-biodata-format-for-job-pdf" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Differences</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Job vs Marriage Biodata Formats</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
