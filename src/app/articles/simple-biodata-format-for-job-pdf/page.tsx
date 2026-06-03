import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Biodata Format for Job PDF | Tips & Guide",
  description: "Looking for a simple biodata format for a job as a PDF? Learn what a job biodata should contain, how it differs from a marriage biodata, and how to format it correctly.",
  alternates: { canonical: "https://biodatabuilder.in/articles/simple-biodata-format-for-job-pdf" },
  openGraph: {
    title: "Simple Biodata Format for Job PDF | Tips & Guide",
    description: "Looking for a simple biodata format for a job as a PDF? Learn what a job biodata should contain, how it differs from a marriage biodata, and how to format it correctly.",
    url: "https://biodatabuilder.in/articles/simple-biodata-format-for-job-pdf",
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
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2024-03-24">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Simple Biodata Format for a Job — PDF Guide
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            The term <strong className="font-semibold text-zinc-900 dark:text-white">&quot;biodata&quot;</strong> is sometimes used interchangeably with &quot;resume&quot; or &quot;CV&quot; in parts of South Asia when applying for jobs. If you are looking for a <strong className="font-semibold text-zinc-900 dark:text-white">simple biodata format for a job PDF</strong>, this guide covers exactly what to include, how to structure it, and the critical difference between a job biodata and a marriage biodata.
          </p>

          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
            <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
              ⚠️ <strong>Looking for a marriage biodata?</strong> You are in the right place but the wrong article. Our platform is built for matrimonial biodatas — <Link href="/create" className="underline">create your marriage biodata here</Link>. This article covers job biodatas specifically.
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Marriage Biodata vs. Job Biodata — Key Differences</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                <tr>
                  <th className="px-5 py-3">Field</th>
                  <th className="px-5 py-3">Marriage Biodata ✅</th>
                  <th className="px-5 py-3">Job Biodata ❌</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Religion / Caste", "Yes — essential", "Never — inappropriate"],
                  ["Horoscope / Rashi", "Yes — often required", "Never"],
                  ["Family details (parents, siblings)", "Yes — full section", "Never"],
                  ["Height / Blood Group", "Yes — standard fields", "Never"],
                  ["Work experience (detailed)", "Brief mention only", "Core section — detailed"],
                  ["Skills & certifications", "Not included", "Key section"],
                  ["Achievements & projects", "Not included", "Important"],
                  ["Photo", "Recommended", "Usually not required"],
                  ["Length", "Strictly 1 page", "1–2 pages"],
                ].map(([field, marriage, job]) => (
                  <tr key={field} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{field}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{marriage}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What a Job Biodata Should Include</h2>
          <p>A proper job biodata (resume) should contain only these professional sections:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {[
              { title: "1. Contact Information", desc: "Full name, professional email address, phone number, LinkedIn profile URL, and city of residence." },
              { title: "2. Career Objective", desc: "2–3 lines describing your career goal and what you bring to the specific role you are applying for." },
              { title: "3. Education", desc: "Degree, university name, year of completion, and percentage/CGPA if strong. For experience professionals, keep this brief." },
              { title: "4. Work Experience", desc: "List each role with company name, title, dates, and 2–3 bullet points of measurable achievements (not just duties)." },
              { title: "5. Skills", desc: "Technical skills (programming languages, tools, software) and soft skills relevant to the role." },
              { title: "6. Certifications (optional)", desc: "Relevant professional certifications — e.g. PMP, AWS, CFA, CA, GATE scores." },
            ].map((s) => (
              <div key={s.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">How to Format It</h2>
          <p>A job biodata adopts a clean, professional look — no floral borders, no ornate headings. Use standard professional fonts (Calibri, Inter, or Arial) in 10–11pt. Leave adequate white space so hiring managers can scan quickly.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Save as PDF</strong> — never send a Word document; formatting breaks on different systems</li>
            <li><strong>File size under 1 MB</strong> — large PDFs sometimes block email attachments</li>
            <li><strong>Name the file correctly</strong> — e.g. <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">Rahul_Sharma_Resume.pdf</code>, not <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm">final_final_v3.pdf</code></li>
            <li><strong>No personal details</strong> — no religion, no date of birth (in most corporate contexts), no family information</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a simple biodata format for a job?", a: "A job biodata includes contact information, a career objective, education, work experience, and skills. It never includes personal details like religion, caste, or family information — those are only for marriage biodatas." },
              { q: "Can I use my marriage biodata for a job?", a: "No. A marriage biodata contains sensitive personal information (religion, caste, family details, horoscope) that is inappropriate and often illegal to share in hiring contexts. Always create a separate professional resume." },
              { q: "Should a job biodata be a PDF?", a: "Yes — always submit as PDF. Word documents break formatting across different devices. A PDF looks identical for every hiring manager, on every device." },
              { q: "How long should a job biodata be?", a: "1 page if under 5 years of experience; 2 pages maximum for senior professionals. Longer documents risk the hiring manager skipping sections." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Building a Marriage Biodata Instead?</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Our platform is designed specifically for matrimonial biodatas — beautiful templates, instant PDF download, completely free.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Marriage Biodata <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
