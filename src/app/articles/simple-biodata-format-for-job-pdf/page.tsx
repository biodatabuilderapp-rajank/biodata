import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Biodata Format for Job PDF | Tips & Guide",
  description: "Simple biodata format for a job PDF — what to include, how it differs from a marriage biodata, sample text, formatting tips, and common mistakes.",
  alternates: { canonical: "https://biodatabuilder.in/articles/simple-biodata-format-for-job-pdf" },
  openGraph: {
    type: "article",
    title: "Simple Biodata Format for Job PDF | Tips & Guide",
    description: "Simple biodata format for a job PDF — what to include, how it differs from a marriage biodata, sample text, formatting tips, and common mistakes.",
    url: "https://biodatabuilder.in/articles/simple-biodata-format-for-job-pdf",
    images: [{ url: "/examples/Job-biodata-structure.webp", width: 1024, height: 1024, alt: "Simple job biodata format section by section" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a simple biodata format for a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A job biodata (also called a resume or CV in most contexts) includes contact information, a career objective, education, work experience, and skills. It does NOT include personal details like religion, caste, or family background — those belong only in a marriage biodata.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my marriage biodata for a job?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A marriage biodata contains sensitive personal information (religion, caste, family details, horoscope) that is inappropriate and often illegal to share in a hiring context. Always create a separate, professional resume for job applications.",
      },
    },
    {
      "@type": "Question",
      name: "Should a job biodata be a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always submit your job biodata as a PDF. Word documents break formatting when opened on different systems. A PDF looks the same for every hiring manager, on every device.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a job biodata be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep it to 1 page if you have under 5 years of experience; 2 pages maximum for senior professionals. Anything longer risks the hiring manager not reading it.",
      },
    },
    {
      "@type": "Question",
      name: "What should NOT be in a job biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never include religion, caste, marital status, horoscope details, family background, or a photograph (in most corporate Indian contexts). These details belong exclusively in a marriage biodata and are inappropriate for job applications.",
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
    { "@type": "ListItem", position: 3, name: "Simple Biodata Format for Job", item: "https://biodatabuilder.in/articles/simple-biodata-format-for-job-pdf" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Simple Biodata Format for Job — PDF Download Free",
  description: "Create a simple biodata format for job applications in India. Download a clean, professional job biodata as PDF for free.",
  image: "/examples/Job-biodata-structure.webp",
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
        publishedDate="2026-06-15"
        related={[
          { title: "Biodata vs Resume — Key Differences", slug: "biodata-vs-resume-difference" },
          { title: "Marriage Biodata for Boy — Format & Samples", slug: "marriage-biodata-for-boy" },
          { title: "Biodata Tips: Photos, Hobbies & Mistakes", slug: "biodata-tips" },
        ]}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Simple Biodata Format for a Job — PDF Guide
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* TL;DR */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">TL;DR — Key Takeaways</p>
            <ul className="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-200">
              <li>A <strong>job biodata = resume/CV</strong> — professional sections only, no personal/family details</li>
              <li><strong>Never</strong> include religion, caste, horoscope, or family info in a job application</li>
              <li>6 sections: Contact, Career Objective, Education, Experience, Skills, Certifications</li>
              <li>Keep it to <strong>1 page</strong> (under 5 years) or 2 pages maximum</li>
              <li>Always save and submit as <strong>PDF</strong> — never Word</li>
              <li>If you need a <strong>marriage biodata</strong> instead, use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">free builder</Link></li>
            </ul>
          </div>

          {/* Hero Image */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
            <Image src="/examples/Job-biodata-structure.webp" alt="Simple job biodata format showing all 6 sections" width={1024} height={1024} className="w-full h-auto" priority />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">The 6 standard sections of a professional job biodata</p>
          </div>

          {/* TOC */}
          <nav className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
            <p className="font-bold text-zinc-900 dark:text-white mb-3">In This Guide</p>
            <ol className="list-decimal pl-5 space-y-1 text-base text-indigo-600 dark:text-indigo-400">
              <li><a href="#difference" className="hover:underline">Marriage Biodata vs Job Biodata — Key Differences</a></li>
              <li><a href="#what-to-include" className="hover:underline">What a Job Biodata Should Include</a></li>
              <li><a href="#sample" className="hover:underline">Sample Job Biodata Text</a></li>
              <li><a href="#format" className="hover:underline">How to Format It Correctly</a></li>
              <li><a href="#mistakes" className="hover:underline">Common Mistakes to Avoid</a></li>
              <li><a href="#checklist" className="hover:underline">Self-Check Before You Apply</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ol>
          </nav>

          {/* Intro */}
          <p>The term <strong className="font-semibold text-zinc-900 dark:text-white">&quot;biodata&quot;</strong> is used interchangeably with &quot;resume&quot; or &quot;CV&quot; in many parts of South Asia — especially in government jobs, PSUs, and traditional industries. If you are looking for a <strong className="font-semibold text-zinc-900 dark:text-white">simple biodata format for a job PDF</strong>, this guide covers exactly what to include, how to structure it, and the critical differences from a marriage biodata.</p>
          <p>For a deeper look at the terminology, see our dedicated <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata vs resume guide</Link>. This article focuses on practical formatting you can use right now.</p>

          {/* Marriage Warning */}
          <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
            <p className="text-indigo-800 dark:text-indigo-200 font-medium">
              💍 <strong>Looking for a marriage biodata?</strong> You are in the right place but the wrong article. Our platform is built specifically for matrimonial biodatas — <Link href="/create" className="underline font-semibold hover:text-indigo-600">create your marriage biodata here</Link> (free, no sign-up). This article covers job biodatas specifically.
            </p>
          </div>

          {/* Comparison Table */}
          <h2 id="difference" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Marriage Biodata vs. Job Biodata — Key Differences</h2>
          <p>The biggest mistake job seekers make is sending a marriage-style biodata to an employer. Here is what belongs where:</p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6 shadow-sm">
            <table className="w-full text-base text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold">
                <tr>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">Field</th>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">Marriage Biodata ✅</th>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">Job Biodata ❌</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Religion / Caste</td><td className="px-5 py-3">Yes — essential</td><td className="px-5 py-3 text-red-600 dark:text-red-400 font-medium">Never — inappropriate</td></tr>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50"><td className="px-5 py-3 font-medium">Horoscope / Rashi</td><td className="px-5 py-3">Yes — often required</td><td className="px-5 py-3 text-red-600 dark:text-red-400 font-medium">Never</td></tr>
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Family details</td><td className="px-5 py-3">Yes — full section</td><td className="px-5 py-3 text-red-600 dark:text-red-400 font-medium">Never</td></tr>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50"><td className="px-5 py-3 font-medium">Height / Blood Group</td><td className="px-5 py-3">Yes — standard fields</td><td className="px-5 py-3 text-red-600 dark:text-red-400 font-medium">Never</td></tr>
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Work experience</td><td className="px-5 py-3">Brief mention only</td><td className="px-5 py-3 text-emerald-600 dark:text-emerald-400 font-medium">Core section — detailed</td></tr>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50"><td className="px-5 py-3 font-medium">Skills &amp; tech stack</td><td className="px-5 py-3">Not included</td><td className="px-5 py-3 text-emerald-600 dark:text-emerald-400 font-medium">Key section</td></tr>
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Length</td><td className="px-5 py-3">Strictly 1 page</td><td className="px-5 py-3">1–2 pages</td></tr>
              </tbody>
            </table>
          </div>

          {/* CTA Marriage Top */}
          <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl text-center mt-8">
            <p className="text-indigo-800 dark:text-indigo-200 mb-3">Creating a biodata for marriage instead? Use our free tool to get a professional PDF instantly.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Create Marriage Biodata &rarr;</Link>
          </div>

          {/* What to Include */}
          <h2 id="what-to-include" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What a Job Biodata Should Include</h2>
          <p>A proper job biodata (resume) focuses entirely on your professional capabilities. It should contain only these 6 sections:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">1. Contact Information</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Full name, professional email address (no nicknames), phone number, LinkedIn URL, and city/state of residence.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">2. Career Objective</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">2–3 lines describing your career goal and the specific value you bring to the role you are applying for.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">3. Education</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Highest degree first. Include university name, year of completion, and percentage/CGPA (if it is strong).</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">4. Work Experience</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">List each role reverse-chronologically. Include company, title, dates, and 2–3 bullet points of measurable achievements.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">5. Skills</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Hard skills (Java, Excel, Python, SEO) and relevant tools. Group them logically if you have many.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <h3 className="font-bold text-zinc-900 dark:text-white text-lg mb-2">6. Certifications &amp; Projects</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Relevant professional certifications (PMP, AWS, CA) and any major projects that demonstrate your skills.</p>
            </div>
          </div>

          {/* Sample Text */}
          <h2 id="sample" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample Job Biodata Text</h2>
          <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 font-mono text-sm leading-relaxed shadow-sm">
            <h3 className="text-xl font-bold mb-1 text-center font-sans text-zinc-900 dark:text-white">Rahul Sharma</h3>
            <p className="text-center mb-6 text-zinc-600 dark:text-zinc-400 font-sans">rahul.sharma@email.com | +91 98765 43210 | Bengaluru, KA | linkedin.com/in/rahulsharma</p>
            
            <p className="font-bold text-base mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1">CAREER OBJECTIVE</p>
            <p className="mb-6 text-zinc-700 dark:text-zinc-300">Detail-oriented data analyst with 2 years of experience in Python and SQL. Seeking to leverage data visualization skills to drive business growth at TechCorp India.</p>
            
            <p className="font-bold text-base mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1">EXPERIENCE</p>
            <p className="font-semibold text-zinc-900 dark:text-white">Data Analyst — AnalyticsPro Inc.</p>
            <p className="mb-2 text-zinc-500 dark:text-zinc-400">Aug 2022 – Present</p>
            <ul className="list-disc pl-5 mb-6 space-y-1 text-zinc-700 dark:text-zinc-300">
              <li>Automated monthly reporting using Python, saving 15 hours of manual work per week.</li>
              <li>Designed PowerBI dashboards used by the executive team for daily tracking.</li>
            </ul>

            <p className="font-bold text-base mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1">EDUCATION</p>
            <p className="font-semibold text-zinc-900 dark:text-white">B.Tech in Computer Science</p>
            <p className="text-zinc-700 dark:text-zinc-300">Visvesvaraya Technological University (VTU) | 2018 – 2022 | CGPA: 8.4</p>
            
            <p className="font-bold text-base mt-6 mb-2 text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-800 pb-1">SKILLS</p>
            <p className="text-zinc-700 dark:text-zinc-300">Python, SQL, PowerBI, Tableau, Advanced Excel</p>
          </div>

          {/* Freshers vs Experienced */}
          <h2 id="fresher" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Job Biodata: Fresher vs. Experienced</h2>
          <p>The structure of your job biodata changes based on your experience level. Hiring managers look for different signals depending on whether you are straight out of college or a seasoned professional.</p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6 shadow-sm">
            <table className="w-full text-base text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold">
                <tr>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">Section</th>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">For Freshers (0–1 Years)</th>
                  <th className="px-5 py-4 border-b border-zinc-200 dark:border-zinc-700">For Experienced (2+ Years)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Education</td><td className="px-5 py-3">Placed at the top. Include CGPA, major coursework, and academic awards.</td><td className="px-5 py-3">Moved to the bottom. Keep it brief (degree, university, year).</td></tr>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50"><td className="px-5 py-3 font-medium">Work Experience</td><td className="px-5 py-3">Internships, part-time jobs, and volunteer work count heavily here.</td><td className="px-5 py-3">The most critical section. Focus on measurable achievements and impact.</td></tr>
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Projects</td><td className="px-5 py-3">Essential. Detail 2–3 academic or personal projects that show practical skills.</td><td className="px-5 py-3">Optional. Only include massive, high-impact projects or independent consulting work.</td></tr>
                <tr className="bg-zinc-50 dark:bg-zinc-900/50"><td className="px-5 py-3 font-medium">Objective Summary</td><td className="px-5 py-3">Focus on enthusiasm, willingness to learn, and long-term career goals.</td><td className="px-5 py-3">Focus on proven expertise, specific domain knowledge, and leadership.</td></tr>
                <tr className="bg-white dark:bg-zinc-900"><td className="px-5 py-3 font-medium">Length</td><td className="px-5 py-3">Strictly 1 page. There is rarely enough relevant content to justify a second page.</td><td className="px-5 py-3">1 page is ideal, but 2 pages is acceptable if you have 5+ years of solid experience.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Formatting Tips */}
          <h2 id="format" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">How to Format It Correctly (PDF &amp; Design)</h2>
          <p>A job biodata adopts a clean, professional look — no floral borders, no ornate headings. Hiring managers scan resumes in 6–7 seconds. Make it easy for them to find what they need.</p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Save as PDF:</strong> Never send a Word document (.docx). Formatting breaks when opened on different systems. A PDF looks identical for every hiring manager, on every device.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Keep file size under 1 MB:</strong> Large PDFs are sometimes blocked by corporate email filters.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Name the file correctly:</strong> Name your file professionally — e.g. <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-indigo-600 dark:text-indigo-400">Rahul_Sharma_Resume.pdf</code>. Do not use names like <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm text-red-600 dark:text-red-400">biodata_final_v3.pdf</code>.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Use professional fonts:</strong> Stick to clean sans-serif fonts like Arial, Calibri, or Inter in 10–11pt size.</li>
          </ul>

          {/* CTA Marriage Middle */}
          <div className="mt-10 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Need a Marriage Biodata Not a Job Resume?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-4">Our free builder handles the traditional formatting, religious details, and PDF generation instantly.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Create Marriage Biodata &rarr;</Link>
          </div>

          {/* Mistakes */}
          <h2 id="mistakes" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Common Mistakes to Avoid</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-red-700 dark:text-red-400 font-semibold mb-2">❌ Including Personal Details</p>
              <p className="text-sm">Never list your religion, caste, marital status, father&apos;s occupation, or horoscope details. These can lead to immediate rejection due to corporate discrimination policies.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-red-700 dark:text-red-400 font-semibold mb-2">❌ Unprofessional Email Addresses</p>
              <p className="text-sm">Do not use emails like <code className="bg-red-100 dark:bg-red-900/50 px-1 rounded">coolboy123@email.com</code>. Use a simple <code className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 px-1 rounded">firstname.lastname@email.com</code>.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-red-700 dark:text-red-400 font-semibold mb-2">❌ Declaration at the End</p>
              <p className="text-sm">Writing &quot;I hereby declare that the above information is true...&quot; is an outdated practice from the 1990s. Skip it entirely.</p>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-red-700 dark:text-red-400 font-semibold mb-2">❌ Including a Photograph</p>
              <p className="text-sm">Unless you are applying for an acting/modelling job or the employer explicitly asks for it, do not include a photo on an Indian corporate resume.</p>
            </div>
          </div>

          {/* Checklist */}
          <h2 id="checklist" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Self-Check Before You Apply</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
            <ul className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <li>☐ Contains only professional details (no caste, religion, or marital status)</li>
              <li>☐ Saved as a PDF format</li>
              <li>☐ File name is professional (e.g., Firstname_Lastname_Resume.pdf)</li>
              <li>☐ Length is 1 page (or max 2 pages for senior roles)</li>
              <li>☐ Email address is professional</li>
              <li>☐ Contact number is correct and active</li>
              <li>☐ No outdated &quot;Declaration&quot; at the bottom</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What is a simple biodata format for a job?</h3><p>A job biodata (also called a resume or CV in most contexts) includes contact information, a career objective, education, work experience, and skills. It does NOT include personal details like religion, caste, or family background — those belong only in a marriage biodata.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Can I use my marriage biodata for a job?</h3><p>No. A marriage biodata contains sensitive personal information (religion, caste, family details, horoscope) that is inappropriate and often illegal to share in a hiring context. Always create a separate, professional resume for job applications.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should a job biodata be a PDF?</h3><p>Yes — always submit your job biodata as a PDF. Word documents break formatting when opened on different systems. A PDF looks the same for every hiring manager, on every device.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">How long should a job biodata be?</h3><p>Keep it to 1 page if you have under 5 years of experience; 2 pages maximum for senior professionals. Anything longer risks the hiring manager not reading it.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What should NOT be in a job biodata?</h3><p>Never include religion, caste, marital status, horoscope details, family background, or a photograph (in most corporate Indian contexts). These details belong exclusively in a marriage biodata and are inappropriate for job applications.</p></div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Conclusion</h2>
          <p>When applying for a job, remember that a &quot;biodata&quot; simply means a professional resume. Keep it clean, keep it focused on your skills and experience, and never include the personal details required for a marriage biodata. Format it neatly, save it as a PDF, and you will present yourself as a modern, professional candidate.</p>

          {/* CTA Marriage Bottom */}
          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Building a Marriage Biodata Instead?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Our platform is designed specifically for matrimonial biodatas — beautiful templates, instant PDF download, completely free.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Marriage Biodata
            </Link>
          </div>

          {/* What's Next */}
          <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What to Read Next</h3>
            <ul className="space-y-2 text-base">
              <li>⚖️ <Link href="/articles/biodata-vs-resume-difference" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata vs Resume vs CV — What is the Difference?</Link></li>
              <li>👨 <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Marriage Biodata Format for Boy — Samples &amp; Guide</Link></li>
              <li>👩 <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">Shaadi Biodata Format for Girl — Tips &amp; Templates</Link></li>
              <li>✍️ <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">How to Write &quot;About Me&quot; in a Marriage Biodata</Link></li>
              <li>📷 <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Tips: Photos, Hobbies &amp; Mistakes to Avoid</Link></li>
              <li>📱 <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Format for WhatsApp — PDF Guide</Link></li>
              <li>📜 <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">Complete Marriage Biodata Guide — All Sections Explained</Link></li>
              <li>🇮🇳 <Link href="/articles/biodata-format-hindi" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Format in Hindi — हिंदी विवाह बायोडाटा गाइड</Link></li>
              <li>📊 <Link href="/articles/marriage-biodata-statistics-india" className="text-indigo-600 dark:text-indigo-400 hover:underline">Marriage Biodata Statistics in India (2024 Trends)</Link></li>
              <li>🕍 <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Best Marriage Biodata Format for Hindu</Link></li>
              <li>⚖️ <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Modern vs Traditional Biodata — Which Format to Choose</Link></li>
            </ul>
          </div>

        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
