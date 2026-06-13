import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata Tips: Photo, Hobbies & Mistakes to Avoid",
  description:
    "Master guide to writing a perfect marriage biodata. Learn how to choose the right photo, write genuine hobbies, craft a strong About Me, and avoid the 8 fatal mistakes families notice instantly.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-tips" },
  openGraph: {
    title: "Biodata Tips: Photo, Hobbies & Mistakes to Avoid",
    description:
      "Master guide to writing a perfect marriage biodata. Learn how to choose the right photo, write genuine hobbies, craft a strong About Me, and avoid the 8 fatal mistakes families notice instantly.",
    url: "https://biodatabuilder.in/articles/biodata-tips",
    images: [{ url: "/biodata-photo-tips.png", width: 800, height: 600, alt: "Tips for the perfect marriage biodata photo" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which photo is best for marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "A recent head-and-shoulders shot with a plain background and formal or traditional attire works best. Your face should fill 70–80% of the frame. Avoid heavily filtered selfies or group photos." },
    },
    {
      "@type": "Question",
      name: "What hobbies should I write in my biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Write 3–5 genuine, specific hobbies. Avoid generic phrases like 'listening to music' or 'watching TV'. Instead use specific ones like 'Carnatic vocal training', 'weekend trekking', or 'baking eggless desserts'." },
    },
    {
      "@type": "Question",
      name: "Should I mention salary in my biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. State a clear annual figure (e.g., '₹14 LPA'). Vague answers like 'as per industry standard' frustrate families and signal you have something to hide. Honesty builds trust from day one." },
    },
    {
      "@type": "Question",
      name: "How long should a marriage biodata be?",
      acceptedAnswer: { "@type": "Answer", text: "One page. Two pages maximum only if you have a very large family section. A concise, well-designed one-page biodata always makes a better impression than a dense two-pager." },
    },
    {
      "@type": "Question",
      name: "Should I send biodata as PDF or Word file?",
      acceptedAnswer: { "@type": "Answer", text: "Always PDF. A Word (.docx) file breaks on different phones — fonts shift, photos vanish, margins move. A PDF looks identical on every device and is the professional standard." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper
        publishedDate="2026-06-13"
        related={[
          { title: "How to Write About Me in Marriage Biodata", slug: "how-to-write-biodata-about-me" },
          { title: "Modern vs Traditional Biodata", slug: "modern-vs-traditional-biodata" },
          { title: "Biodata Format for WhatsApp", slug: "biodata-format-for-whatsapp" },
        ]}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Biodata Tips: The Complete Master Guide to Photos, Hobbies & Mistakes
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* TL;DR */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">TL;DR — Key Takeaways</p>
            <p className="text-amber-800 dark:text-amber-200">Use a <strong>recent passport-style photo</strong> with a plain background. Write <strong>3–5 specific hobbies</strong> (not &quot;listening to music&quot;). Fill the About Me section with a real sentence. State your income clearly. Always share as <strong>PDF — never Word</strong>. Use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">free biodata builder</Link> to get a polished, professional result in 2 minutes.</p>
          </div>

          {/* Hero Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-md">
            <Image src="/biodata-photo-tips.png" alt="Tips for choosing the perfect marriage biodata photo" width={800} height={600} className="w-full h-auto" priority />
          </div>

          {/* TOC */}
          <nav className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
            <p className="font-bold text-zinc-900 dark:text-white mb-3">In This Master Guide</p>
            <ol className="list-decimal pl-5 space-y-1 text-base text-indigo-600 dark:text-indigo-400">
              <li><a href="#photo" className="hover:underline">Part 1 — Choosing the Perfect Biodata Photo</a></li>
              <li><a href="#hobbies" className="hover:underline">Part 2 — What to Write in Hobbies &amp; Interests</a></li>
              <li><a href="#about-me" className="hover:underline">Part 3 — How to Write a Strong About Me</a></li>
              <li><a href="#expectations" className="hover:underline">Part 4 — Partner Expectations: What to Include</a></li>
              <li><a href="#mistakes" className="hover:underline">Part 5 — 8 Fatal Mistakes to Avoid</a></li>
              <li><a href="#checklist" className="hover:underline">Self-Check Checklist</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ol>
          </nav>

          {/* Intro */}
          <p>A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> is often the very first impression your family makes on a prospective match. Families across India — from UP to Tamil Nadu, Gujarat to West Bengal — receive dozens of biodatas every week. Small missteps — a blurry photo, a vague &quot;about me,&quot; or an overwhelming layout — can mean your profile gets skipped entirely before anyone even reads your name.</p>
          <p>This master guide walks you through every critical component: how to choose the right photo, how to write genuine hobbies, how to nail your About Me, what to say about partner expectations, and the 8 biggest mistakes families notice instantly. Whether you&apos;re creating a <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata for a boy</Link> or a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata for a girl</Link>, these tips apply universally.</p>

          {/* CTA Top */}
          <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl text-center">
            <p className="text-indigo-800 dark:text-indigo-200 mb-3">Want to put these tips into practice right now? Our builder handles the design so you can focus on the content.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Build My Biodata — Free &rarr;</Link>
          </div>

          {/* Photo Tips */}
          <h2 id="photo" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Part 1: Choosing the Perfect Biodata Photo</h2>
          <p>Your photo is seen before your name is read. A good photo sparks curiosity; a poor one closes the door before it opens. Here&apos;s exactly what works:</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">A. Frame &amp; Composition</h3>
          <p>Use a <strong className="font-semibold text-zinc-900 dark:text-white">head-and-shoulders (passport-style) shot</strong>. Your face should fill 70–80% of the frame. The photo must represent how you look <em>today</em> — not 5 years ago. Families appreciate authenticity over flattering old photos that lead to &quot;you look different&quot; comments at the first meeting.</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">B. Background &amp; Attire</h3>
          <p>Choose a <strong className="font-semibold text-zinc-900 dark:text-white">plain, uncluttered background</strong> — a white wall, a soft outdoor setting, or a studio backdrop. Wear something you would wear to a formal family gathering: traditional or smart-casual attire. Avoid busy prints that distract from your face.</p>

          <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/examples/Before-after.png" alt="Good vs bad biodata photo example" width={1200} height={600} className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">C. Photo Do&apos;s and Don&apos;ts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead><tr className="bg-zinc-100 dark:bg-zinc-800"><th className="p-3 font-semibold text-zinc-900 dark:text-white">✅ Do This</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">❌ Avoid This</th></tr></thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr><td className="p-3">Recent photo (within 1 year)</td><td className="p-3">Photos more than 2–3 years old</td></tr>
                <tr><td className="p-3">Plain, uncluttered background</td><td className="p-3">Busy tourist spot backgrounds</td></tr>
                <tr><td className="p-3">Traditional or smart-casual attire</td><td className="p-3">Party wear, heavy jewellery</td></tr>
                <tr><td className="p-3">Natural, warm smile</td><td className="p-3">Unnatural poses or heavy filters</td></tr>
                <tr><td className="p-3">Solo portrait (passport-style)</td><td className="p-3">Cropped group photos</td></tr>
                <tr><td className="p-3">Good natural or studio lighting</td><td className="p-3">Dark, grainy, or blurry shots</td></tr>
              </tbody>
            </table>
          </div>

          {/* Hobbies */}
          <h2 id="hobbies" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Part 2: What to Write in Hobbies &amp; Interests</h2>
          <p>The hobbies section is one of the most underrated parts of a biodata. It&apos;s the only place where your <em>personality</em> gets to speak beyond cold facts. A well-written hobbies section creates instant connection points — a shared interest can be the reason a family decides to call.</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Why Generic Hobbies Hurt You</h3>
          <p>Phrases like &quot;listening to music,&quot; &quot;watching TV,&quot; and &quot;spending time with family&quot; are listed by nearly every person. They tell the reader absolutely nothing unique about you. Worse, they signal a lack of effort — and families notice.</p>

          <div className="my-6 rounded-2xl overflow-hidden shadow-md">
            <Image src="/examples/Biodata-hobbies-good-bad.png" alt="Good vs bad hobbies to write in marriage biodata" width={1024} height={1024} className="w-full h-auto" />
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Hobby Examples by Category</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead><tr className="bg-zinc-100 dark:bg-zinc-800"><th className="p-3 font-semibold text-zinc-900 dark:text-white">Category</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">❌ Generic (Avoid)</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">✅ Specific (Write This)</th></tr></thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr><td className="p-3">Music</td><td className="p-3">Listening to music</td><td className="p-3">Carnatic vocal training (8 years)</td></tr>
                <tr><td className="p-3">Sports</td><td className="p-3">Playing sports</td><td className="p-3">Badminton &amp; weekend trekking</td></tr>
                <tr><td className="p-3">Reading</td><td className="p-3">Reading books</td><td className="p-3">Reading historical fiction (Amish Tripathi)</td></tr>
                <tr><td className="p-3">Cooking</td><td className="p-3">Cooking</td><td className="p-3">Baking eggless desserts</td></tr>
                <tr><td className="p-3">Creative</td><td className="p-3">Drawing</td><td className="p-3">Mandala art &amp; watercolour painting</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">Pick <strong className="font-semibold text-zinc-900 dark:text-white">3–5 genuine ones</strong>. Listing 12 looks like padding. Listing things you don&apos;t actually do will lead to awkward conversations later.</p>

          {/* About Me Tips */}
          <h2 id="about-me" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Part 3: How to Write a Strong &quot;About Me&quot;</h2>
          <p>The About Me section is your <strong className="font-semibold text-zinc-900 dark:text-white">elevator pitch</strong>. Most people either leave it empty or write something generic like &quot;I am a simple and homely person.&quot; Both are wasted opportunities.</p>
          <p>A strong About Me is <strong>4–6 sentences</strong> covering: who you are professionally, what you value personally, one cultural or regional detail, and what kind of partner you&apos;re looking for. For a detailed walkthrough with 6 ready-to-use examples, read our <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">complete About Me writing guide</Link>.</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-6 mb-3">Quick Example</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">❌ Weak</p>
              <p className="text-base">&quot;I am a simple, homely person looking for a life partner. I respect my family values.&quot;</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ Strong</p>
              <p className="text-base">&quot;A chartered accountant based in Pune, I balance a demanding career with weekend treks and Hindustani classical music. Rooted in Maharashtrian values, I&apos;m looking for a partner who&apos;s equally career-driven and values family time.&quot;</p>
            </div>
          </div>

          {/* Partner Expectations */}
          <h2 id="expectations" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Part 4: Partner Expectations — What to Write &amp; What Not To</h2>
          <p>The partner expectations section is where many people go wrong in two opposite directions — either they write nothing, or they list 15 rigid requirements. Both hurt your chances.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead><tr className="bg-zinc-100 dark:bg-zinc-800"><th className="p-3 font-semibold text-zinc-900 dark:text-white">Approach</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">Example</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">Effect</th></tr></thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr><td className="p-3">❌ Too rigid</td><td className="p-3">&quot;Must be from same city, below 5&apos;4&quot;, 20+ LPA, same sub-caste&quot;</td><td className="p-3">Looks inflexible, reduces matches</td></tr>
                <tr><td className="p-3">❌ Too vague</td><td className="p-3">&quot;Looking for a good person&quot;</td><td className="p-3">Tells the family nothing</td></tr>
                <tr><td className="p-3">✅ Just right</td><td className="p-3">&quot;Looking for an educated, employed partner who values both family and personal growth. Open to different cities.&quot;</td><td className="p-3">Clear, positive, open</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">List your 2–3 absolute requirements and stay open on the rest. Read our <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">girl&apos;s biodata guide</Link> or <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">boy&apos;s biodata guide</Link> for more specific examples.</p>

          {/* CTA Middle */}
          <div className="mt-10 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Ready to Apply These Tips?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-4">Our builder helps you fill every section correctly — great templates, PDF download, WhatsApp sharing. Free, no sign-up.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Create My Biodata &rarr;</Link>
          </div>

          {/* Mistakes */}
          <h2 id="mistakes" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Part 5: 8 Fatal Mistakes to Avoid</h2>
          <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/biodata-mistakes-avoid.png" alt="Common mistakes to avoid in Indian marriage biodata" width={800} height={600} className="w-full h-auto" />
          </div>
          <ol className="list-decimal pl-6 space-y-5">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Leaving the About Me Empty</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">This is your elevator pitch. &quot;I am a simple person&quot; is not an elevator pitch. Write 4–6 real sentences. See our <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me guide</Link> for examples.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Being Vague About Income</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Writing &quot;Good&quot; or &quot;As per industry standard&quot; signals you&apos;re hiding something. State a clear annual figure like &quot;₹14 LPA.&quot; Honesty builds trust from day one.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Omitting Astrological Details</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">For families that care about Kundali matching, omitting Rashi, Nakshatra, and <Link href="/articles/manglik-biodata-format" className="text-indigo-600 dark:text-indigo-400 hover:underline">Manglik status</Link> forces a follow-up call for basic information. Include them upfront.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Sending a Word File Instead of PDF</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">A .docx file shared on WhatsApp often breaks on different phones — fonts shift, photos vanish. Always share as a <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">PDF on WhatsApp</Link>.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Using an Old or Filtered Photo</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">A photo from 5 years ago or one with heavy beauty filters sets a false expectation. It almost always leads to an awkward first meeting. Use a natural, recent photo.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Extremely Restrictive Expectations</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Over-filtering on paper makes you seem rigid before anyone has even spoken to you. List your 2–3 absolute requirements and stay open on the rest.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Making It More Than 2 Pages</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Families scan dozens of biodatas. A concise one-page biodata always performs better than a three-page document where the important details are buried.</p>
            </li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">No Contact Information or Wrong Number</strong>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">This happens more than you think. Always double-check your mobile number, and consider listing a parent&apos;s number as an alternate contact.</p>
            </li>
          </ol>

          {/* Checklist */}
          <h2 id="checklist" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Final Self-Check Before You Send</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
            <ul className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <li>☐ Photo is recent (within 1 year), plain background, natural smile</li>
              <li>☐ About Me section has 4–6 real, specific sentences</li>
              <li>☐ Hobbies are specific — not &quot;listening to music&quot; or &quot;watching TV&quot;</li>
              <li>☐ Income stated as a clear figure (e.g., ₹14 LPA)</li>
              <li>☐ Birth time and Gotra included (for Kundali matching families)</li>
              <li>☐ Partner expectations are warm and open — not a rigid checklist</li>
              <li>☐ Biodata is 1 page (2 pages maximum)</li>
              <li>☐ Saved and shared as PDF — not Word or screenshot</li>
              <li>☐ Mobile number is correct and active</li>
              <li>☐ A parent or family member has read and approved it</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Which photo is best for marriage biodata?</h3><p>A recent head-and-shoulders shot with a plain background and traditional or formal attire. Your face should fill 70–80% of the frame. Avoid selfies, group photos, and heavy filters.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What hobbies should I write in my biodata?</h3><p>Write 3–5 genuine, specific hobbies. Avoid generic phrases like &quot;listening to music.&quot; Use specific ones like &quot;Carnatic vocal training,&quot; &quot;weekend trekking,&quot; or &quot;baking eggless desserts.&quot;</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should I mention salary in my biodata?</h3><p>Yes. State a clear annual figure (e.g., &quot;₹14 LPA&quot;). Vague answers frustrate families and signal you have something to hide. Honesty builds trust from day one.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">How long should a marriage biodata be?</h3><p>One page. Two pages maximum only if your family section is large. A concise, well-designed one-page biodata always makes a better impression than a dense two-pager.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should I send biodata as PDF or Word file?</h3><p>Always PDF. A Word file breaks on different phones — fonts shift, photos vanish, margins move. A PDF looks identical on every device and is the professional standard.</p></div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Conclusion</h2>
          <p>A great marriage biodata doesn&apos;t require a designer or hours of effort. It requires honesty, specificity, and attention to the details families actually look for. Use a recent, natural photo. Write real hobbies. Fill your About Me with personality. State your income clearly. And always share as a PDF.</p>
          <p>Whether you&apos;re creating a <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Hindu biodata</Link>, a <Link href="/articles/marriage-biodata-format-for-muslim" className="text-indigo-600 dark:text-indigo-400 hover:underline">Muslim biodata</Link>, or a <Link href="/articles/marriage-biodata-format-for-christian" className="text-indigo-600 dark:text-indigo-400 hover:underline">Christian biodata</Link>, these universal tips apply. Now go build one that genuinely represents you.</p>

          {/* CTA Bottom */}
          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Put These Tips Into Action</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-6">Build a professional biodata in 2 minutes. Beautiful templates, PDF download, WhatsApp sharing. Completely free.</p>
            <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Build My Biodata — Free</Link>
          </div>

          {/* What's Next */}
          <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What to Read Next</h3>
            <ul className="space-y-2 text-base">
              <li>✍️ <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">How to Write About Me in Marriage Biodata — 6 Examples</Link></li>
              <li>⚖️ <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Modern vs Traditional Biodata — Which Style Suits You?</Link></li>
              <li>📱 <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Format for WhatsApp — Tips &amp; PDF Guide</Link></li>
              <li>🔮 <Link href="/articles/kundali-details-in-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Kundali Details in Biodata — What to Include</Link></li>
              <li>👨 <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Marriage Biodata for Boy — Format &amp; Samples</Link></li>
              <li>👩 <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">Shaadi Biodata Format for Girl</Link></li>
              <li>📜 <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">Complete Marriage Biodata Guide — All Sections Explained</Link></li>
            </ul>
          </div>

        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
