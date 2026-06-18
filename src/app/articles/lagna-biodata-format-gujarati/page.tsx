import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lagna Biodata Format Gujarati | લગ્ન બાયોડેટા PDF Free",
  description: "Gujarati marriage biodata format with all fields in Gujarati and English. Jati, Gotra, Gana, Rashi details. Download your lagna biodata as PDF free.",
  alternates: { canonical: "https://biodatabuilder.in/articles/lagna-biodata-format-gujarati" },
  openGraph: {
    title: "Lagna Biodata Format Gujarati | લગ્ન બાયોડેટા PDF",
    description: "Complete Gujarati lagna biodata format with Jati, Gotra, Gana, Rashi — free PDF download.",
    url: "https://biodatabuilder.in/articles/lagna-biodata-format-gujarati",
    images: [{ url: "/examples/gujarati-biodata-infographic.png", width: 1200, height: 630, alt: "Gujarati Lagna Biodata Details" }],
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
      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Lagna Biodata Format Gujarati<br />
          <span className="text-indigo-600 dark:text-indigo-400 text-3xl">લગ્ન બાયોડેટા ફોર્મેટ – PDF Free</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          The ultimate guide to creating a complete Gujarati lagna biodata. Learn how to list your Jati, Gotra, Gana, Rashi, and Business background perfectly, with free PDF templates.
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>Essential Gujarati Fields:</strong> A traditional Gujarati biodata must clearly state your Jnati (Community), Native District (e.g., Saurashtra, Kutch), and Business background.</li>
              <li><strong>Astrological Precision:</strong> Beyond basic Rashi, Gujarati families look closely at Gotra, Gana (Deva, Manushya, Rakshasa), and Nadi.</li>
              <li><strong>Dual Language Approach:</strong> While English is standard, including Gujarati translations for field names (e.g., ગોત્ર) adds a deeply respectful cultural touch.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-indigo-50 dark:bg-indigo-900">
              <Image 
                src="/examples/gujarati-biodata-infographic.png" 
                alt="Anatomy of a Gujarati Lagna Biodata Details Infographic" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              The essential anatomy of a traditional Gujarati Lagna Biodata.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#introduction" className="hover:underline">1. The Gujarati Lagna Biodata Explained</a></li>
              <li><a href="#gujarati-translation" className="hover:underline">2. Field Mapping: English to Gujarati</a></li>
              <li><a href="#jnati" className="hover:underline">3. Stating Your Jnati & Sub-Caste</a></li>
              <li><a href="#business" className="hover:underline">4. The Importance of Business Background</a></li>
              <li><a href="#astrology" className="hover:underline">5. Gotra, Gana, and Rashi Specifics</a></li>
              <li><a href="#boy-example" className="hover:underline">6. Gujarati Boy Biodata Example</a></li>
              <li><a href="#girl-example" className="hover:underline">7. Gujarati Girl Biodata Example</a></li>
              <li><a href="#about-me" className="hover:underline">8. Writing Your "About Me"</a></li>
              <li><a href="#checklist" className="hover:underline">9. Formatting Checklist</a></li>
              <li><a href="#faq" className="hover:underline">10. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="introduction" className="scroll-mt-24">
            <p>
              In Gujarati culture, arranged marriage (લગ્ન - Lagna) is a profound joining of two families, not just two individuals. Because Gujarati communities (such as Patels, Jains, Lohanas, and Brahmins) have deep-rooted geographical and entrepreneurial networks, the <strong>Gujarati Lagna Biodata</strong> requires highly specific information that you might not find in a generic <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Word download template</Link>.
            </p>
            <p className="mt-4">
              A standard <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata for marriage</Link> might just ask for your religion and caste. But a true Gujarati format delves deeper into your <em>Jnati</em> (sub-community), your <em>Mool Khand</em> (native village/district), and your family's business legacy. In fact, <Link href="/articles/marriage-biodata-statistics-india" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">marriage biodata statistics</Link> indicate that profiles with detailed ancestral information receive significantly higher engagement from traditional Gujarati families.
            </p>
            <p className="mt-4">
              Whether you are creating a dual-language (English and Gujarati) document or a purely English one that honors Gujarati traditions, this guide covers everything you need to include.
            </p>
          </section>

          {/* BLOCK: FIELD_TABLE */}
          <section id="gujarati-translation" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              2. Field Mapping: English to Gujarati
              <span className="block text-lg font-normal text-zinc-500 dark:text-zinc-400 mt-1">ગુજરાતી લગ્ન બાયોડેટા – તમામ ક્ષેત્રો</span>
            </h2>
            <p className="mb-6">
              Many modern families prefer their biodata in English for ease of sharing across borders (especially for NRIs in the USA, UK, or Canada). However, including the Gujarati terms alongside the English ones adds a very respectful, culturally grounded aesthetic to your PDF.
            </p>
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
                      <td className="px-5 py-3 font-bold text-zinc-800 dark:text-zinc-200">{guj}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{eng}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              <em>Note:</em> When creating your biodata through our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline">generator</Link>, you can type these exact Gujarati terms into the custom field labels.
            </p>
          </section>
          {/* BLOCK: CTA_TOP */}
          <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Create Your Gujarati Lagna Biodata in Minutes</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our builder includes custom fields for Jnati, Gotra, Gana, and Native District. Download a beautiful, culturally-appropriate PDF instantly.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: SECTION_JNATI */}
          <section id="jnati" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Stating Your Jnati & Sub-Caste</h2>
            <p>
              In Gujarati matchmaking, stating just "Hindu" or "Jain" is rarely enough. The <strong>Jnati (જ્ઞાતિ)</strong> or specific community sub-caste is the primary filter used by parents to find matches with similar cultural practices, dietary habits, and social standing.
            </p>
            <p className="mt-4">
              For example, if you are a Patel, you must specify whether you are <em>Leva Patel</em> or <em>Kadva Patel</em>. If you belong to the Jain community, you should specify whether you are <em>Shvetambar</em> or <em>Digambar</em>, and further detail your <em>Gachh</em> (e.g., Tapagachh). Furthermore, specifying your <strong>Native District (Mool Khand)</strong>—such as Kutch, Kathiawad (Saurashtra), or South Gujarat—helps families identify ancestral roots.
            </p>
            <div className="mt-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 italic text-zinc-700 dark:text-zinc-300 space-y-2 font-medium">
              <p><strong>Caste / Jnati (જ્ઞાતિ):</strong> Kadva Patel</p>
              <p><strong>Native Place (મૂળ વતન):</strong> Rajkot, Saurashtra</p>
              <p><strong>Current City (હાલનું સરનામું):</strong> Borivali, Mumbai</p>
            </div>
          </section>

          {/* BLOCK: SECTION_BUSINESS */}
          <section id="business" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. The Importance of Business Background</h2>
            <p>
              Gujaratis are globally recognized for their entrepreneurial spirit. Consequently, a family's business background carries significant weight in a lagna biodata, often just as much as the candidate's personal education.
            </p>
            <p className="mt-4">
              If your family runs a business (Diamond trading, Textiles, Manufacturing, Retail, etc.), mention it clearly in the <em>Father's Occupation</em> or <em>Family Background</em> section. Many families explicitly seek alliances with other business families to ensure financial and social compatibility. If you are a salaried professional, be transparent about your <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">annual income</Link>, as financial transparency is highly valued.
            </p>
          </section>

          {/* BLOCK: SECTION_ASTROLOGY */}
          <section id="astrology" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Gotra, Gana, and Rashi Specifics</h2>
            <p>
              Astrological compatibility remains a non-negotiable step for the vast majority of traditional Gujarati families. When using the <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">best marriage biodata format for a Hindu</Link>, you must include precise <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Kundali details</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>Gotra (ગોત્ર):</strong> Indicates ancestral lineage. Marriages within the same Gotra (Sagotra marriages) are strictly avoided to prevent inbreeding. Always list your Gotra (e.g., Kashyap, Bharadwaj).</li>
              <li><strong>Gana (ગણ):</strong> Classified into three types: <em>Deva</em> (Divine), <em>Manushya</em> (Human), and <em>Rakshasa</em> (Demonic). It is believed to dictate temperament compatibility. Gana matching is highly emphasized in Gujarati astrology.</li>
              <li><strong>Rashi & Nakshatra:</strong> Your moon sign and birth star are used by the family astrologer (Maharaj) to calculate Guna Milan. Include the specific Pada (quarter) of the Nakshatra if known.</li>
            </ul>
          </section>
          {/* BLOCK: BOY_EXAMPLE */}
          <section id="boy-example" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Gujarati Boy Biodata Example</h2>
            <figure className="my-8 float-left mr-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/Boy-biodata-example-Gujarati.png" alt="Gujarati boy lagna biodata example" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Gujarati boy lagna biodata template.</figcaption>
            </figure>
            <p>
              When creating a <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">marriage biodata for a boy</Link> in the Gujarati community, the emphasis often heavily lands on career stability, income, and the family's property or business ownership.
            </p>
            <p className="mt-4">
              A strong boy's biodata should state exact educational degrees (e.g., MS in Computer Science from USA), current employment (e.g., Senior Engineer at Google), and the family business details (e.g., Father owns a textile manufacturing unit in Surat). If the boy is an NRI, his visa status (H1B, PR, Citizen) is absolutely critical to include.
            </p>
          </section>

          {/* BLOCK: GIRL_EXAMPLE */}
          <section id="girl-example" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Gujarati Girl Biodata Example</h2>
            <figure className="my-8 float-right ml-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/Girl-biodata-example-Gujarati.png" alt="Gujarati girl lagna biodata example" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Gujarati girl lagna biodata template.</figcaption>
            </figure>
            <p>
              For a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">girl's shaadi biodata</Link>, the modern Gujarati family looks for a balance of education, modern career ambitions, and strong traditional roots. 
            </p>
            <p className="mt-4">
              It is common to include her hobbies (e.g., cooking, classical dancing, traveling) and a clear statement regarding her post-marriage career plans. If she intends to continue working, it is best to state this gently but clearly in the "Expectations" or "About Me" section to ensure alignment with prospective families.
            </p>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white clear-both">
            <h3 className="text-2xl font-bold mb-3">Tired of Using MS Word?</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Stop struggling with table alignments in Word. Our builder automatically formats your Jnati, Gotra, and Rashi perfectly.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: ABOUT_ME */}
          <section id="about-me" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. Writing Your "About Me"</h2>
            <p>
              A biodata is completely different from a <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">job resume</Link>. The "About Me" section is where your personality truly shines through. It is highly recommended to write 3 to 4 sentences describing your lifestyle, your values (balancing modern thinking with Gujarati traditions), and what you enjoy doing in your free time.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Sample "About Me" (Gujarati context):</h3>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 italic text-zinc-700 dark:text-zinc-300 shadow-sm">
              "I am an easy-going and ambitious software engineer born and raised in Ahmedabad. I deeply value our Gujarati culture and am closely connected to my family. While I am modern in my professional outlook, I enjoy participating in traditional family gatherings and festivals. In my free time, I love traveling, exploring new cafes, and reading."
            </div>
            <p className="mt-6">
              For more examples on how to craft this section perfectly, read our complete guide on <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">how to write an 'About Me' for marriage</Link>.
            </p>
          </section>
          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Formatting Checklist</h2>
            <p className="mb-6">
              Before you finalize and send your biodata to a prospective family, review this checklist to ensure it meets Gujarati community expectations:
            </p>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Is your Jnati/Sub-Caste (e.g., Leva Patel, Kutchi Lohana) clearly stated?",
                  "Did you list your Native District (Mool Khand) alongside your current city?",
                  "Are your Gotra and Gana included for astrological matching?",
                  "If applicable, did you highlight your family's business background?",
                  "Is the document formatted as a single-page PDF for easy WhatsApp sharing?",
                  "Are your height, age, and marital status 100% accurate?",
                  "Did you include a respectful, 3-4 sentence 'About Me' paragraph?",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Pro Tip:</strong> Avoid sending raw Word documents. Always use a clean <Link href="/articles/biodata-format-for-whatsapp" className="font-bold hover:underline">WhatsApp PDF format</Link> so the layout doesn't break when viewed on a phone.
                </p>
              </div>
            </div>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">10. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What should be in a Gujarati lagna biodata?", a: "A Gujarati lagna biodata should include: personal details, Jati/community (sub-caste), Gotra, Gana, Rashi and Nakshatra, Manglik status, education, career with income, family background (native district, business details, family type), About Me, and contact info." },
                { q: "What is unique about a Gujarati biodata?", a: "Gujarati biodata strongly emphasizes Jnati (sub-community like Leva or Kadva), business background, native district (Kutch/Kathiawad/Saurashtra/South Gujarat), and Gana — fields less common in biodatas from other states. Jain families also list their Gachh." },
                { q: "How do I create a Gujarati lagna biodata online?", a: "Use BiodataBuilder.in — fill in all fields including Jati, Gotra, Gana, Rashi and Nakshatra, choose a premium template, and download it as a perfect PDF. Free, no registration needed." },
                { q: "Is Kundali matching important in Gujarati marriages?", a: "Yes, extremely. Gana compatibility and Rashi matching are commonly checked first. Most families require a full Kundali chart after the initial biodata exchange before proceeding to a meeting." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
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
              Creating the perfect Gujarati Lagna Biodata (લગ્ન બાયોડેટા) is about striking a balance. You must clearly state the traditional markers your family cares about—like Jnati, Gotra, and Native Place—while presenting yourself as a modern, educated individual through a clean, PDF design.
            </p>
            <p className="mt-4">
              By following this guide and using the provided templates, you can create an impressive first impression that honors your Gujarati heritage and helps your family find a truly compatible match.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Gujarati Lagna Biodata — Free PDF</h3>
            <p className="text-base text-indigo-600 dark:text-indigo-400 mb-4 font-medium">ગુજરાતી લગ્ન બાયોડેટા – Free Download</p>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Create your complete Gujarati biodata with Jati, Gotra, Gana, Rashi and all custom fields in minutes. Free, no sign-up required.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Gujarati Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/kundali-details-in-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">How to List Kundali Details in Biodata</div>
              </Link>
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">15 Expert Tips for a Winning Marriage Biodata</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
