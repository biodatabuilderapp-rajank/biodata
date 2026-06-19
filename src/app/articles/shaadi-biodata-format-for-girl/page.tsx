import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shaadi Biodata for Girl | Complete Marriage Biodata Guide for Women",
  description: "Create the perfect marriage biodata for a girl. Sections to include, sample About Me text, expectations wording, template tips, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/shaadi-biodata-format-for-girl" },
  openGraph: {
    title: "Shaadi Biodata for Girl | Complete Marriage Biodata Guide",
    description: "Create the perfect marriage biodata for a girl. Sections to include, sample About Me text, expectations wording, template tips, and free PDF download.",
    url: "https://biodatabuilder.in/articles/shaadi-biodata-format-for-girl",
    images: [{ url: "/examples/girl_biodata_infographic.webp", width: 1200, height: 630, alt: "Shaadi Biodata Format For Girl" }],
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Shaadi Biodata Format for Girl", item: "https://biodatabuilder.in/articles/shaadi-biodata-format-for-girl" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Shaadi Biodata Format for Girl — Free Template",
  description: "Create a beautiful shaadi biodata format for a girl online for free. Elegant templates for Hindu, Muslim, and Christian girl biodata.",
  image: "/examples/girl_biodata_infographic.webp",
  datePublished: "2026-06-15",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Shaadi Biodata for Girl: Complete Marriage Biodata Guide
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          A girl&apos;s marriage biodata is her first impression on a prospective family. This guide covers every section — with sample text, template tips, and the common mistakes to avoid.
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-pink-50 dark:bg-pink-950/30 p-6 rounded-2xl border border-pink-100 dark:border-pink-900/50 my-8">
            <h2 className="text-xl font-bold text-pink-900 dark:text-pink-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-pink-800 dark:text-pink-300">
              <li><strong>Photos matter:</strong> A clear, well-lit, professional solo portrait is non-negotiable. Avoid heavy filters.</li>
              <li><strong>About Me is your superpower:</strong> Do not leave the &quot;About Me&quot; section blank. It is your only chance to show your personality before a meeting.</li>
              <li><strong>Be honest about career:</strong> Whether you are a corporate executive or a proud homemaker, state your path clearly. Both are highly respected in modern matchmaking.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-950/20">
              <Image 
                src="/examples/girl_biodata_infographic.webp" 
                alt="Perfect Shaadi Biodata Format for a Girl showing layout, colors, and required sections" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              A visually structured and highly professional marriage biodata format designed specifically for women.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-pink-600 dark:text-pink-400 font-medium">
              <li><a href="#intro" className="hover:underline">1. The Importance of a Girl&apos;s Biodata</a></li>
              <li><a href="#sections" className="hover:underline">2. All Sections to Include (Checklist)</a></li>
              <li><a href="#about-me" className="hover:underline">3. The &quot;About Me&quot; Section: Your Biggest Asset</a></li>
              <li><a href="#expectations" className="hover:underline">4. Formatting the Expectations Section</a></li>
              <li><a href="#mistakes" className="hover:underline">5. Common Mistakes Girls Make</a></li>
              <li><a href="#how-to-create" className="hover:underline">6. How to Create Your Biodata Online</a></li>
              <li><a href="#faq" className="hover:underline">7. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">1. The Importance of a Girl&apos;s Biodata</h2>
            <p>
              In the arranged marriage ecosystem, a <Link href="/articles/biodata-for-marriage" className="text-pink-600 dark:text-pink-400 hover:underline font-medium">marriage biodata</Link> is your digital ambassador. For a girl, this document serves a dual purpose: it must provide all the necessary demographic and astrological data to satisfy the groom&apos;s parents, while simultaneously projecting your personality and values to connect with the groom himself.
            </p>
            <p className="mt-4">
              Gone are the days when a girl&apos;s biodata was just a list of physical attributes and culinary skills. Today, whether you are an ambitious professional navigating a career in IT, or a graduate who wishes to focus on family making as a homemaker, your biodata should be a confident reflection of who you are. The <Link href="/articles/modern-vs-traditional-biodata" className="text-pink-600 dark:text-pink-400 hover:underline font-medium">modern format</Link> allows you to present a balanced, dignified profile that commands respect.
            </p>
          </section>

          {/* BLOCK: WHAT_TO_INCLUDE */}
          <section id="sections" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">2. All Sections to Include (Checklist)</h2>
            <p className="mb-6">
              A well-structured biodata eliminates back-and-forth questioning between families. Here is exactly what you need to include in your profile.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-pink-50 dark:bg-pink-950/40 text-pink-900 dark:text-pink-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Section</th>
                    <th className="px-5 py-3 font-semibold">What to Include</th>
                    <th className="px-5 py-3 font-semibold">Pro Tip for Girls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Professional Headshot", "A high-quality, well-lit portrait", "Avoid heavy Instagram filters. A clean, natural look is always preferred."],
                    ["Personal Details", "Name, DOB, Time/Place of birth, Height", "Complexion is entirely optional. Include it only if you are comfortable."],
                    ["Astrological Data", "Gotra, Rashi, Nakshatra, Manglik Status", "Never hide your <a href='/articles/manglik-biodata-format' class='text-pink-600 hover:underline'>Manglik status</a>. Be upfront."],
                    ["Education & Career", "Degrees, University, Job Title, Income", "If working, state your income range. It sets clear lifestyle expectations."],
                    ["Family Background", "Parents' names/professions, Siblings", "Mention if you live in a nuclear or joint family setup currently."],
                    ["About Me", "4–6 sentences about your personality", "This is the highest-impact section of the document. Do not skip it."],
                    ["Expectations", "2–4 broad partner preferences", "Keep it kind and open. Avoid rigid checklists."],
                    ["Contact Info", "WhatsApp number, Email address", "Clearly state whose number it is (e.g., 'Father's Number')."],
                  ].map(([section, include, tip]) => (
                    <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-bold text-zinc-800 dark:text-zinc-200">{section}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{include}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs italic" dangerouslySetInnerHTML={{ __html: tip }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-pink-50 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/50 flex gap-3">
              <AlertCircle className="w-5 h-5 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
              <p className="text-sm text-pink-800 dark:text-pink-300">
                <strong>Note on the &quot;Complexion&quot; Field:</strong> Modern families are increasingly omitting the &quot;complexion&quot; field entirely. If you feel it is an outdated metric, leave it off. Your photograph should speak for itself.
              </p>
            </div>
          </section>
          {/* BLOCK: ABOUT_ME_SECTION */}
          <section id="about-me" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">3. The &quot;About Me&quot; Section: Your Biggest Asset</h2>
            <p>
              Most girls leave this section blank or write one generic line (e.g., &quot;I am a simple and caring girl.&quot;). This is a massive missed opportunity. The &quot;About Me&quot; section is the <strong className="font-semibold text-zinc-900 dark:text-white">single highest-impact part</strong> of your biodata. It is the only area where your true personality, values, and lifestyle come through.
            </p>
            <p className="mt-4 mb-6">
              Families and prospective grooms who feel a connection through a well-written paragraph are far more likely to respond positively.
            </p>

            <div className="my-6 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow bg-white dark:bg-zinc-900">
              <Image src="/examples/Girl-biodata-about-me-examples.webp" alt="Sample About Me sections for a girl's marriage biodata" width={1200} height={600} className="w-full h-auto" />
              <p className="text-center text-xs text-zinc-500 py-2 border-t border-zinc-100 dark:border-zinc-800">Two highly effective sample &quot;About Me&quot; sections</p>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Sample 1: The Working Professional
            </h3>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-2xl p-6 italic text-pink-900 dark:text-pink-100 relative">
              <span className="absolute top-4 left-4 text-4xl text-pink-200 dark:text-pink-800/50 leading-none">&quot;</span>
              <p className="relative z-10 pl-6">
                I am a software engineer at Wipro, currently based in Bengaluru. I grew up in a close-knit Gujarati family and strongly believe in balancing professional ambition with family values. In my free time, I love reading historical fiction, travelling to the mountains, and experimenting with baking. I am looking for a life partner who is kind, communicative, and supportive of my career, and I am happy to settle in either a nuclear or joint family setup.
              </p>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-500" />
              Sample 2: The Proud Homemaker
            </h3>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-2xl p-6 italic text-pink-900 dark:text-pink-100 relative">
              <span className="absolute top-4 left-4 text-4xl text-pink-200 dark:text-pink-800/50 leading-none">&quot;</span>
              <p className="relative z-10 pl-6">
                I am a post-graduate from Pune University who has chosen to focus on family-building by personal choice. I enjoy Indian classical dance, cooking traditional meals, and volunteering at our local community center. I come from a traditional but open-minded family and am looking for a partner who respects both independence and family values — someone stable, respectful, and deeply family-oriented.
              </p>
            </div>
            
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
              Need more inspiration? See 10+ specific examples in our full <Link href="/articles/how-to-write-biodata-about-me" className="text-pink-600 dark:text-pink-400 hover:underline font-bold">About Me writing guide</Link>.
            </p>

            {/* IMAGE 3 (Hobbies) */}
            <figure className="my-10">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/girl_biodata_hobbies.webp" alt="Best hobbies to include in a girl's marriage biodata like Reading, Yoga, Traveling, and Culinary Arts" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                A well-chosen set of hobbies reveals your personality and lifestyle without needing a long paragraph.
              </figcaption>
            </figure>
          </section>

          {/* BLOCK: EXPECTATIONS_SECTION */}
          <section id="expectations" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">4. Formatting the Expectations Section</h2>
            <p className="mb-6">
              State your expectations honestly, but avoid making it read like an aggressive checklist. Two to four broad preferences are ideal. If you are too restrictive, you may filter out genuinely great matches who miss one minor criteria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-3 uppercase tracking-wide">✅ Good (Open &amp; Kind)</p>
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed">&quot;Looking for an educated, employed groom — preferably in IT or Business — based in a metro city. Should be open-minded and supportive of a working wife. Caste no bar for the right match.&quot;</p>
              </div>
              <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-3 uppercase tracking-wide">❌ Too Restrictive (Avoid)</p>
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed">&quot;Should be strictly 5&apos;9&quot; or taller, earning 25+ LPA, IIT/IIM graduate only, North India only, joint family strictly not acceptable under any circumstances.&quot;</p>
              </div>
            </div>
          </section>

          {/* BLOCK: COMMON_MISTAKES */}
          <section id="mistakes" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">5. Common Mistakes Girls Make</h2>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">1</div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block mb-1">Leaving the &quot;About Me&quot; Blank</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">This guarantees low engagement. A blank profile feels like a transaction rather than a human being seeking a life partner.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">2</div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block mb-1">Using Poor Photography</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">Do not use group selfies, heavily filtered Snapchat/Instagram photos, or pictures where you are wearing sunglasses. A clean, well-lit portrait in traditional or smart-casual attire works best, especially for <Link href="/articles/modern-vs-traditional-biodata" className="text-pink-600 dark:text-pink-400 hover:underline">modern biodatas</Link>.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">3</div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block mb-1">Skipping Manglik Status</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">If you belong to a Hindu family, many grooms&apos; families will not proceed without knowing this. State it clearly (Manglik, Non-Manglik, or Anshik) to save everyone time. Read our <Link href="/articles/manglik-biodata-format" className="text-pink-600 dark:text-pink-400 hover:underline">Manglik format guide</Link> for details.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">4</div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block mb-1">Hiding Income if Employed</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">Stating your CTC (e.g. ₹10-12 LPA) shows confidence and financial independence. It also helps match you with grooms who respect a working partner and share similar lifestyle expectations.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">5</div>
                  <div>
                    <strong className="text-zinc-900 dark:text-white block mb-1">Sharing as a Word Document</strong>
                    <span className="text-zinc-600 dark:text-zinc-400 text-sm">Word formatting breaks depending on the device opening it, as explained in our <Link href="/articles/biodata-format-word-download" className="text-pink-600 dark:text-pink-400 hover:underline">Word vs PDF guide</Link>. Always use a tool to generate and download a proper PDF file before sharing on WhatsApp.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* BLOCK: HOW_TO_CREATE */}
          <section id="how-to-create" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. How to Create Your Biodata Online</h2>
            <div className="bg-pink-50 dark:bg-pink-950/20 p-6 md:p-8 rounded-2xl border border-pink-100 dark:border-pink-900/50">
              <ol className="list-decimal pl-6 space-y-4 text-pink-900 dark:text-pink-200">
                <li className="pl-2">
                  <strong className="text-pink-950 dark:text-pink-100">Use BiodataBuilder:</strong> Head over to <Link href="/create" className="text-pink-600 dark:text-pink-400 hover:underline font-bold">BiodataBuilder.in/create</Link>. It is completely free and requires no sign-up.
                </li>
                <li className="pl-2">
                  <strong className="text-pink-950 dark:text-pink-100">Upload a Great Photo:</strong> Select a high-quality, professional headshot. This will be automatically cropped and placed perfectly within your chosen template.
                </li>
                <li className="pl-2">
                  <strong className="text-pink-950 dark:text-pink-100">Write Your About Me:</strong> Spend 5 minutes crafting your personal statement using the examples above as a guide.
                </li>
                <li className="pl-2">
                  <strong className="text-pink-950 dark:text-pink-100">Select a Premium Layout:</strong> Choose a design that reflects your personality — whether that is traditional (with warm borders) or modern (clean and minimalist).
                </li>
                <li className="pl-2">
                  <strong className="text-pink-950 dark:text-pink-100">Download as PDF:</strong> Instantly download your highly structured PDF, ready to be sent securely to prospective families.
                </li>
              </ol>
            </div>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What should be included in a marriage biodata for a girl?", 
                  a: "Personal details (name, DOB, height), Astrological details (Rashi, Nakshatra, Gotra, Manglik status), Education and career (with income if applicable), Family background, an 'About Me' paragraph, and contact information." 
                },
                { 
                  q: "Should a girl mention her income in a marriage biodata?", 
                  a: "Yes, if you are working, stating your salary range (e.g., ₹8 - ₹12 LPA) is highly recommended. It shows financial independence and helps match you with families who have compatible lifestyle expectations." 
                },
                { 
                  q: "What is a good About Me for a girl's biodata?", 
                  a: "A 4–6 sentence paragraph covering your personality, career or education focus, family values, and what you genuinely seek in a partner. Avoid clichés; be authentic and specific about your passions." 
                },
                { 
                  q: "Should a girl include her photo in a marriage biodata?", 
                  a: "Yes, absolutely. Profiles with a clear, professional portrait receive significantly higher engagement. Use a well-lit solo shot without heavy social media filters." 
                },
                { 
                  q: "Can a homemaker girl create a good marriage biodata?", 
                  a: "Absolutely. State 'Homemaker' in the profession field and use the 'About Me' section to express your interests, values, and dedication to building a family. Many grooms specifically seek homemaker partners." 
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
              Your marriage biodata is more than just a summary of your height and education — it is the first chapter of your matchmaking journey. By investing just 10 minutes to write a thoughtful &quot;About Me&quot; section, taking a professional photograph, and formatting it beautifully, you take control of how you are presented to the world.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 rounded-3xl border border-pink-100 dark:border-pink-900/50 text-center">
            <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-3">Create Your Perfect Biodata Today</h3>
            <p className="text-rose-700 dark:text-rose-300 mb-8 max-w-2xl mx-auto">
              Build a premium, beautiful marriage biodata in under 5 minutes. Completely free, no watermarks, and instant PDF download.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-rose-600 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Girl&apos;s Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-pink-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 transition">15 Expert Tips to Write a Winning Biodata</div>
              </Link>
              <Link href="/articles/biodata-for-second-marriage" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-pink-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Specialized</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-pink-600 transition">Biodata Format for Second Marriage</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
