import Link from "next/link";

export const metadata = {
  title: "Biodata Formats & Guides | Learn How to Make a Biodata",
  description: "Explore our comprehensive guides on creating the perfect marriage and job biodata, formats in regional languages, and tips for making a great impression.",
  alternates: { canonical: "https://biodatabuilder.in/articles" },
};

const ARTICLES = [
  {
    title: "Best Marriage Biodata Format for Hindu Families",
    slug: "best-marriage-biodata-format-for-hindu",
    desc: "Discover the essential elements every traditional Hindu marriage biodata should contain, from Gotra to Kundali details."
  },
  {
    title: "Shaadi Biodata Format for Girl",
    slug: "shaadi-biodata-format-for-girl",
    desc: "A dedicated guide on how to structure a beautiful and elegant Shaadi biodata for a girl, including popular Marathi layouts."
  },
  {
    title: "Simple Biodata Format for Job PDF",
    slug: "simple-biodata-format-for-job-pdf",
    desc: "Are you looking for a job? Learn how to format a simple and professional biodata specifically for job applications."
  },
  {
    title: "Biodata vs Resume Difference",
    slug: "biodata-vs-resume-difference",
    desc: "What is the real difference between a biodata, a resume, and a CV? Learn when to use which document."
  }
];

export default function ArticlesIndex() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Formats &amp; Guides</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">Read our expert tips and format guidelines to create the perfect biodata.</p>
      
      <div className="grid gap-6">
        {ARTICLES.map(art => (
          <Link 
            key={art.slug} 
            href={`/articles/${art.slug}`} 
            className="block p-6 sm:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900 transition-all group hover:shadow-lg hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{art.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">{art.desc}</p>
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-5 inline-block group-hover:translate-x-1 transition-transform">Read Article &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
