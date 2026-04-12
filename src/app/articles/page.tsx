import Link from "next/link";

export const metadata = {
  title: "Biodata Formats & Guides | Learn How to Make a Biodata",
  description: "Explore our comprehensive guides on creating the perfect marriage and job biodata, formats in regional languages, and tips for making a great impression.",
  alternates: { canonical: "https://biodatabuilder.in/articles" },
};

const ENGLISH_ARTICLES = [
  {
    title: "Best Marriage Biodata Format for Hindu Families",
    slug: "best-marriage-biodata-format-for-hindu",
    desc: "Essential elements every traditional Hindu marriage biodata should contain, from Gotra to Kundali details.",
  },
  {
    title: "Marriage Biodata Format for Muslim Families",
    slug: "marriage-biodata-format-for-muslim",
    desc: "A complete guide covering Mehr, Wali, Biraderi, religious education, and Nikah biodata etiquette.",
  },
  {
    title: "Shaadi Biodata Format for Girl",
    slug: "shaadi-biodata-format-for-girl",
    desc: "How to structure a beautiful and elegant Shaadi biodata for a girl, including popular Marathi layouts.",
  },
  {
    title: "Biodata Photo Tips: Choosing the Right Picture",
    slug: "biodata-photo-tips",
    desc: "Learn how to pick the best photo for your biodata — attire, background, framing, and cropping tips.",
  },
  {
    title: "What to Write in Biodata Hobbies & Interests",
    slug: "what-to-write-in-biodata-hobbies",
    desc: "Not sure what hobbies to mention? Here are strong examples and tips to make this section stand out.",
  },
  {
    title: "Simple Biodata Format for Job PDF",
    slug: "simple-biodata-format-for-job-pdf",
    desc: "How to format a simple and professional biodata for job applications, and what makes it different from a resume.",
  },
  {
    title: "Biodata vs Resume vs CV — The Real Difference",
    slug: "biodata-vs-resume-difference",
    desc: "What is the real difference between a biodata, a resume, and a CV? Learn when to use which document.",
  },
];

const REGIONAL_ARTICLES = [
  {
    title: "विवाह बायोडाटा फॉर्मेट हिंदी में",
    slug: "vivah-biodata-format-hindi",
    desc: "हिंदी में शादी का बायोडाटा कैसे बनाएं? सही जानकारी, फॉर्मेट और PDF डाउनलोड।",
    lang: "हिंदी",
  },
  {
    title: "लग्न बायोडाटा फॉर्मेट मराठी",
    slug: "lagna-biodata-format-marathi",
    desc: "मराठी मध्ये लग्न बायोडाटा कसा तयार करायचा? योग्य माहिती व विनामूल्य PDF.",
    lang: "मराठी",
  },
  {
    title: "લગ્ન બાયોડેટા ફોર્મેટ ગુજરાતી",
    slug: "lagna-biodata-format-gujarati",
    desc: "ગુજરાતીમાં લગ્ન બાયોડેટા કેવી રીતે બનાવવો? સાચી માહિતી અને મફ્ત PDF.",
    lang: "ગુજરાતી",
  },
  {
    title: "திருமண பயோடேட்டா வடிவம் தமிழில்",
    slug: "thirumanam-biodata-format-tamil",
    desc: "தமிழில் திருமண பயோடேட்டா எப்படி தயாரிப்பது? சரியான வடிவம் மற்றும் இலவச PDF.",
    lang: "தமிழ்",
  },
];

function ArticleCard({
  title,
  slug,
  desc,
  lang,
}: {
  title: string;
  slug: string;
  desc: string;
  lang?: string;
}) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="block p-6 sm:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900 transition-all group hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
          {title}
        </h2>
        {lang && (
          <span className="shrink-0 mt-0.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            {lang}
          </span>
        )}
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
      <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-5 inline-block group-hover:translate-x-1 transition-transform">
        Read Article &rarr;
      </span>
    </Link>
  );
}

export default function ArticlesIndex() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Formats &amp; Guides</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
        Expert tips and format guidelines to create the perfect biodata — in English and Indian regional languages.
      </p>

      <div className="space-y-12">
        <div>
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">
            Guides in English
          </p>
          <div className="grid gap-5">
            {ENGLISH_ARTICLES.map((art) => (
              <ArticleCard key={art.slug} {...art} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">
            Regional Language Guides
          </p>
          <div className="grid gap-5">
            {REGIONAL_ARTICLES.map((art) => (
              <ArticleCard key={art.slug} {...art} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
