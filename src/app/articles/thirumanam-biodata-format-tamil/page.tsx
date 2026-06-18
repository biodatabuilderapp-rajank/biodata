import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thirumanam Biodata Format Tamil | திருமண பயோடேட்டா PDF Free",
  description: "Complete Tamil thirumanam biodata format with all fields in Tamil and English. Jathagam, Rasi, Nakshatra, community fields, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/thirumanam-biodata-format-tamil" },
  openGraph: {
    title: "Thirumanam Biodata Format Tamil | திருமண பயோடேட்டா",
    description: "Tamil marriage biodata with Jathagam details, Rasi, Natchathiram, community fields — free PDF.",
    url: "https://biodatabuilder.in/articles/thirumanam-biodata-format-tamil",
    images: [{ url: "/examples/Boy-biodata-example-Tamil.png", width: 1200, height: 630, alt: "Tamil Thirumanam Biodata Example" }],
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
      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Thirumanam Biodata Format Tamil<br />
          <span className="text-indigo-600 dark:text-indigo-400 text-3xl">திருமண பயோடேட்டா ஃபார்மேட் – PDF Free</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          The ultimate guide to creating a complete Tamil marriage biodata. We cover the mandatory Jathagam details, the 10-Porutham system, specific community requirements, and how to format it perfectly for WhatsApp.
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>Jathagam is Mandatory:</strong> A Tamil biodata is heavily reliant on astrology. You must include Rasi, Natchathiram, and Lagnam to allow for the 10-Porutham match.</li>
              <li><strong>Chevvai Dosham matters:</strong> Always explicitly state whether you have Chevvai Dosham (Mangal Dosha) or not. It is a critical early filter.</li>
              <li><strong>Community Specifics:</strong> Clearly state your Jati (Community) and Sub-community, as well as your Gothram (patrilineal lineage) to prevent Sagotra alliances.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-indigo-50 dark:bg-indigo-950/20">
              <Image 
                src="/examples/tamil-biodata-infographic.png" 
                alt="Tamil Thirumanam Biodata 10-Porutham Infographic: Jathagam, Kudumbam, Thirumanam" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              The three pillars of a Tamil match: Jathagam (Horoscope), Kudumbam (Family), and Thirumanam (Marriage).
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#tamil-english-fields" className="hover:underline">1. All Fields in a Tamil Thirumanam Biodata</a></li>
              <li><a href="#examples" className="hover:underline">2. Visual Examples (Boy & Girl)</a></li>
              <li><a href="#10-porutham" className="hover:underline">3. Jathaga Porutham: The 10-Point Match</a></li>
              <li><a href="#community-tips" className="hover:underline">4. Community Tips (Chevvai Dosham, Rajju, Gothram)</a></li>
              <li><a href="#how-to-create" className="hover:underline">5. How to Create Your Tamil Biodata Online</a></li>
              <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="intro" className="scroll-mt-24">
            <p>
              When preparing a <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata for marriage</Link> within the Tamil community, standard modern templates often fall short. A traditional <strong>Thirumanam Biodata (திருமண பயோடேட்டா)</strong> is highly structured around Vedic astrology (Jathagam) and community heritage.
            </p>
            <p className="mt-4">
              Unlike a <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">modern secular biodata</Link> where hobbies and "About Me" paragraphs take precedence, Tamil families prioritize establishing astrological compatibility first. Only after the family astrologer confirms a strong <em>Jathaga Porutham</em> (typically a score of 7 out of 10 or higher) will the families proceed to look deeply into education, career, and physical compatibility. Therefore, ensuring your Tamil biodata contains the exact correct fields is critical to avoiding delays and misunderstandings.
            </p>
          </section>

          {/* BLOCK: TAMIL_ENGLISH_TABLE */}
          <section id="tamil-english-fields" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              1. All Fields in a Tamil Thirumanam Biodata
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">திருமண பயோடேட்டா – அனைத்து தகவல்கள்</span>
            </h2>
            <p className="mb-6">
              A complete Tamil biodata should logically separate personal details from astrological details. Here is the standard mapping of English fields to their proper Tamil translations, along with examples of how they should be filled out:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold w-1/4">Tamil Field</th>
                    <th className="px-5 py-3 font-semibold w-1/4">English</th>
                    <th className="px-5 py-3 font-semibold w-1/2">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-white dark:bg-zinc-900 font-bold text-zinc-800 dark:text-zinc-200">
                    <td colSpan={3} className="px-5 py-3 bg-zinc-50 dark:bg-zinc-800/50">Personal Details</td>
                  </tr>
                  {[
                    ["பெயர்", "Name", "Karthik Rajendran"],
                    ["பிறந்த தேதி", "Date of Birth", "22 August 1997"],
                    ["பிறந்த நேரம்", "Time of Birth", "06:45 AM"],
                    ["பிறந்த இடம்", "Place of Birth", "Madurai, Tamil Nadu"],
                    ["உயரம்", "Height", "5 ft 8 in"],
                  ].map(([tamil, eng, ex]) => (
                    <tr key={eng} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{tamil}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                    </tr>
                  ))}
                  
                  <tr className="bg-white dark:bg-zinc-900 font-bold text-zinc-800 dark:text-zinc-200">
                    <td colSpan={3} className="px-5 py-3 bg-zinc-50 dark:bg-zinc-800/50">Jathagam Details (Astrology)</td>
                  </tr>
                  {[
                    ["ராசி", "Rasi (Moon Sign)", "Rishabam (Taurus)"],
                    ["நட்சத்திரம்", "Natchathiram (Star)", "Rohini, 2nd Padham"],
                    ["லக்கினம்", "Lagnam (Ascendant)", "Mithunam (Gemini)"],
                    ["கோத்திரம்", "Gothram", "Atri / Siva"],
                    ["செவ்வாய் தோஷம்", "Chevvai Dosham", "Dosham Illai (No Dosham)"],
                  ].map(([tamil, eng, ex]) => (
                    <tr key={eng} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{tamil}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                    </tr>
                  ))}

                  <tr className="bg-white dark:bg-zinc-900 font-bold text-zinc-800 dark:text-zinc-200">
                    <td colSpan={3} className="px-5 py-3 bg-zinc-50 dark:bg-zinc-800/50">Family & Background</td>
                  </tr>
                  {[
                    ["சாதி / குலம்", "Jati / Community", "Mudaliar – Saiva Vellalar"],
                    ["கல்வி", "Education", "B.E. Civil, Anna University"],
                    ["தொழில்", "Occupation", "Civil Engineer, L&T – Chennai"],
                    ["தந்தை", "Father", "Rajendran – Government Service"],
                    ["தாய்", "Mother", "Mallika – Homemaker"],
                    ["சகோதரர்/சகோதரிகள்", "Siblings", "1 Sister (Married)"],
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
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 italic">
              Note: Many modern couples also choose to add an <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me</Link> paragraph at the end of their biodata to express their personality and partner expectations directly.
            </p>
          </section>
          {/* BLOCK: EXAMPLES */}
          <section id="examples" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. Visual Examples (Boy & Girl)</h2>
            <p>
              A clean presentation is just as important as the data itself. Rather than sending a plain text message over <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">WhatsApp</Link>, modern Tamil families prefer a well-formatted PDF. Here are examples of how the final document should look for both a boy and a girl.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900">
                <Image src="/examples/Boy-biodata-example-Tamil.png" alt="Tamil thirumanam biodata example for boy" width={600} height={800} className="w-full h-auto" />
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Boy Biodata Format</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Notice the clear separation of the Jathagam block from the professional details. Professional achievements (salary, company) are highlighted.</p>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900">
                <Image src="/examples/Girl-biodata-example-Tamil.png" alt="Tamil thirumanam biodata example for girl" width={600} height={800} className="w-full h-auto" />
                <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Girl Biodata Format</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Features a softer color palette. The family background (Kudumbam) and Gothram are placed prominently alongside the Rasi details.</p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK: 10_PORUTHAM */}
          <section id="10-porutham" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              3. Jathaga Porutham: The 10-Point Match
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ஜாதக பொருத்தம்</span>
            </h2>
            <p className="mb-6">
              Tamil astrology evaluates compatibility through the <em>Dasa Vidha Porutham</em> (10-point match system). While <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">North Indian Kundali matching</Link> uses an 8-koota, 36-point system (Ashtakoot), Tamil matching focuses on these 10 distinct metrics. Most families require a minimum of 7/10 for a match to be approved.
            </p>
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
                    ["Dina Porutham", "Day-to-day health and prosperity", "Natchathiram (Star)"],
                    ["Gana Porutham", "Temperament compatibility (Deva, Manushya, Rakshasa)", "Natchathiram Gana"],
                    ["Mahendra Porutham", "Progeny, wealth, and longevity", "Natchathiram"],
                    ["Stree Deergha", "Long married life and overall wealth", "Distance between the two stars"],
                    ["Yoni Porutham", "Physical and emotional harmony", "Natchathiram's animal sign"],
                    ["Rasi Porutham", "General compatibility and lineage continuation", "Rasi (Moon Sign)"],
                    ["Rasi Adhipati", "Planetary lord compatibility", "Lords of the respective Rasis"],
                    ["Vasya Porutham", "Mutual attraction and affection", "Rasi"],
                    ["Rajju Porutham", "Husband's longevity (The most critical check)", "Natchathiram group"],
                    ["Vedhai Porutham", "Freedom from affliction and suffering", "Natchathiram pair"],
                  ].map(([porutham, checks, basedOn]) => (
                    <tr key={porutham} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-bold text-zinc-800 dark:text-zinc-200">{porutham}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{checks}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">{basedOn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 mt-6 shadow-sm">
              <h3 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                The Importance of Rajju Porutham
              </h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
                Rajju is considered the single most critical porutham, as it dictates the longevity of the husband. If the boy and girl belong to the same Rajju group (Sira, Kanda, Nabhi, Kati, or Pada), the match is considered <em>Rajju Dosham</em> and is almost universally rejected by traditional Tamil families, even if the other 9 poruthams match perfectly.
              </p>
            </div>
          </section>

          {/* BLOCK: COMMUNITY_TIPS */}
          <section id="community-tips" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              4. Community Tips — Tamil Biodata
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">சமுதாய-குறிப்பிட்ட தகவல்கள்</span>
            </h2>
            <p className="mb-6">
              When applying <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">general biodata tips</Link> to a Tamil profile, you must account for highly specific cultural nuances that dictate alliance viability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { 
                  title: "Chevvai Dosham (Mangal Dosha)", 
                  desc: "Tamil families take Chevvai Dosham very seriously. You must state clearly: 'Dosham Illai' (No Dosham) or 'Chevvai Dosham Undu' (Has Dosham). Tamil tradition dictates that Dosham holders should generally marry other Dosham holders. Never leave this blank. (See our guide on the Manglik format for deeper rules).",
                  link: { url: "/articles/manglik-biodata-format", text: "Read the Manglik Guide" }
                },
                { 
                  title: "Jati (Community)", 
                  desc: "Tamil biodatas should explicitly state both the main community and the sub-community (e.g., Mudaliar – Saiva Vellalar, Chettiar – Nattukottai, Pillai – Saiva). Do not just write 'Hindu'. Community endogamy is highly prevalent in Tamil Nadu." 
                },
                { 
                  title: "Gothram", 
                  desc: "Gothram indicates your patrilineal sage lineage. Under Vedic rules, Sagotra marriages (marrying within the same Gothram) are prohibited. For Tamil Brahmin families especially, Gothram is mandatory. If you do not know yours, ask your parents or family priest." 
                },
                { 
                  title: "Sect Details (Brahmins)", 
                  desc: "If you belong to the Tamil Brahmin community, your biodata requires an extra layer of specificity. You must specify Iyer vs Iyengar. Iyers must specify sub-sects like Vadama or Brihacharanam. Iyengars must specify Vadakalai or Thenkalai." 
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
              If your family hails from neighboring Andhra Pradesh or Telangana but resides in Tamil Nadu, you may also want to review the <Link href="/articles/vivah-biodata-format-telugu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Telugu Biodata Format</Link> to ensure you satisfy both cultural expectations.
            </p>
          </section>
          {/* BLOCK: HOW_TO_CREATE */}
          <section id="how-to-create" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">
              5. How to Create Your Tamil Biodata Online
            </h2>
            <p className="mb-6">
              Forget struggling with Word documents or <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">downloading blank PDFs</Link>. You can generate a beautiful, structured Tamil biodata in minutes.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-zinc-700 dark:text-zinc-300">
              <li><strong>Visit the Builder:</strong> Go to <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">BiodataBuilder.in/create</Link>. You do not need to create an account or sign up.</li>
              <li><strong>Enter Jathagam Details:</strong> Scroll to the Astrological section and input your Rasi, Natchathiram, Lagnam, Gothram, and Chevvai Dosham status. Our system organizes this perfectly into a readable grid.</li>
              <li><strong>Add Community Details:</strong> Fill out your Jati and sub-sect in the family background section.</li>
              <li><strong>Upload Photo:</strong> Choose a clear, traditional portrait photo.</li>
              <li><strong>Generate PDF:</strong> Click "Download PDF." You now have a highly professional document ready to be shared with marriage brokers, matrimonial sites, or directly with families.</li>
            </ol>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is a thirumanam biodata in Tamil?", a: "A thirumanam biodata (திருமண பயோடேட்டா) is the traditional Tamil marriage profile exchanged between families during arranged matchmaking. It includes personal details, Jathagam info (Rasi, Natchathiram, Lagnam), community, education, career, and family background." },
                { q: "What is Jathaga porutham?", a: "The 10-porutham Tamil horoscope matching system used to evaluate astrological compatibility between the boy and the girl. Most Tamil families require a minimum of 7/10 poruthams. Your biodata should include Rasi, Natchathiram, and Lagnam to allow the family priest to conduct this check." },
                { q: "Is Chevvai Dosham important in Tamil biodata?", a: "Yes — very important. Always state clearly: Dosham Illai (No Dosham) or Chevvai Dosham Undu (Has Dosham). Tamil tradition strongly recommends matching Dosham holders with each other to neutralize the astrological effects." },
                { q: "Do I need to include an 'About Me' section?", a: "While traditional Tamil biodatas did not include them, they are becoming highly popular among modern working professionals in Chennai, Bangalore, and Coimbatore. It is a great way to express your personality beyond just the astrological facts." },
                { q: "Can I use English for a Tamil biodata?", a: "Absolutely. In fact, English is the standard language used for Tamil biodatas today, especially among educated professionals. As long as you include the specific Tamil concepts (like Jati, Gothram, Rasi), English is perfectly acceptable and preferred." },
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
              A successful Tamil thirumanam biodata strikes the perfect balance between modern professional achievements and deep respect for traditional astrology and heritage. 
            </p>
            <p className="mt-4">
              By ensuring your Jathagam details (Rasi, Natchathiram, Dosham) and your community specifics (Jati, Gothram) are clearly and honestly stated, you respect the process and protect everyone's time. Utilize clean, structured PDF formats to present yourself in the best possible light.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Tamil Thirumanam Biodata — Free PDF</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4">திருமண பயோடேட்டா – இலவச PDF பதிவிறக்கம்</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Create your complete Tamil biodata with Rasi, Natchathiram, Lagnam, Gothram and all fields perfectly aligned — free, no sign-up needed.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Tamil Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/best-marriage-biodata-format-for-hindu" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Best Marriage Biodata Format for Hindu Families</div>
              </Link>
              <Link href="/articles/marriage-biodata-statistics-india" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Research</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Indian Marriage Biodata Statistics</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
