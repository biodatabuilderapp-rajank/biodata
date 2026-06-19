import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata vs Resume vs CV | The Real Difference Explained",
  description: "Confused between a biodata, resume, and CV? Learn the key differences, when to use each, and how to create the perfect document for jobs or marriage.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-vs-resume-difference" },
  openGraph: {
    title: "Biodata vs Resume vs CV | The Real Difference Explained",
    description: "Confused between a biodata, resume, and CV? Learn the key differences, when to use each, and how to create the perfect document for jobs or marriage.",
    url: "https://biodatabuilder.in/articles/biodata-vs-resume-difference",
    images: [{ url: "/examples/biodata-vs-resume-infographic.webp", width: 1024, height: 1024, alt: "Biodata vs Resume vs CV Infographic" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a biodata and a resume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A biodata is used for marriage matchmaking and includes personal details like religion, caste, horoscope, and family background. A resume is used for job applications and focuses strictly on education, work experience, and skills.",
      },
    },
    {
      "@type": "Question",
      name: "What is a biodata used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In South Asia, a biodata is primarily used for arranged marriage matchmaking. It gives prospective families a structured overview of the person's personal, educational, family, and astrological background.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a CV and a resume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A resume is a short (1–2 page) document tailored for a specific job application. A CV (Curriculum Vitae) is a comprehensive document listing your entire academic and professional history, typically used for research or medical roles.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a biodata or resume for a job application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always use a resume (or CV) for job applications in corporate environments. A marriage biodata contains personally sensitive information that is inappropriate to share in hiring contexts.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a resume format for marriage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, a resume lacks the necessary personal, family, and astrological details required for arranged marriage matchmaking. Always use a dedicated marriage biodata format.",
      },
    }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Biodata vs Resume Difference", item: "https://biodatabuilder.in/articles/biodata-vs-resume-difference" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biodata vs Resume — Key Differences Explained",
  description: "What is the difference between a biodata and a resume? A clear comparison of biodata vs CV vs resume for Indian job and marriage contexts.",
  image: "/examples/biodata-vs-resume-infographic.webp",
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

      <ArticleWrapper
        publishedDate="2026-06-18"
        related={[
          { title: "Simple Biodata Format for Job PDF", slug: "simple-biodata-format-for-job-pdf" },
          { title: "How to Write About Me in Marriage Biodata", slug: "how-to-write-biodata-about-me" },
          { title: "Biodata Tips: Photos, Hobbies & Mistakes", slug: "biodata-tips" },
        ]}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Biodata vs Resume vs CV — The Real Difference Explained
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 my-8">
            <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-indigo-800 dark:text-indigo-300">
              <li><strong>Biodata:</strong> Used exclusively for arranged marriage matchmaking. Includes personal details like religion, caste, family background, and horoscope.</li>
              <li><strong>Resume:</strong> Used for corporate job applications. 1-2 pages focusing strictly on relevant work experience, education, and skills. Never includes personal details like religion.</li>
              <li><strong>CV (Curriculum Vitae):</strong> Used for academic, medical, and research roles. A comprehensive, multi-page document detailing your entire professional and academic history.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-100 dark:bg-zinc-800">
              <Image 
                src="/examples/biodata-vs-resume-infographic.webp" 
                alt="Biodata vs Resume vs CV Comparison Infographic" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              A visual comparison of the key differences between a Biodata, Resume, and CV to help you choose the right format.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-indigo-600 dark:text-indigo-400 font-medium">
              <li><a href="#introduction" className="hover:underline">1. Introduction: Why the Confusion?</a></li>
              <li><a href="#comparison-table" className="hover:underline">2. Quick Comparison Table</a></li>
              <li><a href="#what-is-biodata" className="hover:underline">3. What is a Biodata? (Marriage vs Job)</a></li>
              <li><a href="#what-is-resume" className="hover:underline">4. What is a Resume?</a></li>
              <li><a href="#what-is-cv" className="hover:underline">5. What is a CV (Curriculum Vitae)?</a></li>
              <li><a href="#examples" className="hover:underline">6. Format Examples & Differences</a></li>
              <li><a href="#checklist" className="hover:underline">7. The 10-Point Self-Check Checklist</a></li>
              <li><a href="#faq" className="hover:underline">8. Frequently Asked Questions</a></li>
              <li><a href="#conclusion" className="hover:underline">9. Conclusion</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="introduction" className="scroll-mt-24">
            <p>
              In many parts of the world, especially in India and South Asia, the terms <strong>Biodata</strong>, <strong>Resume</strong>, and <strong>CV</strong> are often used interchangeably. People frequently ask for a "biodata" when they actually mean a resume, or they submit a CV when a 1-page resume is expected.
            </p>
            <p className="mt-4">
              However, submitting the wrong document in the wrong context can create a very poor impression. Submitting a highly personal marriage biodata to an employer could cost you the job, while sending a sterile corporate resume to a prospective matchmaking family will likely get you rejected for lacking personal detail.
            </p>
            <p className="mt-4">
              They are three completely different documents designed for three completely different purposes. In this comprehensive guide, we will break down the exact differences, provide a clear comparison, and give you the confidence to know exactly which document to use and when. Whether you are applying for a highly competitive job or embarking on the arranged marriage journey, you'll have the exact right document in hand.
            </p>
          </section>
          {/* BLOCK: TABLE */}
          <section id="comparison-table" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. Quick Comparison Table</h2>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-4 font-bold text-base border-b border-indigo-100 dark:border-indigo-900/50">Feature</th>
                    <th className="px-5 py-4 font-bold text-base border-b border-indigo-100 dark:border-indigo-900/50">Biodata (Marriage)</th>
                    <th className="px-5 py-4 font-bold text-base border-b border-indigo-100 dark:border-indigo-900/50">Resume (Jobs)</th>
                    <th className="px-5 py-4 font-bold text-base border-b border-indigo-100 dark:border-indigo-900/50">CV (Academic)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Primary Purpose", "Arranged marriage matchmaking", "Corporate job applications", "Academic, research, or medical roles"],
                    ["Standard Length", "Strictly 1 page", "1–2 pages", "2–10+ pages (No strict limit)"],
                    ["Personal Details (Religion, Caste, etc.)", "✅ Mandatory", "❌ Never Included", "❌ Never Included"],
                    ["Horoscope & Astrological Data", "✅ Highly Expected", "❌ Never Included", "❌ Never Included"],
                    ["Family Background Details", "✅ Mandatory", "❌ Never Included", "❌ Never Included"],
                    ["Educational History", "Brief summary", "Highest degrees relevant to job", "Comprehensive history of all degrees"],
                    ["Work Experience", "Current job, salary, company", "Detailed reverse-chronological history", "Comprehensive history, including teaching"],
                    ["Customization per Use", "Fixed format (rarely changed)", "Highly customized per job application", "Rarely tailored, constantly updated"],
                    ["Photo Inclusion", "✅ Yes (Crucial)", "❌ Usually No (in US/UK/India corporate)", "❌ Usually No (varies by country)"],
                  ].map(([feature, bio, resume, cv], idx) => (
                    <tr key={idx} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-4 font-semibold text-zinc-800 dark:text-zinc-200 align-top">{feature}</td>
                      <td className="px-5 py-4 text-zinc-700 dark:text-zinc-400 align-top">{bio}</td>
                      <td className="px-5 py-4 text-zinc-700 dark:text-zinc-400 align-top">{resume}</td>
                      <td className="px-5 py-4 text-zinc-700 dark:text-zinc-400 align-top">{cv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* BLOCK: BIODATA_SECTION */}
          <section id="what-is-biodata" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. What is a Biodata? (Marriage vs Job)</h2>
            <p>
              The word "biodata" is short for <em>biographical data</em>. In the context of South Asian culture (specifically India, Pakistan, Bangladesh, and Nepal), a biodata is almost exclusively associated with arranged marriages. However, older generations or smaller businesses may still incorrectly use the term when asking for a resume. Let's look at the difference.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">A. The Marriage Biodata</h3>
            <figure className="my-8 float-right ml-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/Boy-biodata-example.webp" alt="Sample Marriage Biodata" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">A typical modern marriage biodata format.</figcaption>
            </figure>
            <p>
              A marriage biodata is a structured, 1-page profile that serves as the "first impression" in the arranged marriage matchmaking process. Before two families agree to meet, they exchange biodatas to ensure basic compatibility regarding religion, social status, and astrology. If you want to learn more, check out our guide on <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">how to write a biodata about me</Link>.
            </p>
            <p className="mt-4 font-semibold">What a standard marriage biodata contains:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Personal Details:</strong> Full name, date of birth, precise time of birth, place of birth, height, blood group, complexion, and any disabilities.</li>
              <li><strong>Religious & Community Background:</strong> Religion, caste, sub-caste, gotra (lineage), and native place.</li>
              <li><strong>Astrological Profile:</strong> Rashi (Moon sign), Nakshatra (Birth star), Manglik status, and Kundali matching details.</li>
              <li><strong>Education & Career:</strong> Highest degree earned, current job title, company name, and annual income.</li>
              <li><strong>Family Details:</strong> Father's name and occupation, Mother's name and occupation, number of brothers and sisters (and their marital status), and family type (nuclear vs. joint).</li>
              <li><strong>Partner Preferences:</strong> A brief note on the type of partner expected (e.g., "Looking for a well-educated, vegetarian girl from a respectable family").</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">B. The "Job Biodata" (Outdated Term)</h3>
            <p>
              Decades ago, before the terms "resume" and "CV" became standardized in India, applying for government jobs or clerical positions required a "biodata." This was basically a simple form that included date of birth, gender, marital status, and a list of degrees. Some regional areas still ask for a <Link href="/articles/biodata-format-hindi" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">biodata format in Hindi</Link> for basic jobs, but this is increasingly rare.
            </p>
            <p className="mt-4">
              <strong className="text-red-600 dark:text-red-400">Important:</strong> If a modern corporate employer asks you for your "biodata," they actually mean your <strong>Resume</strong>. Do not send them a document detailing your caste, religion, or parents' occupations. This is highly unprofessional. Send a standard 1-2 page resume instead.
            </p>
          </section>

          {/* BLOCK: CTA_TOP */}
          <div className="mt-12 p-8 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Looking to Create a Marriage Biodata?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-6 max-w-2xl mx-auto">
              Don't use a boring Word document. Use our specialized builder to create a beautiful, traditionally formatted marriage biodata in minutes. Download as PDF instantly.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create My Marriage Biodata <MoveRight className="w-5 h-5" />
            </Link>
          </div>
          {/* BLOCK: RESUME_SECTION */}
          <section id="what-is-resume" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. What is a Resume?</h2>
            <figure className="my-8 float-left mr-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-white">
                <Image src="/examples/Job-biodata-structure.webp" alt="Standard Resume Format" fill className="object-contain" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">A clean, professional 1-page resume.</figcaption>
            </figure>
            <p>
              A <strong>Resume</strong> is a concise document, typically 1 to 2 pages long, used specifically for job applications. The word comes from the French word <em>"résumé,"</em> meaning "summary." It is meant to be a quick, scannable overview of your skills, education, and work experience relevant to the specific job you are applying for. When building one, it's helpful to review <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">general formatting tips</Link> to stand out.
            </p>
            <p className="mt-4">
              Unlike a CV, a resume is not a comprehensive history. It should be tailored for every single job application. If you are applying for a graphic design role, you emphasize your design experience and remove the cashier job you had 5 years ago.
            </p>
            <p className="mt-4 font-semibold">What a modern resume contains:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Contact Information:</strong> Name, professional email address, phone number, LinkedIn URL, and portfolio link (if applicable).</li>
              <li><strong>Professional Summary:</strong> A 3-4 sentence elevator pitch at the top explaining who you are and the value you bring.</li>
              <li><strong>Work Experience:</strong> Your recent jobs listed in reverse-chronological order (newest first). This should focus on <em>measurable achievements</em> (e.g., "Increased sales by 20%"), not just day-to-day duties.</li>
              <li><strong>Education:</strong> Your relevant degrees and universities. You do not need to list your high school marks if you have a bachelor's degree.</li>
              <li><strong>Skills:</strong> A list of hard skills (e.g., Python, Photoshop, SEO) and soft skills (e.g., Leadership, Communication).</li>
            </ul>
            <div className="mt-6 p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20 text-red-800 dark:text-red-200">
              <strong>Crucial Rule:</strong> A resume should NEVER include your religion, caste, marital status, age, or parents' names. In many Western countries (US, UK, Canada), including these details or a photo can cause your resume to be immediately thrown out due to anti-discrimination laws.
            </div>
          </section>

          {/* BLOCK: CV_SECTION */}
          <section id="what-is-cv" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. What is a CV (Curriculum Vitae)?</h2>
            <p>
              <strong>Curriculum Vitae (CV)</strong> is Latin for <em>"course of life."</em> As the name suggests, it is a highly detailed, comprehensive document detailing your entire academic and professional career. You can read more about its history on <a href="https://en.wikipedia.org/wiki/Curriculum_vitae" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Wikipedia</a>.
            </p>
            <p className="mt-4">
              A CV does not have a page limit. While a junior researcher might have a 2-page CV, a senior university professor might have a 20+ page CV detailing every paper they have ever published. CVs are primarily used in academia, science, research, and medicine. It is completely different from a <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">traditional biodata</Link>.
            </p>
            <p className="mt-4 font-semibold">What a standard CV contains (in addition to resume details):</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Comprehensive Educational History (including dissertation/thesis titles)</li>
              <li>Teaching Experience and Guest Lectures</li>
              <li>Research Experience and Lab Work</li>
              <li>Peer-Reviewed Publications and Books</li>
              <li>Conference Presentations and Posters</li>
              <li>Grants, Fellowships, and Scholarships</li>
              <li>Professional Affiliations and Licenses</li>
            </ul>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 italic">
              Note: In some parts of Europe and the Middle East, the term "CV" is used interchangeably with "resume." However, in the US, Canada, and India, the distinction between a short corporate resume and a long academic CV is strictly maintained.
            </p>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Tired of Formatting Your Marriage Biodata Manually?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              Skip the MS Word templates. Choose from our premium, culturally-appropriate designs and get a beautiful PDF in under 5 minutes.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>
          {/* BLOCK: EXAMPLES */}
          <section id="examples" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Format Examples & Differences</h2>
            <p className="mb-6">
              To make it crystal clear, let's look at how the exact same person would introduce themselves differently on a Biodata versus a Resume. This is especially true for specific religious formats, like the <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">best marriage biodata format for a Hindu</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/50 rounded-2xl">
                <h3 className="font-bold text-pink-900 dark:text-pink-300 text-lg mb-4 border-b border-pink-200 dark:border-pink-800 pb-2">On a Marriage Biodata</h3>
                <ul className="space-y-2 text-sm text-pink-800 dark:text-pink-200">
                  <li><strong>Name:</strong> Priya Sharma</li>
                  <li><strong>DOB:</strong> 14 August 1996, 04:30 PM</li>
                  <li><strong>Height:</strong> 5'4"</li>
                  <li><strong>Religion/Caste:</strong> Hindu, Brahmin</li>
                  <li><strong>Gotra:</strong> Kashyap</li>
                  <li><strong>Education:</strong> B.Tech in Computer Science</li>
                  <li><strong>Profession:</strong> Software Engineer at TCS</li>
                  <li><strong>Income:</strong> 12 LPA</li>
                  <li><strong>Father:</strong> Mr. Rajesh Sharma (Bank Manager)</li>
                </ul>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-2xl">
                <h3 className="font-bold text-blue-900 dark:text-blue-300 text-lg mb-4 border-b border-blue-200 dark:border-blue-800 pb-2">On a Job Resume</h3>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li><strong>Name:</strong> Priya Sharma</li>
                  <li><strong>Contact:</strong> priya.sharma@email.com | +91 98765 XXXXX</li>
                  <li><strong>Summary:</strong> Detail-oriented Software Engineer with 4 years of experience building scalable React applications...</li>
                  <li><strong>Experience:</strong> Software Engineer, TCS (2018 - Present)</li>
                  <li><em>- Architected a micro frontend resulting in 30% faster load times.</em></li>
                  <li><strong>Education:</strong> B.Tech, XYZ University (2014-2018)</li>
                  <li><strong>Skills:</strong> React, Node.js, TypeScript, AWS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. The 10-Point Self-Check Checklist</h2>
            <p className="mb-6">
              Before you send your document, ask yourself these 10 questions to ensure you are using the right format for the right audience:
            </p>
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Are you applying for a corporate job? <strong>Use a Resume.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Are you sending details to a potential matrimonial match? <strong>Use a Biodata.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Are you applying for a PhD program? <strong>Use a CV.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Does it include your religion or caste? <strong>Must be a Biodata.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Does it list every paper you've ever published? <strong>Must be a CV.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Is it exactly 1 page and focuses on hard skills? <strong>Must be a Resume.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Does it include your height and blood group? <strong>Must be a Biodata.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Does it list your parents' names and jobs? <strong>Must be a Biodata.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Is it tailored specifically to a job description? <strong>Must be a Resume.</strong></span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" /> <span className="text-zinc-700 dark:text-zinc-300">Does it include your time and place of birth? <strong>Must be a Biodata.</strong></span></li>
              </ul>
            </div>
          </section>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is the difference between a biodata and a resume?", a: "A biodata is for marriage matchmaking and includes deeply personal details like religion, caste, horoscope, and family background. A resume is for corporate jobs and focuses strictly on your education, work experience, and skills." },
                { q: "What is a biodata used for?", a: "In South Asia, a biodata is almost exclusively used for arranged marriage matchmaking. It gives prospective families a comprehensive overview of the person's background before deciding to meet." },
                { q: "What is the difference between a CV and a resume?", a: "A resume is a short (1-2 pages) summary tailored to a specific job. A CV is a comprehensive, multi-page record of your entire academic and professional history, typically used for research or medical roles." },
                { q: "Should I use a biodata or resume for a job?", a: "Always use a resume for job applications. Submitting a marriage biodata with personal sensitive information (religion, family details) is inappropriate in corporate hiring contexts." },
                { q: "Can I use a resume format for marriage?", a: "No. A resume lacks the crucial personal, family, and astrological details that families require for arranged marriage matchmaking. You must use a dedicated marriage biodata format." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCK: CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Conclusion</h2>
            <p>
              Understanding the difference between a Biodata, a Resume, and a CV is crucial to ensuring you present yourself correctly in any situation. 
            </p>
            <p className="mt-4">
              To summarize: If you are looking to get married, you need a <strong>Biodata</strong>. If you are applying for a standard corporate job, you need a <strong>Resume</strong>. If you are applying for a PhD or a professorship, you need a <strong>CV</strong>. 
            </p>
            <p className="mt-4">
              By using the correct document, you show that you understand the cultural or professional expectations of the person receiving it, putting your best foot forward right from the start.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <CheckCircle2 className="w-32 h-32 text-indigo-900" />
            </div>
            <h3 className="text-3xl font-bold text-indigo-900 dark:text-indigo-100 mb-4 relative z-10">Create Your Perfect Marriage Biodata Today</h3>
            <p className="text-lg text-indigo-700 dark:text-indigo-300 mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of users who have successfully created their marriage profiles using our specialized tool. It's fast, free, and perfectly formatted.
            </p>
            <Link href="/create" className="relative z-10 inline-flex items-center gap-2 px-10 py-5 bg-indigo-600 text-white text-lg font-bold rounded-full hover:bg-indigo-700 transition shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Create Biodata Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <section className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/simple-biodata-format-for-job-pdf" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Simple Biodata Format for Job (PDF)</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">What to include in a professional job biodata — 6 sections explained.</p>
              </Link>
              <Link href="/articles/how-to-write-biodata-about-me" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">How to Write &quot;About Me&quot; in a Marriage Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">6 sample texts and a step-by-step writing guide.</p>
              </Link>
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Biodata Tips: Photos, Hobbies &amp; Mistakes</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Common mistakes that get biodatas rejected and how to avoid them.</p>
              </Link>
              <Link href="/articles/shaadi-biodata-format-for-girl" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Shaadi Biodata Format for Girl</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">Complete guide to creating a woman&apos;s marriage biodata.</p>
              </Link>
              <Link href="/articles/marriage-biodata-for-boy" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Marriage Biodata for Boy (Groom Guide)</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">What families look for in a groom&apos;s biodata.</p>
              </Link>
              <Link href="/articles/modern-vs-traditional-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Modern vs Traditional Biodata</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">How marriage biodata design has evolved in India.</p>
              </Link>
            </div>
          </section>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
