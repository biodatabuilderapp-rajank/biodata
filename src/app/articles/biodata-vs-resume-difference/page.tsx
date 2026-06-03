import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata vs Resume vs CV | The Real Difference Explained",
  description: "What is the difference between a biodata, a resume, and a CV? A clear guide with comparison tables — know which document to use for jobs or marriage.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-vs-resume-difference" },
  openGraph: {
    title: "Biodata vs Resume vs CV | The Real Difference Explained",
    description: "What is the difference between a biodata, a resume, and a CV? A clear guide with comparison tables — know which document to use for jobs or marriage.",
    url: "https://biodatabuilder.in/articles/biodata-vs-resume-difference",
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
        text: "A biodata is used for marriage matchmaking and includes personal details like religion, caste, horoscope, and family background. A resume is used for job applications and focuses strictly on education, work experience, and skills — it never includes personal details like religion or marital status.",
      },
    },
    {
      "@type": "Question",
      name: "What is a biodata used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In South Asia (especially India), a biodata is primarily used for arranged marriage matchmaking. It gives prospective families a structured overview of the person's personal, educational, family, and astrological background.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a CV and a resume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A resume is a short (1–2 page) document tailored for a specific job application. A CV (Curriculum Vitae) is a comprehensive document listing your entire academic and professional history — typically used for research, academic, or medical roles. CVs can be 5–10+ pages long.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a biodata or resume for a job application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always use a resume (or CV) for job applications in corporate environments. A marriage biodata contains personally sensitive information (religion, caste, family details) that is inappropriate and often illegal to share in hiring contexts.",
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
          Biodata vs Resume vs CV — The Real Difference
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            Many people in India get confused between <strong className="font-semibold text-zinc-900 dark:text-white">Biodata</strong>, <strong className="font-semibold text-zinc-900 dark:text-white">Resume</strong>, and <strong className="font-semibold text-zinc-900 dark:text-white">CV (Curriculum Vitae)</strong>. They are three completely different documents for three completely different purposes. Submitting the wrong one in the wrong context can create a very poor impression — here is how to tell them apart.
          </p>

          {/* COMPARISON TABLE */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">Feature</th>
                  <th className="px-5 py-3 font-semibold">Biodata</th>
                  <th className="px-5 py-3 font-semibold">Resume</th>
                  <th className="px-5 py-3 font-semibold">CV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Purpose", "Marriage matchmaking", "Job applications", "Academic/research roles"],
                  ["Length", "1 page", "1–2 pages", "2–10+ pages"],
                  ["Includes religion/caste?", "✅ Yes", "❌ Never", "❌ Never"],
                  ["Includes horoscope?", "✅ Yes", "❌ No", "❌ No"],
                  ["Includes family details?", "✅ Yes", "❌ No", "❌ No"],
                  ["Tailored to each use case?", "Fixed format", "Yes — customised per job", "Comprehensive, rarely tailored"],
                  ["Photo included?", "✅ Usually yes", "❌ Usually no (in India, sometimes)", "❌ Usually no"],
                  ["Used in India for", "Arranged marriage", "Corporate jobs", "Academic, medical, research positions"],
                ].map(([feature, bio, resume, cv]) => (
                  <tr key={feature} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{feature}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{bio}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{resume}</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{cv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">1. Marriage Biodata — For Arranged Marriages</h2>
          <p>
            In South Asia, particularly India, a <strong className="font-semibold text-zinc-900 dark:text-white">biodata</strong> (short for biographical data) is the cornerstone document of the arranged marriage process. It is a 1-page personal profile exchanged between families before deciding to meet.
          </p>
          <p>What a marriage biodata contains:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal:</strong> Name, date/time of birth, height, blood group, complexion</li>
            <li><strong>Religion & Community:</strong> Religion, caste, sub-caste, gotra, native place</li>
            <li><strong>Astrological:</strong> Rashi, Nakshatra, Manglik status, Kundali details</li>
            <li><strong>Education & Career:</strong> Degree, company, income</li>
            <li><strong>Family:</strong> Parents' names and occupations, siblings</li>
            <li><strong>About Me:</strong> Personal statement and partner expectations</li>
          </ul>
          <p className="text-base text-zinc-500 dark:text-zinc-400 italic">
            None of these personal fields belong in a job application. Submitting a marriage biodata to an employer is a serious mistake.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">2. Resume — For Job Applications</h2>
          <p>
            A <strong className="font-semibold text-zinc-900 dark:text-white">resume</strong> is a concise (1–2 page) document focused entirely on your professional qualifications for a specific job. It is tailored to the role — meaning you should customise it with each application.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (professional email, phone, LinkedIn)</li>
            <li>Professional summary — 3–4 lines targeting the specific role</li>
            <li>Work experience — with measurable achievements, not just job duties</li>
            <li>Education — degree and institution only (no horoscope!)</li>
            <li>Skills — technical and soft skills relevant to the role</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">3. Curriculum Vitae (CV) — For Academic & Research Roles</h2>
          <p>
            A <strong className="font-semibold text-zinc-900 dark:text-white">CV</strong> is a comprehensive record of your entire academic and professional career. It is used for academic positions, PhD applications, medical roles, and research institutions.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete academic history — all degrees, institutions, years</li>
            <li>Publications and research papers</li>
            <li>Conference presentations</li>
            <li>Awards and fellowships</li>
            <li>Teaching experience</li>
          </ul>
          <p>A CV has no page limit — a senior professor's CV may be 20+ pages.</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is the difference between a biodata and a resume?", a: "A biodata is for marriage matchmaking — it includes religion, caste, horoscope, and family details. A resume is for jobs — it focuses on education, work experience, and skills. Personal details like religion or marital status are never included in a resume." },
              { q: "What is a biodata used for?", a: "In India, a biodata is used for arranged marriage matchmaking. It gives prospective families a structured overview of the person's personal, educational, family, and astrological background." },
              { q: "What is the difference between a CV and a resume?", a: "A resume is short (1–2 pages), tailored for a specific job. A CV is comprehensive, listing your entire academic and professional history — typically for research, academic, or medical roles, and can be 5–10+ pages long." },
              { q: "Should I use a biodata or resume for a job?", a: "Always use a resume for job applications. A marriage biodata contains sensitive personal information (religion, caste, family details) that is inappropriate and often illegal in hiring contexts." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Creating a Biodata for Marriage?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Use our free tool to create a perfectly formatted marriage biodata PDF — no registration, no watermark.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Now <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
