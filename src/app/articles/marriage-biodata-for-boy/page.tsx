import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata for Boy | Complete Groom Biodata Format Guide",
  description: "Complete guide to creating a marriage biodata for a boy (groom). What sections to include, sample text, income tips, common mistakes, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-for-boy" },
  openGraph: {
    title: "Marriage Biodata for Boy | Complete Groom Biodata Format Guide",
    description: "Complete guide to creating a marriage biodata for a boy (groom). What sections to include, sample text, income tips, common mistakes, and free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-for-boy",
    images: [{ url: "/examples/boy_biodata_infographic.webp", width: 1200, height: 630, alt: "Marriage Biodata Format For Boy" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should be included in a marriage biodata for a boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A groom's biodata should include: Personal details (name, DOB, height, blood group), Astrological details (Rashi, Nakshatra, Gotra, Manglik status), Education and career (with income clearly stated), Family background (parents and siblings), About Me (a personal statement), Expectations (partner preferences), and Contact information.",
      },
    },
    {
      "@type": "Question",
      name: "Should a boy mention income in his marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always. State a specific income range (e.g. '₹18 LPA') rather than vague phrases like 'good income' or 'as per industry standard'. Families need this to assess lifestyle compatibility. Vagueness creates suspicion and delays the process.",
      },
    },
    {
      "@type": "Question",
      name: "What photo should a boy use for his marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a professional head-and-shoulders photo with a clean background. Wear formal or smart-casual attire — something you would wear to a family function. Avoid group photos, sunglasses, or heavily filtered images. The photo should look like you today, not years ago.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a groom's marriage biodata be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exactly 1 page. A longer biodata signals disorganisation; a shorter one signals you haven't put in effort. BiodataBuilder templates are designed to fit all essential sections cleanly on a single page.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good 'About Me' for a boy's biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Write 4–6 sentences covering: who you are (personality + values), what you do (career + lifestyle), and what you are looking for (partner expectations). Avoid clichés like 'I am a simple person'. Be specific — mention your city, something you are passionate about, and a genuine quality you bring to a relationship.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Marriage Biodata for Boy", item: "https://biodatabuilder.in/articles/marriage-biodata-for-boy" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marriage Biodata for Boy — Format, Tips & Examples",
  description: "How to create a marriage biodata for a boy in India. What sections to include, sample formats, and tips for making a great impression.",
  image: "/examples/boy_biodata_infographic.webp",
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
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Marriage Biodata for Boy: The Complete Groom Format Guide
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
          For a groom, a marriage biodata must project stability, ambition, and strong family values. This complete guide covers everything a boy needs to include to get the best responses.
        </p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>Income is mandatory:</strong> State your exact CTC or a tight range (e.g., ₹15-18 LPA). Vague phrases like &quot;good salary&quot; cause immediate suspicion.</li>
              <li><strong>Clarity over clutter:</strong> A groom&apos;s biodata should project stability. Keep it to exactly one page, beautifully formatted as a PDF.</li>
              <li><strong>Family background matters:</strong> Be extremely clear about your parents&apos; professions and whether you live in a joint or nuclear family.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-950/20">
              <Image 
                src="/examples/boy_biodata_infographic.webp" 
                alt="Marriage Biodata Format for Boy (Groom) showing structured layout and premium design" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              A premium groom biodata layout designed to highlight professional achievements and family values.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#intro" className="hover:underline">1. Why the Groom&apos;s Biodata is Evaluated Differently</a></li>
              <li><a href="#sections" className="hover:underline">2. The Complete Checklist of Sections</a></li>
              <li><a href="#career" className="hover:underline">3. Deep Dive: Getting the Career Section Right</a></li>
              <li><a href="#about-me" className="hover:underline">4. Sample &quot;About Me&quot; Paragraphs</a></li>
              <li><a href="#expectations" className="hover:underline">5. How to State Your Expectations</a></li>
              <li><a href="#mistakes" className="hover:underline">6. Top Mistakes Boys Make</a></li>
              <li><a href="#faq" className="hover:underline">7. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="intro" className="scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">1. Why the Groom&apos;s Biodata is Evaluated Differently</h2>
            <p>
              A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata for a boy</strong> is the single most important document in the traditional Indian matchmaking process. While a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">girl&apos;s biodata</Link> is often read to understand personality and adaptability, a boy&apos;s biodata is aggressively evaluated for <em>stability</em>.
            </p>
            <p className="mt-4">
              Families on the bride&apos;s side are looking for absolute clarity regarding your professional trajectory, your financial independence, and the type of family structure you come from. A well-structured, honest, and polished <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">marriage biodata</Link> signals that you are organised, transparent, and serious about the process. Conversely, a sloppy Word document with missing information will drastically lower your response rate.
            </p>
          </section>

          {/* BLOCK: SECTIONS_TABLE */}
          <section id="sections" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">2. The Complete Checklist of Sections</h2>
            <p className="mb-6">
              If you omit a key section, the bride&apos;s family will simply assume you have something to hide. Ensure your biodata includes every single block listed below.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Section</th>
                    <th className="px-5 py-3 font-semibold">What to Include</th>
                    <th className="px-5 py-3 font-semibold">Groom-Specific Tip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Professional Portrait", "Head-and-shoulders shot, formal attire", "No sunglasses, no cars in the background, no group selfies."],
                    ["Personal Details", "Name, DOB, Time/Place of birth, Height", "Be precise with your height. Don't round up 2 inches."],
                    ["Astrological Data", "Gotra, Rashi, Nakshatra, Manglik status", "Always state <a href='/articles/manglik-biodata-format' class='text-indigo-600 hover:underline'>Manglik status</a> explicitly (Yes/No/Anshik)."],
                    ["Education & Career", "Degree, College, Job Title, Company, CTC", "This is the most scrutinized section. Be 100% transparent here."],
                    ["Family Details", "Parents' names/jobs, siblings, family type", "Clearly state if you live in a nuclear or joint family."],
                    ["About Me", "4–6 sentence personal statement", "Mention a hobby that shows you have a life outside of work."],
                    ["Expectations", "2–3 broad partner preferences", "Keep it respectful. Avoid demanding a 'fair and tall' girl."],
                    ["Contact", "WhatsApp number, Email, Current City", "If your parents are handling the search, list their number."],
                  ].map(([section, include, note]) => (
                    <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-bold text-zinc-800 dark:text-zinc-200">{section}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{include}</td>
                      <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs italic" dangerouslySetInnerHTML={{ __html: note }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* BLOCK: DEEP_DIVE_CAREER */}
          <section id="career" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">3. Deep Dive: Getting the Career Section Right</h2>
            <p>
              In the Indian arranged marriage system, a boy&apos;s financial stability is heavily scrutinised. The biggest mistake grooms make is being vague about their income.
            </p>
            <p className="mt-4 mb-6">
              When a family reads &quot;Good Income&quot; or &quot;As per industry standards,&quot; they often assume you are either hiding a low salary or are insecure about it. <strong className="font-semibold text-zinc-900 dark:text-white">Transparency builds trust immediately.</strong> This is especially crucial for modern <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline">marriage biodatas</Link>.
            </p>

            {/* IMAGE 1 */}
            <figure className="my-8">
              <div className="relative w-full max-w-2xl mx-auto aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800">
                <Image src="/examples/groom_salary_transparency.webp" alt="Infographic showing why stating exact salary is better than vague terms in a groom's biodata" fill className="object-cover" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                Always state a specific range rather than vague descriptions like &quot;Good Income.&quot;
              </figcaption>
            </figure>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3">How to write it:</h3>
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5">
                  <li>List your highest degree and the institute (e.g., B.Tech from NIT Trichy).</li>
                  <li>State your exact job title and current company.</li>
                  <li>Mention your work location (city), as this impacts relocation decisions for the bride.</li>
                  <li>State a specific income range (e.g., ₹18-20 LPA) rather than an exact digit if you prefer some privacy.</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-indigo-900 dark:text-indigo-200 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  The Perfect Example
                </h3>
                <div className="space-y-2 text-sm text-indigo-800 dark:text-indigo-300 font-mono bg-white dark:bg-zinc-950/50 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                  <p><span className="text-indigo-400 dark:text-indigo-500">Education:</span> MBA from IIM Indore</p>
                  <p><span className="text-indigo-400 dark:text-indigo-500">Profession:</span> Senior Product Manager at Microsoft</p>
                  <p><span className="text-indigo-400 dark:text-indigo-500">Location:</span> Hyderabad (Hybrid)</p>
                  <p><span className="text-indigo-400 dark:text-indigo-500">Income:</span> ₹28 - ₹32 LPA</p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOCK: ABOUT_ME_SAMPLES */}
          <section id="about-me" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">4. Sample &quot;About Me&quot; Paragraphs</h2>
            <p className="mb-6">
              The <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me section</Link> is your chance to show the bride that you are a human being, not just a paycheck. Just like in a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">girl&apos;s biodata</Link>, use 4–6 sentences to convey your personality, your lifestyle, and your values.
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 relative">
                <span className="absolute top-4 left-4 text-5xl text-zinc-200 dark:text-zinc-800 leading-none font-serif">&quot;</span>
                <p className="relative z-10 pl-8 text-zinc-700 dark:text-zinc-300 italic">
                  I am a civil engineer working in Mumbai with a deep passion for long-distance cycling and Indian classical music. Raised in a mid-sized joint family in Nagpur, I balance a modern, ambitious professional outlook with strong traditional family values. I am looking for a life partner who is independent, warm, and values both personal career growth and family togetherness.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 relative">
                <span className="absolute top-4 left-4 text-5xl text-zinc-200 dark:text-zinc-800 leading-none font-serif">&quot;</span>
                <p className="relative z-10 pl-8 text-zinc-700 dark:text-zinc-300 italic">
                  I am an entrepreneur running my own logistics business in Delhi. I consider myself an extrovert who loves weekend road trips, exploring new cafes, and staying fit. I come from an upper-middle-class nuclear family that believes in giving everyone the space to grow. I am seeking a partner who is communicative, has a good sense of humor, and is looking for a relationship built on equal partnership and mutual respect.
                </p>
              </div>
            </div>
          </section>

          {/* BLOCK: EXPECTATIONS */}
          <section id="expectations" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">5. How to State Your Expectations</h2>
            <p className="mb-6">
              The modern Indian bride is highly educated and independent. If your expectations section reads like a demanding checklist (e.g., &quot;Must be fair, tall, slim, and willing to cook&quot;), you will instantly alienate high-quality matches.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-3 uppercase tracking-wide">✅ Respectful &amp; Open</p>
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed">&quot;Looking for an educated, working girl — open to both employed and homemaker preferences. Should be comfortable in a joint family setup. Caste no bar for the right match.&quot;</p>
              </div>
              <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-3 uppercase tracking-wide">❌ Rigid &amp; Demanding</p>
                <p className="text-sm italic text-zinc-700 dark:text-zinc-300 leading-relaxed">&quot;Looking for a very fair and beautiful girl, strict vegetarian, minimum 5&apos;5&quot;. Must be willing to leave her job to take care of my parents.&quot;</p>
              </div>
            </div>
          </section>

          {/* BLOCK: COMMON_MISTAKES */}
          <section id="mistakes" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">6. Top Mistakes Boys Make</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Mistake 1: Using a Casual Selfie or Group Photo</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    If the bride&apos;s family has to guess which boy in the photo is you, you have already failed. A poorly chosen photo signals a lack of seriousness. Do not use photos with sunglasses, wedding guest group shots, or bathroom selfies. Compare your photo quality to top <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Hindu marriage profiles</Link> to ensure it meets the standard.
                  </p>
                  
                  {/* IMAGE 2 */}
                  <figure className="my-6">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <Image src="/examples/groom_biodata_photo_tips.webp" alt="Do's and Don'ts of groom biodata photos" fill className="object-contain" />
                    </div>
                  </figure>

                  <p className="text-zinc-600 dark:text-zinc-400 font-semibold mt-2">
                    ✅ The Fix: Use a clear, well-lit, waist-up portrait taken by a professional or with a good portrait mode on a phone. Wear a crisp shirt or suit.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Mistake 2: Hiding Your Manglik Status</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Some families hide negative astrological details hoping the other family will fall in love with the boy first. This never works. If a family requires a non-Manglik match, they will find out eventually. It is better to declare it clearly; learn more in our <Link href="/articles/manglik-biodata-format" className="text-indigo-600 dark:text-indigo-400 hover:underline">guide to Manglik biodatas</Link>.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-semibold">
                    ✅ The Fix: Be absolutely clear about your Manglik/Kuja Dosha status, Rashi, and Nakshatra upfront.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Mistake 3: Sending a Messy Word Document</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    Sending a `.docx` file on WhatsApp is a disaster waiting to happen. The fonts will break, the photo will move, and it looks like a cheap draft rather than a final proposal. You can read why in our breakdown of <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline">Word vs PDF biodatas</Link>. Also, avoid simple text messages; see our guide on the <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">WhatsApp biodata format</Link>.
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 font-semibold">
                    ✅ The Fix: Always export your biodata as a locked PDF. It looks premium and guarantees the design stays intact.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { 
                  q: "What should be included in a marriage biodata for a boy?", 
                  a: "Personal details, astrological details (Rashi, Nakshatra, Gotra, Manglik status), education and career (with specific income), family background, About Me paragraph, expectations, and contact information." 
                },
                { 
                  q: "Should a boy mention income in his marriage biodata?", 
                  a: "Yes — always. State a specific range (e.g. '₹18-20 LPA') rather than vague phrases like 'good income'. Families need this for lifestyle compatibility assessment, and vagueness creates suspicion." 
                },
                { 
                  q: "What photo should a boy use for his marriage biodata?", 
                  a: "A professional head-and-shoulders shot with a clean background. Wear formal or smart-casual attire. Avoid group photos, sunglasses, or heavily filtered selfies." 
                },
                { 
                  q: "How long should a groom's marriage biodata be?", 
                  a: "Exactly 1 page. A multi-page document looks like a job resume. BiodataBuilder templates are specifically designed to fit all essential sections cleanly on a single page." 
                },
                { 
                  q: "What is a good 'About Me' for a boy's biodata?", 
                  a: "A 4–6 sentence paragraph covering: your personality and values, your career and lifestyle, and what you are looking for in a partner. Be specific — mention your city, a genuine interest, and what you bring to a relationship." 
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
              Creating a strong groom biodata is about projecting stability, honesty, and respect. By being transparent about your career, thoughtful in your &quot;About Me&quot; section, and choosing a professional design, you set the right tone from the very first interaction. Remember, this document represents your family&apos;s prestige—take the time to get it right.
            </p>
          </section>


          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <section className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/shaadi-biodata-format-for-girl" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Shaadi Biodata Format for Girl</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">What the bride&apos;s family looks for — understand the other side.</p>
              </Link>
              <Link href="/articles/how-to-write-biodata-about-me" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">How to Write &quot;About Me&quot; in a Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">6 sample texts to inspire a genuine About Me paragraph.</p>
              </Link>
              <Link href="/articles/kundali-details-in-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Kundali Details in Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Which horoscope fields are required and how to fill them correctly.</p>
              </Link>
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Biodata Tips: Photos, Hobbies &amp; Mistakes</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">The most common biodata mistakes and how to fix them.</p>
              </Link>
            </div>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Groom Biodata Today</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto">
              Build a premium, beautiful marriage biodata tailored for boys. Completely free, no watermarks, and instant PDF download.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata For Boy <MoveRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
