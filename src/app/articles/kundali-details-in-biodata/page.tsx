import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kundali Details in Biodata | What Horoscope Info to Include",
  description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
  alternates: { canonical: "https://biodatabuilder.in/articles/kundali-details-in-biodata" },
  openGraph: {
    title: "Kundali Details in Biodata | What Horoscope Info to Include",
    description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
    url: "https://biodatabuilder.in/articles/kundali-details-in-biodata",
    images: [{ url: "/examples/kundali-biodata-infographic.png", width: 1200, height: 630, alt: "Essential Kundali Details" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kundali details should be in a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata should include: Date, Time, and Place of Birth (for Kundali casting); Rashi (moon sign); Nakshatra (birth star) and Pada; Gotra (patrilineal lineage); Manglik Status (Manglik, Anshik Manglik, or Non-Manglik); and optionally Gana and Lagna.",
      },
    },
    {
      "@type": "Question",
      name: "Is it necessary to include Kundali details in a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Hindu families, yes — Kundali matching is central to the matchmaking process. Including accurate birth time and place speeds up the process significantly. Many families will not proceed to a meeting without confirming Kundali compatibility first.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Rashi and Nakshatra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rashi is the moon sign — the zodiac sign in which the Moon was placed at birth. There are 12 Rashis. Nakshatra is the birth star — one of 27 lunar mansions. Your Nakshatra determines your Gana and Pada, which are used in Ashtakoota matching.",
      },
    },
    {
      "@type": "Question",
      name: "What should I write if I don't know my birth time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write 'Birth time unknown' in the time field. Do not guess or leave it blank. Many priests can work with approximate times, but being honest about uncertainty is better than providing an incorrect birth time.",
      },
    },
    {
      "@type": "Question",
      name: "What does Manglik status mean in a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manglik (or Mangal Dosha) refers to the placement of Mars in certain houses of the birth chart. State clearly: Manglik (Full), Anshik Manglik (Partial), or Non-Manglik. Being Manglik is not a problem — traditional guidance recommends matching Mangliks with other Mangliks.",
      },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-indigo-900 dark:text-indigo-100 mb-8 leading-tight">
          Kundali Details in Marriage Biodata: What to Include
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>The Foundation:</strong> Accurate Date, Time, and Place of birth are absolutely mandatory. Without these, a family astrologer cannot cast your Kundali.</li>
              <li><strong>The Big Five:</strong> Your biodata must clearly list your Rashi (Moon Sign), Nakshatra (Birth Star), Gotra (Lineage), and Manglik Status.</li>
              <li><strong>Honesty is Key:</strong> If you do not know your exact birth time, write "Time Unknown." Guessing leads to mismatched charts and creates distrust later in the process.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-indigo-50 dark:bg-indigo-900">
              <Image 
                src="/examples/kundali-biodata-infographic.png" 
                alt="Essential Kundali Details for Marriage Biodata Infographic" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              The five essential astrological pillars required in a traditional Hindu marriage biodata.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#why-it-matters" className="hover:underline">1. Why Kundali Details Still Matter</a></li>
              <li><a href="#quick-reference" className="hover:underline">2. Quick Reference: Essential vs Optional Fields</a></li>
              <li><a href="#deep-dive-1" className="hover:underline">3. Deep Dive: Birth Details & Rashi</a></li>
              <li><a href="#deep-dive-2" className="hover:underline">4. Deep Dive: Nakshatra, Gotra, and Manglik Status</a></li>
              <li><a href="#advanced-fields" className="hover:underline">5. Advanced Fields (Gana, Lagna, Nadi)</a></li>
              <li><a href="#unknown-time" className="hover:underline">6. What If You Don't Know Your Birth Time?</a></li>
              <li><a href="#manglik-myths" className="hover:underline">7. Manglik Myths & Biodata Etiquette</a></li>
              <li><a href="#sample-section" className="hover:underline">8. Sample Kundali Section</a></li>
              <li><a href="#faq" className="hover:underline">9. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="why-it-matters" className="scroll-mt-24">
            <p>
              When creating the <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">best marriage biodata format for a Hindu</Link>, one section stands above the rest in its ability to make or break an alliance: the Astrological or Kundali details.
            </p>
            <p className="mt-4">
              For millions of families across India, Kundali matching (also known as Jyotish or Vedic astrology compatibility) is the very first filter. According to recent <Link href="/articles/marriage-biodata-statistics-india" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">marriage biodata statistics</Link>, over 65% of traditional families will not proceed to a physical meeting without first verifying Guna Milan (the 36-point compatibility system). By proactively including accurate horoscope details in your <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata for marriage</Link>, you save everyone time and demonstrate respect for traditional processes.
            </p>
          </section>

          {/* BLOCK: SECTIONS_TABLE */}
          <section id="sections" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. Quick Reference: Essential vs Optional Fields</h2>

            {/* IMAGE 1 */}
            <figure className="my-8">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/kundali_components_infographic.png" alt="Infographic detailing the key components of Kundali including Rashi, Nakshatra, Gotra, and Manglik Dosha" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                A visual breakdown of the most critical astrological components required for matchmaking.
              </figcaption>
            </figure>

            <p className="mb-6">
              Not all astrological details carry the same weight. Here is a breakdown of what you <em>must</em> include versus what is merely helpful.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Astrological Field</th>
                    <th className="px-5 py-3 font-semibold">Importance</th>
                    <th className="px-5 py-3 font-semibold">Example to Write</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-indigo-50/30 dark:bg-indigo-900/10">
                    <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">Date of Birth</td>
                    <td className="px-5 py-3 font-bold text-indigo-600 dark:text-indigo-400">✅ Mandatory</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">14 March 1996</td>
                  </tr>
                  <tr className="bg-indigo-50/30 dark:bg-indigo-900/10">
                    <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">Time of Birth</td>
                    <td className="px-5 py-3 font-bold text-indigo-600 dark:text-indigo-400">✅ Mandatory</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">11:32 AM (or 'Unknown')</td>
                  </tr>
                  <tr className="bg-indigo-50/30 dark:bg-indigo-900/10">
                    <td className="px-5 py-3 font-medium text-zinc-900 dark:text-zinc-100">Place of Birth</td>
                    <td className="px-5 py-3 font-bold text-indigo-600 dark:text-indigo-400">✅ Mandatory</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">Pune, Maharashtra</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Rashi (Moon Sign)</td>
                    <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">✅ Essential</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">Karka (Cancer)</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Nakshatra & Pada</td>
                    <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">✅ Essential</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">Pushya, 2nd Pada</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Gotra</td>
                    <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">✅ Essential</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">Kashyap</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Manglik Status</td>
                    <td className="px-5 py-3 font-bold text-emerald-600 dark:text-emerald-400">✅ Essential</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400 font-mono text-xs">Non-Manglik</td>
                  </tr>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/30">
                    <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">Gana</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">⭐ Optional</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">Deva</td>
                  </tr>
                  <tr className="bg-zinc-50 dark:bg-zinc-800/30">
                    <td className="px-5 py-3 font-medium text-zinc-700 dark:text-zinc-300">Lagna (Ascendant)</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">⭐ Optional</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 font-mono text-xs">Simha (Leo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 italic">
              Note: If you provide accurate Date, Time, and Place of birth, a family astrologer can calculate all the other fields. However, pre-filling Rashi, Nakshatra, Gotra, and Manglik status allows families to do a quick manual check before engaging their priest.
            </p>
          </section>
          {/* BLOCK: DEEP_DIVE_1 */}
          <section id="deep-dive-1" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Deep Dive: Birth Details & Rashi</h2>
            
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Date, Time, and Place of Birth</h3>
            <p>
              This triad forms the mathematical foundation of your entire astrological chart. A difference of even 5 minutes in your birth time can shift your Lagna (Ascendant) or Nakshatra Pada, completely altering your Kundali matching results. Always write it out clearly:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
              <li><strong>Format the Date:</strong> Use clear formatting like "14 March 1996" rather than "14/03/96" (which can be confused with American date formatting).</li>
              <li><strong>Include AM/PM:</strong> Never write just "11:32" — specify AM or PM, or use the 24-hour clock (e.g., 23:32).</li>
              <li><strong>Place of Birth:</strong> Include both the City and the State, especially if the city is small or has a common name (e.g., "Aurangabad, Maharashtra" vs "Aurangabad, Bihar").</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Rashi (The Moon Sign)</h3>
            <p>
              Your Rashi is the zodiac sign in which the Moon was positioned at the exact moment of your birth. Unlike Western astrology, which relies on Sun signs, Vedic astrology relies heavily on the Moon sign for matchmaking. There are 12 Rashis (e.g., Mesh/Aries, Karka/Cancer, Tula/Libra). 
            </p>
            <p className="mt-4">
              Many families perform a preliminary check known as "Bhakoot" based purely on the boy and girl's Rashis before even running a full Kundali calculation.
            </p>
          </section>

          {/* BLOCK: DEEP_DIVE_2 */}
          <section id="deep-dive-2" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Deep Dive: Nakshatra, Gotra, and Manglik Status</h2>
            
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Nakshatra & Pada (Birth Star)</h3>
            <p>
              The Vedic sky is divided into 27 lunar mansions called Nakshatras. Your Nakshatra determines your starting planetary period (Dasha) and heavily influences your basic temperament. Furthermore, each Nakshatra is divided into 4 quarters called Padas. 
            </p>
            <p className="mt-4">
              When listing your Nakshatra in your biodata, try to include the Pada if you know it (e.g., <em>Pushya, 2nd Pada</em>). This level of detail shows the receiving family that you are prepared and respect the process.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Gotra (Ancestral Lineage)</h3>
            <p>
              Gotra traces your patrilineal descent back to an ancient Vedic sage (Rishi). In almost all traditional Hindu communities, <strong>Sagotra marriages</strong> (marrying someone of the exact same Gotra) are strictly prohibited, as it is considered akin to marrying a sibling. Therefore, explicitly stating your Gotra (e.g., Kashyap, Bharadwaj, Vatsa) immediately clears this primary filter.
            </p>
            <p className="mt-4">
              Note: Certain regional formats, such as the <Link href="/articles/lagna-biodata-format-gujarati" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Gujarati lagna biodata format</Link>, place extremely high importance on Gotra alongside Jnati (sub-caste).
            </p>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Manglik Status (Mangal Dosha)</h3>
            <p>
              Mangal Dosha occurs when the planet Mars (Mangal) is placed in the 1st, 4th, 7th, 8th, or 12th house of the Kundali. It is arguably the most scrutinised aspect of a marriage biodata. You must state your status transparently as one of three options:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
              <li><strong className="text-zinc-900 dark:text-white">Manglik</strong> (Full Mangal Dosha)</li>
              <li><strong className="text-zinc-900 dark:text-white">Anshik Manglik</strong> (Partial / Low Mangal Dosha)</li>
              <li><strong className="text-zinc-900 dark:text-white">Non-Manglik</strong> (No Mangal Dosha)</li>
            </ul>
            <p className="mt-4">
              If you are Manglik, do not hide it. Traditional guidance recommends that Mangliks marry other Mangliks, effectively neutralizing the Dosha. For a comprehensive look at how to structure your biodata if you have this placement, read our <Link href="/articles/manglik-biodata-format" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Manglik Biodata Format guide</Link>.
            </p>
          </section>

          {/* BLOCK: ADVANCED_FIELDS */}
          <section id="advanced-fields" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Advanced Fields (Gana, Lagna, Nadi)</h2>
            <p>
              While not strictly mandatory, including these advanced fields indicates a high level of preparation, especially in traditional families:
            </p>
            <ul className="list-disc pl-6 space-y-4 mt-4 text-zinc-700 dark:text-zinc-300">
              <li><strong>Gana:</strong> Derived from your Nakshatra, humans are categorised into three temperaments: <em>Deva</em> (Divine), <em>Manushya</em> (Human), and <em>Rakshasa</em> (Demonic). Gana matching ensures temperament compatibility.</li>
              <li><strong>Lagna (Ascendant):</strong> The zodiac sign rising on the eastern horizon at the exact moment of birth. It represents the physical self and outer personality.</li>
              <li><strong>Nadi:</strong> There are three Nadis: <em>Aadi</em>, <em>Madhya</em>, and <em>Antya</em>. Nadi matching carries the highest points (8 out of 36) in Ashtakoota Milan and is believed to govern physiological and genetic compatibility. Marrying someone with the same Nadi (Nadi Dosha) is generally avoided.</li>
            </ul>
          </section>

          {/* BLOCK: UNKNOWN_TIME */}
          <section id="unknown-time" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. What If You Don't Know Your Birth Time?</h2>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-amber-600 dark:text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-2">Honesty is the Best Policy</h3>
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                    Never guess your birth time or write a generic time like "12:00 PM" just to fill the field. If your parents only remember an approximate time, write it as <strong>"Approx. 2:00 PM - 3:00 PM."</strong> 
                  </p>
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed mt-4">
                    If it is entirely unknown, write <strong>"Time Unknown."</strong> Many experienced astrologers can still perform partial matching based on Rashi and Nakshatra alone, or they can use alternative astrological methods (like Prashna Kundali or name-based matching) to assess compatibility.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* BLOCK: MANGLIK_MYTHS */}
          <section id="manglik-myths" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Manglik Myths & Biodata Etiquette</h2>
            <p>
              In Indian matchmaking, there is significant anxiety surrounding the "Manglik" label. If you are preparing a <Link href="/articles/biodata-for-second-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">second marriage biodata</Link> or standard format, it's crucial to handle this section maturely.
            </p>
            <p className="mt-4">
              <strong>Myth: Being Manglik is bad luck.</strong><br/>
              <strong>Reality:</strong> It simply means you have strong Mars energy (associated with independence, passion, and assertiveness). Astrologically, it is balanced by marrying another person with similar Mars energy.
            </p>
            <p className="mt-4">
              When sending your biodata via <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">WhatsApp</Link>, do not preemptively defend or apologize for your Manglik status in the cover message. Simply list it objectively in the Kundali section and let the families' respective astrologers evaluate the charts. Often, planetary alignments like a strong Jupiter can cancel out Mangal Dosha completely (a phenomenon known as <em>Dosha Parihara</em>).
            </p>
          </section>

          {/* BLOCK: SAMPLE_SECTION */}
          <section id="sample-section" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. Sample Kundali Section</h2>
            <p className="mb-6">
              When formatting this section, present it clearly as a list or a table. Unlike the <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">"About Me" section</Link> which requires descriptive paragraphs, the Kundali section should be purely factual data. Here is an example of a perfectly structured Kundali block:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-6 md:p-8 font-mono text-sm sm:text-base text-zinc-800 dark:text-zinc-200 shadow-sm border border-zinc-200 dark:border-zinc-700">
              <h3 className="text-lg font-sans font-bold text-indigo-700 dark:text-indigo-400 border-b border-zinc-300 dark:border-zinc-600 pb-3 mb-4 uppercase tracking-wider">Astrological Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Date of Birth</span><span className="font-semibold">22 July 1997</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Time of Birth</span><span className="font-semibold">08:15 AM</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Place of Birth</span><span className="font-semibold">Jaipur, Rajasthan</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Rashi (Moon Sign)</span><span className="font-semibold">Karka (Cancer)</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Nakshatra</span><span className="font-semibold">Pushya (2nd Pada)</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Gotra</span><span className="font-semibold">Kashyap</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Manglik Status</span><span className="font-semibold">Non-Manglik</span></div>
                <div><span className="text-zinc-500 dark:text-zinc-400 uppercase text-xs tracking-widest block mb-1">Gana</span><span className="font-semibold">Deva</span></div>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-lg">
              <Image 
                src="/examples/Kundali-section-biodata.png" 
                alt="Zoomed-in Kundali section in a modern marriage biodata" 
                width={1200} 
                height={500} 
                className="w-full h-auto" 
              />
              <p className="text-center text-xs text-zinc-500 py-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
                A complete, cleanly formatted Kundali section built using BiodataBuilder's templates.
              </p>
            </div>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Don't Miss a Single Field</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our automated builder ensures you include all the necessary astrological fields in a beautiful, structured format.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white font-bold rounded-full hover:bg-indigo-600 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What kundali details should be in a marriage biodata?", a: "Include: Date, Time, and Place of Birth, Rashi (moon sign), Nakshatra and Pada, Gotra, and Manglik Status. Optionally, you can add Gana, Lagna, and Nadi for more complete matching information." },
                { q: "Is it necessary to include Kundali details?", a: "For traditional Hindu families, yes. Kundali matching is central to the matchmaking process. Many families will not proceed to a physical meeting without confirming astrological compatibility first." },
                { q: "What is the difference between Rashi and Nakshatra?", a: "Rashi is the moon sign (one of 12 zodiac signs). Nakshatra is the birth star (one of 27 lunar mansions). Your Nakshatra determines your Gana, which is heavily used in Ashtakoota matching." },
                { q: "What should I write if I don't know my birth time?", a: "Write 'Birth time unknown' or 'Approx. 2:00 PM'. Do not guess — an incorrect birth time produces a wildly inaccurate Kundali. Many priests can still work with approximate times if you note them as approximate." },
                { q: "What does Manglik status mean in a biodata?", a: "Manglik (Mangal Dosha) refers to Mars being placed in certain birth chart houses. State clearly: Manglik (Full), Anshik Manglik (Partial), or Non-Manglik. Traditional guidance recommends matching Mangliks with other Mangliks." },
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
              In the journey of arranged marriages, the Kundali section of your biodata is far more than just a list of planetary alignments; it is a signal of transparency, respect for tradition, and readiness for marriage. 
            </p>
            <p className="mt-4">
              By clearly listing your Rashi, Nakshatra, Gotra, and accurate birth details, you allow families to quickly ascertain compatibility. Even if you prefer a <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">modern biodata format</Link>, retaining a clean and accurate astrological section ensures you don't alienate traditional matches.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Add All Astrological Details Easily</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Our builder has dedicated fields for Rashi, Nakshatra, Gotra, Manglik status and more. Export a pristine, professional PDF in seconds.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-format-word-download" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Downloads</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition">Download Free Word (.docx) Biodata Formats</div>
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
