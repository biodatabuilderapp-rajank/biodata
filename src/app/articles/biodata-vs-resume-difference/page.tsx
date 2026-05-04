import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";

export const metadata = {
  title: "Biodata vs Resume vs CV | The Real Difference",
  description: "What is the difference between a biodata, a resume, and a CV? Learn when to use which document for jobs or marriage.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-vs-resume-difference" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">
      
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">Biodata vs Resume Difference</h1>
      
      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>Many people get confused between the terms Biodata, Resume, and Curriculum Vitae (CV). Understanding the <strong className="font-semibold text-zinc-900 dark:text-white">biodata vs resume difference</strong> is essential so you don&apos;t submit the wrong document in a professional or personal setting.</p>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">1. Biodata (Biographical Data)</h2>
        <p>A biodata focuses entirely on the personal aspects of an individual. While it includes basic education and job titles, its primary purpose in South Asia is for matrimonial matchmaking.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Length:</strong> Usually 1-2 pages.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Content:</strong> Religion, caste, gotra, height, blood group, family background (parents and siblings), and horoscopic details.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Usage:</strong> Primarily used for marriage proposals.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">2. Resume</h2>
        <p>A resume is a concise document designed to get you a job interview. It highlights only the skills and experiences that are relevant to a specific job opening.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Length:</strong> Strictly 1-2 pages.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Content:</strong> Contact info, professional summary, work history, skills, and education. It does NOT contain personal details like religion or marital status.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Usage:</strong> Standard for most corporate job applications globally.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">3. Curriculum Vitae (CV)</h2>
        <p>A CV is an exhaustive document that details the entire course of your career. It is much more comprehensive than a resume.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Length:</strong> Unlimited (usually 2 to 10+ pages).</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Content:</strong> All academic backgrounds, publications, research, awards, affiliations, and teaching experience.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Usage:</strong> Academic, scientific, medical, and research positions.</li>
        </ul>
        
        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Creating a Biodata for Marriage?</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">Use our free tool to generate a perfectly formatted PDF instantly.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Create Biodata Now</Link>
        </div>
      </div>
    
        <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What's Next?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            If you found this guide helpful, you might also want to read our <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">master guide on biodata photo tips and mistakes to avoid</Link>. Or, if you're exploring styles, check out the <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">differences between modern and traditional formats</Link>.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Once you're ready, you can use our <strong>biodata builder to create your profile instantly</strong> without any design skills.
          </p>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
  );
}
