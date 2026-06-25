import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marriage Biodata Maker Online Free | Create Biodata PDF",
  description:
    "Create beautiful Indian marriage biodata online for free. Choose modern biodata templates, add your details, and instantly download PDF for WhatsApp sharing.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-for-marriage" },
  openGraph: {
    type: "article",
    title: "Marriage Biodata Maker Online Free | Create Biodata PDF",
    description:
      "Create beautiful Indian marriage biodata online for free. Choose modern biodata templates, add your details, and instantly download PDF for WhatsApp sharing.",
    url: "https://biodatabuilder.in/articles/biodata-for-marriage",
    images: [{ url: "/examples/Hero-composite.webp", width: 1200, height: 630, alt: "Marriage Biodata Templates" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata is a one-page document used in Indian arranged marriages to introduce a person to prospective partners and their families. It includes personal details, family background, education, occupation, and contact information.",
      },
    },
    {
      "@type": "Question",
      name: "Is marriage biodata necessary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most arranged marriage processes in India, a biodata is the very first step. It helps families make an initial assessment before deciding to arrange a meeting.",
      },
    },
    {
      "@type": "Question",
      name: "How many pages should a marriage biodata be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata should be exactly 1 page. Never more than 2 pages. Families receive many biodatas — a concise, well-formatted single page is far more effective than a multi-page document.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create biodata online for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! BiodataBuilder.in lets you create, preview, and download a beautiful marriage biodata in PDF or PNG format completely free — no sign-up, no watermark, no hidden charges.",
      },
    },
    {
      "@type": "Question",
      name: "Which photo should I use in a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a recent, clear, passport-style photo taken in good lighting. Your face should be clearly visible. Avoid group photos, heavily filtered selfies, or blurry WhatsApp profile pictures.",
      },
    },
    {
      "@type": "Question",
      name: "Should salary be included in marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, including your annual income (as a range, e.g. ₹12–15 LPA) is generally recommended. It helps families assess compatibility quickly and shows transparency.",
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
    { "@type": "ListItem", position: 3, name: "Biodata for Marriage", item: "https://biodatabuilder.in/articles/biodata-for-marriage" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marriage Biodata Maker Online Free | Create Biodata PDF",
  description: "Create beautiful Indian marriage biodata online for free. Choose modern biodata templates, add your details, and instantly download PDF for WhatsApp sharing.",
  image: "/examples/Hero-composite.webp",
  datePublished: "2026-05-04",
  dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
};

export default function BiodataForMarriagePillarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ArticleWrapper publishedDate="2026-05-04">
        {/* ── H1 ── */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Biodata for Marriage: Create Beautiful Marriage Biodata Online Free
        </h1>

        {/* ── HERO IMAGE ── */}
        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image
            src="/examples/Hero-composite.webp"
            alt="Beautiful Indian marriage biodata templates — traditional and modern designs"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
            Sample marriage biodata templates created with BiodataBuilder
          </p>
        </div>

        {/* ── INTRO ── */}
        <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> — also called a matrimonial biodata or <strong className="font-semibold text-zinc-900 dark:text-white">bio data for marriage</strong> — is the single most important document in the Indian arranged marriage process. It is your family&apos;s first impression to another family.
          </p>
          <p>
            Whether you are searching for a <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata format for a boy</strong>, a <strong className="font-semibold text-zinc-900 dark:text-white">shaadi biodata format for a girl</strong>, or a simple one-page matrimonial profile to share on WhatsApp — this guide covers everything and shows you how to create one for free in under 5 minutes.
          </p>
          <p>
            BiodataBuilder lets you pick from beautiful traditional Indian templates, fill in your details, and instantly download a print-ready <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata PDF</strong> — no registration, no watermark, completely free.
          </p>
        </div>

        {/* ── HERO CTA ── */}
        <div className="my-10 flex justify-center">
          <Link
            href="/create"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all shadow-lg"
          >
            Create Biodata Now <MoveRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* ── SECTION 1 ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">What Is a Marriage Biodata?</h2>
          <p>
            In Indian culture, a <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata format</strong> is a structured one-page document that families exchange when exploring potential marriage alliances. Think of it as a structured personal profile — not a resume for jobs, but an introduction for families.
          </p>
          <p>
            Traditionally, these profiles were handwritten or typed on plain paper and passed between relatives and community matchmakers. Today, they are shared digitally as polished PDFs on WhatsApp, uploaded to matrimony websites, or sent via email.
          </p>
          <p>
            Unlike a Western dating profile, an Indian marriage biodata includes not just personal details, but family background, astrological information, and community roots — because in arranged marriages, a family is choosing for a family, not just one person choosing for themselves. Read our dedicated guide on <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">the difference between a biodata and a resume</Link> to understand this more clearly.
          </p>

          {/* ── SECTION 2 — WHAT TO INCLUDE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">What Should Be Included in a Marriage Biodata?</h2>
          <p>
            A strong <strong className="font-semibold text-zinc-900 dark:text-white">wedding biodata format</strong> is concise and well-organised. Every field should communicate relevant information quickly. Here are the essential sections:
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Section</th>
                  <th className="px-5 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Full Name", "Rahul Sharma"],
                  ["Date & Time of Birth", "15 March 1997, 6:30 AM"],
                  ["Height", "5′ 10″"],
                  ["Blood Group", "B+"],
                  ["Religion / Caste", "Hindu, Brahmin"],
                  ["Highest Education", "MBA — IIM Ahmedabad"],
                  ["Occupation", "Software Engineer, Infosys"],
                  ["Annual Income", "₹18–20 LPA"],
                  ["Rashi / Nakshatra", "Vrishabha / Rohini"],
                  ["Manglik Status", "Non-Manglik"],
                  ["Hobbies", "Travel, Reading, Cricket"],
                  ["Family Details", "Father: Govt. Officer, Mother: Homemaker, 1 Brother (married)"],
                  ["Contact Number", "+91 98765 43210"],
                ].map(([section, example]) => (
                  <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-400 italic">
            Keep the biodata to <strong className="not-italic font-semibold text-zinc-700 dark:text-zinc-300">exactly 1 page</strong>. Families receive many profiles — a clean, scannable single page is far more effective than a multi-page document.
          </p>

          {/* ── SECTION 3 — BOY EXAMPLE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Marriage Biodata Example for Boy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
              <Image
                src="/examples/Boy-biodata-example.webp"
                alt="Marriage biodata example for boy — traditional Indian format with photo"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p>
                A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata format for a boy</strong> should convey confidence and reliability. The photo should be a clear, recent portrait — not a casual selfie.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>Clean, minimal layout</strong> — easy for parents to read quickly</li>
                <li><strong>High-quality photo</strong> — portrait style, neutral background</li>
                <li><strong>Profession &amp; income clearly stated</strong></li>
                <li><strong>Family details included</strong> — shows stability</li>
                <li><strong>God icon at top</strong> — signals cultural alignment</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                Create Boy Biodata <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── SECTION 4 — GIRL EXAMPLE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Marriage Biodata Example for Girl</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 md:order-2">
              <p>
                A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata format for a girl</strong> benefits from warm, elegant templates — floral or ornamental designs are very popular. The content structure is identical to a boy&apos;s biodata.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>Traditional floral border</strong> — a favourite for Hindu families</li>
                <li><strong>Photo framed prominently</strong> — circular frame looks polished</li>
                <li><strong>Hobbies &amp; expectations clearly written</strong></li>
                <li><strong>Contact number of a parent</strong> is perfectly acceptable</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                Create Girl Biodata <MoveRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md md:order-1">
              <Image
                src="/examples/Girl-biodata-example.webp"
                alt="Marriage biodata example for girl — traditional Indian floral template"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* ── SECTION 5 — HOW TO CREATE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">How to Create a Marriage Biodata Online</h2>
          <p>You don&apos;t need a designer or Microsoft Word. Here&apos;s how to create a professional <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata</strong> in minutes:</p>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 my-8">
            {[
              { step: "01", title: "Choose a Template", desc: "Pick from traditional floral, gold ornate, or modern minimal designs." },
              { step: "02", title: "Enter Your Details", desc: "Fill in personal, family, education, and contact information." },
              { step: "03", title: "Upload Your Photo", desc: "Add a clear portrait and crop it using the built-in tool." },
              { step: "04", title: "Preview Your Biodata", desc: "See exactly how the final PDF will look before downloading." },
              { step: "05", title: "Download PDF Instantly", desc: "Get a pixel-perfect PDF or PNG — ready for WhatsApp or print." },
            ].map((s) => (
              <div key={s.step} className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-center">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ── MID-ARTICLE CTA ── */}
          <div className="my-10 p-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Create Your Biodata in Minutes</h3>
            <p className="text-indigo-100 text-sm mb-6">Free, beautiful, and ready to share on WhatsApp. No sign-up needed.</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-all shadow-lg"
            >
              Create My Marriage Biodata <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── WHATSAPP PREVIEW ── */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/examples/WhatsApp-preview.webp"
              alt="Marriage biodata PDF shared on WhatsApp — how it looks on mobile"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
              How a BiodataBuilder PDF looks when shared on WhatsApp
            </p>
          </div>

          {/* ── SECTION 6 — MISTAKES ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Common Marriage Biodata Mistakes to Avoid</h2>
          <p>A poorly designed <strong className="font-semibold text-zinc-900 dark:text-white">bio data for marriage</strong> can leave a bad first impression — even if the person is a great match. Avoid these:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Using a blurry WhatsApp photo</strong> — always use a recent, clear portrait taken in good natural light.</li>
            <li><strong>Spelling and grammar mistakes</strong> — have a family member proofread before sharing.</li>
            <li><strong>Overcrowded layout</strong> — stick to 1 page. Remove any field that is not essential.</li>
            <li><strong>Sharing as a Word document</strong> — Word files break on different phones. Always share as PDF or PNG.</li>
            <li><strong>Using outdated generic templates</strong> — a well-designed template signals effort and care.</li>
            <li><strong>Too much family information</strong> — keep family details to parents' names, occupation, and sibling count. Leave the rest for conversation.</li>
            <li><strong>No photo</strong> — biodatas with a clear photo receive significantly more responses than those without.</li>
          </ul>

          {/* ── BEFORE/AFTER ── */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/examples/Before-after.webp"
              alt="Before and after comparison — plain Word biodata vs professionally designed BiodataBuilder PDF"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
              Left: Typical plain Word template. Right: BiodataBuilder PDF output.
            </p>
          </div>

          {/* ── SECTION 7 — BIODATA VS RESUME ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Marriage Biodata vs Resume — What&apos;s the Difference?</h2>
          <p>Many people confuse the two or try to submit a modified CV as a biodata. Here is why that never works:</p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                <tr>
                  <th className="px-5 py-3 font-semibold">Marriage Biodata</th>
                  <th className="px-5 py-3 font-semibold">Resume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Used for marriage introductions", "Used for job applications"],
                  ["Includes family details & astrological info", "Focuses on work experience & skills"],
                  ["Shared with families & matchmakers", "Shared with recruiters & employers"],
                  ["1 page, always", "1–2 pages typically"],
                  ["Includes a personal photo", "Photo usually not required"],
                  ["Includes hobbies & expectations", "Includes certifications & achievements"],
                ].map(([bio, resume], i) => (
                  <tr key={i} className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-3 text-zinc-700 dark:text-zinc-300">{bio}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">{resume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── SECTION 8 — REGIONAL FORMATS ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Regional Marriage Biodata Formats</h2>
          <p>
            The <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata format</strong> varies slightly across communities and languages. BiodataBuilder supports all of them. Click any region below to read the specific guide:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
            {[
              { lang: "Marathi", script: "मराठी", emoji: "🪷", slug: "lagna-biodata-format-marathi", color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900 hover:border-amber-300" },
              { lang: "Hindi", script: "हिंदी", emoji: "🕉️", slug: "biodata-format-hindi", color: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900 hover:border-orange-300" },
              { lang: "Gujarati", script: "ગુજરાતી", emoji: "🌼", slug: "lagna-biodata-format-gujarati", color: "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900 hover:border-teal-300" },
              { lang: "Tamil", script: "தமிழ்", emoji: "🌺", slug: "thirumanam-biodata-format-tamil", color: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900 hover:border-rose-300" },
              { lang: "Telugu", script: "తెలుగు", emoji: "🌸", slug: "vivah-biodata-format-telugu", color: "bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900 hover:border-purple-300" },
            ].map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all hover:-translate-y-1 hover:shadow-md ${r.color}`}
              >
                <span className="text-2xl mb-2">{r.emoji}</span>
                <span className="font-bold text-zinc-900 dark:text-white text-sm">{r.lang}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{r.script}</span>
              </Link>
            ))}
          </div>

          {/* ── SECTION 9 — FAQ ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: "What is marriage biodata?", a: "A marriage biodata is a one-page document used in Indian arranged marriages. It includes personal details, family background, education, occupation, and contact info — serving as a family's introduction to another family." },
              { q: "Is marriage biodata necessary?", a: "Yes, in most arranged marriage processes in India, a biodata is the very first step. It helps families make an initial assessment before deciding to arrange a meeting." },
              { q: "How many pages should a marriage biodata be?", a: "Exactly 1 page. Never more than 2. Families receive many profiles — a concise, well-formatted single page is far more effective than a multi-page document." },
              { q: "Can I create a marriage biodata online for free?", a: "Yes! BiodataBuilder.in lets you create, preview, and download a beautiful marriage biodata in PDF or PNG format completely free — no sign-up, no watermark, no hidden fees." },
              { q: "Which photo should I use in my biodata?", a: "Use a recent, clear portrait taken in good natural light. Your face should be clearly visible. Avoid group photos, heavily filtered selfies, or blurry WhatsApp profile pictures." },
              { q: "Should I include my salary in a marriage biodata?", a: "Yes, including your annual income as a range (e.g. ₹12–15 LPA) is generally recommended. It shows transparency and helps families assess compatibility quickly." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* ── WHAT TO READ NEXT ── */}
          <section className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/marriage-biodata-for-boy" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Marriage Biodata for Boy (Groom Guide)</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">What families scrutinise in a groom&apos;s biodata — and how to nail every section.</p>
              </Link>
              <Link href="/articles/shaadi-biodata-format-for-girl" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Shaadi Biodata Format for Girl</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">A bride&apos;s biodata guide — sections, sample text, and design tips.</p>
              </Link>
              <Link href="/articles/how-to-write-biodata-about-me" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">How to Write &quot;About Me&quot; in a Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">6 real sample paragraphs and a step-by-step writing formula.</p>
              </Link>
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Biodata Tips: Photos, Hobbies &amp; Mistakes</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">The 7 most common biodata mistakes and exactly how to fix them.</p>
              </Link>
              <Link href="/articles/kundali-details-in-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Kundali Details in Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Rashi, Nakshatra, Gotra, Manglik — what to include and why it matters.</p>
              </Link>
              <Link href="/articles/biodata-format-for-whatsapp" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Biodata Format for WhatsApp</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">How to share your biodata perfectly on WhatsApp as a PDF.</p>
              </Link>
              <Link href="/articles/marriage-biodata-statistics-india" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Marriage Biodata Statistics in India</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Data and trends on arranged marriages and biodata usage in India.</p>
              </Link>
              <Link href="/articles/biodata-vs-resume-difference" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Biodata vs Resume vs CV</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">The complete breakdown of what makes each document different.</p>
              </Link>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">Create Your Marriage Biodata Online for Free</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              No sign-up. No watermark. Pick a beautiful template, fill in your details, and download a stunning PDF or PNG — ready to share on WhatsApp in under 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all shadow-lg"
              >
                Create Marriage Biodata <MoveRight className="w-5 h-5" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                Read More Guides
              </Link>
            </div>
          </div>

          <ArticleCTA />
        </div>
      </ArticleWrapper>
    </>
  );
}
